import Link from "next/link";

export default function ProjectCard() {
    const githubProjects = [
        {
            language: "Typescript + Nextjs",
            title: "Chatter",
            description: "A demo chat application",
            repoLink: "https://github.com/PeaceOffiong/chatterr"
        },
        {
            language: "Typescript + Nextjs",
            title: "Movie Box",
            description: "A Movie streaming client application",
            repoLink: "https://github.com/PeaceOffiong/HNGX-StageTwo-MovieBox"
        },
        {
            language: "Vue + JavaScript",
            title: "Amazon Clone",
            description: "A clone for the Amazon Desktop view website with Vue",
            repoLink: "https://github.com/PeaceOffiong/Amazon-clone"
        }

    ]
    return (
        <>
            <div className="sm:pt-32 sm:pb-40 -my-8 group md:py-0" data-href="">
                {githubProjects && githubProjects.map((project, i) => (
                    <article className="my-4 bg-projects/70 md:transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" itemScope itemType="http://schema.org/CreativeWork" key={i}>
                        <Link href={project.repoLink} target="_blank" rel="noopener noreferrer">
                            <div className="block p-40">
                                <p className="text-xs font-bold tracking-widest uppercase text-letter" itemProp="language"> {project.language} </p>
                                <h3 className="my-3 text-lg font-semibold leading-tight text-letter" itemProp="title"> {project.title} </h3>
                                <p className="my-3 text-opacity-70" itemProp="description"> {project.description}</p>
                            </div>
                        </Link>
                    </article>
                ))}
            </div>
        </>
    )
}