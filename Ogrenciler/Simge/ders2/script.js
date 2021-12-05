

// console.log(2==2);
// console.log("java==js");


// console.log (2=="2");
// console.log(2==="2");

// console.log(2!=2);


// // And Operatörü 

// console.log((2==2) && ("sercan"=="görkem"));



// // Or Operatörü 

// console.log((2==2)  ("sercan"=="görkem"));

// console.log((2==2) || ("sercan"=="görkem"));

// // <-------

// const error = true;
// if (error) {

//     console.log("hata olustu");
//      }

//   else {
//         console.log("hata olusmadı");
    
//          }
    
//         //  Const process<-------


//         const process = "3";

//         if (process==="1") {

//             console.log("işlem 1");
         
//         }

//         ---------


        // const process = 3;

        // switch (process) {
        //     case 1:
        //         console.log("işlem 1");
        //         break;
        //      case 2:
        //         console.log("işlem 2");
        //         break;
        //      case 3:
        //         console.log("işlem 3");
        //         break;
            
        
        //     default:
        //         console.log("gecersiz islem")
        //         break;
        // }




        // s = Math.floor(Math.random() * 100 + 1);

        // console.log(s)

        // if (s % 2 == 0) {
        
        //     console.log ("çifttir")
        //     }

        
        // else  {
        
        // console.log ("tektir")
        // }




        // FONKSIYONLAR

        // function user (name, age) {
        //     console.log('İsim: ${name} /nYaş: ${age}');
        // }

        //  user ("Varol",36);

        // //  --//
         

        //  function square (x) {
        //      return x*x;
        //  }
        //  let a = square(2);
        //  console.log(a);



        //  const square = function (x) {
        //      return x*x;
        //  }

        //  let a square (2);
        //  console.log(a);



        // const database = {
        //     host: "localhost",
        //     add: function (){
        //         console.log("eklendi");
        //     },
        //     get: function (){
        //         console.log("veri alındı");
        //     },
        //     update: function (id) {
        //         console.log (`ID: ${id} güncellendi`)
        //     }
        // }

         // // uygulama --//

    //   let a = Math.floor(Math.random() * 10 + 1);
    //   let b = Math.floor(Math.random() * 10 + 1);

    //      console.log(a,b);

    //     function math (a, b) {
    //         console.log(a,b);
    //         let c = (a+b)*2;
    //         let alan= (a*b);
    //         console.log(c,alan);
    //         console.log(`Çevre: ${c}`);
    //         console.log (`Alan: ${alan}`);

    //       }
    //       math(a,b);
          
        // // uygulama --//
         


       // // while döngüsü--// 

    //    let i=10;
    //    while(i>0) {
    //        console.log("Deneme")
    //        i--;
    //    }


    // let i=0;
    //    while(i<10) {
    //        console.log("Deneme")
    //     //    i+=2; 
    //      i=i+2
    //    }


    //    let i = 0;

    //    while (i<10) {
    //        if (i==3 || i==5){
    //            i++;
    //            continue
    //        }
    //        console.log(i);
    //        i++,
    //    }

    //    do while döngüsü

    // let i = 0;
    // do{
    //     console.log(langs[i]);
    //     i++;
    // }while (i<langs.length);


    // for döngüsü

    const langs = ["phyton", "css", "javascript"];

    // for(let i=0, i<langs.length; i++){
    //     console.log(langs[i])
    // }

    langs.forEach(function(lang,i){
        console.log(lang,i);
    });  
    // (böyle de yazabiliriz)


    // map döngüsü

    // const users = [
    //     {name:"varol" ,age:36},
    //     {name:"simge" ,age:78},
    //     {name:"sercan" ,age:31},

    // ];

    // const names =users.map(function(user){
    //     return user.name; // names=["varol","sercan", "simge"]
    // });

    // names.map(function(name){
    //     console.log(name);

    // })


  // window objesi



    // a=window.location.port;
    // console.log(a);


    // if (confirm("sayfa yenilensin mi?")){
    //     window.location.reload();

    // }

    // else{
    //     console.log("yenilenmedi");
    // }


    //---

    let pencereGenisligi = window.outerWidth;
    let pencereYüksekligi = window.outerHeight;
    
    console.log(pencereGenisligi,pencereYüksekligi);

    pencereGenisligi = window.innerWidth;
    pencereYüksekligi = window.innerHeight;
    
    console.log(pencereGenisligi,pencereYüksekligi);