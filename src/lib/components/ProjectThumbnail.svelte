<script>
	export let project
</script>

<a href={`/projects/${project.slug}`}>
	<div
		class="rounded-lg shadow-sm border-gray-600 border overflow-hidden cursor-pointer hover:bg-secondary transition-colors duration-50"
	>
		<div class="p-4">
			<img
				src={project.image}
				alt={`a screenshot of ${project.title}`}
				class="object-cover rounded-md mb-2 mx-auto"
				style="height: 200px; width: 400px;"
			/>
			<h2 class="text-2xl font-bold mb-2">{project.title}</h2>
			<p class="text-gray-400">{project.description}</p>
		</div>
	</div>
</a>
