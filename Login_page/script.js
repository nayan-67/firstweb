let log_invisible = document.querySelector("#logv-off");
let log_visible = document.querySelector("#logv-on");
let reg_invisible = document.querySelector("#regv-off");
let reg_visible = document.querySelector("#regv-on");
let log_input = document.querySelector("#log_pass");
let reg_input = document.querySelector("#reg-pass");

function visibility_off() {
    log_invisible.style.display = 'none';
    log_visible.style.display = 'block';
    reg_invisible.style.display = 'none';
    reg_visible.style.display = 'block';
    log_input.type = "text";
    reg_input.type = "text";
}
function visibility() {
    log_invisible.style.display = 'block';
    log_visible.style.display = 'none';
    reg_invisible.style.display = 'block';
    reg_visible.style.display = 'none';
    log_input.type = "password";
    reg_input.type = "password";
}
let log_bg=document.querySelector(".login-background");
let log_nav=document.querySelector(".login_nav");
let log_container=document.querySelector(".login-container");
let reg_bg=document.querySelector(".signup-background");
let reg_nav=document.querySelector(".signup_nav");
let reg_container=document.querySelector(".signup-container");

function signup() {
    log_bg.style.display = 'none';
    log_nav.style.display = 'none';
    log_container.style.display = 'none';
    reg_bg.style.display = 'block';
    reg_nav.style.display = 'flex';
    reg_container.style.display = 'block';
    login_close.click();
}
function login() {
    log_bg.style.display = 'block';
    log_nav.style.display = 'flex';
    log_container.style.display = 'block';
    reg_bg.style.display = 'none';
    reg_nav.style.display = 'none';
    reg_container.style.display = 'none';
    reg_close.click();
}
// let form=document.querySelector('form');
// form.addEventListener("submit", (e)=>{
//     e.preventDefault();
// })

function log_submit(){
    let log_user=document.querySelector('.log_uname');
    let log_pass=document.querySelector('#log_pass');
    let log_error1=document.querySelector('.error1');
    let log_error2=document.querySelector('.error2');
    let log_hr1=document.querySelector('.hr1');
    let log_hr2=document.querySelector('.hr2');
    if(log_user.value==''){
        log_hr1.style.border= "1px solid red";
        log_error1.innerHTML="Please Enter username";
        log_user.focus();
        return false;
    }else if(log_pass.value==''){
        log_hr2.style.border= "1px solid red";
        log_hr1.style.border= "1px solid #21bbd6";
        log_error1.innerHTML="";
        log_error2.innerHTML="Please Enter Password";
        log_pass.focus();
        return false;
    }else{
        alert("Welcome User");
        log_hr2.style.border= "1px solid #99b5f5";
        log_error2.innerHTML="";
        return true;
    }
};

function reg_submit() {
    let f_name=document.querySelector('#f_name');
    let l_name=document.querySelector('#l_name');
    let reg_email=document.querySelector("#reg-email");
    let reg_pass=document.querySelector("#reg-pass");
    let confirm_pass=document.querySelector("#confirm-pass");
    const regex = /^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    let reg_error1=document.querySelector('#error1');
    let reg_error2=document.querySelector('#error2');
    let reg_error3=document.querySelector('#error3');
    let reg_error4=document.querySelector('#error4');
    let reg_error5=document.querySelector('#error5');
    if (f_name.value.trim()=='') {
        reg_error1.innerHTML="Please Enter First Name";
        f_name.focus();
        return false;
    }else if(l_name.value.trim()==''){
        reg_error1.innerHTML="";
        reg_error2.innerHTML="Please Enter Last Name";
        l_name.focus();
        return false;
    }else if (reg_email.value==='') {
        reg_error2.innerHTML="";
        reg_error3.innerHTML="Please Enter Email";
        reg_email.focus();
        return false;
    }else if(!reg_email.value.match(regex)){
        reg_error3.innerHTML="Please Enter a Valid Email";
        reg_email.focus();
        return false;
    }else if(reg_pass.value.trim()==''){
        reg_error3.innerHTML="";
        reg_error4.innerHTML="Please Enter Password";
        reg_pass.focus();
        return false;
    }else if(reg_pass.value.length < 6){
        reg_error4.innerHTML="Password Should be at least 6 character";
        reg_pass.focus();
        return false;
    }else if(confirm_pass.value==''){
        reg_error4.innerHTML="";
        reg_error5.innerHTML="Please Confirm Password";
        confirm_pass.focus();
        return false;
    }else if (reg_pass.value!==confirm_pass.value) {
        reg_error5.innerHTML="Not same Password";
        confirm_pass.focus();
        return false;
    }else{
        reg_error5.innerHTML="";
        alert("Registaton Successfull");
        return true;
    };
}
let log_sidebar=document.querySelector('.login-sidebar');
let log_menu=document.querySelector('.login-menu');
let reg_sidebar=document.querySelector('.reg-sidebar');
let reg_menu=document.querySelector('.reg-menu');
let login_close=document.querySelector('.login-close');
let reg_close=document.querySelector('.reg-close');

log_menu.addEventListener("click",()=>{
    log_sidebar.style.right='0';
    log_menu.style.display='none';
    login_close.style.display='block';
});
login_close.addEventListener("click",()=>{
    log_sidebar.style.right='-200px';
    log_menu.style.display='block';
    login_close.style.display='none';
});
reg_menu.addEventListener("click",()=>{
    reg_sidebar.style.right='0';
    reg_menu.style.display='none';
    reg_close.style.display='block';
});
reg_close.addEventListener("click",()=>{
    reg_sidebar.style.right='-200px';
    reg_menu.style.display='block';
    reg_close.style.display='none';
});

