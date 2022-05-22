/* start sitting box */
const ClickSittingBox = document.querySelector(".iconestyle");
ClickSittingBox.addEventListener("click" , () => {

    document.querySelector(".sitting-box").classList.toggle("openMenu");

    document.querySelector(".stylejs").classList.toggle("fa-spin");

});

/* end sitting box */

/* start darkmode */
let LocalModsDark = localStorage.getItem("Options-Local-Mods");
if(LocalModsDark !== null){
    console.log("Not Empty For Mods Dark-Mode | Light-Modes");

    document.querySelectorAll(".option-darkmode span").forEach(DisDis => {
        DisDis.classList.remove("active");
    });

    if(LocalModsDark === "unabled"){

        document.querySelector(".option-darkmode .yes").classList.add("active");
    
    }else {
    
        document.querySelector(".option-darkmode .no").classList.add("active");
    
    }
}
const EnabledDarkMode = () =>  {
    // 1
    document.querySelector("body").classList.add("BodyDarkMode");
    //2
    localStorage.setItem("Options-Local-Mods" , "enabled");
}
const DisabledDarkMode = () =>  {
    // 1
    document.querySelector("body").classList.remove("BodyDarkMode");
    //2
    localStorage.setItem("Options-Local-Mods" , null);
}

if(LocalModsDark  === "enabled"){
    EnabledDarkMode();
    document.querySelector(".option-darkmode .yes").classList.add("active");
    document.querySelector(".option-darkmode .no").classList.remove("active");
}else {
    DisabledDarkMode();
    document.querySelector(".option-darkmode .yes").classList.remove("active");
    document.querySelector(".option-darkmode .no").classList.add("active");
}


const AllSpansDark = document.querySelectorAll(".option-darkmode span");
AllSpansDark.forEach(element => {
    element.addEventListener("click" , (e) => {
        localStorage.getItem("Options-Local-Mods");
        e.target.parentElement.querySelectorAll(".active").forEach( DisD => {
            DisD.classList.remove("active");
        });
        e.target.classList.add("active");
        if(e.target.dataset.darklight === "yes" ){
            if(LocalBackGround !== "enabled"){
                EnabledDarkMode();
            }
        }else {
            if(LocalBackGround === null){
                DisabledDarkMode();
            }
        }
    });
});
/* end darkmode */

/* start Color */
function OptinsColor(){
    let ColorLocalStorge = localStorage.getItem("Options-Color");
    if(ColorLocalStorge !== null){
        console.log("Not Empty Color");
        document.documentElement.style.setProperty("--main-color", localStorage.getItem("Options-Color"));
        document.querySelectorAll(".options-colors span").forEach(Element => {
            Element.classList.remove("active");
            if(Element.dataset.colors === localStorage.getItem("Options-Color")){
                Element.classList.add("active");
            }
        });
    }
    const YesNoColor = document.querySelectorAll(".options-colors span");
    YesNoColor.forEach(Span => {
        Span.addEventListener("click" , (e) => {
    
            document.documentElement.style.setProperty("--main-color" , e.target.dataset.colors);
            
            localStorage.setItem("Options-Color" , e.target.dataset.colors);
    
            e.target.parentElement.querySelectorAll(".active").forEach(DisActiveColor => {
                DisActiveColor.classList.remove("active");
            });
            e.target.classList.add("active");
        });
    });
    }
    OptinsColor();
/* end Color */
    
