import React from "react";

const Nav = () => {
  return (
    <div style={{ backgroundColor: "gray", color: "white" }}>
      <ul>
        <li>
          <img
            src="https://www.efeergun.com/wp-content/uploads/2020/02/blog-yazisi-nasil-yazilir.png"
            alt=""
          ></img>
        </li>
        <li>
          <a>ANASAYFA</a>
        </li>
        <li>
          <a>HAKKIMDA</a>
        </li>
        <li>
          <a>YAZILAR</a>
        </li>
        <li>
          <a>İLETİŞİM</a>
        </li>
      </ul>
    </div>
  );
};
export default Nav;
