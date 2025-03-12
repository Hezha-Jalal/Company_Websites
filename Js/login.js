let getValLog = document.getElementById("email.log");
let getPasWordLog = document.getElementById("pasword-log");
let pNoteLog = document.getElementById("note-log");
let btnLog = document.getElementById("btn-log");
let mainPage = document.querySelector("[href='../index.html']");
// console.log(localStorage.getItem("user1")[0]);
btnLog.onclick = function(e) {
    
        if(localStorage.getItem(`user`).split(",")[1] == getValLog.value && localStorage.getItem(`user`).split(",")[2] == getPasWordLog.value){
            mainPage.click();
        }else{
        pNoteLog.innerText = "the gmail or password has a mistake please fix it";
        pNoteLog.style.cssText = `
        color: red;
        font-size: 25px;
        `;
        getPasWordLog.value = "";
        }
    
}
