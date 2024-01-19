import {about as aboutTr, jobs as jobsTr, links as linksTr, projects as projectsTr, educations as educationTr, volunteerWorks as volunteerWorksTr} from "./data_tr"
import {about as aboutEn, jobs as jobsEn, links as linksEn, projects as projectsEn, educations as educationEn, volunteerWorks as volunteerWorksEn} from "./data_en"

const dbTr = {
    about: aboutTr,
    jobs: jobsTr,
    links: linksTr,
    projects: projectsTr,
    education: educationTr,
    volunteerWorks: volunteerWorksTr
}
const dbEn = {
    about: aboutEn,
    jobs: jobsEn,
    links: linksEn,
    projects: projectsEn,
    education: educationEn,
    volunteerWorks: volunteerWorksEn
}

const db = {
    "ENGLISH": dbEn,
    "TURKISH": dbTr
}

export default db
