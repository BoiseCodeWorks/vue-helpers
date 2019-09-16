<template>
  <div class="hello">
    <h1 @click="showModal = true">{{ msg }}</h1>
    <quick-modal class="bg-dark text-light" :toggle="showModal" @close="showModal = false">
      <img src="//placehold.it/500x800" alt="">
    </quick-modal>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return {
      showModal: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
