# vue-markdown
>a simple component of markdown edit for vue

----

## Useage

```bash
npm install vue-s-markdown

```

eg:

```
<template>
  <div>
    <Markdown :content.sync="content"></Markdown>
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
```

