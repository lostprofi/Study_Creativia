
window.onload = () =>{

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
        
        console.log(e.currentTarget.parentElement);
        
        
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
    
    
    //featured hovers//
    
    let btnFtrd = document.getElementsByName('btn-ftrd');
    btnFtrd = Array.from(btnFtrd);
    
    
    btnFtrd.forEach(el=>{
    
    let objFtrd = el.querySelector('object');
        
    let objFtrdDoc = objFtrd.contentDocument;
        
    let activeHexFtrd = objFtrdDoc.querySelector('.active-svg-ftrd');
    let passiveHexFtrd = objFtrdDoc.querySelector('.passive-svg-ftrd');
    
    const mouseOverFtrdCallback = (e) =>{
        
        passiveHexFtrd.style.display = "inline";
        activeHexFtrd.style.display = "none";
        
        e.currentTarget.removeEventListener('mouseover', mouseOverFtrdCallback);
        e.currentTarget.addEventListener('mouseout', mouseOutFtrdCallback);
        
    }
    
    const mouseOutFtrdCallback = (e) =>{
       
        passiveHexFtrd.style.display = "none";
        activeHexFtrd.style.display = "inline";
        
        e.currentTarget.removeEventListener('mouseout', mouseOutFtrdCallback);
        e.currentTarget.addEventListener('mouseover', mouseOverFtrdCallback);
        
    }
        
        el.addEventListener('mouseover', mouseOverFtrdCallback);
    })
    
    
    //reseller btn click//

    let resBtns = document.getElementsByClassName('btn_style_reseller');

    resBtns = Array.from(resBtns);
    console.log(resBtns);

    resBtns.forEach(el=>{
        
        let n = 0;
        
        el.addEventListener('click', e=>{
            
            n=n+1;
            
            if(n & 1){
                e.currentTarget.style.backgroundColor = "rgb(255,0,54)";
                e.currentTarget.parentElement.parentElement.parentElement.querySelector('.offer__price').style.backgroundColor = "rgb(255, 0, 54)";
                e.currentTarget.parentElement.parentElement.parentElement.querySelector('.offer__price').style.color = "rgb(255, 255, 255)";
                e.currentTarget.parentElement.parentElement.parentElement.querySelector('.offer__price').style.borderTop = "rgb(255, 0, 54)";
            }
            
            else {
                e.currentTarget.style.backgroundColor = "rgb(38,38,38)";
                e.currentTarget.parentElement.parentElement.parentElement.querySelector('.offer__price').style.backgroundColor = "rgb(242, 242, 242)";
                e.currentTarget.parentElement.parentElement.parentElement.querySelector('.offer__price').style.color = "rgb(0, 0, 0)";
                e.currentTarget.parentElement.parentElement.parentElement.querySelector('.offer__price').style.borderTop = "rgb(242, 242, 242)";
            }
            
        })
    
    })
    
    



// lazy load //

const template = document.querySelector('.portfolio-gallery__img-container');

const portfolioLazyBtn = document.getElementById('porfolio-lazy-btn');

let porfolioContent = '{"content": [ [{"src": "img/portfolio/money-flowers.png", "alt": "money-flowers"} , {"src": "img/portfolio/calculator.png", "alt": "calculator"}, {"src": "img/portfolio/converter.png", "alt": "converter"}, {"src": "img/portfolio/bank.png", "alt": "bank"}], [{"src": "img/portfolio/check.png", "alt": "check"} , {"src": "img/portfolio/dollars.png", "alt": "dollars"}, {"src": "img/portfolio/credit-cards.png", "alt": "credit-cards"}, {"src": "img/portfolio/pocketmoney.png", "alt": "pocketmoney"}]]}';

porfolioContent = JSON.parse(porfolioContent);

let i = 0;

const lazyLoad = (e) => {
    
  
    try {
        
        porfolioContent.content[i].forEach(el=>{
            
            const a = template.cloneNode(true);
            
            a.querySelector('.portfolio-gallery__img').setAttribute('src', `${el.src}`);
            a.querySelector('.portfolio-gallery__img').setAttribute('alt', `${el.alt}`);
            
            
            document.querySelector('.lazy-load').appendChild(a);
        }); 
        
       
        
     
       i=i+1; 
        
    }
    
    catch {
        
        i = 0;
        
        e.currentTarget.removeEventListener('click', lazyLoad);
    
        let endText = document.createElement('p');
    
        endText.setAttribute('class', 'text text_style_lazy-load-finish');
        document.querySelector('.lazy-load').appendChild(endText);
        endText.style.marginTop = "1%";
        endText.innerHTML = "Sorry, it's over";
        portfolioLazyBtn.innerHTML = 'TURN ASIDE';
    
        e.currentTarget.addEventListener('click', lazyReload);
    
}

    
}


const lazyReload = (e) =>{
    
    let lazyData = document.querySelector('.lazy-load');
    
    while(lazyData.firstChild){
        lazyData.removeChild(lazyData.firstChild);
    }
    
    e.currentTarget.innerHTML = "SHOW MORE";
    
    e.currentTarget.removeEventListener('click', lazyReload);
    
     e.currentTarget.addEventListener('click', lazyLoad);
    
}

portfolioLazyBtn.addEventListener('click',lazyLoad);

//loader//

let loaderOne = document.getElementById('loader-one');
let loaderTwo = document.getElementById('loader-two');
let loaderThree = document.getElementById('loader-three');
let loaderFour = document.getElementById('loader-four');
let loaderContainer = document.getElementById('loader-container');


const renderProgress = (elem, progressValue) => {
    
    let progress = Math.floor(progressValue);
    
    if(progress<25){
        let angle = -90 + (progress/100)*360;
        elem.querySelector('.loader__spinner-holder_animate_0-25').style.transform = 'rotate(' + angle + 'deg)';
    }
    
    else if (progress>=25 && progress <50){
        let angle = -90 + ((progress-25)/100)*360;
        
        elem.querySelector('.loader__spinner-holder_animate_0-25').style.transform = 'rotate(0deg)';
        
        elem.querySelector('.loader__spinner-holder_animate_25-50').style.transform = 'rotate(' + angle + 'deg)';
    }
    
    else if (progress>=50 && progress <75){
        let angle = -90 + ((progress-50)/100)*360;
        
        elem.querySelector('.loader__spinner-holder_animate_0-25').style.transform = 'rotate(0deg)';
        
        elem.querySelector('.loader__spinner-holder_animate_25-50').style.transform = 'rotate(0deg)';
        
        elem.querySelector('.loader__spinner-holder_animate_50-75').style.transform = 'rotate(' + angle + 'deg)';
    }
    
    else if (progress>=75 && progress <=100){
        let angle = -90 + ((progress-75)/100)*360;
        
        elem.querySelector('.loader__spinner-holder_animate_0-25').style.transform = 'rotate(0deg)';
        
        elem.querySelector('.loader__spinner-holder_animate_25-50').style.transform = 'rotate(0deg)';
        
        elem.querySelector('.loader__spinner-holder_animate_50-75').style.transform = 'rotate(0deg)';
        
        elem.querySelector('.loader__spinner-holder_animate_75-100').style.transform = 'rotate(' + angle + 'deg)';
    }
    
    let loadValue = elem.querySelector('.text_style_loader');
    
    let count = 0;
    
    let interval = setInterval(function(){
        count++;
        loadValue.innerHTML = `${count}`;
        let loaderSpan = document.createElement("span");
        loaderSpan.innerHTML = "%";
        loaderSpan.setAttribute('class', 'loader__span');
        loadValue.appendChild(loaderSpan);
        
        if(count===progress){
            clearInterval(interval);
        }
    }, 80);
    
}

const scrolling = el =>{

  const isPartiallyVisibleBottom = el =>{
    const elementBoundary = el.getBoundingClientRect();//возвращает объект, который является объединением прямоугольников для этого объекта

    const top = elementBoundary.top;//считытваем значение свойства top, объекта elementBoundary
    const bottom = elementBoundary.bottom;//считытваем значение свойства bottom, объекта elementBoundary
    const height = elementBoundary.height;//считытваем значение свойства height, объекта elementBoundary
    return (top + height) > window.innerHeight &&  bottom < (height + window.innerHeight) ? true:false;//условие, когда элемент не виден или не полностью виден свеху или снизу
  }

  const isPartiallyVisibleTop = el =>{
    const elementBoundary = el.getBoundingClientRect();//возвращает объект, который является объединением прямоугольников для этого объекта

    const top = elementBoundary.top;//считытваем значение свойства top, объекта elementBoundary
    const bottom = elementBoundary.bottom;//считытваем значение свойства bottom, объекта elementBoundary
    const height = elementBoundary.height;//считытваем значение свойства height, объекта elementBoundary
    return bottom < height && (top + height) > 0 ? true:false;
  }

  const isFullyVisible = el =>{
    const elementBoundary = el.getBoundingClientRect();

    const top = elementBoundary.top;
    const bottom = elementBoundary.bottom;
    const height = elementBoundary.height;

    return top >= 0 && bottom <= window.innerHeight ? true:false;
  }

  if (isFullyVisible(el) || isPartiallyVisibleTop(el) || isPartiallyVisibleBottom(el)){
      
      renderProgress(loaderOne, 90);
      renderProgress(loaderTwo, 80);
      renderProgress(loaderThree, 70);
      renderProgress(loaderFour, 90);
      
      window.removeEventListener('scroll', eventListenerScroll);
  }
    
 
    

  console.log('Partially visible top: ' + isPartiallyVisibleTop(el));
  console.log('Partially visible bottom: ' + isPartiallyVisibleBottom(el));
  console.log('Full visible: ' + isFullyVisible(el));
}

let isScrolling = false;

const throttleScroll = el_one => {
  if(isScrolling === false){
    window.requestAnimationFrame(function(){
        
      scrolling(el_one);

      isScrolling = false;
    })
    isScrolling = true;
  }
}

const eventListenerScroll = () =>{
    throttleScroll(loaderContainer);
    
}

window.addEventListener('scroll', eventListenerScroll);

//blog view more article data procedure///

let blogArticleData = {
    
    articleDataFull: [ "Lorem ipsum dolor sit amet, voluptate convallis porttitor amet ipsum dolor, sed nostra risus. Nullam pellentesque nam suspendisse lorem et nulla, etiam ac feugiat tristique a tortor neque, eget sapien duis suspendisse ligula aenean eget, tristique ac rutrum mi, et ea eget. Sed dis ut nibh non, ut neque sed, dui euismod eget maecenas mauris donec elit. Aliquam nec, quam cursus iaculis tempor mauris, tempore pede aliquet optio viverra dolor amet. Mauris in mattis egestas fusce, mus at aliquam, wisi mattis nibh, vivamus in hendrerit. Ac ut aliquam at, suspendisse lacinia fermentum, egestas sed, facilisi vitae leo elit odio varius, luctus imperdiet. Rutrum molestie ante et duis pellentesque tempus. Massa massa sodales quam ligula, vivamus orci nam vitae facilisis integer. Dictumst dui neque elit quam interdum libero, lorem ante, torquent ac. Vitae urna, quisque sagittis sed platea egestas, et porta arcu, duis posuere mollis orci sit risus, nam semper et pellentesque ante. Integer etiam sagittis et, suspendisse eu, amet curabitur. Lorem nulla nec urna tellus ligula. Tincidunt consectetuer nec ante, eros in felis eu ut nibh, nullam integer eu integer turpis imperdiet. Vel metus justo sit mi tristique et, condimentum ut adipiscing dolor consequat ante. Ante integer ipsam egestas metus. Justo potenti, lectus vitae sed at semper. Sapien vel. At nulla ac ut, tempor tristique wisi diam pulvinar. Ornare sed vel eius justo eros nunc, et in libero sed. Convallis vel donec placeat, vel bibendum in est arcu. Purus augue massa aptent ad wisi nisl, lorem mus posuere mauris rutrum magnis diam. Fermentum felis laoreet pretium luctus habitasse, rutrum quis integer urna justo sit, non natoque purus id orci, id sed volutpat orci quam ut, in metus ac. Orci venenatis in faucibus aliquam, nec nam urna massa, tincidunt at libero eu rutrum, libero lacus ac sed wisi amet lorem, nulla porttitor fames suspendisse eu pretium. Integer nam sed nulla scelerisque, ut mattis nunc, a urna, elit blandit ultrices qui. Auctor nascetur incididunt morbi at tincidunt risus. Ipsum sed.Vestibulum velit turpis auctor morbi odio, neque interdum eget, sagittis odio sit neque massa at eu, lorem ornare in. Dolor nam fermentum et, ut est metus, bibendum magna integer arcu, cras ornare provident a nunc condimentum vestibulum, nisi luctus id eget. Vestibulum lectus, volutpat cras orci commodo curabitur eget commodo, donec quisque felis velit, accumsan fames lacinia massa libero. Vel eros platea duis eget, volutpat per egestas dolor ut, ut aliquam porttitor arcu, quis volutpat mauris lectus et viverra. Donec magnis aliquam eget odio maecenas pretium, neque in dolor ut justo. Nulla cras mollis. Eros molestie, in dolor nibh, in eget ut luctus feugiat risus sollicitudin, convallis sed ultrices vel, sapien etiam numquam suspendisse id pede. Maecenas quisque, aliquam quis integer elit, lobortis ipsum faucibus vulputate, amet accumsan convallis elit. Donec eros et ultrices lacus accumsan dolor." , 
    "Lorem ipsum dolor sit amet, voluptate convallis porttitor amet ipsum dolor, sed nostra risus. Nullam pellentesque nam suspendisse lorem et nulla, etiam ac feugiat tristique a tortor neque, eget sapien duis suspendisse ligula aenean eget, tristique ac rutrum mi, et ea eget. Sed dis ut nibh non, ut neque sed, dui euismod eget maecenas mauris donec elit. Aliquam nec, quam cursus iaculis tempor mauris, tempore pede aliquet optio viverra dolor amet. Mauris in mattis egestas fusce, mus at aliquam, wisi mattis nibh, vivamus in hendrerit. Ac ut aliquam at, suspendisse lacinia fermentum, egestas sed, facilisi vitae leo elit odio varius, luctus imperdiet. Rutrum molestie ante et duis pellentesque tempus. Massa massa sodales quam ligula, vivamus orci nam vitae facilisis integer. Dictumst dui neque elit quam interdum libero, lorem ante, torquent ac. Vitae urna, quisque sagittis sed platea egestas, et porta arcu, duis posuere mollis orci sit risus, nam semper et pellentesque ante. Integer etiam sagittis et, suspendisse eu, amet curabitur. Lorem nulla nec urna tellus ligula. Tincidunt consectetuer nec ante, eros in felis eu ut nibh, nullam integer eu integer turpis imperdiet. Vel metus justo sit mi tristique et, condimentum ut adipiscing dolor consequat ante. Ante integer ipsam egestas metus. Justo potenti, lectus vitae sed at semper. Sapien vel. At nulla ac ut, tempor tristique wisi diam pulvinar. Ornare sed vel eius justo eros nunc, et in libero sed. Convallis vel donec placeat, vel bibendum in est arcu. Purus augue massa aptent ad wisi nisl, lorem mus posuere mauris rutrum magnis diam. Fermentum felis laoreet pretium luctus habitasse, rutrum quis integer urna justo sit, non natoque purus id orci, id sed volutpat orci quam ut, in metus ac. Orci venenatis in faucibus aliquam, nec nam urna massa, tincidunt at libero eu rutrum, libero lacus ac sed wisi amet lorem, nulla porttitor fames suspendisse eu pretium. Integer nam sed nulla scelerisque, ut mattis nunc, a urna, elit blandit ultrices qui. Auctor nascetur incididunt morbi at tincidunt risus. Ipsum sed.Vestibulum velit turpis auctor morbi odio, neque interdum eget, sagittis odio sit neque massa at eu, lorem ornare in. Dolor nam fermentum et, ut est metus, bibendum magna integer arcu, cras ornare provident a nunc condimentum vestibulum, nisi luctus id eget. Vestibulum lectus, volutpat cras orci commodo curabitur eget commodo, donec quisque felis velit, accumsan fames lacinia massa libero. Vel eros platea duis eget, volutpat per egestas dolor ut, ut aliquam porttitor arcu, quis volutpat mauris lectus et viverra. Donec magnis aliquam eget odio maecenas pretium, neque in dolor ut justo. Nulla cras mollis. Eros molestie, in dolor nibh, in eget ut luctus feugiat risus sollicitudin, convallis sed ultrices vel, sapien etiam numquam suspendisse id pede. Maecenas quisque, aliquam quis integer elit, lobortis ipsum faucibus vulputate, amet accumsan convallis elit. Donec eros et ultrices lacus accumsan dolor." 
    ],
    
    articleDataShort : ['Integer ornare libero nisi. Duis ac magna urna. Nulla facilisi. Phasellus at ante magna. Quisque nec porta nulla. Suspendisse nec orci vel elit aliquet blandit in non orci. Vivamus posuere dui eget lacinia rutrum. Cum sociis natoque penatibus ...', 'Integer ornare libero nisi. Duis ac magna urna. Nulla facilisi. Phasellus at ante magna. Quisque nec porta nulla. Suspendisse nec orci vel elit aliquet blandit in non orci. Vivamus posuere dui eget lacinia rutrum. Cum sociis natoque penatibus ...']
    
    
    
}



    
    let btnBlogViewMore = document.getElementsByClassName('btn_style_blog');

    btnBlogViewMore = Array.from(btnBlogViewMore);

        for (let q = 0; q<btnBlogViewMore.length; q++){
    
        let t = 0;

            btnBlogViewMore[q].addEventListener('click', e=>{
        
            t++;  
                
            if(t&1){
                e.currentTarget.previousElementSibling.innerHTML = `${blogArticleData.articleDataFull[i]}`; //нечетно
                e.currentTarget.style.backgroundColor = "rgb(255,0,54)";
                e.currentTarget.innerHTML = "COLLAPSE";
            }
            else {
                e.currentTarget.previousElementSibling.innerHTML = `${blogArticleData.articleDataShort[i]}`;
                e.currentTarget.style.backgroundColor = "rgb(38,38,38)";
                e.currentTarget.innerHTML = "VIEW MORE";
            }        
        })
    } 
   


//blog lazy load//

let blogContent = '{"content": [ [{"src": "img/our-blog/post1-img.png", "alt": "post1 img", "articleShortText": "Integer ornare libero nisi. Duis ac magna urna. Nulla facilisi. Phasellus at ante magna. Quisque nec porta nulla. Suspendisse nec orci vel elit aliquet blandit in non orci. Vivamus posuere dui eget lacinia rutrum. Cum sociis natoque penatibus ...", "articleFullText": "aaaaaaaaaaa"}, {"src": "img/our-blog/post2-img.png", "alt": "post2 img", "articleShortText": "Integer ornare libero nisi. Duis ac magna urna. Nulla facilisi. Phasellus at ante magna. Quisque nec porta nulla. Suspendisse nec orci vel elit aliquet blandit in non orci. Vivamus posuere dui eget lacinia rutrum. Cum sociis natoque penatibus ...", "articleFullText": "bbbbbbbbb"}]]}';


blogContent = JSON.parse(blogContent);

let k = 0;

const blogLazyLoad = e => {
    
    const blogTemplate = document.querySelector('.article__blog-template');
    
   
    
    try {
        
        blogContent.content[k].forEach(el=>{
            
            let tempVar = blogTemplate.cloneNode(true);
            
            tempVar.querySelector('.article__img').setAttribute('src', `${el.src}`);
            
            tempVar.querySelector('.article__img').setAttribute('alt', `${el.alt}`);
            
            tempVar.querySelector('.text_style_article').innerHTML = `${el.articleShortText}`;
            
            tempVar.querySelector('button').setAttribute('class', 'btn btn_style_blog-lazy');
            
            tempVar.style.display = "block";
            
            
            
            
            
            document.querySelector('.blog-lazy').appendChild(tempVar);
            
            
                        
            k=k+1;
            
            let j = 0;
            
            tempVar.querySelector('button').addEventListener('click', e=>{
        
            j++;  
                
            if(j&1){
                e.currentTarget.previousElementSibling.innerHTML = `${el.articleFullText}`; //нечетно
                e.currentTarget.style.backgroundColor = "rgb(255,0,54)";
                e.currentTarget.innerHTML = "COLLAPSE";
            }
            else {
                e.currentTarget.previousElementSibling.innerHTML = `${el.articleShortText}`;
                e.currentTarget.style.backgroundColor = "rgb(38,38,38)";
                e.currentTarget.innerHTML = "VIEW MORE";
            }        
        });
            
            
        })
        
        
       
        
    }
    
    catch {
        k = 0;
        
       
        blogAddBtn.style.transform = 'rotate(180deg)';
        e.currentTarget.removeEventListener('click', blogLazyLoad);
        
        
        let endText = document.createElement('p');
    
        endText.setAttribute('class', 'text text_style_lazy-load-finish col-10');
        document.querySelector('.blog-lazy').appendChild(endText);
       
        
       
        
    
        e.currentTarget.addEventListener('click', blogLazyReload);
    }
    
}

const blogLazyReload = (e) =>{
    
    
    
    let blogLazyData = document.querySelector('.blog-lazy');
    
    while(blogLazyData.firstChild){
        blogLazyData.removeChild(blogLazyData.firstChild);
    }
    
   blogAddBtn.style.transform = 'rotate(0deg)';
    
    e.currentTarget.removeEventListener('click', blogLazyReload);
    
     e.currentTarget.addEventListener('click', blogLazyLoad);
    
}






let blogAddBtn = document.querySelector('#blogAddBtn');

let blogAddBtnDoc = blogAddBtn.contentDocument;

blogAddBtnDoc.querySelector('#load_more');

blogAddBtnDoc.addEventListener('click', blogLazyLoad);


};
