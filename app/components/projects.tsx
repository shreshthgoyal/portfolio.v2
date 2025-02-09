import Link from 'next/link'
import { formatDate, getProjects } from 'app/projects/utils'

export function ProjectPosts() {
    const projects = getProjects()

    projects.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    )

    return (
        <div className="space-y-6">
            {projects.map((project) => (
                <div key={project.name} className="flex flex-col mb-1">
                    <h3 className="text-l font-semibold text-gray-800 dark:text-gray-200">
                        {project.name}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        {formatDate(project.date, false)}
                    </p>
                    <p className="text-base text-gray-700 dark:text-gray-300">
                        {project.summary}
                    </p>
                    <div className="flex space-x-4 mt-2">
                        <Link
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline"
                        >
                            GitHub
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    )
}
