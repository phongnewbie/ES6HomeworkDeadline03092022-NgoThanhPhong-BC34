let selectLetter = document.querySelector('.heading').innerHTMl;
let spreadText = [...selectLetter];
let spanHTML = '';
spreadText.forEach( (item) =>{
    spanHTML +=`
    <span>${item}</span>
    `
});
document.querySelector('.heading').innerHTML = spanHTML
