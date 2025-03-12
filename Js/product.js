let scrollBtn = document.querySelector(".scoll-up");
        let changeSpan = document.getElementById("change-tag");
        let btnService = document.getElementById("go-to-service");
        let btnProduct = document.getElementById("go-to-product");
        let onlineShop = document.querySelector(".online");
        let tourism = document.querySelector(".tour");
        let education = document.querySelector(".edu");
        let all = document.querySelector(".all");
        let divOnlineShop = document.querySelector(".online-shop");
        let divEducation = document.querySelector(".education");
        let divTourism = document.querySelector(".tourism");
        all.onclick = function(){
            divEducation.classList.remove("hide");
            divTourism.classList.remove("hide");
            divOnlineShop.classList.remove("hide");
            education.classList.remove("botm-color");
            tourism.classList.remove("botm-color");
            onlineShop.classList.remove("botm-color");
            all.classList.add("botm-color");
            
        }
        onlineShop.onclick = function(){
            divEducation.classList.add("hide");
            divTourism.classList.add("hide");
            divOnlineShop.classList.remove("hide");
            education.classList.remove("botm-color");
            tourism.classList.remove("botm-color");
            onlineShop.classList.add("botm-color");
            
        }
        tourism.onclick = function(){
            divEducation.classList.add("hide");
            divTourism.classList.remove("hide");
            divOnlineShop.classList.add("hide");
            education.classList.remove("botm-color");
            tourism.classList.add("botm-color");
            onlineShop.classList.remove("botm-color");
        }
        education.onclick = function(){
            divEducation.classList.remove("hide");
            divTourism.classList.add("hide");
            divOnlineShop.classList.add("hide");
            education.classList.add("botm-color");
            tourism.classList.remove("botm-color");
            onlineShop.classList.remove("botm-color");

        }
    
        function createProfile(){
    let crtDiv = document.createElement("div");
    let crtDivIcon = document.createElement("div");
    let crtDivP = document.createElement("div");
    let crtH1 = document.createElement("h1");
    let crtImg = document.createElement("img");
    let crtI = document.createElement("i");
    let crtIpen = document.createElement("i");
    crtI.className = "fa-regular fa-user"
    crtIpen.className = "fa-solid fa-pen";
    let crtPgmail = document.createElement("p");
    let crtBtnLogOut = document.createElement("button");
    let crtBtnDelete = document.createElement("button");
    crtH1.innerText = `Hello ${localStorage.getItem(`user`).split(",")[0]}`;
    crtPgmail.innerText = localStorage.getItem(`user`).split(",")[1];
    crtBtnLogOut.innerText = "Log Out";
    crtBtnDelete.innerText = "Delete the Account";
    crtDiv.append(crtH1);
    crtDivIcon.append(crtI);
    crtDivIcon.append(crtIpen);
    crtDiv.append(crtDivIcon);
    crtDivP.append(crtPgmail);
    crtDivP.append(crtBtnLogOut);
    crtDivP.append(crtBtnDelete);
    crtDiv.append(crtDivP);
    document.body.prepend(crtDiv);
    crtDiv.classList.add("hide-profile");
    crtDiv.style.cssText = `
    width: 200px;
    background-color: var(--headercolor);
    position: absolute;
    z-index: 10;
    right: 50px;
    top: 90px;
    font-family: sans-serif;
    `;
    crtH1.style.cssText = `
    background-color: var(--maingreencolor);
    margin: 0px;
    color: white;
    padding: 10px 5px 20px;
    text-align: center;
    font-size: 17px;
    `;
    crtDivIcon.style.cssText = `
    padding: 20px 5px;
    `;
    crtDivP.style.cssText = `
    padding: 20px 5px;
    `;
    crtI.style.cssText = `
    font-size: 25px;
    color: white;
    background-color: var(--maingreencolor);
    border-radius: 50%;
    padding: 10px 11px;
    margin-left: 70px;
    `;
    crtIpen.style.cssText = `
    font-size: 15px;
    margin-left: 40px;
    cursor: pointer;
    `;
    crtPgmail.style.cssText = `
    text-align: center;
    margin: 0px 0px 20px 0px;
    `;
    crtBtnLogOut.style.cssText = `
    width: 100%;
    padding: 5px 0px;
    margin-bottom: 5px;
    border: 2px solid var(--maingreencolor);
    border-radius: 5px;
    background-color: var(--headercolor);
    color: black;
    cursor: pointer;
    `;
    crtBtnDelete.style.cssText = `
    width: 100%;
    padding: 5px 0px;
    margin-bottom: 5px;
    border-color: transparent;
    border-radius: 5px;
    background-color: red;
    color: white;
    cursor: pointer;
    `;
    changeSpan.onclick = function(){
        crtDiv.classList.toggle("hide-profile");
    }
    crtBtnLogOut.onclick = function(){
        crtDiv.remove();
        changeSpan.innerText = `Login`;
        changeSpan.onclick = function(){
            window.location.href = "../Html/login.html";
        }
    }
    crtBtnDelete.onclick = function(){
        crtDiv.remove();
        window.localStorage.removeItem(`user`);
        changeSpan.innerText = `Login`;
        document.getElementById("hiden-span").style.display = 'inline-block';
        document.getElementById("hiden-btn").style.display = 'block';
        changeSpan.onclick = function(){
            window.location.href = "../Html/login.html";
        }
    }
}
if(localStorage.getItem(`user`) != null){
    changeSpan.innerText = "";
    let newIcon = document.createElement("i");
    newIcon.className = `fa-solid fa-circle-user`;
    newIcon.style.fontSize = `35px`;
    newIcon.style.verticalAlign = `middle`;
    changeSpan.append(newIcon);
    createProfile();
    document.getElementById("hiden-span").style.display = 'none';
    document.getElementById("hiden-btn").style.display = 'none';
    
}