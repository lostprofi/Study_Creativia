let carouselBtns = document.getElementsByClassName('carousel-btn');

let carouselBtnsNewArray = [[carouselBtns[0], carouselBtns[1]] , [carouselBtns[2], carouselBtns[3]], [carouselBtns[4], carouselBtns[5]]];



carouselBtnsNewArray.forEach((e)=>{
    
    e[0].addEventListener('mouseover', ()=>{
        e[1].style.backgroundColor = "rgb(255, 0, 54)";
        e[0].style.backgroundColor = "rgb(0, 0, 0)";
    });
    
    e[0].addEventListener('mouseout', ()=>{
        e[1].style.backgroundColor = "rgb(0, 0, 0)";
        e[0].style.backgroundColor = "rgb(255, 0, 54)";
    });
    
    e[1].addEventListener('mouseover', ()=>{
        e[0].style.backgroundColor = "rgb(0, 0, 0)";
        e[1].style.backgroundColor = "rgb(255, 0, 54)";
    });
    
    e[1].addEventListener('mouseout', ()=>{
        e[0].style.backgroundColor = "rgb(255, 0, 54)";
        e[1].style.backgroundColor = "rgb(0, 0, 0)";
});
    
});



