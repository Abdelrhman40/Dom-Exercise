let imgs = Array.from( document.querySelectorAll(".item img"));
let boxcontainer = document.getElementById("lightBoxContainer");
let lightboxcontainer = document.getElementById("lightBoxItem");
let index=0;
let next = document.getElementById("next");
let close = document.getElementById("close");
let prev = document.getElementById("prev");

for (let i = 0; i < imgs.length; i++) {
    
    imgs[i].addEventListener('click',(e)=>{

        boxcontainer.style.display="flex";
        let imgSrc = e.target.getAttribute("src");
        lightboxcontainer.style.backgroundImage=`url(${imgSrc})`
        console.log(`url(${imgSrc})`);
        index = imgs.indexOf(e.target)
    })
    
}

close.addEventListener('click',closeContainer);
next.addEventListener('click',nextImg);
prev.addEventListener('click',prevImg)

function closeContainer() {
    boxcontainer.style.display="none"
}

function nextImg() {
    index++;
    if (index==imgs.length) {
        index=0;
    }
    let imgSrc = imgs[index].getAttribute("src");
    lightboxcontainer.style.backgroundImage = `url(${imgSrc})`
}
function prevImg() {
    index--;
    if (index < 0) {
        index = imgs.length - 1;
    }
    let imgSrc = imgs[index].getAttribute('src')
    lightboxcontainer.style.backgroundImage=`url(${imgSrc})`
}

document.addEventListener('keyup',(e)=>{
    //console.log(e);
    if (e.code =="ArrowRight") {
        nextImg();
    } else if (e.code =="ArrowLeft") {
        prevImg();
    } else if(e.code=="Escape") {
        closeContainer();
    }
})

document.addEventListener('click',(e)=>{
    if ((e.target.id)=="lightBoxContainer") {
        closeContainer();
    } 
})