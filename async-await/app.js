git pull origin maingit commit -am "Resolved merge conflicts"let url = "http://numbersapi.com";
let favNum = 11;

//1
async function num1() {
    let numData = await $.getJSON(`${url}/${favNum}?json`);
    console.log(numData);
    return numData;
}
num1();

//2
let favNums = [5, 10, 15];
async function num2() {
    let facts = await Promise.all(
        favNums.map(num => {
            return $.getJSON(`${url}/${num}?json`);
        })
    );
    facts.forEach(fact => $("body").append(`<p>${fact.text}</p>`));
}
num2();

//3
async function num3() {
    let facts = await Promise.all(
        Array.from({ length: 4 }, () => {
            return $.getJSON(`${url}/${favNum}?json`);
        })
    );
    facts.forEach(fact => $("body").append(`<p>${fact.text}</p>`));
}
num3();
