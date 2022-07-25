<template>
<div class='v-messages' :class="className">
	<div class="v-messages__content">
		<p>{{ messages.text }}</p>
		<p class="content__time">{{ messages.time }}</p>
	</div>
</div>
</template>


<script>

export default {
components: {},
name: 'v-messages', 
computed: {
	// распределение сообщений 
	// в зависимости от отправителя
	className() {
		return {
			'chat__own': this.messages.type === 'own',
			'chat__others': this.messages.type === 'others'
		}
	}
},
props: {
	messages: {
		type: Object,
		default: () => {},
		requred:true
	}
},
data: () => ({}),
methods: {}
}
</script>


<style>

</style>