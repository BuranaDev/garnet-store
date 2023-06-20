<script>
import axios from 'axios';
import Navbar from "@/components/nav-bar.vue";

export default {
  components: {Navbar},
  data () {
    return {
      msg: '',
    };
  },
  methods: {
    getMessage() {
      axios.get('/')
      .then((res) => {
        this.msg = res.data;
      })
      .catch((error) => {
        console.error(error);
      });
    }
  },
  created() {
    this.getMessage();
  }
}
</script>
<template>
  <link
    rel="stylesheet"
    href="src/assets/main.css"
  />
  <Navbar />
</template>
<style>
</style>
