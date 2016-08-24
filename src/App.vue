<template>
  <div id="app">
    <Markdown></Markdown>
  </div>
</template>

<script>
import Markdown from './markdown/index'
export default {
  components: {
    Markdown
  }
}
</script>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  width:100%; 
  padding-top: 20px;
  padding-left: 20px;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

</style>
