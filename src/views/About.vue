<template>
  <div class="about">
    <h1>Talking about Notifications</h1>

    <input type="text" v-model="stuff" />

    <button class="btn btn-success" @click="fireNotification('success')">Success</button>
    <button class="btn btn-danger ml-2 mr-2" @click="fireNotification('error')">Error</button>
    <button class="btn btn-info" @click="fireNotification('info')">Info</button>
    <button class="btn btn-warning ml-2" @click="fireNotification('warning')">Warn</button>

    <div v-html="stuff"></div>
  </div>
</template>


<script>
import swal from "sweetalert2";
export default {
  name: "about",
  data() {
    return {
      stuff: ""
    };
  },
  methods: {
    fireNotification(type) {
      this.$store.dispatch("getData", { error: true });
    }
  }
};
</script>