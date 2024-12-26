import {useState} from "react";
import post from "../posts.json";
import Article from "../components/article";

function Homepage() {
    const [search, setSearch] = useState("");
    const changeSearch = (event) => {
        setSearch(event.target.value)
    }
    return ( 
        <>
            <h1>Simple Blog</h1>
            <div>Cari Artikel : <input onChange={changeSearch}></input>{" "}
            </div>
            <small>Ditemuka 0 data dengan pencarian kata {search}</small>
            {post.map(({title, tags, date}, index) => (
                <Article { ...{title, tags, date}} key={index} />
                ))}
        </>
    );
}

export default Homepage