let mouseCourser = document.querySelector(".cursor");
window.addEventListener("mousemove",function (e){
    mouseCourser.style.top=e.pageY +"px";
    mouseCourser.style.left=e.pageX + "px";
});