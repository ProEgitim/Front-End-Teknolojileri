let value;

const now = new Date(); //su anki zamanı almamazı saglıyor

//console.log(now);

const date1 = new Date("02-20-1999 15:30:00");
const date2 = new Date("February 20 1999");
const date3 = new Date("02/20/1999");

value = date1;

value = date1.getMonth();
value = date1.getDate();
value = date1.getDay();
value = date1.getHours();
value = date1.getMinutes();
value = date1.getSeconds();
value = date1.getUTCMilliseconds();


//Setliyoruz yani değiştiriyoruz date tarihlerimizi

date1.setMonth(7);
date1.setDate(15);
date1.setFullYear(1991);
date1.setHours(0);
date1.setUTCMinutes(15);
date1.setSeconds(30);


value = date1;



console.log(value);
