<template>
  <div id="app">
    <Markdown :content.sync="content"></Markdown>
    <button @click="submit">ddd</button>
  </div>
</template>

<script>
import Markdown from './markdown/index'
export default {
  components: {
    Markdown
  },
  data () {
    return {
      content: ''
    }
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
  margin-top: 100px;
  padding-left: 20px;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

</style>
