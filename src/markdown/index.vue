<template>
	<div>
		<div id="editor">
			<textarea v-model="input" debounce="300"></textarea>
			<div v-html="input | marked" class="marked"></div>
		</div>
		<button @click="submit">ok</button>
	</div>
</template>
<script>
	export default{
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
	    submit () {
	      alert(this.input)
	    }
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
	#editor > textarea, .marked{
		display: inline-block;
		width: 49%;
		height: 100%;
		vertical-align: top;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
		padding: 0 20px;
	}

	#editor> textarea{
		border: none;
		border-right: 1px solid #ccc;
		resize: none;
		outline: none;
		background-color: #f6f6f6;
		font-size: 14px;
		font-family: 'Monaco', courier, monospace;
		padding: 20px;
	}

	.marked > code {
		color: #657b83;

	}
	.marked > pre{
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
	.marked > table{
		margin-bottom: 20px;
		border: 1px solid #dddddd;
		width: 100%;
    	background-color: transparent;
    	border-collapse: collapse;
    	border-spacing: 0;
    	font-size: 16px;
	}
	.marked > table thead th{
		border: 1px solid #dddddd;
		height: 30px; 
		padding: 0 10px;
	}
	.marked > table tbody td{
		height: 30px;
		border: 1px solid #dddddd;
		padding: 0 10px;
	}
	.marked > table tbody tr:hover{
		background: #f5f5f5;
	}
	.marked >h1{
		font-size: 48px;
	}
	.marked >h2{
		font-size: 42px;
	}
	.marked > img{
		width: 100%;
	}
</style>