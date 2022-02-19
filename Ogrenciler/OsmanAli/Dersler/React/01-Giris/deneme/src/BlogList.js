import React from "react";
const BlogList = (props) => {
    const blogs = props.blogs;
    return(
        <div>
            {blogs.map((b) => (
                <div key={b.id}>
                    <h2>{b.title}</h2>
                    <p>{b.content}</p>
                    <p>Yazar: {b.yazar}</p>
                    <button onClick={()=>props.handleConsole(b.id)}>Sil</button>
                    <hr />
                </div>
            ))}
        </div>
    )
}
export default BlogList;