const imgs=document.querySelectorAll('.header-slider ul img');
const prev_btn=document.querySelector('.control_prev');
const next_btn=document.querySelector('.control_next');

let n=3;
function changeSlide(){
    for(let i=0;i<imgs.length;i++){
        imgs[i].style.display='none';
    }
    imgs[n].style.display="block";
}
changeSlide()

prev_btn.addEventListener('click',(e)=>{
    n=(n-1+imgs.length)%imgs.length;
    changeSlide()
})

next_btn.addEventListener('click',(e)=>{
    n=(n+1)%imgs.length;
    changeSlide()
})

console.log(imgs)

const scrollcontainer=document.querySelectorAll('.products');
for (const item of scrollcontainer){
    item.addEventListener('wheel',(e)=>{
        e.preventDefault();
        item.scrollLeft+=e.deltaY        
    });
}

