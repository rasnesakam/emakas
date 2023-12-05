import { educations } from "@/data"

export default function Education(){
    return <div>
            <ul>
                {educations.map((item,index) => (
                    <li key={index} className="card border border-secondary lg:w-8/12 mx-auto transition hover:scale-105">
                        <div className="flex justify-between items-center">
                            <span className="text-xl font-semibold">{item.university}</span>
                            <span>({item.startDate} - {item.endDate})</span>
                        </div>
                        <p className="mt-2">{item.branch}</p>
                        <p className="mt-2">{item.description}</p>
                    </li>
                ))}
            </ul>
        </div>
}
