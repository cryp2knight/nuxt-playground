<template>
  <div class="flex flex-col items-center mx-5 mt-8">
    <div v-if="isLoggedIn">
      <div class="flex flex-col">
        <input
          type="text"
          v-model="name"
          class="w-full px-4 my-1 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-red-500"
          placeholder="Hotel name"
        />
        <input
          type="text"
          v-model="address"
          class="w-full px-4 my-1 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-red-500"
          placeholder="Hotel address"
        />
        <textarea
          v-model="description"
          placeholder="description"
          class="w-full px-4 my-1 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-red-500"
        ></textarea>
        <select v-model="rating" class="w-full px-4 my-1 py-2 border bg-white">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
        <input
          type="text"
          v-model="photo"
          class="w-full px-4 my-1 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-red-500"
          placeholder="Photo URL"
        />
        <input
          type="text"
          v-model="tags"
          class="w-full px-4 my-1 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-red-500"
          placeholder="tags (separated by comma)"
        />
        <div>
          <ul>
            <li v-for="(r, index) of rooms" :key="index">
              {{ r.type }} - <b>{{ r.price }}</b>
              <button
                @click="rooms.splice(index, 1)"
                class="bg-red-900 text-white rounded-full w-5 h-5 mx-3"
              >
                x
              </button>
            </li>
          </ul>
        </div>
        <div class="flex">
          <input
            type="text"
            v-model="room"
            class="w-full px-4 my-1 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-red-500"
            placeholder="type, price (master, 1250)"
          />
          <button class="bg-red-200 p-2 rounded ml-5" @click="addToRoom">
            add
          </button>
        </div>

        <button
          class="px-4 my-1 py-2 bg-red-600 text-white rounded-lg mt-5"
          @click="saveToFirestore"
        >
          Save
        </button>
      </div>
    </div>
    <Registration v-if="!isLoggedIn" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Registration from '~/components/Registration.vue'
import firebase from 'firebase'
import { mapState, mapGetters } from 'vuex'

export default Vue.extend({
  data() {
    return {
      name: '',
      address: '',
      rating: '',
      description: '',
      photo: '',
      tags: '',
      rooms: [],
      room: '',
    }
  },
  computed: {
    ...mapGetters(['isLoggedIn']),
  },
  components: {
    Registration,
  },
  methods: {
    arrayTags() {
      return this.tags.split(',')
    },
    addToRoom() {
      const rooms_ = this.room.split(',')
      if (rooms_.length !== 2) {
        alert('invalid format')
        return
      }
      let price = +rooms_[1]
      if (isNaN(price)) {
        alert('invalid format, price must be a number')
        return
      }
      // @ts-ignore
      this.rooms.push({ type: rooms_[0], price: rooms_[1], is_available: true })
      this.room = ''
    },
    async saveToFirestore() {
      const required = [
        ['name', this.name],
        ['address', this.address],
        ['rating', this.rating],
        ['description', this.description],
        ['photo url', this.photo],
      ]

      for (let i = 0; i < required.length; i++) {
        if (required[i][1] === '') {
          alert(`${required[i][0]} cannot be empty`)
          return
        }
      }

      // @ts-ignore
      const hotelRef = this.$fire.firestore.collection('hotelReservation')
      try {
        await hotelRef
          .add({
            name: this.name,
            address: this.address,
            photo: this.photo,
            description: this.description,
            rating: +this.rating,
            tags: this.arrayTags(),
          })
          .then(async (href: any) => {
            if (this.rooms.length > 0) {
              await this.rooms.forEach((el: any) => {
                href.collection('rooms').add(el)
              })
            }
          })
      } catch (e) {
        alert(e)
        return
      }
      alert('Success.')
    },
  },
})
</script>