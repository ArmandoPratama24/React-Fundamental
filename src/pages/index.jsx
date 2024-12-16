import post from "../posts.json";
import Article from "../components/article";

function Homepage() {
    return (
        <>
            <h1>Simple Blog</h1>
            {
                post.map((blog) => (
                    <Article title={blog.title} tags={blog.tags} date={blog.date} />
                ))}
        </>
    );
}

export default Homepage