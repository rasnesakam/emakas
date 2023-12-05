import { projects } from "@/data"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import Link from "next/link"
export default function Projects(){
    return <div className="lg:w-8/12 mx-auto">
        <span className="text-2xl font-semibold">Projelerim</span>
        <ul>
            {projects.map((item,index) => (
                <li key={index} className="card border border-secondary transition hover:scale-105">
                <p className="text-xl font-semibold">{item.name}</p>
                <p className="text-md mt-2">{item.description}</p>
                <div className="mt-2 flex flex-row items-center">
                    {item.techStack.map((sItem,sIndex) => (
                        <span key={sIndex} className="bg-secondary text-sm rounded-sm p-2 mr-1">
                        {sItem}
                        </span>
                    ))}
                    <span className="w-6 h-6">
                        <Link href={item.github_link}>
                            <FontAwesomeIcon icon={faGithub} className="w-6 h-6"/>
                        </Link>
                    </span>
                </div>
                </li>
            ))}
        </ul>
        </div>
}
