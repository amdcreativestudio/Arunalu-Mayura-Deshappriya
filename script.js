
/*==================================================
  SCRIPT.JS - PART 01
  PRELOADER & INITIAL SETUP
==================================================*/

"use strict";

/*==================================================
  DOM READY
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    initializePortfolio();

});

/*==================================================
  INITIALIZE
==================================================*/

function initializePortfolio(){

    initPreloader();

    preventImageDragging();

    preventRightClickOnImages();

    smoothAnchorSetup();

    initCustomCursor();

    initCursorHover();

    initCursorVisibility();

    initScrollEffects();

    initScrollDirection();

    initMobileMenu();

    createTypingCursor();

    animateTypingCursor();

    initTypingEffect();

    initScrollReveal();

    staggerProjects();

    staggerSkills();

    initActiveNavigation();

    initNavHover();

    initBackToTop();

    initBackToTopHover();

    initProjectFilter();

    initProjectHover();

    resetCounters();

    initCounters();

    initLightThemeVariables();

    initThemeToggle();

    initContactForm();

    initMagneticButtons();

    initHeroParallax();

    initFloatingCards();

    initTiltCards();

    initLazyImages();

    preloadHeroImage();

    initPassiveScroll();

    initVisibilityAPI();

    prefetchLinks();

}

/*==================================================
  PRELOADER
==================================================*/

function initPreloader(){

    const preloader = document.getElementById("preloader");

    if(!preloader) return;

    window.addEventListener("load", () => {

        setTimeout(() => {

            preloader.classList.add("hide");

            document.body.classList.add("loaded");

        },1200);

        setTimeout(() => {

            preloader.remove();

        },2200);

    });

}

/*==================================================
  SMOOTH ANCHORS
==================================================*/

function smoothAnchorSetup(){

    const links=document.querySelectorAll('a[href^="#"]');

    links.forEach(link=>{

        link.addEventListener("click",function(e){

            const target=document.querySelector(this.getAttribute("href"));

            if(!target) return;

            e.preventDefault();

            target.scrollIntoView({

                behavior:"smooth",

                block:"start"

            });

        });

    });

}

/*==================================================
  PREVENT IMAGE DRAGGING
==================================================*/

function preventImageDragging(){

    document.querySelectorAll("img").forEach(img=>{

        img.setAttribute("draggable","false");

    });

}

/*==================================================
  DISABLE RIGHT CLICK ON IMAGES
==================================================*/

function preventRightClickOnImages(){

    document.addEventListener("contextmenu",(event)=>{

        if(event.target.tagName==="IMG"){

            event.preventDefault();

        }

    });

}

console.clear();

console.log("%cAMD Portfolio","color:#3b82f6;font-size:26px;font-weight:bold;");
/*==================================================
  SCRIPT.JS - PART 02
  CUSTOM CURSOR
==================================================*/

"use strict";

/*==================================================
  CUSTOM CURSOR
==================================================*/



   

/*==================================================

==================================================*/

function initCursorVisibility(){

    const dot=document.querySelector(".cursor-dot");

    const outline=document.querySelector(".cursor-outline");

    if(!dot || !outline) return;

    document.addEventListener("mouseleave",()=>{

        dot.style.opacity="0";

        outline.style.opacity="0";

    });

    document.addEventListener("mouseenter",()=>{

        dot.style.opacity="1";

        outline.style.opacity="1";

    });

}

/*==================================================
  MOBILE CHECK
==================================================*/

function isTouchDevice(){

    return(

        "ontouchstart" in window ||

        navigator.maxTouchPoints>0 ||

        window.innerWidth<=992

    );

}

/*==================================================
  INITIALIZE
==================================================*/

if(!isTouchDevice()){

    initCustomCursor();

    initCursorHover();

    initCursorVisibility();

}

/*==================================================
  SCRIPT.JS - PART 03
  SCROLL PROGRESS + STICKY HEADER
==================================================*/

/*==================================================
  HEADER + PROGRESS
==================================================*/

