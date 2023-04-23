<template>
  <form class="form" @submit.prevent="saveData">
    <input type="text" v-model="name" required>
    <textarea v-model="text" required></textarea>
    <button>Send message</button>
  </form>
</template>

<script>

import router from "@/router";
import {requestServer} from "@/mixins/request-server";

export default {
  name: "CreateMassage",

  data() {
    return {
      name: '',
      text: ''
    }
  },

  methods: {
    saveData() {
      this.$store.commit('updateStoreMessages', {name: this.name, message: this.text});
      requestServer.method.updateMessages({name: this.name, message: this.text});
      router.push({path: '/show-messages'});
    }
  },
}
</script>

<style scoped>

.form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.form input,
.form textarea,
.form button {
  padding: 10px;
  border-radius: 5px;
  border: 1px solid black;
  min-width: 300px;

}

.form input:focus,
.form textarea:focus {
  outline: none;
}

.form button {
  cursor: pointer;
  background-color: #62d854;
  transition: background-color 0.2s;
}

.form button:focus {
  background-color: #2b801d;
}

</style>
