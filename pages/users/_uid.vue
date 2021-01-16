<template>
  <div class="flex flex-col max-w-lg mx-auto gap-5">
    <nuxt-link to="/admin" class="mt-10 underline text-red-600">back</nuxt-link>
    <div class="flex flex-col" v-if="user">
      <span class="text-3xl font-medium text-red-700 underline">{{
        (user.firstName || 'admin') + ' ' + (user.lastName || 'admin')
      }}</span>
      <div class="flex flex-col">
        <span class="text-sm text-gray-700">{{ user.address }}</span>
        <span class="text-gray-800">{{ user.contact }}</span>
        <span class="text-gray-800">{{ user.email }}</span>
      </div>
      <hr />
      <div class="flex gap-5">
        <span v-if="user.saved && user.saved.length > 0"
          ><strong>{{ user.saved.length }}</strong> saved rooms</span
        >
        <span v-if="user.booked && user.booked.length > 0"
          ><strong>{{ user.booked.length }}</strong> booked rooms</span
        >
      </div>
    </div>
    <div class="flex flex-col" v-if="bookedHotels.length > 0">
      <span class="text-2xl font-medium">Booked Hotel Rooms</span>
      <hr />
      <div
        v-for="hotel of bookedHotels"
        :key="hotel.id"
        class="flex gap-3 bg-white p-4 m-4 rounded-xl shadow-lg"
      >
        <img
          :src="hotel.photo"
          v-if="hotel.photo"
          class="w-40 h-40 object-cover rounded-xl"
        />

        <div class="flex flex-col gap-2">
          <span class="text-xl font-medium">{{ hotel.name }}</span>
          <span class="font-semibold">{{ hotel.rating }} out of 5 stars</span>
          <span class="">{{ hotel.address }}</span>
          <hr />
          <span class="font-bold text-lg text-right">₱ {{ hotel.price }}</span>
          <span class="flex justify-between"
            >Room type: <strong>{{ hotel.type }}</strong></span
          >
          <span class="flex justify-between"
            >Booked on
            <strong>{{ hotel.booked_on.toDate().toDateString() }}</strong></span
          >

          <span class="flex justify-between"
            >Checkin:
            <strong>{{
              hotel.checkin.date + ' ' + hotel.checkin.time
            }}</strong></span
          >

          <span class="flex justify-between"
            >Checkout:
            <strong>{{
              hotel.checkout.date + ' ' + hotel.checkout.time
            }}</strong></span
          >
          <hr />
          <div class="flex justify-end mt-5">
            <button
              class="bg-red-600 text-white rounded-lg p-2"
              @click="unbookRoom(hotel.hotel_id, hotel.room_id)"
            >
              Unbook room
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-col" v-if="savedHotels.length > 0">
      <span class="text-2xl font-medium">Saved Hotels</span>
      <hr />
      <div
        v-for="hotel of savedHotels"
        :key="hotel.id"
        class="flex gap-3 bg-white p-4 m-4 rounded-xl shadow-lg"
      >
        <img
          :src="hotel.photo"
          v-if="hotel.photo"
          class="w-40 h-40 object-cover rounded-xl"
        />
        <div class="flex flex-col gap-3">
          <div class="flex justify-between">
            <div class="flex flex-col">
              <span class="text-xl font-medium">{{ hotel.name }}</span>
              <span class="">{{ hotel.address }}</span>
            </div>
            <span class="font-semibold">{{ hotel.rating }} out of 5 stars</span>
          </div>
          <p class="text-sm text-gray-700">{{ hotel.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import firebase from 'firebase'

export default Vue.extend({
  middleware: 'admin',
  data() {
    return {
      user: null,
      savedHotels: [],
      bookedHotels: [],
      uid: '',
    }
  },
  async asyncData({ params }: any) {
    return { uid: params.uid }
  },
  mounted() {
    this.getSavedHotels()
    this.getBookedHotels()
  },
  methods: {
    async getSavedHotels() {
      // @ts-ignore
      const userRef = this.$fire.firestore.collection(`users`).doc(this.uid)
      // @ts-ignore
      try {
        const data = await userRef.get()
        const saved = data.data().saved
        this.user = data.data()
        saved.forEach(
          async (hotelRef: firebase.firestore.DocumentReference) => {
            try {
              const snapshot = await hotelRef.get()
              // @ts-ignore
              this.savedHotels.push({ id: snapshot.id, ...snapshot.data() })
            } catch (e) {
              console.log(e)
            }
          }
        )
      } catch (e) {
        console.log(e)
      }
    },
    async getBookedHotels() {
      // @ts-ignore
      const userRef = this.$fire.firestore.collection(`users`).doc(this.uid)
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
        console.log(e)
      }
    },

    async unbookRoom(hotel_id: string, room_id: string) {
      // @ts-ignore
      const roomRef = this.$fire.firestore
        .collection(
          // @ts-ignore
          `hotelReservation/${hotel_id}/rooms`
        )
        .doc(room_id)
      try {
        await roomRef.update({
          is_available: true,
          booked_on: firebase.firestore.FieldValue.delete(),
          checkin: firebase.firestore.FieldValue.delete(),
          checkout: firebase.firestore.FieldValue.delete(),
        })
      } catch (e) {
        console.log(e)
      }
      // @ts-ignore
      const userRef = this.$fire.firestore.collection(`users`).doc(this.uid)
      try {
        await userRef.update({
          // @ts-ignore
          booked: firebase.firestore.FieldValue.arrayRemove(roomRef),
        })
        alert('you succesfully unbooked this room')
        window.location.reload()
      } catch (e) {
        console.log(e)
      }
    },
  },
})
</script>
