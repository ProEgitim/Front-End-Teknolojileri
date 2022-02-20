import {useState, useEffect} from 'react'
import BlogList from './BlogList'

const ProductList = () => {
    const title = "ProductList Component"
    let okunmaSayisi = 500
    const durum = true // boolen değerleri view da yazdıramıyoruz.
    const blog2 = {title: "Başlık", content: "Deneme Yazısı"}
    const link = "https://www.google.com/"
    const styleObject = {
        color: 'white',
        backgroundColor: '#ff793f',
        border: '1px solid #ff793f',
        borderRadius: '8px',
        padding: '10px'
    }
    const handleClick = (isim, e) => {
        console.log('Merhaba ' + isim)
        console.log(e.target)
    }
    let [sayac, setSayac] = useState(0);
    const handleCounter = () => {
        sayac++;
        setSayac(sayac)
        console.log(sayac);
    }
    const [blog, setBlog] = useState(null)
    const handleConsole = (id) => {
        const newBlogs = blog.filter(b => b.id !== id);
        setBlog(newBlogs);
    }
    useEffect(() => {
        fetch('http://localhost:3000/posts')
            .then(res => res.json())
            .then(data => setBlog(data))
    }, [blog])
    return (
        <div>
            <h1>{title}</h1>
            <p>{okunmaSayisi}</p>
            <p>{durum}</p> {/* boolen değerleri view da yazdıramıyoruz. */}
            <h3>{blog2.title}</h3>
            <p>{blog2.content}</p>
            <a href={link} style={styleObject}>Google</a> <br/> <br/>
            <button style={styleObject} onClick={(e) => handleClick('React', e)}>Tıkla</button>
            <br/> <br/>
            <p>{sayac}</p>
            <button style={styleObject} onClick={handleCounter}>Sayaç</button>
            {blog && <BlogList blogs={blog} onConsole={handleConsole} title="Bütün Yazılar"/>}
            {blog && <BlogList blogs={blog.filter((blog) => blog.yazar === "Sercan")} onConsole={handleConsole}
                               title="Sercan'ın Yazıları"/>}
        </div>
    );
}

export default ProductList;

const Brand = () => {
    const title = "My Blog"

    const style = {
        backgroundColor: "#eeeeee",
        padding: "8px",
        textDecorationColor: "#2d2d2d"
    }
    return (
        <div>
            <a href={#} style={style}>{title}</a>
        </div>
    );
}

export default SearchBar;

const Brand = () => {
    const title = "My Blog"

    const style = {
        backgroundColor: "#eeeeee",
        padding: "8px",
        textDecorationColor: "#2d2d2d"
    }
    const searchStyle = {
        width: "50%"
    }

    return (


    )
}




const SearchBar = () => {
      const searchStyle = {
        width: "50%"
    }

    return (
        <div >
            <nav style={searchStyle}>
                <form className="form-inline justify-content-center">
                    <div className="input-group" style="flex-wrap: initial">
                        <input className="form-control mr-sm-2 searchbar" type="search" placeholder="Aradığınız ürün, kategori veya markayı yazınız" aria-label="Search"/>
                        <div className="input-group-append">
                            <button className="btn btn-outline-warning" type="button">
                                <i className="fas fa-search"></i>
                            </button>
                        </div>
                    </div>
                </form>
            </nav>
        </div>
    )
}







const ProfileMenu = () => {
    const account: "Hesabım"
    const fav: "Favorilerim"
    const basket: "Sepetim"

    const profileStyle = {
        backgroundColor: "#ffae00"
    }

    return (

        <nav className="navbar-items">
            <ul className="navbar-nav justify-content-end">
                <li className="nav-item">
                    <a className="nav-link" href="javascript:;">
                        <span><i className="fas fa-user"></i></span>
                        <span>{account}</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="javascript:;">
                        <span><i className="fas fa-user"></i></span>
                        <span>{fav}</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="javascript:;">
                        <span><i className="fas fa-shopping-cart"></i></span>
                        <span>{basket}</span>
                        <span style={profileStyle} className="badge badge-pill"></span>
                    </a>
                </li>
            </ul>
        </nav>
    )
}