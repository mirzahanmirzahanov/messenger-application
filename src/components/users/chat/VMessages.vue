<template>
<div class='v-messages'>

</div>
</template>


<script>

export default {
components: {},
name: 'v-messages', 
computed: {},
props: {
	messages: {
		type: Array,
		default: () => [],
		requred:true
	}
},
data: () => ({}),
methods: {}
}
</script>


<style>

</style>