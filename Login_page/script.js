let log_invisible = document.querySelector("#logv-off");
let log_visible = document.querySelector("#logv-on");
let reg_invisible = document.querySelector("#regv-off");
let reg_visible = document.querySelector("#regv-on");
let log_input = document.querySelector("#log-pass");
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
let log_nav=document.querySelector(".login-nav");
let log_container=document.querySelector(".login-container");
let reg_bg=document.querySelector(".signup-background");
let reg_nav=document.querySelector(".signup-nav");
let reg_container=document.querySelector(".signup-container");

function signup() {
    log_bg.style.display = 'none';
    log_nav.style.display = 'none';
    log_container.style.display = 'none';
    reg_bg.style.display = 'block';
    reg_nav.style.display = 'flex';
    reg_container.style.display = 'block';
}
function login() {
    log_bg.style.display = 'block';
    log_nav.style.display = 'flex';
    log_container.style.display = 'block';
    reg_bg.style.display = 'none';
    reg_nav.style.display = 'none';
    reg_container.style.display = 'none';
}

function submit() {
    let reg_email=document.querySelector("#reg-email");
    let reg_pass=document.querySelector("#reg-pass");
    let confirm_pass=document.querySelector("#confirm-pass");
    if (reg_email.value==='') {
        alert("Plase fill out this")
        return false;
    }
    else if (reg_pass.value!==confirm_pass.value) {
        // confirm_pass.title="password should be same";
        alert("Not same Password");
        return false;
    };
}
let log_sidebar=document.querySelector('.login-sidebar');
let log_menu=document.querySelector('.login-menu');
let reg_sidebar=document.querySelector('.reg-sidebar');
let reg_menu=document.querySelector('.reg-menu');
let login_close=document.querySelector('.login-close');
let reg_close=document.querySelector('.reg-close');

log_menu.addEventListener("click",()=>{
    log_sidebar.style.display='flex';
    log_menu.style.display='none';
});
login_close.addEventListener("click",()=>{
    log_sidebar.style.display='none';
    log_menu.style.display='block';
});
reg_menu.addEventListener("click",()=>{
    reg_sidebar.style.display='flex';
    reg_menu.style.display='none';
});
reg_close.addEventListener("click",()=>{
    reg_sidebar.style.display='none';
    reg_menu.style.display='block';
});

