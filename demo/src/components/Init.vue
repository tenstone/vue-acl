<template>
	<div>
		<h1>Welcome the vue-acl3 demo</h1>
		<small>Accessing with {{ active }}</small>
		<hr>
		<button @click="change('admin')">Change to admin access</button>
		<button @click="change('any')">Change to any access</button>
		<hr>
		<router-link to="/">To public page</router-link>
		<hr>
		<router-view></router-view>
	</div>
</template>

<script>
export default{
	name: 'lv-init',
	data() {
		return { active: this.$access() }
	},
	methods: {
		change(access) {
			this.$access(access);
			this.active = this.$access()
			console.log(this.active);
			if( this.$can('admin') )
				console.log('Hello, admin')
			else
				console.log('No is admin')
		}
	}
}
</script>