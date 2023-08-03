const arrow = document.querySelectorAll(".arrow");
const movieList = document.querySelectorAll(".movie-list");
arrow.forEach((arrow, i) => {
    let clickCounter = 0;
    const imageItem = movieList[i].querySelectorAll("img").length
    arrow.addEventListener("click", function () {
    if (imageItem - (4 + clickCounter) >= 0) {


       
            clickCounter++;
            movieList[i].style.transform = `translateX(${movieList[i].computedStyleMap().get("transform")[0].x.value - 300}px)`
     
    } else {
        movieList[i].style.transform = "translateX(0)"
        clickCounter = 0
    }
});
});
// Dark Mode

const ball = document.querySelector(".toggle-ball")
const items = document.querySelectorAll(".container,.navbar,.sidebar,.sidebar i,.toggle,.toggle-ball,.movie-list-filter select,.movie-list-title")
ball.addEventListener("click",function(){
    items.forEach((item)=> item.classList.toggle("active"))
})