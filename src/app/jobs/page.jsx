


export default function Jobs(){

    const jobs = [
         {
            jobTitle: "Intern",
            company: "Koç Sistem",
            description:"Burada iki ay boyunca profesyonel bir ekiple çalışma fırsatı edindim. Bu süreçte alışveriş api uygulaması geliştirirken proje yönetimimi Agile-Scrum prensibine göre yaptım",
            startDate:"Kasım-2022",
            endDate:"Ocak-2023",
            learnedTechs: ["PHP","Javascript","HTML","CSS","Wordpress",".NET", ".NET Core"]
        },
       {
            jobTitle: "Stajyer",
            company: "Türkiye Açık Kaynak Platformu",
            description:"Burada bir ay boyunca LabelStudio isimli yazılımı inceleme fırsatı elde ettik",
            startDate:"Temmuz-2022",
            endDate:"Ağustos-2022",
            learnedTechs: ["LabelStudio","DJango","Python"]
        },
        {
            jobTitle: "Gönüllü Staj",
            company: "Kando Bilişim",
            description:"Burada internet uygulamaları alanında ilk tecrübelerimi edindim. PHP, MySQL, Javascript, HTML, CSS gibi dilleri öğrendim",
            startDate:"Ağustos-2020",
            endDate:"Mayıs-2022",
            learnedTechs: [".NET Core"]
        },
    ]
    const volunteerWorks = [
        {
            title: "IEEE Beykent Üniversitesi Computer Society İdari Kurul Başkanı",
            description:"Pandemi döneminde gerçekleşen idari kurul başkanlığım boyunca yarışma ve seminerler düzenledik",
            startDate:"Ağustos 2021",
            endDate:"Temmuz 2022"
        },
        {
            title: "IEEE Beykent Üniversitesi Öğrenci Kolu Aktif Üye",
            description:"Aktif üyeliğim boyunca çeşitli komitelerdeki projelerde yer aldım",
            startDate:"Ağustos 2020",
            endDate:"Temmuz 2021"
        }
    ]
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