let BackOptionstf = true;
let LocalBackGround = localStorage.getItem("Option-BackgroundImage");
if(LocalBackGround !== null){
    console.log("Not Empty BackGround");
    if(LocalBackGround === "true"){
        BackOptionstf = true;
    }else {
        BackOptionstf = false;    
    }
    document.querySelectorAll(".option-yesnoback span").forEach(Dis=>{
        Dis.classList.remove("active");
    });
    if(LocalBackGround === "true" ){
        document.querySelector(".option-yesnoback .yes").classList.add("active");
    }else{
        document.querySelector(".option-yesnoback .no").classList.add("active");
    }

}
let SetIntrevalBackRand;
let landing = document.querySelector(".landing");
function PlayBackGround(){
    let ImageAraay = ["../image/desk-mac-apple-keyboard-desktop-lamp-work-space-brand-design-books-multimedia-screenshot-computers-desktop-computer-personal-computer-computer-monitor-personal-computer-hardware-display-device-royalty-free-imag.jpg","../image/istockphoto-180986465-170667a.jpg","../image/R (1).jpg","../image/R.jpg","../image/team_work.jpg"];
    if(BackOptionstf === true){
        SetIntrevalBackRand = setInterval(() =>{
            let RandMath = Math.floor(Math.random() * ImageAraay.length);
            landing.style.backgroundImage = "url('image/"+ImageAraay[RandMath]+" ')";
        },3000);
    }
}
if(LocalBackGround !== null){
    PlayBackGround();
    document.querySelector(".option-yesnoback .no").classList.remove("active");
    document.querySelector(".option-yesnoback .yes").classList.add("active");
}else {
    document.querySelector(".option-yesnoback .no").classList.add("active");
    document.querySelector(".option-yesnoback .yes").classList.remove("active");
}
const AllspanBack = document.querySelectorAll(".option-yesnoback span") ;
AllspanBack.forEach(spanBack => {
    spanBack.addEventListener("click" , (e) => {
        e.target.parentElement.querySelectorAll(".active").forEach(Active => {
            Active.classList.remove("active");
        });
        e.target.classList.add("active");
        if(e.target.dataset.backgroundoptionrand === "yes"){
            BackOptionstf = true;
            PlayBackGround();
            localStorage.setItem("Option-BackgroundImage" , true);
        }else{
            BackOptionstf = false;
            clearTimeout(SetIntrevalBackRand);
            localStorage.setItem("Option-BackgroundImage" , false);
        }
    });
});
/* hide bullets */
function OptionsHideBullets(){
let HideBulletLocal = localStorage.getItem("Show-Hide-Bullet");
let BulletMenu = document.querySelector(".nav-bullets");
const YesNoBullet = document.querySelectorAll(".option-bullet span");
if(HideBulletLocal !== null){
    console.log("Not Empty Bullet");
    document.querySelectorAll(".option-bullet span").forEach(DisActive => {
        DisActive.classList.remove("active");
    });
    if(HideBulletLocal === "HideBullet"){
        BulletMenu.style.display = "none";
        document.querySelector(".option-bullet .no").classList.add("active");
    }else {
        BulletMenu.style.display = "block";
        document.querySelector(".option-bullet .yes").classList.add("active");
    }
}
YesNoBullet.forEach(Span => {
    Span.addEventListener("click" , (e) => {

        e.target.parentElement.querySelectorAll(".active").forEach(DisActiveColor => {
            DisActiveColor.classList.remove("active");
        });
        e.target.classList.add("active");
        if(e.target.dataset.hideshowbullet === "yes"){
            BulletMenu.style.display = "block";
            localStorage.setItem("Show-Hide-Bullet" , "ShowBullets");
        }else {
            BulletMenu.style.display = "none";
            localStorage.setItem("Show-Hide-Bullet" , "HideBullet");
        }
    });
});
}
OptionsHideBullets();
/* hide bullets */


