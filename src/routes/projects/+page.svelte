<script>
	import projects from '$lib/data/projects.js'
	import Nav from '$lib/components/Nav.svelte'
	import ProjectThumbnail from '$lib/components/ProjectThumbnail.svelte'
	import { fade } from 'svelte/transition'
</script>

<Nav activePage="/projects" />
<div
	class="grid md:grid-cols-2 lg:grid-cols-3 max-w-custom gap-8 mx-auto"
	in:fade={{ duration: 50 }}
>
	{#each projects as project}
		<ProjectThumbnail {project} />
	{/each}
</div>
