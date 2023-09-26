import Image from "next/image";
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from "next/link";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const router = useRouter();
  return (
    <>
      <main className="text-white bg-black min-h-screen w-screen">
        <div className="flex flex-col md:flex-row m-auto">
          <div className="w-full md:w-1/2 xs:px-4 sp:px-8 px-8 pt-8 md:py-12 md:pl-20 md:fixed overflow-scroll">

            <h1 className=" text-3xl md:text-5xl lg:text-6xl mt-4 md:mt-0 text-letter font-bold tracking-tight leading-none">
              Peace Ben
            </h1>
            <h3 className="text-lg md:text-2xl font-bold my-4 text-letter">Software Developer - Frontend</h3>

            <p className="my-4 text-normal text-letter md:w-4/5">

              <span className="text-bold text-normal text-letter">I'm a Front End Engineer</span> with one year of experience and strong fundamentals in Front End technologies.
            </p>
<p className="my-4 text-normal text-letter md:w-4/5">
             I have built projects throughout my developer journey and i'm passionately curious for more knowledge, i look forward to contributing to open source to advance my knowledge and skills as well share knowledge. </p>

           

            {/* Desktop Screen - Links */}
            <div className="hidden my-8 mx-auto text-sm uppercase md:block">
              <ul>
                <Link href="/#work"
                  className="border-white"
                >
                  <li className="flex items-center gap-4 my-6 hover:animate-pulse cursor-pointer">
                    <span>01</span>
                    <hr className="w-[2rem] bg-gray-300" />
                    <span> Projects</span>
                  </li>
                </Link>
              </ul>
            </div>

            {/* Mobile Screen - Links */}
            <div className="mt-12 mx-auto text-sm uppercase md:hidden text-letter">
              <ul>
                <Link href="https://docs.google.com/document/d/1NVESyvdvCFbKspj72WGiJpYeYW5fTXDVBQmijVcBUoU/edit"
                  className="border-white"
                >
                  <li className="flex items-center gap-4 my-6 hover:animate-pulse cursor-pointer">
                    <span>01</span>
                    <hr className="w-[2rem] bg-gray-300" />
                    <span> Resume </span>
                  </li>
                </Link>

              </ul>
            </div>

            {/* Desktop Screen - Social Media */}
            <div className="mt-8 hidden md:block">
              <div className="flex gap-6 text-letter">


                <div className="flex mt-2 gap-6">
                  <a
                    href="https://github.com/PeaceOffiong"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faGithub} /> Github
                  </a>

                  <a
                    href="https://twitter.com/0fpee"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faTwitter} /> Twitter
                  </a>

                  <a
                    href="https://www.linkedin.com/in/peace-ben-67129a211/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faLinkedin} /> Linkedin
                  </a>
                </div>
              </div>
            </div>

            {/* Desktop Screen - Footer */}
            <footer>
              <div className="hidden md:block mt-20 text-letter">
                <p className="text-letter/50"> Design inspired by <Link className="text-letter/90" href="https://www.sarahdayan.dev/" >Sarah Dayan </Link> and
                  <Link href="https://kadet.dev/" className="text-letter/90"> Collins Enebeli</Link>.

                </p>
              </div>
            </footer>
          </div>

          {/* Desktop Screen only - Work */}
          <div className="w-full md:w-1/2 px-8 md:p-20 md:ml-auto hidden sm:block">{children}</div>

          {/* Mobile Screen - Social Media */}
          <div className="xs:my-8 sp:mt-16 mt-16 flex gap-6 md:hidden pl-8  text-letter">

            <div className="flex mt-2 gap-6">
              <a
                href="https://github.com/Umoren"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} /> Github
              </a>

              <a
                href="https://twitter.com/saameeey"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faTwitter} /> Twitter
              </a>

              <a
                href="https://linkedin.com/in/umoren"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} /> Linkedin
              </a>
            </div>
          </div>


        </div>
      </main>
    </>
  );
}