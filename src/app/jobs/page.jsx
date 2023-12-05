import { jobs, volunteerWorks} from "@/data"

export default function Jobs(){

   return <div>
            <div className="mx-auto text-2xl font-bold lg:w-8/12">İş Tecrübelerim</div>
            <ul className="">
                {jobs.map((item,index) => (
                    <li key={index} className="card mx-auto w-8/12 border border-secondary transition hover:scale-105">
                        <div className="flex justify-between">
                            <span className="text-2xl font-bold">{item.jobTitle}</span>
                            <span>({item.startDate} {item.endDate})</span>
                        </div>
                        <p className="mt-2 text-xl font-semibold">{item.company}</p>
                        <p className="mt-2">{item.description}</p>
                        <div className="mt-2">
                            {item.learnedTechs.map((sit,six) => (
                                <span key={six} className="text-sm mr-2 p-1 bg-secondary rounded-sm">{sit}</span>
                            ))}
                        </div>
                    </li>
                ))}
            </ul>

            <div className="mx-auto text-2xl font-bold lg:w-8/12">Gönüllü Çalışmalar</div>
            <ul className="">
                {volunteerWorks.map((item,index) => (
                    <li key={index} className="card mx-auto w-8/12 border border-secondary transition hover:scale-105">
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
