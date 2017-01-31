# vue-markdown
>a simple component of markdown edit for vue
>一个在vue.js 1.0中使用的简单的markdown示例，如有不当，敬请指出！
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

