

// function FizzBuzz(value1,value2){
//     let returnValue = '';
//     for (let i = 0; i <=100; i++) {
        
//         if( i%value1== 0 && i%value2== 0 ){
//             returnValue += 'FizzBuzz ';
//         }
//         else if( i%value1 == 0 ){
//             returnValue += 'Fizz ';
//         }
//         else if( i%value2 == 0){
//             returnValue += 'Buzz ';
//         }
//         else{
//             returnValue += i + ' '
//         }
        
//     }
//     return returnValue;
// }

// console.log(FizzBuzz(3,5));


function FizzBuzz(n){
    let returnValue = '';
     if (n%3 == 0 && n%5 == 0 ){
         returnValue= 'FizzBuzz';
     }  
     else if(n%3 == 0 ){
         returnValue = 'Fizz';
     }
     else if(n%5 ==0){
         returnValue = 'Buzz';
     }
     else{
         returnValue = n;
     }
    return returnValue;
}

console.log(FizzBuzz(50));

