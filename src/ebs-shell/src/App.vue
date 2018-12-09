<template>
  <div id="app">
    <header>
      <h1>Micro-frontend concept</h1>
    </header>
    <content>
      <iframe src="/contacts"></iframe>
    </content>
  </div>
</template>

<script>
export default {
  name: 'app',
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

iframe {
  width: 100%;
  height: 98%;
  border: 0;
}

</style>
