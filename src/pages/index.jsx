import { useState, useEffect } from "react";
import postData from "../posts.json";
import Article from "../components/article";
import Search  from "../components/Search";

function Homepage() {
    const [posts, setPosts] = useState(postData)
    const [totalPosts, setTotalPosts] = useState(0);
    const [externalPosts, setExternalPosts] = useState([]);

    const onSearchChange = (value) => {
        const filteredPosts = postData.filter((item) => 
        item.title.includes(value)
        );
        setPosts(filteredPosts)
        setTotalPosts(filteredPosts.length);
    };

    useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((json) => setExternalPosts(json));
    }, []);

    useEffect(() => {
        console.log("ada Post Baru")
    }, [posts])

    return ( 
        <>
            <h1>Simple Blog</h1>
            <Search onSearchChange= {onSearchChange} totalPosts={totalPosts}/>
            {posts.map((props, index) => (
                <Article { ...props} key={index} />
                ))};
                <hr />
                <h2>External Post</h2>
                {externalPosts.map((item, index) => (
                    <div key={index}>- {item.title}</div>
                ))}
        </>
    );
}

export default Homepage