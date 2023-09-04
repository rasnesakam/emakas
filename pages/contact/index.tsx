
export default function Contact(){

    return <>
    
        <form className="">
            <div className="grid grid-rows-3 grid-cols-2">
                <input className="col-span-1 row-span-1 p-2" name="email" type="mail" placeholder="E posta" />
                <input className="col-span-1 row-span-1 p-2" name="name-surname" type="text" placeholder="Ad Soyad" />
                <textarea className="col-span-2 row-span-2 p-2" name="content" placeholder="Mesaj"></textarea>
            </div>
        </form>
    
    </>
}