document.getElementById("logOut").addEventListener('click', function(){
    window.location = './index.html'
})



window.onload = function() {
    document.getElementById("welcome").value = `welcome ${JSON.parse(localStorage.getItem("homeList"))}`;
};