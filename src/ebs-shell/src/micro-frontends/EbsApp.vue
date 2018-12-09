<template>
  <iframe v-bind:src="src" ref="iframe"></iframe>
</template>

<script>
import {register} from "./EventBus";

export default {
  name: 'ebs-app',
  props: {
    src: String
  },
  mounted() {
    register(this.$refs.iframe);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  iframe {
    width: 100%;
    height: 98%;
    border: 0;
  }
</style>
