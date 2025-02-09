import { getExperiences } from '../experience/utils'

function getDurationInMonths(duration: string): number {
    const [startStr, endStr] = duration.split(' - ')
    const startDate = new Date(startStr)
    let endDate: Date
    if (endStr.trim().toLowerCase() === 'present') {
        endDate = new Date()
    } else {
        endDate = new Date(endStr)
    }
    const months =
        (endDate.getFullYear() - startDate.getFullYear()) * 12 +
        (endDate.getMonth() - startDate.getMonth())
    return months + 1
}

function formatDuration(duration: string): string {
    const months = getDurationInMonths(duration)
    if (months >= 12) {
        const years = Math.floor(months / 12)
        const remainingMonths = months % 12
        if (remainingMonths === 0) {
            return `${years} ${years === 1 ? 'year' : 'years'}`
        } else {
            return `${years} ${years === 1 ? 'year' : 'years'} ${remainingMonths} ${remainingMonths === 1 ? 'month' : 'months'}`
        }
    } else {
        return `${months} ${months === 1 ? 'month' : 'months'}`
    }
}

export function ExperienceList() {
    const experiences = getExperiences()

    experiences.sort((a, b) => {
        const aStart = new Date(a.duration.split(' - ')[0])
        const bStart = new Date(b.duration.split(' - ')[0])
        return bStart.getTime() - aStart.getTime()
    })

    return (
        <div className="space-y-6 my-3">
            {experiences.map((exp, index) => (
                <div key={index}>
                    <h3 className="text-l font-semibold text-neutral-900 dark:text-neutral-100">
                        {exp.position} at {exp.company}
                    </h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                        {exp.duration} | {exp.location} | {formatDuration(exp.duration)}
                    </p>
                    <p className="mt-2 text-neutral-800 dark:text-neutral-200">
                        {exp.description}
                    </p>
                </div>
            ))}
        </div>
    )
}
