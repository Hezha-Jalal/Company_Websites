let scrollBtn = document.querySelector(".scoll-up");
let changeSpan = document.getElementById("change-tag");
let btnService = document.getElementById("go-to-service");
let btnProduct = document.getElementById("go-to-product");


window.onscroll = function(){
    if(window.scrollY >= 550){
        scrollBtn.style.display = `block`;
    }else{
        scrollBtn.style.display = `none`;
    }
}
scrollBtn.onclick = function(){
    window.scrollTo({
        top: 0,
        left:0,
        behavior: "smooth"
    })
}
function createProfile() {
    // Create main profile container
    const crtDiv = document.createElement("div");
    crtDiv.classList.add("hide-profile", "main-div");

    // Create and style profile icon container
    const crtDivIcon = document.createElement("div");
    crtDivIcon.style.cssText = "padding: 20px 5px;";

    // Create and style profile details container
    const crtDivP = document.createElement("div");
    crtDivP.style.cssText = "padding: 20px 5px;";

    // Create and populate profile header
    const crtH1 = document.createElement("h1");
    const user = localStorage.getItem("user")?.split(",");
    if (user) {
        crtH1.innerText = `Hello ${user[0]}`;
    }
    crtH1.classList.add("h1-name");

    // Create profile icons
    const crtI = document.createElement("i");
    crtI.className = "fa-regular fa-user icon-profile";

    const crtIpen = document.createElement("i");
    crtIpen.className = "fa-solid fa-pen pen-icon";

    // Create and populate email paragraph
    const crtPgmail = document.createElement("p");
    crtPgmail.innerText = user ? user[1] : "";
    crtPgmail.classList.add("p-gmail");

    // Create buttons
    const crtBtnLogOut = document.createElement("button");
    crtBtnLogOut.innerText = "Log Out";
    crtBtnLogOut.classList.add("btn-log-out");

    const crtBtnDelete = document.createElement("button");
    crtBtnDelete.innerText = "Delete the Account";
    crtBtnDelete.classList.add("btn-delete");

    // Append elements to their respective containers
    crtDivIcon.append(crtI, crtIpen);
    crtDivP.append(crtPgmail, crtBtnLogOut, crtBtnDelete);
    crtDiv.append(crtH1, crtDivIcon, crtDivP);

    // Add the profile container to the document
    document.body.prepend(crtDiv);

    // Toggle profile visibility
    changeSpan.onclick = () => {
        crtDiv.classList.toggle("hide-profile");
    };

    // Log out functionality
    crtBtnLogOut.onclick = () => {
        crtDiv.remove();
        changeSpan.innerText = "Login";
        changeSpan.onclick = () => {
            window.location.href = "Html/login.html";
        };
    };

    // Delete account functionality
    crtBtnDelete.onclick = () => {
        crtDiv.remove();
        localStorage.removeItem("user");
        changeSpan.innerText = "Login";
        document.getElementById("hiden-span").style.display = "inline-block";
        document.getElementById("hiden-btn").style.display = "block";
        changeSpan.onclick = () => {
            window.location.href = "../Html/login.html";
        };
    };
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
btnService.onclick = function(){
    location.href = "Html/server.html"
}
btnProduct.onclick = function(){
    location.href = "Html/product.html"
}

