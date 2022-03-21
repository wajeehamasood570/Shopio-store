const hamburer = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");

if (hamburer) {
  hamburer.addEventListener("click", () => {
    navList.classList.toggle("open");
  });
}

// Popup
const popup = document.querySelector(".popup");
const closePopup = document.querySelector(".popup-close");

if (popup) {
  closePopup.addEventListener("click", () => {
    popup.classList.add("hide-popup");
  });

  window.addEventListener("load", () => {
    setTimeout(() => {
      popup.classList.remove("hide-popup");
    }, 1000);
  });
}

const form= document.getElementById('form');
const username= document.getElementById('username');
const city= document.getElementById('city');
const number = document.getElementById('number');
const email = document.getElementById('email');
const password = document.getElementById('password');


//signup
function signup(e){
  // add event listener
    console.log("working");
    const form= document.getElementById('form').value;
  const username= document.getElementById('username').value;
  const city= document.getElementById('city').value;
  const number = document.getElementById('number').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;


  var user = {
    email: email,
    username: username,
    password: password,
  };



  var json = JSON.stringify(user);
  localStorage.setItem("username", json);
  alert("Welcome " + username + " you are succefully registered");
}

function newlogin(){
  window.location.href = "login.html"; 
}




//login


function login(e){
  // add event listener
    console.log("working");


    const form= document.getElementById('form').value;
  const username= document.getElementById('username').value;
  const password = document.getElementById('password').value;

  var user =  localStorage.getItem("username");
  var data = JSON.parse(user);
  console.log(data);

  if(username !== data.username){
      alert("Please Signup First");
  }
 else if(username == data.username && password == data.password){
     alert("Welcome you are succefully login");
 }
 else if(password == null){
  alert("Please enter password");
 }
 else{
     alert("Wrong Password")
 }
}

function newDoc(){
  window.location.href = "index.html"; 
}


//logout
function logout(e){
  // add event listener
    console.log("working");


    const form= document.getElementById('form').value;
  const username= document.getElementById('username').value;
  const password = document.getElementById('password').value;

  var user = localStorage.removeItem("username");
  var data = JSON.parse(user);
  console.log(data)
  alert("You are successfully logout");
}


function check(){
  console.log('page is fully loaded');
  var user =  localStorage.getItem("username");
  var data = JSON.parse(user);
  console.log("checking data", data);
  
  if(data == null){
    document.getElementById("signup").style.display= "block";
    document.getElementById("login").style.display= "block";
    document.getElementById("logout").style.display= "none";
  }
  else{
    document.getElementById("signup").style.display= "none";
  document.getElementById("login").style.display= "none";
  document.getElementById("logout").style.display= "block";
  }

}


window.onload = check();


// hide functionality
// const login = document.getElementById("login");
// const logout = document.getElementById("logout");
