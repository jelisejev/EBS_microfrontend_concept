<template>
  <div id="app">
    <header>
      <h1>Micro-frontend concept</h1>
    </header>
    <content>
      <ebs-app src="/contacts"></ebs-app>
      <ebs-app src="/contacts"></ebs-app>
    </content>
  </div>
</template>

<script>
import EbsApp from "./micro-frontends/EbsApp";
import {connect} from './micro-frontends/EventBus';

export default {
  name: 'app',
  components: {EbsApp},
  mounted() {
    console.log('mounted');
    connect(window);

    window.addEventListener('message', (e) => {
      // if (typeof e.data !== 'string' || e.data.indexOf('app.') !== -1) {
      //   return;
      // }

      console.log(e);
    });
  }
}
</script>

<style>
#app {
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

header {
  text-align: center;
  flex: 0 100px;
}

content {
  flex: 1;
}

</style>
