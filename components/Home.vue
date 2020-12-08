<template>
  <div class="flex flex-col" v-if="isLoggedIn">
    <div class="flex justify-center">
      <div class="flex items-center mb-6 mt-2">
        <svg
          class="w-4 h-4 fill-current text-gray-500 ml-4 z-10"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="black"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
          />
        </svg>
        <form @submit.prevent="searchWeb" class="w-full">
          <input
            v-model="search"
            type="text"
            placeholder="search..."
            class="w-full -ml-8 pl-10 px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-red-500"
          />
        </form>
        <button @click="refresh()" class="p-2 rounded-xl">
          <span class="flex"
            ><img src="~assets/refresh.png" class="h-5 mr-2" />
            <span class="text-gray-800 text-sm">Refresh</span></span
          >
        </button>
      </div>
    </div>
    <OptionNav />
    <div
      class="flex flex-col items-center"
      :class="currentOption === 'all' ? '' : 'hidden'"
    >
      <HotelCard v-for="hotel of hotels" :hotel="hotel" :key="hotel.id" />
    </div>
    <div
      class="flex flex-col items-center"
      :class="currentOption === 'saved' ? '' : 'hidden'"
    >
      <HotelCard v-for="hotel of savedHotels" :hotel="hotel" :key="hotel.id" />
      <div
        v-if="savedHotels.length === 0"
        class="text-center text-gray-700 mt-5"
      >
        No saved hotels
      </div>
    </div>

    <div
      class="flex flex-col items-center"
      :class="currentOption === 'booked' ? '' : 'hidden'"
    >
      <BookedHotel
        v-for="hotel of bookedHotels"
        :hotel="hotel"
        :key="hotel.room_id"
      />
      <div
        v-if="bookedHotels.length === 0"
        class="text-center text-gray-700 mt-5"
      >
        No booked hotels
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import HotelCard from './HotelCard.vue'
import OptionNav from './OptionNav.vue'
import BookedHotel from './BookedHotel.vue'
import { mapState, mapGetters } from 'vuex'
import firebase from 'firebase'

export default Vue.extend({
  name: 'Home',
  components: {
    HotelCard,
    OptionNav,
    BookedHotel,
  },
  data() {
    return {
      search: '',
      hotels: [],
      savedHotels: [],
      bookedHotels: [],
    }
  },
  created() {
    this.getHotels()
    if (this.authUser !== null) {
      this.getSavedHotels()
      this.getBookedHotels()
    }
  },
  computed: {
    ...mapState(['authUser', 'option']),
    ...mapGetters(['isLoggedIn', 'currentOption']),
  },
  methods: {
    searchWeb() {
      window.open(`https://duckduckgo.com/?q=${this.search}`)
    },
    refresh() {
      this.hotels = []
      this.savedHotels = []
      this.bookedHotels = []
      this.getHotels()
      this.getSavedHotels()
      this.getBookedHotels()
    },
    async getHotels() {
      // @ts-ignore
      const hotelRef = this.$fire.firestore.collection('hotelReservation')
      try {
        const snapshot = await hotelRef.get()
        const hotels = snapshot.docs.map((doc: any) => {
          return { id: doc.id, ...doc.data() }
        })
        this.hotels = hotels
      } catch (e) {
        console.log(e)
      }
    },
    async getSavedHotels() {
      // @ts-ignore
      const userRef = this.$fire.firestore
        .collection(`users`)
        .doc(`${this.authUser.uid}`)
      // @ts-ignore
      try {
        const data = await userRef.get()
        const saved = data.data().saved
        saved.forEach(
          async (hotelRef: firebase.firestore.DocumentReference) => {
            try {
              const snapshot = await hotelRef.get()
              // @ts-ignore
              this.savedHotels.push({ id: snapshot.id, ...snapshot.data() })
            } catch (e) {}
          }
        )
      } catch (e) {
        console.error(e)
      }
    },
    async getBookedHotels() {
      // @ts-ignore
      const userRef = this.$fire.firestore
        .collection(`users`)
        .doc(`${this.authUser.uid}`)
      // @ts-ignore
      try {
        const data = await userRef.get()
        const saved = data.data().booked
        saved.forEach(async (roomRef: firebase.firestore.DocumentReference) => {
          try {
            const roomSnapshot = await roomRef.get()
            const hotelSnapshot = await roomRef.parent.parent?.get()
            // console.log(roomSnapshot.data())
            // @ts-ignore
            this.bookedHotels.push({
              // @ts-ignore
              room_id: roomSnapshot.id,
              ...roomSnapshot.data(),
              // @ts-ignore
              hotel_id: hotelSnapshot?.id,
              ...hotelSnapshot?.data(),
            })
          } catch (e) {
            console.log(e)
          }
        })
      } catch (e) {
        console.error(e)
      }
    },
  },
})
</script>
