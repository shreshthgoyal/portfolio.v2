import Link from 'next/link'
import { formatDate } from 'app/blog/utils'
import { getProjects } from 'app/projects/utils'

export function ProjectList() {
    const projects = getProjects()

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 my-3">
               My Projects
            </h2>
            <div className="flex flex-col space-y-4">
                {projects
                    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                    .map((project) => (
                        <Link
                            key={project.name}
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col space-y-1"
                        >
                            <div className="flex flex-col md:flex-row space-x-0 md:space-x-2">
                                <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
                                    {formatDate(project.date, false)}
                                </p>
                                <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                                    {project.name}
                                </p>
                            </div>
                        </Link>
                    ))}
            </div>
            <hr className="border-t border-gray-300 dark:border-gray-600 mt-4" />
        </div>
    )
}
