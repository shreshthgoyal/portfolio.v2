import { ExperienceList } from '../components/experiencelist'

export const metadata = {
    title: 'Experience',
    description: 'Check out my work experience.',
}

export default function ExperiencePage() {
    return (
        <section>
            <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Experience</h1>
            <ExperienceList />
        </section>
    )
}
