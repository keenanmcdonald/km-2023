<script>
	import projects from '$lib/data/projects.js'
	import Nav from '$lib/components/Nav.svelte'
	import ProjectThumbnail from '$lib/components/ProjectThumbnail.svelte'
</script>

<Nav />
<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
	{#each projects as project}
		<ProjectThumbnail {project} />
	{/each}
</div>
