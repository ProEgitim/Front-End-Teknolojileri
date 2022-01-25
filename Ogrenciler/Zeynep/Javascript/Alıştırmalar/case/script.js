
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function isValidDate(d) {
    return d instanceof Date && !isNaN(d);
}


// The answer must be 4 not 5 as test case result says. I think test result is not correct on server. The same test is exists in question and it shows also 4 not 5.
function solution(today, limit) {
    // write your code in JavaScript (Node.js 8.9.4)
    let todayObject = new Date(today);
    let results = [];

    const trArray = $('tr')
    for (let i=0; i< trArray.length; i++) {
        let trObject = trArray[i];
        let date1 = trObject.children[1];
        let date2 = trObject.children[2];
        let date1Object = new Date(date1.textContent);
        let date2Object = new Date(date2.textContent);
        let differenceMs;
        let differenceDay;
        if (isValidDate(date2Object)) {
            differenceMs = date2Object - date1Object;
            differenceDay = differenceMs / 1000 / 60 / 60 / 24;
        } else {
            differenceMs = todayObject - date1Object;
            differenceDay = differenceMs / 1000 / 60 / 60 / 24;
        }
        console.log(differenceDay)
        if (differenceDay > limit) {
            trObject.style.backgroundColor = 'red';
            results.push(i+1);
        } else {
            trObject.style.backgroundColor = 'inherit';
        }
    }
    return results.length
}


asd = solution('2016-11-30', 14)
// asd = solution('2015-11-30', 7)
console.log(asd)




