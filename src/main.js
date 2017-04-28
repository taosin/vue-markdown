import Vue from 'vue'
import App from './App'
import Markdown from './markdown/index'

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App,
  Markdown },
  render: h => h(App)
})
