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
const projects = [
    {
        name:"DepIn",
        description:"DepIn Java dili için tasarlanan bir bağımlılık enjeksiyon aracıdır.",
        github_link:"https://github.com/rasnesakam/DepIn",
        techStack: ["Java","Gradle","JUnit"]
    },
    {
        name:"Shop API",
        description:"Alışveriş siteleri için arka plan sistemlerini yürütecek olan ürün yönetim servisidir.",
        github_link:"https://github.com/rasnesakam/shop-api",
        techStack: ["C#",".NET7","Entity Framework","Fluent API","Docker"]
    },
    {
        name:"emakas-users",
        description:"Mikro servislerimde işleyeceğim kullanıcı ve yetkilendirme işlemleri için oluşturduğum bir servis. Burada kullanıcı bilgileri ve yetkilendirme işlemleri yer alır.",
        github_link:"https://github.com/rasnesakam/emakas-users",
        techStack: ["Java","Spring Boot","Docker"]
    },
    {
        name:"RESTful API Gateway",
        description:"Mikroservislerim için tek bir yerden erişim mekanizması sağlayacak bir geçit.",
        github_link:"https://github.com/rasnesakam/api-gateway",
        techStack: ["Typescript","Node Js","Express Js"]
    },
    {
        name:"Blog API",
        description:"Blog ve haber siteleri için arka plan işlemlerini yönetecek bir servis olarak tasarlandı.",
        github_link:"https://github.com/rasnesakam/blog-api",
        techStack: ["Typescript","Node Js","Express Js","Prisma Js"]
    },
    {
        name:"Simple Dashboard",
        description:"Yazdığım servisler için ortak kullanılabilecek bir yönetim paneli. Kullanıcılar sahip oldukları servislerdeki içeriklere buradan erişip yeni içerikler ekleyecekler.",
        github_link:"https://github.com/rasnesakam/simple-dashboard",
        techStack: ["Next Js"]
    },
    {
        name:"Batarya Dünyası",
        description:"Geliştirilen örnek bir E ticaret uygulaması. Ayrıca arkadaşım için geliştirilmeye devam ediliyor",
        github_link:"https://github.com/rasnesakam/bataryadunyasi",
        techStack: ["Next Js","Docker"]
    },
    {
        name:"Company Management System",
        description:"İlk iş tecrübelerim sırasında oluşturulan, Müşteri şirketler için görev yönetimini hedef alan MVC tabanlı bir sistem",
        github_link:"https://github.com/rasnesakam/CompanyManagementSystem",
        techStack: ["C#",".NET5"]
    },
];

const links = {
    linkedIn: "https://www.linkedin.com/in/ensar-makas-a16b69199/",
    github:"https://github.com/rasnesakam",
    twitter:"https://twitter.com/ensar_makas",
    gmail:"ensar.makas@gmail.com",
    instagram:"https://www.instagram.com/ensar.makas/",
    others:[]
};


export {jobs,volunteerWorks,educations,projects,links}
