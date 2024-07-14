
let log_invisible = document.querySelector("#v-off");
let log_visible = document.querySelector("#v-on");
let reg_invisible = document.querySelector("#regv-off");
let reg_visible = document.querySelector("#regv-on");
let log_input = document.querySelector(".log_pass");
let reg_input = document.querySelector(".reg_pass");

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
let log_container=document.querySelector(".login-container");
let reg_container=document.querySelector(".signup-container");

function signup() {
    log_container.style.display = 'none';
    reg_container.style.display = 'block';
}
function login() {
    log_container.style.display = 'block';
    reg_container.style.display = 'none';
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
    let name=document.querySelector('#name');
    let number=document.querySelector('#number');
    let reg_email=document.querySelector("#reg-email");
    let reg_pass=document.querySelector("#reg-pass");
    let confirm_pass=document.querySelector("#confirm-pass");
    const numPattern= /^[6-9]{1}[0-9]{9}$/;
    const RegExp = /^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    let reg_error1=document.querySelector('#error1');
    let reg_error2=document.querySelector('#error2');
    let reg_error3=document.querySelector('#error3');
    let reg_error4=document.querySelector('#error4');
    let reg_error5=document.querySelector('#error5');
    if (name.value=='') {
        reg_error1.innerHTML="Please Enter Name";
        name.focus();
        return false;
    }else if(number.value==''){
        reg_error1.innerHTML="";
        reg_error2.innerHTML="Please Enter Mobile Number";
        number.focus();
        return false;
    }else if(!number.value.match(numPattern)){
        reg_error1.innerHTML="";
        reg_error2.innerHTML="Please Enter Valid Mobile Number";
        number.focus();
        return false;
    }else if (reg_email.value==='') {
        reg_error2.innerHTML="";
        reg_error3.innerHTML="Please Enter Email";
        reg_email.focus();
        return false;
    }else if(!reg_email.value.match(RegExp)){
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
