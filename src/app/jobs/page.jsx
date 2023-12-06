import { jobs, volunteerWorks} from "@/data"

export const metadata = {
    title: "Ensar Makas - İş Tecrübelerim",
    description: "İş Tecrübelerim"
}
export default function Jobs(){

   return <div className="sm:w-10/12 md:w-9/12 lg:w-8/12 mx-auto">
            <div className="text-2xl font-semibold">İş Tecrübelerim</div>
            <ul className="">
                {jobs.map((item,index) => (
                    <li key={index} className="card mx-auto border border-secondary transition hover:scale-105">
                        <div className="flex justify-between">
                            <span className="text-2xl font-bold">{item.jobTitle}</span>
                            <span>({item.startDate} {item.endDate})</span>
                        </div>
                        <p className="mt-2 text-xl font-semibold">{item.company}</p>
                        <p className="mt-2">{item.description}</p>
                        <div className="mt-2 flex flex-row flex-wrap items-center gap-2">
                            {item.learnedTechs.map((sit,six) => (
                                <span key={six} className="text-sm p-1 bg-secondary rounded-sm">{sit}</span>
                            ))}
                        </div>
                    </li>
                ))}
            </ul>

            <div className="text-2xl font-semibold">Gönüllü Çalışmalar</div>
            <ul className="">
                {volunteerWorks.map((item,index) => (
                    <li key={index} className="card mx-auto border border-secondary transition hover:scale-105">
                        <div className="flex justify-between">
                            <span className="text-2xl font-bold">{item.title}</span>
                            <span>({item.startDate} {item.endDate})</span>
                        </div>
                        <p className="mt-2">{item.description}</p>
                    </li>
                ))}
            </ul>



        </div>
}