function initScrollEffects(){

    const progressBar=document.getElementById("scroll-progress");

    const header=document.getElementById("header");

    function updateScroll(){

        /*------------------------------
          Scroll Progress
        ------------------------------*/

        const scrollTop=window.scrollY;

        const pageHeight=

            document.documentElement.scrollHeight-

            window.innerHeight;

        const progress=

            (scrollTop/pageHeight)*100;

        if(progressBar){

            progressBar.style.width=progress+"%";

        }

        /*------------------------------
          Sticky Header
        ------------------------------*/

        if(header){

            if(scrollTop>60){

                header.classList.add("scrolled");

            }else{

                header.classList.remove("scrolled");

            }

        }

    }

    updateScroll();

    window.addEventListener("scroll",updateScroll);

}

/*==================================================
  SCROLL DIRECTION
==================================================*/

function initScrollDirection(){

    const header=document.getElementById("header");

    if(!header) return;

    let lastScroll=0;

    window.addEventListener("scroll",()=>{

        const current=window.pageYOffset;

        if(current<=0){

            header.style.transform="translateY(0)";

            return;

        }

        if(current>lastScroll && current>120){

            header.style.transform="translateY(-100%)";

        }else{

            header.style.transform="translateY(0)";

        }

        lastScroll=current;

    });

}

/*==================================================
  INITIALIZE
==================================================*/

initScrollEffects();

initScrollDirection();


/*==================================================
  SCRIPT.JS - PART 04
  MOBILE MENU
==================================================*/

/*==================================================
  MOBILE MENU
==================================================*/

function initMobileMenu(){

    const menuBtn=document.getElementById("menu-btn");

    const closeBtn=document.getElementById("close-menu");

    const mobileMenu=document.getElementById("mobile-menu");

    const menuLinks=document.querySelectorAll(".mobile-menu a");

    if(!menuBtn || !mobileMenu) return;

    /*------------------------------------------
      OPEN MENU
    ------------------------------------------*/

    menuBtn.addEventListener("click",()=>{

        mobileMenu.classList.add("active");

        document.body.style.overflow="hidden";

    });

    /*------------------------------------------
      CLOSE BUTTON
    ------------------------------------------*/

    if(closeBtn){

        closeBtn.addEventListener("click",closeMenu);

    }

    /*------------------------------------------
      CLICK MENU LINK
    ------------------------------------------*/

    menuLinks.forEach(link=>{

        link.addEventListener("click",closeMenu);

    });

    /*------------------------------------------
      CLICK OUTSIDE
    ------------------------------------------*/

    document.addEventListener("click",(e)=>{

        if(

            mobileMenu.classList.contains("active") &&

            !mobileMenu.contains(e.target) &&

            !menuBtn.contains(e.target)

        ){

            closeMenu();

        }

    });

    /*------------------------------------------
      ESC KEY
    ------------------------------------------*/

    document.addEventListener("keydown",(e)=>{

        if(e.key==="Escape"){

            closeMenu();

        }

    });

    /*------------------------------------------
      WINDOW RESIZE
    ------------------------------------------*/

    window.addEventListener("resize",()=>{

        if(window.innerWidth>992){

            closeMenu();

        }

    });

    /*------------------------------------------
      CLOSE FUNCTION
    ------------------------------------------*/

    function closeMenu(){

        mobileMenu.classList.remove("active");

        document.body.style.overflow="";

    }

}

/*==================================================
  INITIALIZE
==================================================*/

initMobileMenu();
/*==================================================
  SCRIPT.JS - PART 06
  SCROLL REVEAL ANIMATIONS
==================================================*/

/*==================================================
  SCROLL REVEAL
==================================================*/

function initScrollReveal(){

    const elements=document.querySelectorAll(

        ".section-header," +

        ".about-image," +

        ".about-content," +

        ".about-card," +

        ".skill-card," +

        ".project-card," +

        ".timeline-item," +

        ".achievement-card," +

        ".certificate-card," +

        ".contact-card," +

        ".contact-form-wrapper," +

        ".footer-content"

    );

    if(!elements.length) return;

    /*------------------------------------------
      INITIAL STATE
    ------------------------------------------*/

    elements.forEach((element,index)=>{

        element.classList.add("fade-in");

        element.style.transitionDelay=

            `${index*0.08}s`;

    });

    /*------------------------------------------
      OBSERVER
    ------------------------------------------*/

    const observer=new IntersectionObserver(

        (entries)=>{

            entries.forEach(entry=>{

                if(entry.isIntersecting){

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);

                }

            });

        },

        {

            threshold:0.15,

            rootMargin:"0px 0px -60px 0px"

        }

    );

    /*------------------------------------------
      OBSERVE
    ------------------------------------------*/

    elements.forEach(element=>{

        observer.observe(element);

    });

}

