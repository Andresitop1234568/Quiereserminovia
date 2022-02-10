const yesBtn = document.querySelector('#yesBtn');
var titulo=document.querySelector("#texto");
yesBtn.addEventListener('click',function () {
    
    
    titulo.textContent="Te amo chichona ❤";
    noBtn.style ="display:none"
    yesBtn.style ="display:none"
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})
