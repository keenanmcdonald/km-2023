import projects from '$lib/data/projects.js'

export const load = ({ params }) => {
	const project = projects.find((project) => project.slug === params.slug)
	return {
		project
	}
}