/*==================================================
  STAGGER PROJECT CARDS
==================================================*/

function staggerProjects(){

    const cards=document.querySelectorAll(".project-card");

    cards.forEach((card,index)=>{

        card.style.transitionDelay=

            `${index*0.12}s`;

    });

}

/*==================================================
  STAGGER SKILLS
==================================================*/

function staggerSkills(){

    const cards=document.querySelectorAll(".skill-card");

    cards.forEach((card,index)=>{

        card.style.transitionDelay=

            `${index*0.06}s`;

    });

}

/*==================================================
  INITIALIZE
==================================================*/

initScrollReveal();

staggerProjects();

staggerSkills();
/*==================================================
  SCRIPT.JS - PART 07
  ACTIVE NAVIGATION
==================================================*/

/*==================================================
  ACTIVE NAV LINKS
==================================================*/

function initActiveNavigation(){

    const sections=document.querySelectorAll("section[id]");

    const navLinks=document.querySelectorAll(

        ".nav-link, .mobile-menu a"

    );

    if(!sections.length) return;

    function updateActiveLink(){

        const scrollY=window.scrollY;

        sections.forEach(section=>{

            const sectionTop=

                section.offsetTop-140;

            const sectionHeight=

                section.offsetHeight;

            const sectionId=

                section.getAttribute("id");

            if(

                scrollY>=sectionTop &&

                scrollY<sectionTop+sectionHeight

            ){

                navLinks.forEach(link=>{

                    link.classList.remove("active");

                });

                navLinks.forEach(link=>{

                    const href=

                        link.getAttribute("href");

                    if(href===`#${sectionId}`){

                        link.classList.add("active");

                    }

                });

            }

        });

    }

    updateActiveLink();

    window.addEventListener(

        "scroll",

        updateActiveLink

    );

}

/*==================================================
  NAVBAR LINK HOVER EFFECT
==================================================*/

function initNavHover(){

    const links=document.querySelectorAll(".nav-link");

    links.forEach(link=>{

        link.addEventListener("mouseenter",()=>{

            link.style.transform="translateY(-2px)";

        });

        link.addEventListener("mouseleave",()=>{

            link.style.transform="translateY(0)";

        });

    });

}

/*==================================================
  INITIALIZE
==================================================*/

initActiveNavigation();

initNavHover();
/*==================================================
  SCRIPT.JS - PART 08
  BACK TO TOP BUTTON
==================================================*/

/*==================================================
  BACK TO TOP
==================================================*/

