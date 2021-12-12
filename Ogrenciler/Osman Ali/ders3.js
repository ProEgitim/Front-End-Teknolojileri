function butonOlustur(){
    for (let i = 0; i<5; i++){
        const yeniButon = document.createElement("button");
        deger = document.getElementsByClassName("card-body")[1];
        yeniButon.id="add-todos";
        yeniButon.className="btn btn-danger";
        yeniButon.href="https://benosso.com";
        yeniButon.target="_blank";
        const text = document.createTextNode("Eklenen Buton");
        yeniButon.appendChild(text);
        deger.appendChild(yeniButon);
        console.log(deger);
    }
}
function textOlustur(){
    for (let i = 0; i<5; i++){
        const yeniInput = document.createElement("input");
        deger = document.getElementsByClassName("card-body")[0];
        yeniInput.id="add-todos";
        yeniInput.className="textTodo";
        const text = document.createTextNode("Eklenen Text Alanı");
        yeniInput.appendChild(text);
        deger.appendChild(yeniInput);
        console.log(deger);
    }
}



