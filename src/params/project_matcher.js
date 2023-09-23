import projects from '$lib/data/projects.js'

export function match(param) {
	return projects.some((project) => project.slug === param)
}
