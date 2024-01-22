"use client"
import db from "@/data"
import { faGithub, faInstagram, faLinkedinIn, faTwitter, faMedium } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { EnvelopeIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import {supportedLanguages,LanguageContext, useLanguageContext} from "@/components/LanguageContextAdapter";
import {getString, STRING_FORMATS} from "@/strings";

export default function Home() {
    const {language } = useLanguageContext();
    const projects = db[language.lang].projects;
    const links = db[language.lang].links;
    const about = db[language.lang].about;
    return (
        <div className="lg:w-9/12 lg:mx-auto">
            <div className="md:grid md:grid-cols-4  md:items-start md:gap-4 flex flex-col items-center">
                <div className="col-span-1 row-span-2 flex flex-col items-center">
                    <img src="https://avatars.githubusercontent.com/u/45129228?v=4" className="w-full rounded-full" />
                    <h1 className="text-3xl font-bold mt-6">Ensar Makas</h1>
                    <h2 className="text-xl font-semibold mt-2">{about.jobTitle}</h2>
                    <div className="flex flex-row justify-center items-center">
                        <a href={links.linkedIn} target="_blankr" className="w-8 h-8 bg-primary p-2 m-1 rounded-full flex justify-center items-center">
                            <FontAwesomeIcon icon={faLinkedinIn} className=" text-ground"/>
                        </a>
                        <a href={links.github} target="_blank" className="w-8 h-8 bg-primary p-2 m-1 rounded-full flex justify-center items-center">
                            <FontAwesomeIcon icon={faGithub} className=" text-ground"/>
                        </a>
                        <a href={links.twitter} target="_blank" className="w-8 h-8 bg-primary p-2 m-1 rounded-full flex justify-center items-center">
                            <FontAwesomeIcon icon={faTwitter} className=" text-ground"/>
                        </a>
                        <a href={links.instagram} target="_blank" className="w-8 h-8 bg-primary p-2 m-1 rounded-full flex justify-center items-center">
                            <FontAwesomeIcon icon={faInstagram} className=" text-ground"/>
                        </a>
                        <a href={links.medium} target="_blank" className="w-8 h-8 bg-primary p-2 m-1 rounded-full flex justify-center items-center">
                            <FontAwesomeIcon icon={faMedium} className=" text-ground"/>
                        </a>
                    </div>
                    <div className="mt-2 ">
                        <Link href={`mailto:${links.gmail}`} className="rounded-full p-1 bg-secondary text-primary flex flex-row justify-start items-center">
                            <EnvelopeIcon className="p-1 -ml-2 -my-2 h-8 w-8 bg-primary text-ground rounded-full"/>
                            <span className="ml-2 mr-2">{links.gmail}</span>
                        </Link>
                    </div>
                </div>
                <div className="col-span-3 row-span-1 my-4 text-lg">
                    <p>
                        {about.title}
                    </p>
                    <p>
                        {about.content}
                    </p>
                </div>
                <div className="col-span-3 row-span-1 items-center text-lg">
                    <ul className="flex flex-col md:grid md:grid-cols-3 gap-2 md:items-center">
                        {
                            projects.slice(0, 3).map((item, index) => (
                                <li key={index} className="card border h-full flex flex-col justify-between border-secondary">
                                    <div className="flex flex-row items-center gap-4">
                                        <h3 className="text-2xl font-semibold">{item.name}</h3>
                                        <Link href={item.github_link} className="w-6 h-6">
                                            <FontAwesomeIcon icon={faGithub} className="w-6 h-6"/>
                                        </Link>
                                    </div>
                                    <div className="flex flex-row flex-wrap gap-1">
                                        {item.techStack.map((sItem, sIndex) => (
                                            <span key={sIndex} className="text-sm p-1 bg-secondary rounded-sm">{sItem}</span>
                                        ))}
                                    </div>
                                </li>
                            ))
                        }
                        <li></li>
                        <li>
                            <Link href="/projects" className="card block w-full text-center border border-secondary">
                                <span className="text-lg font-semibold">{getString("see all",language, STRING_FORMATS.CAPITALIZED)}</span>
                            </Link>
                        </li>
                        <li></li>
                    </ul>
                </div>
            </div>
            <div className="mt-6">
            </div>
        </div>
    )
}
