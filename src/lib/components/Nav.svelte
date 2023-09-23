<script>
	const anchorStyles = 'text-block w-full text-center py-4 duration-50'
	export let activePage
</script>

<nav class="flex justify-between mb-4 mx-auto">
	<a
		href="/"
		class={`${anchorStyles} ${
			activePage === '/' ? 'text-accent' : 'text-muted hover:text-gray-200'
		}`}
	>
		home
	</a>
	<a
		href="/projects"
		class={`${anchorStyles} ${
			activePage === '/projects' ? 'text-accent' : 'text-muted hover:text-gray-200'
		}`}
	>
		projects
	</a>
	<p class={`${anchorStyles} text-gray-600`}>about</p>
	<a
		href="/contact"
		class={`${anchorStyles} ${
			activePage === '/contact' ? 'text-accent' : 'text-muted hover:text-gray-200'
		}`}
	>
		contact
	</a>
</nav>
