let url = "http://numbersapi.com";
let favNum = 11;

//1
$.getJSON(`${url}/${favNum}?json`)
  .then(data =>  {console.log(data.text)
  return $.getJSON(`${url}/${favNum}?json`)
  })
  .catch(err => console.log("Error", err));

//2
let favNums = [5, 10, 15];
// $.getJSON(`${url}/${favNums[0]}?json`)
//   .then(n1=>{console.log(n1.text)
//     $('body').append(`<p>${n1.text}</p>`)
//   return $.getJSON(`${url}/${favNums[1]}?json`)
//   })
//   .then(n2=>{console.log(n2.text)
//     $('body').append(`<p>${n2.text}</p>`)
//     return $.getJSON(`${url}/${favNums[2]}?json`)
//   })
//   .then(n3=>{console.log(n3.text)
//     $('body').append(`<p>${n3.text}</p>`)
//     return $.getJSON(`${url}/${favNums[2]}?json`)
    
//   })
Promise.all(favNums.map(num => {
    return $.getJSON(`${url}/${num}?json`);
  }
)).then(facts => {
    facts.forEach(fact => $("body").append(`<p>${fact.text}</p>`))
})

//3
Promise.all(
    Array.from({ length: 4 }, () => {
      return $.getJSON(`${url}/${favNum}?json`);
    })
).then(facts => {
    facts.forEach(fact => $("body").append(`<p>${fact.text}</p>`))
})
.catch(err => console.log("Error", err));