<template>
  <div class="px-1 my-2 mx-6">
    <div
      class="max-w-sm bg-white rounded-lg overflow-hidden shadow-lg hover:bg-red-200"
      @click="showModal()"
    >
      <img
        class="w-full"
        v-if="hotel.photo"
        :src="hotel.photo"
        :alt="hotel.name"
      />
      <div class="px-6 py-4">
        <div class="flex justify-between">
          <div class="font-bold text-xl mb-2">{{ hotel.name }}</div>
          <no-ssr>
            <star-rating
              v-if="hotel.rating"
              v-bind:max-rating="5"
              :rating="hotel.rating"
              inactive-color="#ecc94b"
              active-color="#e53e3e"
              :read-only="true"
              :show-rating="false"
              text-class="text-gray-500"
              v-bind:star-size="20"
            />
          </no-ssr>
          <div v-if="!hotel.rating" class="text-gray-500">No rating</div>
        </div>
        <div class="text-sm mb-2">{{ hotel.address }}</div>
        <p class="text-gray-700 text-base" v-if="hotel.description">
          {{ hotel.description.slice(0, 100) }}...
        </p>
      </div>
      <div class="px-6 py-4" v-if="hotel.tags">
        <span
          v-for="tag of hotel.tags"
          :key="tag"
          class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
          >{{ tag }}</span
        >
      </div>
    </div>
    <div
      tabindex="0"
      class="z-40 overflow-auto left-0 top-0 bottom-0 right-0 w-full h-full fixed"
      :class="show ? '' : 'hidden'"
    >
      <div
        class="z-50 relative p-3 mx-auto my-0 max-w-full"
        style="width: 600px"
      >
        <div
          class="bg-white rounded shadow-lg border flex flex-col overflow-hidden"
        >
          <button
            @click="show = false"
            class="fill-current h-6 w-6 absolute right-0 top-0 m-6 font-3xl font-bold"
          >
            &times;
          </button>
          <div class="px-6 py-3 text-xl border-b font-bold">
            {{ hotel.name }}
          </div>
          <div class="p-6 flex-grow">
            <img
              :src="hotel.photo"
              v-if="hotel.photo"
              class="rounded-lg shadow-lg"
            />
            <no-ssr>
              <star-rating
                v-if="hotel.rating"
                v-bind:max-rating="5"
                :rating="hotel.rating"
                inactive-color="#ecc94b"
                active-color="#e53e3e"
                :read-only="true"
                :show-rating="false"
                text-class="text-gray-500"
                v-bind:star-size="20"
              />
            </no-ssr>
            <p class="text-sm mb-4">
              {{ hotel.address }}
            </p>
            <p class="text-gray-800">{{ hotel.description }}</p>
            <div v-if="rooms.length > 0" class="mt-6">
              <span class="text-xl font-bold my-4 text-red-700">Rooms</span>
              <div
                class="w-full text-right rounded-lg bg-gray-200 border flex flex-col"
              >
                <div
                  class="flex justify-evenly text-gray-900 text-sm py-3 bg-gray-300"
                >
                  <span>Type</span>
                  <span>Available</span>
                  <span>Price</span>
                  <span>--</span>
                </div>
                <div
                  v-for="(room, index) in rooms"
                  :key="room.id"
                  class="flex justify-evenly items-center"
                >
                  <div class="px-4 py-3">{{ room.type }}</div>
                  <div
                    class="px-4 py-3"
                    :class="room.is_available ? '' : 'text-red-500'"
                  >
                    {{ room.is_available ? 'yes' : 'no' }}
                  </div>
                  <div class="px-4 py-3 font-bold text-lg">
                    {{ room.price }}
                  </div>
                  <div class="px-4 py-3 font-bold text-sm">
                    <button
                      class="bg-red-600 text-white rounded-lg p-2"
                      :class="room.is_available ? '' : 'hidden'"
                      @click="showDateModal(room.id, index)"
                    >
                      Book
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div v-if="hotel.reviews"></div>
          </div>
          <div class="px-6 py-3 border-t">
            <div class="flex justify-between">
              <button @click="show = false" class="text-gray-900 py-2">
                Close
              </button>
              <button
                class="bg-red-400 text-white rounded-xl px-4 py-2"
                @click="saveOrUnsaveHotel()"
              >
                {{ isSaved ? 'Unsave' : 'Save' }}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        class="z-40 overflow-auto left-0 top-0 bottom-0 right-0 w-full h-full fixed bg-black opacity-50"
      ></div>
    </div>

    <div
      tabindex="0"
      class="z-50 overflow-auto left-0 top-0 bottom-0 right-0 w-full h-full justify-center flex items-center fixed"
      style="background: rgba(0, 0, 0, 0.5)"
      :class="showDate ? '' : 'hidden'"
    >
      <div class="bg-white p-5 rounded-xl shadow-xl flex flex-col">
        <div class="flex justify-end">
          <button
            class="bg-gray-500 rounded-full w-6 h-6 text-center text-white hover:bg-black"
            @click="showDate = false"
          >
            &times;
          </button>
        </div>
        <span class="text-xl font-semibold mb-5">Choose date</span>
        <div class="flex justify-between gap-5">
          <div class="flex flex-col gap-1">
            <label class="text-sm text-gray-700">Checkin</label>
            <input type="date" v-model="checkin.date" />
            <input type="time" v-model="checkin.time" />
          </div>

          <div class="flex flex-col gap-1">
            <label class="text-sm text-gray-700">Checkout</label>
            <input type="date" v-model="checkout.date" />
            <input type="time" v-model="checkout.time" />
          </div>
        </div>
        <div class="flex justify-end mt-5">
          <button
            class="bg-red-600 text-white rounded-lg p-2"
            @click="bookRoom(selectedRoom.id, selectedRoom.index)"
          >
            Book now
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
// @ts-ignore
import StarRating from 'vue-star-rating'
import { mapState, mapGetters } from 'vuex'
import firebase from 'firebase'

