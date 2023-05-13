// block anonymous user
let isLogin = JSON.parse(localStorage.getItem('isLogin'))
if(!isLogin) {
  window.location.href = 'signIn.html'  
}

console.log(isLogin)
//----- Logout code start	  
document.getElementById("signOutBtn").addEventListener("click", function () {
  window.location.href = 'signIn.html'
  localStorage.setItem('isLogin', false)
});
  //----- End


// 1 ty dong
// 1 ty dong
// 1 ty dong
// 1 ty dong
// 1 ty dong
// 1 ty dong
// 1 ty dong
// 1 ty dong
// 1 ty dong
// 1 ty dong
// 1 ty dong
