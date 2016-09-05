# vue-markdown
>a simple component of markdown edit for vue

----

## Useage

```bash
npm install vue-s-markdown

```

## eg:

```html
<template>
  <div>
    <Markdown :content.sync="content"></Markdown>
  </div>
</template>

<script>
import Markdown from 'vue-s-markdown/src/markdown/index'
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
```

