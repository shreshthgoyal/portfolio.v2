import { ProjectPosts } from 'app/components/projects'

export const metadata = {
  title: 'Projects',
  description: 'Look at my work.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-5 tracking-tighter">My Projects</h1>
      <ProjectPosts />
    </section>
  )
}
