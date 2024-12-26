import { useState } from "react";
import postData from "../posts.json";
import Article from "../components/article";
import Search  from "../components/Search";

function Homepage() {
    const [posts, setPosts] = useState(postData)

    const onSearchChange = (value) => {
        const filteredPosts = postData.filter((item) => 
        item.title.includes(value)
        );
        setPosts(filteredPosts)
    };

    return ( 
        <>
            <h1>Simple Blog</h1>
            <Search onSearchChange= {onSearchChange}/>
            {posts.map((props, index) => (
                <Article { ...props} key={index} />
                ))};
        </>
    );
}

export default Homepage