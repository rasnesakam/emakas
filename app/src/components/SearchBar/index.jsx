import { useState } from "react";

const SearchBar = function(props){
    const [search, setSearch] = useState("");
    return (<>
        <form onSubmit={(e)=>{
            e.preventDefault();
            props.onSearch(search);
        }}>
            <div><input type="text" placeholder="Ara.." onChange={(element) => setSearch(element.target.value)}/></div>
            <div><button type="submit">Ara</button></div>
        </form>
    </>)
}

export { SearchBar }