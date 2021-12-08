const namme = "Hiranur Özkan Horuzoğlu";
const department = "Bilişim";
const salary = 4000;


//const a = "İsim: " + namme + "\n" + "Departman: " +  department + "\n" + "Maaş: " + salary;

//const a = `İsim:${namme}\nDepartman:${department}\nMaaş: ${salary}`;


//const html = "<ul> " +
//             "<li> " + namme      + "</li> " +
//             "<li> " + department + "</li> " +
//             "<li> " + salary     + "</li> " +
//             "</ul> ";


function a(){
    return "Merhaba ";
}


const html =`
        <ul>
            <li>${namme}</li>
            <li>${department}</li>
            <li>${salary}</li>
            <li>${10 / 4}</li>
            <li>${a()}</li>
        </ul>    
        `; 


document.body.innerHTML = html;



