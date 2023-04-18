var space = document.getElementById('space')

function displayImage() {
    var image=document.createElement("img");
    image.src='./assets/images/heart.webp';
    image.setAttribute("style", "height:40px;margin-left:20px;margin-right:5px;");
    space.appendChild(image);
}