function initBackToTop(){

    const button=document.getElementById("backToTop");

    if(!button) return;

    /*------------------------------------------
      SHOW / HIDE
    ------------------------------------------*/

    function toggleButton(){

        if(window.scrollY>500){

            button.classList.add("show");

        }else{

            button.classList.remove("show");

        }

    }

    /*------------------------------------------
      SCROLL TO TOP
    ------------------------------------------*/

    button.addEventListener("click",()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

    /*------------------------------------------
      INITIAL STATE
    ------------------------------------------*/

    toggleButton();

    window.addEventListener("scroll",toggleButton);

}

/*==================================================
  BUTTON HOVER EFFECT
==================================================*/

function initBackToTopHover(){

    const button=document.getElementById("backToTop");

    if(!button) return;

    button.addEventListener("mouseenter",()=>{

        button.style.transform="translateY(-8px) scale(1.08)";

    });

    button.addEventListener("mouseleave",()=>{

        button.style.transform="translateY(0) scale(1)";

    });

}

/*==================================================
  INITIALIZE
==================================================*/

initBackToTop();

initBackToTopHover();
/*==================================================
  SCRIPT.JS - PART 09
  PROJECT FILTER
==================================================*/

/*==================================================
  PROJECT FILTER
==================================================*/

function initProjectFilter(){

    const filterButtons=document.querySelectorAll(".filter-btn");

    const projectCards=document.querySelectorAll(".project-card");

    if(!filterButtons.length || !projectCards.length) return;

    filterButtons.forEach(button=>{

        button.addEventListener("click",()=>{

            /*----------------------------
              Active Button
            ----------------------------*/

            filterButtons.forEach(btn=>{

                btn.classList.remove("active");

            });

            button.classList.add("active");

            /*----------------------------
              Filter Value
            ----------------------------*/

            const filter=

                button.dataset.filter;

            /*----------------------------
              Filter Cards
            ----------------------------*/

            projectCards.forEach(card=>{

                const category=

                    card.dataset.category;

                if(

                    filter==="all" ||

                    filter===category

                ){

                    card.style.display="block";

                    setTimeout(()=>{

                        card.style.opacity="1";

                        card.style.transform="scale(1)";

                    },100);

                }

                else{

                    card.style.opacity="0";

                    card.style.transform="scale(.9)";

                    setTimeout(()=>{

                        card.style.display="none";

                    },250);

                }

            });

        });

    });

}

/*==================================================
  PROJECT CARD HOVER
==================================================*/

function initProjectHover(){

    const cards=document.querySelectorAll(".project-card");

    cards.forEach(card=>{

        card.addEventListener("mouseenter",()=>{

            card.style.transition=".35s ease";

        });

    });

}

/*==================================================
  INITIALIZE
==================================================*/

initProjectFilter();

initProjectHover();
/*==================================================
  SCRIPT.JS - PART 10
  ANIMATED COUNTERS
==================================================*/

/*==================================================
  COUNTER ANIMATION
==================================================*/

function initCounters(){

    const counters=document.querySelectorAll(".achievement-card h3");

    if(!counters.length) return;

    const observer=new IntersectionObserver(

        (entries)=>{

            entries.forEach(entry=>{

                if(entry.isIntersecting){

                    animateCounter(entry.target);

                    observer.unobserve(entry.target);

                }

            });

        },

        {

            threshold:.5

        }

    );

    counters.forEach(counter=>{

        observer.observe(counter);

    });

}

/*==================================================
  ANIMATE
==================================================*/

function animateCounter(counter){

    const originalText=

        counter.textContent.trim();

    const target=

        parseInt(originalText.replace(/\D/g,""));

    if(isNaN(target)) return;

    const suffix=

        originalText.replace(/[0-9]/g,"");

    let current=0;

    const increment=

        Math.max(1,Math.ceil(target/80));

    const timer=setInterval(()=>{

        current+=increment;

        if(current>=target){

            current=target;

            clearInterval(timer);

        }

        counter.textContent=

            current+suffix;

    },25);

}

/*==================================================
  RESET (OPTIONAL)
==================================================*/

function resetCounters(){

    const counters=document.querySelectorAll(

        ".achievement-card h3"

    );

    counters.forEach(counter=>{

        const value=

            counter.textContent;

        counter.dataset.target=value;

    });

}

/*==================================================
  INITIALIZE
==================================================*/

resetCounters();

initCounters();

/*==================================================
  SCRIPT.JS - PART 11
  THEME TOGGLE (LIGHT / DARK)
==================================================*/

/*==================================================
  THEME TOGGLE
==================================================*/

function initThemeToggle(){

    const themeButton=document.getElementById("theme-toggle");

    if(!themeButton) return;

    const icon=themeButton.querySelector("i");

    /*------------------------------------------
      SAVED THEME
    ------------------------------------------*/

    const savedTheme=

        localStorage.getItem("portfolio-theme");

    if(savedTheme==="light"){

        document.body.classList.add("light-theme");

        if(icon){

            icon.className="ri-sun-line";

        }

    }

    /*------------------------------------------
      CLICK
    ------------------------------------------*/

    themeButton.addEventListener("click",()=>{

        document.body.classList.toggle("light-theme");

        const light=

            document.body.classList.contains("light-theme");

        localStorage.setItem(

            "portfolio-theme",

            light ? "light" : "dark"

        );

        if(icon){

            icon.className=

                light

                ? "ri-sun-line"

                : "ri-moon-clear-line";

        }

    });

}

/*==================================================
  LIGHT THEME VARIABLES
==================================================*/

function initLightThemeVariables(){

    const style=document.createElement("style");

    style.innerHTML=`

    body.light-theme{

        --bg:#f8fafc;

        --bg-2:#eef2ff;

        --card:#ffffff;

        --card-2:#f1f5f9;

        --text:#0f172a;

        --text-light:#475569;

        background:var(--bg);

        color:var(--text);

        transition:.35s ease;

    }

    body.light-theme .header{

        background:rgba(255,255,255,.82);

    }

    body.light-theme .glass,

    body.light-theme .project-card,

    body.light-theme .skill-card,

    body.light-theme .about-card,

    body.light-theme .certificate-card,

    body.light-theme .contact-card,

    body.light-theme .timeline-content{

        background:rgba(255,255,255,.92);

        color:#0f172a;

    }

    `;

    document.head.appendChild(style);

}

/*==================================================
  INITIALIZE
==================================================*/

initLightThemeVariables();

initThemeToggle();

/*==================================================
  SCRIPT.JS - PART 12
  CONTACT FORM (EmailJS)
==================================================*/

/*==================================================
  CONTACT FORM
==================================================*/

function initContactForm(){

    const form=document.getElementById("contact-form");

    if(!form) return;

    form.addEventListener("submit",handleSubmit);

}

/*==================================================
  HANDLE SUBMIT
==================================================*/

async function handleSubmit(event){

    event.preventDefault();

    const form=event.target;

    const submitButton=

        form.querySelector("button");

    const originalText=

        submitButton.innerHTML;

    /*------------------------------------------
      LOADING
    ------------------------------------------*/

    submitButton.disabled=true;

    submitButton.innerHTML=

        `<i class="ri-loader-4-line"></i> Sending...`;

    try{

        /*--------------------------------------
          EMAILJS
        --------------------------------------*/

        await emailjs.sendForm(

            "YOUR_SERVICE_ID",

            "YOUR_TEMPLATE_ID",

            form,

            "YOUR_PUBLIC_KEY"

        );

        showMessage(

            "Message sent successfully!",

            "success"

        );

        form.reset();

    }

    catch(error){

        console.error(error);

        showMessage(

            "Something went wrong. Please try again.",

            "error"

        );

    }

    finally{

        submitButton.disabled=false;

        submitButton.innerHTML=

            originalText;

    }

}

/*==================================================
  MESSAGE
==================================================*/

function showMessage(message,type){

    const old=document.querySelector(".form-message");

    if(old){

        old.remove();

    }

    const box=document.createElement("div");

    box.className=

        `form-message ${type}`;

    box.textContent=message;

    document

        .querySelector(".contact-form")

        .prepend(box);

    setTimeout(()=>{

        box.remove();

    },4000);

}

/*==================================================
  INITIALIZE
==================================================*/

initContactForm();
/*==================================================
  SCRIPT.JS - PART 13
  ADVANCED MOUSE EFFECTS
==================================================*/

/*==================================================
  MAGNETIC BUTTONS
==================================================*/

function initMagneticButtons(){

    const buttons=document.querySelectorAll(

        ".btn, .resume-btn"

    );

    buttons.forEach(button=>{

        button.addEventListener("mousemove",(event)=>{

            const rect=

                button.getBoundingClientRect();

            const x=

                event.clientX-rect.left;

            const y=

                event.clientY-rect.top;

            const moveX=

                (x-rect.width/2)*0.18;

            const moveY=

                (y-rect.height/2)*0.18;

            button.style.transform=

                `translate(${moveX}px,${moveY}px)`;

        });

        button.addEventListener("mouseleave",()=>{

            button.style.transform=

                "translate(0,0)";

        });

    });

}

/*==================================================
  PARALLAX HERO IMAGE
==================================================*/

function initHeroParallax(){

    const image=

        document.querySelector(".image-wrapper");

    if(!image) return;

    window.addEventListener("mousemove",(event)=>{

        const x=

            (window.innerWidth/2-event.clientX)/35;

        const y=

            (window.innerHeight/2-event.clientY)/35;

        image.style.transform=

            `rotateY(${-x}deg)
             rotateX(${y}deg)`;

    });

}

/*==================================================
  FLOATING CARDS
==================================================*/

function initFloatingCards(){

    const cards=document.querySelectorAll(

        ".floating-card"

    );

    if(!cards.length) return;

    window.addEventListener("mousemove",(event)=>{

        const x=

            event.clientX/window.innerWidth;

        const y=

            event.clientY/window.innerHeight;

        cards.forEach((card,index)=>{

            const speed=(index+1)*10;

            card.style.transform=

                `translate(
                ${x*speed}px,
                ${y*speed}px
                )`;

        });

    });

}

/*==================================================
  TILT CARDS
==================================================*/

function initTiltCards(){

    const cards=document.querySelectorAll(

        ".project-card,.skill-card"

    );

    cards.forEach(card=>{

        card.addEventListener("mousemove",(event)=>{

            const rect=

                card.getBoundingClientRect();

            const x=

                event.clientX-rect.left;

            const y=

                event.clientY-rect.top;

            const rotateY=

                (x-rect.width/2)/18;

            const rotateX=

                (rect.height/2-y)/18;

            card.style.transform=

                `perspective(1000px)

                 rotateX(${rotateX}deg)

                 rotateY(${rotateY}deg)

                 translateY(-8px)`;

        });

        card.addEventListener("mouseleave",()=>{

            card.style.transform=

                "perspective(1000px) rotateX(0) rotateY(0)";

        });

    });

}

/*==================================================
  INITIALIZE
==================================================*/

initMagneticButtons();

initHeroParallax();

initFloatingCards();

initTiltCards();
/*==================================================
  SCRIPT.JS - PART 14
  PERFORMANCE OPTIMIZATION
==================================================*/

"use strict";

/*==================================================
  DEBOUNCE
==================================================*/

function debounce(callback, delay = 150){

    let timeout;

    return (...args)=>{

        clearTimeout(timeout);

        timeout = setTimeout(()=>{

            callback.apply(null,args);

        },delay);

    };

}

/*==================================================
  THROTTLE
==================================================*/

function throttle(callback, delay = 100){

    let waiting = false;

    return (...args)=>{

        if(waiting) return;

        callback.apply(null,args);

        waiting = true;

        setTimeout(()=>{

            waiting = false;

        },delay);

    };

}

/*==================================================
  LAZY LOAD IMAGES
==================================================*/

function initLazyImages(){

    const images = document.querySelectorAll("img");

    if(!("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(!entry.isIntersecting) return;

            const image = entry.target;

            image.loading = "lazy";

            observer.unobserve(image);

        });

    });

    images.forEach(image=>{

        observer.observe(image);

    });

}

