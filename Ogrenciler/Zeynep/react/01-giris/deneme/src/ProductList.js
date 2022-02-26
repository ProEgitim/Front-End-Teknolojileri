import {useState} from "react";

const ProductList = () => {
    const title = "ProductList Component"
    let okunmaSayisi = "300"
    const durum = true
    const block = {title: "Baslik", content: "Deneme Yazisi"}
    const link = "https://www.google.com/"
    const styleObject = {
        color: "white",
        backgroundColor: "red",
        padding: "10px",
        borderRadius: "5px",
        textDecoration: "none"
    }
    const handleClick = (e) => console.log("merhaba" + e)
    let [sayac, setSayac] = useState(0);
    const handleCounter = () => {
        sayac++;
        setSayac(sayac)
        console.log(sayac);
    }

    const [blog, setBlog] = useState([
        {
            title: "Blog Baslik 1",
            content: "Blog Content Deneme 1",
            yazar: "Zeynep",
            id: "1"
        },
        {
            title: "Blog Baslik 2",
            content: "Blog Content Deneme 2",
            yazar: "büşra",
            id: "2"
        },
        {
            title: "Blog Baslik 3",
            content: "Blog Content Deneme 3",
            yazar: "ünal",
            id: "3"
        },
        {
            title: "Blog Baslik 4",
            content: "Blog Content Deneme 4",
            yazar: "simge",
            id: "4"
        }
    ])


    return (
        <div>
            <h1>{title}</h1>
            <p>{okunmaSayisi}</p>
            <p>{durum}</p>
            <h3>{block.title}</h3>
            <h3>{block.content}</h3>
            <a href={link} target="_blank" style={{
                color: "white",
                backgroundColor: "orange",
                padding: "10px",
                borderRadius: "5px",
                textDecoration: "none"
            }}>Google</a>
            <button onClick={() => handleClick("React")}>Tıkla</button>
            <p>{sayac}</p>
            <button style={styleObject} onClick={handleCounter}>Sayaç</button>
            <div>
                {blog.map((b)=>(
                    <div key={b.id}>
                        <h2>{b.title}</h2>
                        <p>{b.content}</p>
                        <p>Yazar: {b.yazar}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default ProductList;

