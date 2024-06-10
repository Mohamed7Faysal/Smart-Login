document.getElementById("logOut").addEventListener('click', function(){
    window.location = './index.html'
})


function welcome(){
    document.getElementById("welcome").value = `welcome ${JSON.parse(localStorage.getItem("homeList"))}`;
}

window.onload = function() {
    welcome();
};