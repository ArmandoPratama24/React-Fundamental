import { useState, useEffect } from "react";

function Blog() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((respon) => respon.json())
        .then((json) => setPosts(json))
    }, [])

        return (
            <>
            <h2>My Blog Posts</h2>
            {posts.map((item, index) => (
                    <div key={index}>- {item.title}</div>
                ))}
            </>
        )
}

export default Blog