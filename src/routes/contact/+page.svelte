<script>
	import Nav from '$lib/components/Nav.svelte'
	import { fade } from 'svelte/transition'
</script>

<Nav activePage="/contact" />
<div in:fade={{ duration: 50 }}>
	<div class="text-lg p-8 sm:p-12 md:p-24 md:text-xl max-w-custom mx-auto mt-center text-center">
		<a
			target="_blank"
			class="block text-muted hover:text-gray-200"
			href="mailto:keenanjmcdonald@gmail.com">keenanjmcdonald@gmail.com</a
		>
		<a
			target="_blank"
			class="block text-muted hover:text-gray-200"
			href="https://www.linkedin.com/in/keenan-mcdonald/">linkedin</a
		>
		<a
			target="_blank"
			class="block text-muted hover:text-gray-200"
			href="https://github.com/keenanmcdonald">github</a
		>
	</div>
</div>