/*==================================================
  PRELOAD IMPORTANT IMAGES
==================================================*/

function preloadHeroImage(){

    const heroImage = document.querySelector(".hero-image img");

    if(!heroImage) return;

    const preload = new Image();

    preload.src = heroImage.src;

}

/*==================================================
  PASSIVE EVENTS
==================================================*/

function initPassiveScroll(){

    window.addEventListener(

        "scroll",

        throttle(()=>{

            /* Reserved for future optimizations */

        }),

        { passive:true }

    );

}

/*==================================================
  PAGE VISIBILITY
==================================================*/

function initVisibilityAPI(){

    document.addEventListener("visibilitychange",()=>{

        if(document.hidden){

            console.log("Portfolio paused");

        }else{

            console.log("Portfolio resumed");

        }

    });

}

/*==================================================
  PREFETCH INTERNAL LINKS
==================================================*/

function prefetchLinks(){

    const links=document.querySelectorAll("a[href]");

    links.forEach(link=>{

        link.addEventListener("mouseenter",()=>{

            const href=link.getAttribute("href");

            if(

                !href ||

                href.startsWith("#") ||

                href.startsWith("http")

            ) return;

            const preload=document.createElement("link");

            preload.rel="prefetch";

            preload.href=href;

            document.head.appendChild(preload);

        });

    });

}

/*==================================================
  INITIALIZE
==================================================*/

initLazyImages();

preloadHeroImage();

initPassiveScroll();

initVisibilityAPI();

prefetchLinks();

/*==========================
AUTO HIDE NAVBAR
==========================*/

let lastScroll = 0;

const header = document.querySelector(".header");

window.addEventListener("scroll",()=>{

    const current = window.pageYOffset;

    if(current > lastScroll && current > 120){

        header.classList.add("hide");

    }else{

        header.classList.remove("hide");

    }

    lastScroll = current;

});
