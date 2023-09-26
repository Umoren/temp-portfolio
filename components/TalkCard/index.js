import Link from "next/link";

export default function TalksCard() {
    const talksContent = [
        {
            date: "Nov 13, 2021",
            title: "Chatter",
            description: "Jetpack Compose is the new game changer for building Modern Android UI. I taught about the basics of Jetpack Compose and compared it to the traditional view system: XML. ",
            link: "https://speakerdeck.com/lamouresparus/devfest-uyo-jetpack-compose-game-changer-for-building-modern-android-ui"
        },
        {
            date: "Apr 30, 2022",
            title: "Progress Not Perfection",
            description: "During the WTM International Women's day celebration, I and Emem Jonah spoke about the theme in action. #ProgressNotPerfection",
        },
        {
            date: "25 March 2022",
            title: "Outreachy: Internships in Open Source",
            description: "During the Open Source Africa Festival 2022, Myself, Rhamot, and Olushola spoke about Internships in Open Source with our Highlight on Outreachy.",
            link: "https://www.youtube.com/watch?v=BhoAzrOQHGg"
        },
    ]
    return (
        <>
            <div className="sm:pt-32 sm:pb-40 -my-8 group md:py-0">
                {talksContent && talksContent.map((talk, i) => (
                    <article className="my-4 bg-gray-800 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" itemScope itemType="http://schema.org/CreativeWork" key={i}>
                        <Link href={talk.link ?? "/"} target="_blank" rel="noopener noreferrer" className="block p-40">
                            <p className="text-xs font-bold tracking-widest uppercase text-white" itemProp="language"> {talk?.date} </p>
                            <h3 className="my-3 text-lg font-semibold leading-tight text-white" itemProp="title"> {talk?.title} </h3>
                            <p className="my-3 text-opacity-70" itemProp="description"> {talk?.description}</p>
                        </Link>
                    </article>
                ))}


            </div>
        </>
    )
}