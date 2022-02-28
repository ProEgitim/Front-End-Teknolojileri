function index({name,isLogged,students}){
    return(
     <div>
         <h1>
             {
                 isLogged? `Benim Adim ${name}`:"Giris Yapmadiniz"
             }
         </h1>
         {students.map((student,index)=>(
        <div key={index}>
          {student}
        </div>
      ))}
     </div>

    );
}
export default index;