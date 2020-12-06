<template>
  <div>
    <div class="bg-white px-4 py-4 flex my-2 rounded-lg shadow-lg">
      <div class="w-24 pr-3 flex flex-col">
        <a href="#" class="mb-4" v-if="hotel.photo">
          <img class="rounded" :src="hotel.photo" />
        </a>
        <span class="font-bold text-lg">₱ {{ hotel.price }}</span>
        <span class="text-sm text-gray-600">{{ hotel.type }}</span>
        <span class="text-sm text-gray-500">{{
          hotel.booked_on.toDate().toDateString()
        }}</span>
      </div>
      <div class="flex-1">
        <h2 class="font-bold text-gray-700 my-0">
          {{ hotel.name }}
        </h2>
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
            class="mb-4"
          />
        </no-ssr>
        <h3 class="text-xsm text-gray-600">{{ hotel.address }}</h3>
        <p v-if="hotel.description" class="text-sm text-gray-600">
          {{ hotel.description.slice(0, 40) }}...
        </p>
        <div class="flex justify-end mt-4">
          <button
            class="bg-red-400 text-white rounded-xl px-4 py-2"
            @click="unbookHotel"
          >
            Unbook
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import { mapState, mapGetters } from 'vuex'
// @ts-ignore
import StarRating from 'vue-star-rating'
import firebase from 'firebase'

export default Vue.extend({
  name: 'BookedHotel',
  props: {
    hotel: { required: true },
  },
  components: {
    StarRating,
  },
  computed: {
    ...mapState({
      authUser: (state: any) => state.authUser,
    }),
    ...mapGetters({
      isLoggedIn: 'isLoggedIn',
    }),
  },
  methods: {
    async unbookHotel() {
      const unbook = confirm('Unbook this hotel?')
      if (unbook) {
        // @ts-ignore
        const userRef = this.$fire.firestore
          .collection(`users`)
          .doc(this.authUser.uid)
        // @ts-ignore
        const roomRef = this.$fire.firestore
          .collection(
            // @ts-ignore
            `hotelReservation/${this.hotel.hotel_id}/rooms`
          )
          // @ts-ignore
          .doc(this.hotel.room_id)
        try {
          await roomRef.update({
            is_available: true,
            booked_on: null,
          })
        } catch (e) {
          return
          console.log(e)
        }
        try {
          await userRef.update({
            booked: firebase.firestore.FieldValue.arrayRemove(roomRef),
          })
          alert('You successfully unbooked this room.')
        } catch (e) {
          console.log(e)
        }
      }
    },
  },
})
</script>