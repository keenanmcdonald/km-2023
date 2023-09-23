<script>
	import Nav from '$lib/components/Nav.svelte'
	export let data
	const { project } = data
</script>

<Nav activePage="/projects" />
<div>
	<div class="sm:flex">
		<img
			class="sm:w-1/2 mr-8 rounded-md mb-4"
			alt={`a screenshot from ${project.title}`}
			src={project.image}
		/>
		<div class="sm:w-1/2">
			<h1 class="text-2xl font-bold">{project.title}</h1>
			<p class="text-lg sm:mb-2">{project.description}</p>

			<a class="text-lg text-muted hover:text-gray-200" href={project.link}>link</a>
		</div>
	</div>
	<div class="border-gray-600 border my-6 sm:mb-8 mx-auto" />
	<div>
		{#each project.fullDescription as paragraph}
			<p class="text-lg mt-4">{paragraph}</p>
		{/each}
	</div>
</div>