export default Vue.extend({
  name: 'HotelCard',
  components: {
    StarRating,
  },
  props: {
    hotel: { required: true },
  },
  computed: {
    ...mapState(['authUser']),
    ...mapGetters(['currentOption']),
  },
  created() {
    this.checkIfSaved()
  },
  data() {
    return {
      show: false,
      isSaved: false,
      showDate: false,
      rooms: [],
      checkin: {
        date: '',
        time: '',
      },
      checkout: {
        date: '',
        time: '',
      },
      selectedRoom: {
        id: '',
        index: -1,
      },
    }
  },
  methods: {
    async checkIfSaved() {
      // @ts-ignore
      const userRef = this.$fire.firestore
        .collection(`users`)
        .doc(`${this.authUser.uid}`)
      // @ts-ignore
      const hotelRef = `hotelReservation/${this.hotel.id}`
      try {
        const data = await userRef.get()
        this.isSaved = data
          .data()
          .saved.map((d: any) => d.path)
          .includes(hotelRef)
      } catch (e) {
        console.error(e)
      }
    },
    async getRooms() {
      // @ts-ignore
      const roomsRef = this.$fire.firestore.collection(
        // @ts-ignore
        `hotelReservation/${this.hotel.id}/rooms`
      )
      try {
        const snapshot = await roomsRef.get()
        const rooms = snapshot.docs.map((doc: any) => {
          return { id: doc.id, ...doc.data() }
        })
        this.rooms = rooms
      } catch (e) {
        console.log(e)
      }
    },
    async showModal() {
      this.getRooms()
      this.show = true
    },
    showDateModal(id: string, index: number) {
      this.selectedRoom.id = id
      this.selectedRoom.index = index
      this.showDate = true
    },
    async bookRoom(id: string, index: number) {
      if (
        [
          this.checkin.date,
          this.checkin.time,
          this.checkout.date,
          this.checkout.time,
        ].includes('')
      ) {
        alert('pls set your checkin and checkout date and time')
        return
      }
      // @ts-ignore
      const userRef = this.$fire.firestore
        .collection(`users`)
        .doc(`${this.authUser.uid}`)
      // @ts-ignore
      const roomRef = this.$fire.firestore
        .collection(
          // @ts-ignore
          `hotelReservation/${this.hotel.id}/rooms`
        )
        .doc(id)
      try {
        await userRef.update({
          // @ts-ignore
          booked: firebase.firestore.FieldValue.arrayUnion(roomRef),
        })
      } catch (e) {
        await userRef.set({
          // @ts-ignore
          booked: firebase.firestore.FieldValue.arrayUnion(roomRef),
        })
        console.log(e)
      }
      try {
        await roomRef.update({
          is_available: false,
          booked_on: firebase.firestore.Timestamp.now(),
          checkin: this.checkin,
          checkout: this.checkout,
        })
        // @ts-ignore
        this.rooms[index].is_available = false
      } catch (e) {
        console.log(e)
      }

      // reset rooms
      this.selectedRoom.id = ''
      this.selectedRoom.index = -1
      this.showDate = false
      alert('You successfully booked this room.')
    },
    async saveHotel() {
      // @ts-ignore
      const userRef = this.$fire.firestore
        .collection(`users`)
        .doc(`${this.authUser.uid}`)
      // @ts-ignore
      const hotelRef = this.$fire.firestore.doc(
        // @ts-ignore
        `hotelReservation/${this.hotel.id}`
      )
      try {
        await userRef.update({
          // @ts-ignore
          saved: firebase.firestore.FieldValue.arrayUnion(hotelRef),
        })
      } catch (e) {
        await userRef.set({
          // @ts-ignore
          saved: firebase.firestore.FieldValue.arrayUnion(hotelRef),
        })
        console.log(e)
      }
      alert('You successfully bookmarked this hotel')
    },
    async unsaveHotel() {
      // @ts-ignore
      const userRef = this.$fire.firestore
        .collection(`users`)
        .doc(`${this.authUser.uid}`)
      // @ts-ignore
      const hotelRef = this.$fire.firestore.doc(
        // @ts-ignore
        `hotelReservation/${this.hotel.id}`
      )
      try {
        await userRef.update({
          // @ts-ignore
          saved: firebase.firestore.FieldValue.arrayRemove(hotelRef),
        })
        alert('You successfully removed this hotel from your bookmarks')
      } catch (e) {
        console.log(e)
      }
    },
    saveOrUnsaveHotel() {
      if (this.isSaved) {
        this.unsaveHotel()
      } else {
        this.saveHotel()
      }
      this.checkIfSaved()
    },
  },
})
</script>
