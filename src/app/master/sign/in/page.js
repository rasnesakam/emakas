
export default function In(){

    return <div>

        <form className="flex flex-col" action={async (formData) => {
            "use server"
            console.log(formData)
            return await new Promise((resolve) => resolve("Success"))
        }}>
            <input type="text" name="username" className="m-2 p-2" placeholder="Username"/>
            <input type="password" name="password" className="m-2 p-2" placeholder="Password"/>
            <button type="submit" className="m-2">Sign In</button>
        </form>
    </div>
}