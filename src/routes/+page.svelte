<script>
	import Nav from '$lib/components/Nav.svelte'
	import { fade } from 'svelte/transition'
</script>

<Nav activePage="/" />
<div in:fade={{ duration: 50 }}>
	<h1 class="text-xl font-semibold p-8 sm:p-12 md:p-24 md:text-3xl max-w-custom mx-auto mt-center">
		I'm Keenan McDonald. I'm a software engineer based on Austin, TX. This is my personal website.
		Feel free to check out some of my <a
			class="text-muted hover:text-gray-200 duration-50"
			href="/projects">recent projects</a
		>, learn more
		<a href="/about" class="text-muted hover:text-gray-200 duration-50">about me</a>, or get in
		<a href="/contact" class="text-muted hover:text-gray-200 duration-50">contact</a> with me.
	</h1>
</div>
