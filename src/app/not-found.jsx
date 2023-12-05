export default function NotFound() {
  return <div>
            <h1 className="text-center text-2xl divide-y md:divide-x md:divide-y-0 my-2 flex flex-col md:flex-row justify-center items-center">
                <span className="font-bold p-2">404</span>
                <span className="mx-2 p-2">Aradığın Sayfa Bulunamadı</span>
            </h1>
            <img src="/images/404_image.jpg" alt="not-found" className="mx-auto sm:w-full md:w-6/12 lg:w-6/12"/>
        </div>
}
