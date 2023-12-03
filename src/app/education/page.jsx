export default function Education(){
    const educations = [
        {
            university: "Ecole 42 Türkiye",
            branch: "",
            startDate: "Ocak 2022",
            endDate: "Devam",
            description: "Ecole 42, Uluslarası yazılım okuludur. Akran öğrenmesi metodu esas alınarak her seviyede farklı görevler üstlenerek projeler geliştiriyoruz."
        },
        {
            university: "Beykent Üniversitesi",
            branch: "Bilgisayar Mühendisliği",
            startDate: "Ağustos 2019",
            endDate: "Devam",
            description: "Tüm derslerim bitti, sadece stajım kaldı"
        },
        {
            university: "Kaptan Ahmet Erdoğan Anadolu İmam Hatip Lisesi",
            branch: "",
            startDate: "Ekim 2014",
            endDate: "Haziran 2019",
            description: ""
        },
    ]

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
