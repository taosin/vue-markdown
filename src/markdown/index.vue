<template>
	<div>
		<div id="editor">
			<textarea v-model="input" debounce="300"></textarea>
			<div v-html="input | marked"></div>
		</div>
	</div>
</template>
<script>
	export default{
	  el: '#editor',
	  data () {
	    return {
	      input: '# hello'
	    }
	  },
	  filters: {
	    marked: marked
	  },
	  ready () {
	  },
	  watch: {
	  },
	  computed: {
	  },
	  methods: {
	  }
	}
</script>
<style type="text/css">
	html, body, #editor {
		margin: 0;
		height: 600px;
		font-family: 'Helvetica Neue', Arial, sans-serif;
		color: #333;
		width: 100%;
	}

	textarea, #editor div {
		display: inline-block;
		width: 49%;
		height: 100%;
		vertical-align: top;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
		padding: 0 20px;
	}

	textarea {
		border: none;
		border-right: 1px solid #ccc;
		resize: none;
		outline: none;
		background-color: #f6f6f6;
		font-size: 14px;
		font-family: 'Monaco', courier, monospace;
		padding: 20px;
	}

	code {
		color: #657b83;

	}
	pre{
		overflow: auto;
		display: block;
    	padding: 9.5px;
    	margin: 0 0 10px;
    	font-size: 13px;
    	line-height: 20px;
    	word-break: break-all;
    	word-wrap: break-word;
    	white-space: pre;
    	white-space: pre-wrap;
    	background-color: #f5f5f5;
    	border: 1px solid #ccc;
    	border: 1px solid rgba(0,0,0,0.15);
    	-webkit-border-radius: 4px;
    	-moz-border-radius: 4px;
    	border-radius: 4px;
    	background: #fdf6e3;
    	color: #657b83;
	}
	table{

	}
</style>