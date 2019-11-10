//global variables


let carouselBtns = document.getElementsByClassName('carousel-item__btn');
carouselBtns = Array.from(carouselBtns);
let carouselBtnsNewArray = [[carouselBtns[0], carouselBtns[1]] , [carouselBtns[2], carouselBtns[3]], [carouselBtns[4], carouselBtns[5]]];

//let dropdownBtnAbout = document.getElementsByClassName('dropdown__btn_about');
//dropdownBtnAbout = Array.from(dropdownBtnAbout);

//about dropdown buttons//

let whoIsCreativiaBtn = document.querySelector('#whoIsCreativiaBtn');
let experiencesBtn = document.querySelector('#experiencesBtn');
let learnMoreBtn = document.querySelector('#learnMoreBtn');

//

//let whoIsCreativiaToggleContent = document.querySelector('.dropdown__toggle_who-is-creativia');
let experiencesToggleContent = document.querySelector('.dropdown__toggle_experiences');
let learnMoreToggleContent = document.querySelector('.dropdown__toggle_learn-more');
 //about block variables///

    let aboutActiveHex = document.querySelector('.hex-group__object_about_active');
    let aboutLeftHex = document.querySelector('.hex-group__object_about_left');
    let aboutRightHex = document.querySelector('.hex-group__object_about_right');
    
    /*let retinaIcon = document.querySelector('.retina-icon');
    let responsiveIcon = document.querySelector('.responsive-icon');
    let flameIcon = document.querySelector('.flame-icon');*/





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

    





     
    const toggleDownCallbackfunc = e =>{
    
        let toggleIndicator = e.currentTarget.querySelector('#toggleIndicator');
        toggleIndicator.setAttribute('src', 'img/about/red-minus.svg');
    
        e.currentTarget.style.color = 'rgb(255, 0, 54)';
    
        e.currentTarget.removeEventListener('click',toggleDownCallbackfunc);
        e.currentTarget.addEventListener('click', toggleUpCallbackfunc);
        
        let toggleContent = e.currentTarget.nextElementSibling;
        
        toggleContent.style.height = `${toggleContent.dataset.height}`;
        
        
        const toggleUp = e =>{
    
            let toggleIndicator = e.querySelector('#toggleIndicator');
            toggleIndicator.setAttribute('src', 'img/about/black-plus.svg');
    
            e.style.color = 'rgb(0, 0, 0)';
    
            e.removeEventListener('click', toggleUpCallbackfunc);
            e.addEventListener('click', toggleDownCallbackfunc);
        
            let toggleContent = e.nextElementSibling;
        
            toggleContent.style.height = 0;
            
            
    
        };
        
        switch(e.currentTarget){
                
            case whoIsCreativiaBtn:
                toggleUp(experiencesBtn);
                toggleUp(learnMoreBtn);
                
                aboutActiveHex.setAttribute('class', 'hex-group__object_about_active');
                aboutRightHex.setAttribute('class', 'hex-group__object_about_right');
                aboutLeftHex.setAttribute('class', 'hex-group__object_about_left');
                
                
                break;
                
            case experiencesBtn:
                toggleUp(whoIsCreativiaBtn);
                toggleUp(learnMoreBtn);
                
                aboutActiveHex.setAttribute('class', 'hex-group__object_about_left');
                aboutRightHex.setAttribute('class', 'hex-group__object_about_active');
                aboutLeftHex.setAttribute('class', 'hex-group__object_about_right');
                
                break;
                
            case learnMoreBtn:
                toggleUp(experiencesBtn);
                toggleUp(whoIsCreativiaBtn);
                
                aboutActiveHex.setAttribute('class', 'hex-group__object_about_right');
                aboutRightHex.setAttribute('class', 'hex-group__object_about_left');
                aboutLeftHex.setAttribute('class', 'hex-group__object_about_active');
                
                break;   
                
        };
    
    };


    const toggleUpCallbackfunc = e =>{
    
        let toggleIndicator = e.currentTarget.querySelector('#toggleIndicator');
        toggleIndicator.setAttribute('src', 'img/about/black-plus.svg');
    
        e.currentTarget.style.color = 'rgb(0, 0, 0)';
    
        e.currentTarget.removeEventListener('click', toggleUpCallbackfunc);
        e.currentTarget.addEventListener('click', toggleDownCallbackfunc);
        
        let toggleContent = e.currentTarget.nextElementSibling;
        
        toggleContent.style.height = 0;
        
        aboutActiveHex.setAttribute('class', 'hex-group__object_about_active');
        aboutRightHex.setAttribute('class', 'hex-group__object_about_right');
        aboutLeftHex.setAttribute('class', 'hex-group__object_about_left');
    
    
    
    }; 
    
    
    whoIsCreativiaBtn.addEventListener('click', toggleDownCallbackfunc);
    experiencesBtn.addEventListener('click', toggleDownCallbackfunc);
    learnMoreBtn.addEventListener('click', toggleDownCallbackfunc);