/* start image popup */
const AllImage = document.querySelectorAll(".our-image img");
AllImage.forEach(img => {
    img.addEventListener("click", (e) => {
        // creat OverLay All on bode
        let CreatOvarLay = document.createElement("div");
        // add class Name 
        CreatOvarLay.className = "Ovar-Lay";
        // Append To Body
        document.body.appendChild(CreatOvarLay);

        //  Creat Popup Box
        let CreatPopupBox = document.createElement("div");
        // add Class Name
        CreatPopupBox.className = "popup-box";

        //Creat popup Image
        if(img.alt !== null){

            // creat heading 
            let imageheading = document.createElement("h3");
            // creat text for heading 
            let imagetext = document.createTextNode(img.alt);
            // append the text heading
            imageheading.appendChild(imagetext);
            // append the heading to popup box

            CreatPopupBox.appendChild(imageheading);
        }
        let ImagePopup = document.createElement("img");

        // set image 
        ImagePopup.src = img.src;

        // add image t popup box
        CreatPopupBox.appendChild(ImagePopup);
        // 
        document.body.appendChild(CreatPopupBox);
        


        // creat close span 
        let creatclose = document.createElement("span");
        creatclose.className = "close-ovar";
        // let creat text
        let creattextclose = document.createTextNode("x") 
        creatclose.appendChild(creattextclose);

        CreatPopupBox.appendChild(creatclose);


    });
});

document.addEventListener("click" , function(e) {
    
    if(e.target.className === "close-ovar"){
        document.querySelector(".Ovar-Lay").remove();

        document.querySelector(".popup-box").remove();
    }
});
/* end image popup */

/* start go sections */
const AllBullet = document.querySelectorAll(".nav-bullets");
const AllLinks = document.querySelectorAll(".header-area .links-container ul a");
function scrolltosomewhere(Element){

    Element.forEach(ELE => {
        ELE.addEventListener("click" , (e) => {
            e.preventDefault();
            document.querySelector(e.target.dataset.gosections).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}
scrolltosomewhere(AllLinks);
scrolltosomewhere(AllBullet);
/* end go sections */

/* start open menu */
let ulmenuheader = document.querySelector(".ulmenuheader ");
const MenuToggle = document.querySelector(".toggle-menu");
MenuToggle.addEventListener("click" , (e) => {
    document.querySelector(".toggle-menu").classList.toggle("togglespan");
    document.querySelector(".ulmenuheader").classList.toggle("openmenulinks");
    e.stopPropagation();
});

document.addEventListener("click" , (e) => {

    if(e.target !== MenuToggle && e.target !== ulmenuheader){
        // checke if menu open 
        console.log("E.Target Not Menu");

        if(ulmenuheader.classList.contains("openmenulinks")){

            document.querySelector(".toggle-menu").classList.toggle("togglespan");

            ulmenuheader.classList.remove("openmenulinks");

        }
        
    }
});
ulmenuheader.onclick = function(e){
    e.stopPropagation();
}
/* anmation skills */

/* let skills = document.querySelector(".skills-sections");
window.onscroll = function(){

    // skills offset top
    let skillsoffsettop = skills.offsetTop;

    // outer height
    let skillsouterHeight = skills.offsetHeight;
    
    // window height
    let widowheight = this.innerHeight;

    // widow scroll top
    let widnowscrolltop = this.pageYOffset;

    if(widnowscrolltop > (skillsoffsettop + skillsouterHeight - widowheight)){
        document.querySelectorAll(".skill .the-progreces span").forEach(Element => {
            console.log("1")
            Element.style.width = Element.dataset.widthskills;
        });
    };
}; 
 */

/* sticy menu */
function GetStickyNav(){
        let navb = document.querySelector(".header-area");
        let Sittingenu = document.querySelector(".sitting-box");
        window.onscroll = function(){
            if(window.pageYOffset >= navb.offsetTop + 250){
                Sittingenu.classList.add("stylesittingmenu");
                navb.classList.add("Sticky");
            }else {
                Sittingenu.classList.remove("stylesittingmenu");
                navb.classList.remove("Sticky");
            }


        };
}
GetStickyNav();

/* start reset LocalStorge Options */
const ResetOptions = document.querySelector(".reset-option");
ResetOptions.addEventListener("click" , () => {

    localStorage.removeItem("Option-BackgroundImage");
    localStorage.removeItem("Options-Color");
    localStorage.removeItem("Show-Hide-Bullet");
    localStorage.removeItem("Options-Local-Mods");

    window.location.reload();
});

/* end reset LocalStorge Options */
