
let arrayInfo = {
    userName: [],
    userGmail: [],
    getPasWord: []
}

let user = {
    userName: document.querySelector("[type='text']"),
    userGmail: document.getElementById("email-rgst"),
    getPasWord: document.getElementById("pas-rgst"),
};

let pNote = document.getElementById("note-rgst");
let btn = document.getElementById("btn-rgst");
let resetBtn = document.getElementById("reset-rgst");
let logHref = document.querySelector("[href='login.html']");
let allLabel = document.querySelectorAll("label");
let allInput = document.querySelectorAll("input");
let allGet = document.querySelectorAll(".getItems");
// if(window.localStorage.getItem("id") == null){
//     let idNum = 1;
//     window.localStorage.setItem("id",idNum);
// }
// let getId = localStorage.getItem("id");
window.onload = function(){
    user.userName.focus();
}
btn.onclick = function(e) {
    // e.preventDefault();
    let {userGmail:ug,getPasWord:pw,userName:un} = user;
    if(/\w+@gmail.com/g.test(ug.value) && pw.value.length >= 8 && /\w+/g.test(un.value)){
            pNote.classList.add("can-use");

        pNote.innerText = "You can use this Gmail ";
        window.localStorage.setItem(`user`,[user.userName.value,user.userGmail.value,user.getPasWord.value]);
        resetBtn.click();
        logHref.click();
        
    }
}

allGet.forEach((ele)=>{
    ele.addEventListener("focus",focusProcess);
    ele.addEventListener("blur",blurProcess)
});
function focusProcess(){
    allLabel.forEach((e)=>{
        e.style.color = "var(--maingreencolor)";
    });
    allInput.forEach((e)=>{
    e.style.cssText = `border-color: var(--maingreencolor); caret-color: var(--maingreencolor)`;
    })
    allLabel[this.dataset.num].style.color = "var(--maingreencolor)";
    allInput[this.dataset.num].style.cssText = `border-color: var(--maingreencolor); caret-color: var(--maingreencolor)`;
    pNote.style.color = "var(--maingreencolor)";
    if(this.dataset.num == "0"){
        pNote.innerText = "";
    }else if(this.dataset.num == "1"){
        pNote.innerHTML = `if this is a first register of you please donot forget <span style="text-transform: none; font-weight: bold;">@gmail.com</span>`;
    }else if(this.dataset.num == "2"){
        pNote.innerText = `if this is a first register of you please donot forget the password should be 8 characters or greater than 8`;
    }
}
function blurProcess(){
    pNote.style.color = "var(--maingreencolor)";
    if(this.dataset.num == "0"){
        if(user.userName.value == ""){
            pNote.innerText = "You forget the username ";
            pNote.style.color = `red`;
            document.querySelectorAll("label")[0].style.color = "red";
            document.querySelectorAll("input")[0].style.cssText = `border-color: red; caret-color: red`;
        }
    }else if(this.dataset.num == "1"){
        if((user.userGmail.value).lastIndexOf("@gmail.com") == -1){
                    pNote.innerText="The gmail has mistake please fix the mistake ";
                    pNote.style.color = `red`;
                    document.querySelectorAll("label")[1].style.color = "red";
                    document.querySelectorAll("input")[1].style.cssText = `border-color: red; caret-color: red`;
                }else if(arrayInfo.userGmail.includes(user.userGmail.value)){
                    pNote.innerText = `this gmail is already exist you should change the gmail`;
                    pNote.style.color = `red`;
                    user.userGmail.style.cssText = `border-color: red`;
                    document.forms[0].children[2].style.color = `red`;
                }
    }else if(this.dataset.num == "2"){
        if(user.getPasWord.value === "" || user.getPasWord.value.length < 8){
        pNote.innerText = "You forget the password or your password is less than number 8 please fix the mistakes";
        pNote.style.color = `red`;
        document.querySelectorAll("label")[2].style.color = "red";
        document.querySelectorAll("input")[2].style.cssText = `border-color: red; caret-color: red`;
    }
    }
}