window.onload = () =>{
    

  
    /*card icons wrappers*/
    
    let cardFlatIconWrapper = document.getElementById('flat-design-card-wrapper');
    let cardRetinaIconWrapper = document.getElementById('retina-card-wrapper');
    let cardResponsiveIconWrapper = document.getElementById('responsive-card-wrapper');
    let cardCleanIconWrapper = document.getElementById('clean-card-wrapper');
    
    /*functions*/
    
    let cardToggleDownCallbackFunc = (e)=>{
        
        let cardSvgIcon = e.currentTarget.parentElement.querySelector('object');
        
        let cardTitle = e.currentTarget.parentElement.querySelector('h1');
        
        let cardToggleContent = e.currentTarget.parentElement.nextElementSibling;
        
        
        let cardSvgIconDoc = cardSvgIcon.contentDocument;
        
        let iconUnactiveGroup = cardSvgIconDoc.querySelector('.unactive-group');
        
        let iconActiveGroup = cardSvgIconDoc.querySelector('.active-group');
        
        iconUnactiveGroup.style.display = "none";
        iconActiveGroup.style.display = "inline";
        cardTitle.style.color = 'rgb(255, 0, 54)';
       
        cardToggleContent.style.height = `${cardToggleContent.dataset.height}`;
        
        
        e.currentTarget.removeEventListener('click', cardToggleDownCallbackFunc);
        e.currentTarget.addEventListener('click', cardToggleUpCallbackfunc);
        
    };
    
     let cardToggleUpCallbackfunc = (e) =>{
            
        let cardSvgIcon = e.currentTarget.parentElement.querySelector('object');
        
        let cardTitle = e.currentTarget.parentElement.querySelector('h1');
        
        let cardToggleContent = e.currentTarget.parentElement.nextElementSibling;
    
        
        let cardSvgIconDoc = cardSvgIcon.contentDocument;
        
        let iconUnactiveGroup = cardSvgIconDoc.querySelector('.unactive-group');
        
        let iconActiveGroup = cardSvgIconDoc.querySelector('.active-group');
        
        iconUnactiveGroup.style.display = "inline";
        iconActiveGroup.style.display = "none";
        cardTitle.style.color = 'rgb(0, 0, 0)';
       
        cardToggleContent.style.height = 0;
        
        e.currentTarget.removeEventListener('click', cardToggleUpCallbackfunc);
        e.currentTarget.addEventListener('click', cardToggleDownCallbackFunc);
            
        };
    
    
    cardFlatIconWrapper.addEventListener('click', cardToggleDownCallbackFunc);
    cardRetinaIconWrapper.addEventListener('click', cardToggleDownCallbackFunc);
    cardResponsiveIconWrapper.addEventListener('click', cardToggleDownCallbackFunc);
    cardCleanIconWrapper.addEventListener('click', cardToggleDownCallbackFunc);
    
    
    
}
/*  

window.onload = () =>{
    
    let flatIcon = document.getElementById('flat-icon');
    let retinaIcon = document.getElementById('retina-icon');
    let responsiveIcon = document.getElementById('responsive-icon');
    let flameIcon = document.getElementById('flame-icon');
    
    let svgIconsMassive = [flatIcon, retinaIcon, responsiveIcon, flameIcon];
    
    
    svgIconsMassive.forEach(el=>{
        
        let iconDoc = el.contentDocument;
        
        let iconUnactiveGroup = iconDoc.querySelector('.unactive-group');
        
        let iconActiveGroup = iconDoc.querySelector('.active-group');
        
        let clickEl = el.previousElementSibling;
        
        let toggleContent = el.parentElement.nextElementSibling;
        
         let toggleDownFuncSvg = ()=>{
            iconUnactiveGroup.style.display = "none";
            iconActiveGroup.style.display = "inline";
            toggleContent.style.height = "80px";
        };
         
         let toggleUpFuncSvg = ()=>{
            iconActiveGroup.style.display = "none";
            iconUnactiveGroup.style.display = "inline";
            toggleContent.style.height = "0";
       
        };
        
         let toggleDownFunc = (e) =>{
            toggleDownFuncSvg();
            e.currentTarget.removeEventListener('click', toggleDownFunc);
            e.currentTarget.addEventListener('click', toggleUpFunc);
        }
         
         let toggleUpFunc = (e) =>{
            toggleUpFuncSvg();
            e.currentTarget.removeEventListener('click', toggleUpFunc);
            e.currentTarget.addEventListener('click', toggleDownFunc);
        }
        
        
        clickEl.addEventListener('click', toggleDownFunc);
    })
    
};*/