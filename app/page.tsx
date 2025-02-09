import { BlogPosts } from 'app/components/posts'
import {ProjectList} from "./components/projectlist";
import {ExperienceList} from "./components/experiencelist";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-bold tracking-tighter">
        Shreshth's Corner of the Web
      </h1>
      <p className="mb-4">
        {`I'm a Full-stack developer and LLM enthusiast.  Proficient in C/C++, JavaScript (Next.js, React, Node.js), and databases (PostgreSQL, MongoDB). Experience building RAG agents and integrating systems.  Dedicated to clean code and high test coverage with a passion for learning and teaching. Active in the tech community (dev.to, Postman Student Expert).  Driven by solving complex problems.`}
      </p>
      <div className="my-8">
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
          My Experience
          </h2>
        <ExperienceList />
        <hr className="border-t border-gray-300 dark:border-gray-600 mt-8" />
          <ProjectList />
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 my-3">
              My Blogs
          </h2>
        <BlogPosts />
          <hr className="border-t border-gray-300 dark:border-gray-600 mt-4" />
      </div>
    </section>
  )
}
