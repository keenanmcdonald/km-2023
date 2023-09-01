<script>
	export let project
</script>

<a href={project.slug}>
	<div
		class="bg-tertiary rounded-lg shadow-md overflow-hidden cursor-pointer hover:bg-secondary transition-colors duration-200"
	>
		<div class="p-4">
			<h2 class="text-2xl font-bold mb-2">{project.title}</h2>
			<p class="text-gray-700">{project.description}</p>
		</div>
	</div>
</a>
