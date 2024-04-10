import {about as aboutEn} from "@/data/about/en";
import {about as aboutTr} from "@/data/about/tr";
import {jobs as jobsEn} from "@/data/jobs/en";
import {jobs as jobsTr} from "@/data/jobs/tr";
import {projects as projectsEn} from "@/data/projects/en";
import {projects as projectsTr} from "@/data/projects/tr";
import {educations as educationEn} from "@/data/educations/en"
import {educations as educationTr} from "@/data/educations/tr";
import {volunteerWorks as volunteerWorksEn} from "@/data/volunteerWorks/en";
import {volunteerWorks as volunteerWorksTr} from "@/data/volunteerWorks/tr";
import {links} from "@/data/links";

const dbTr = {
    about: aboutTr,
    jobs: jobsTr,
    links: links,
    projects: projectsTr,
    education: educationTr,
    volunteerWorks: volunteerWorksTr
}
const dbEn = {
    about: aboutEn,
    jobs: jobsEn,
    links: links,
    projects: projectsEn,
    education: educationEn,
    volunteerWorks: volunteerWorksEn
}

const db = {
    "ENGLISH": dbEn,
    "TURKISH": dbTr
}

export default db
