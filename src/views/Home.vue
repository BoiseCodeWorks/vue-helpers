<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->



    <!-- <button @click="showformModal = true">trigger</button>

    <quick-modal class="bg-dark text-light" :toggle="showformModal" @close="showformModal = false">
      <form @submit.prevent="submit">
        <div class="form-group">
          <label for>Something Here</label>
          <input type="text" />
        </div>
      </form>

      <div slot="modal-footer">
        <button type="button" @click="submit" class="btn btn-success">Submit</button>
      </div>
    </quick-modal>-->

    <HelloWorld msg="Welcome to notifications" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  data() {
    return {
      showformModal: false
    };
  },
  components: {
    HelloWorld
  },
  methods: {
    submit() {
      console.log("cool");
      this.showformModal = false;
    }
  }
};
</script>
