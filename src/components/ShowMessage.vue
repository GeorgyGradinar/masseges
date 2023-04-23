<template>
  <div class="wrapper-messages">
    <button @click="toCreateNewMessagePage">new message</button>
    <section class="message" v-for="message in messages" :key="message.id">
      <h2>{{ message.name }}</h2>
      <p>{{ message.message }}</p>
    </section>
  </div>
</template>

<script>
import router from "@/router";

export default {
  name: "ShowMessage",

  mounted() {
    this.messages = this.$store.state.messages;
  },

  data() {
    return {
      messages: []
    }
  },

  methods: {
    toCreateNewMessagePage() {
      router.push('/')
    }
  }
}
</script>

<style scoped>

.wrapper-messages,
.message {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.message {
  max-width: 500px;
  border: 1px solid black;
  padding: 10px;
  border-radius: 10px;
  gap: 10px;
}

.wrapper-messages button {
  padding: 10px;
  border-radius: 5px;
  border: 1px solid black;
  min-width: 300px;
  cursor: pointer;
}
</style>
