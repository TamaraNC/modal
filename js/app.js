const modalImg = document.querySelector(".lightbox-item");
const modalClose = document.querySelector(".lightbox-close");
const arrows = document.querySelectorAll(".lightbox-control")
let itemImages = document.querySelectorAll(".store-img");

let images = [];
let imageCounter = 0;

//click image and display image on modal
itemImages.forEach(item => {
  images.push(item.src);
  item.addEventListener("click", function(e){
    let image = e.target.src;
    modalImg.style.backgroundImage = `url(${image})`
    modal.classList.add("show");
    //Close modal
    modalClose.addEventListener("click", function() {
      modal.classList.remove("show");
    })
  })
})

arrows.forEach(arrow => {
  arrow.addEventListener("click", function() {
    if (arrow.classList.contains("btnLeft")) {
      imageCounter--;
      if (imageCounter < 0) {
        imageCounter = images.length -1;
      }
      modalImg.style.backgroundImage = `url(${images[imageCounter]})`;
    }
    if (arrow.classList.contains("btnRight")) {
      imageCounter++;
      if (imageCounter > images.length - 1) {
        imageCounter = 0;
      }
      modalImg.style.backgroundImage = `url(${images[imageCounter]})`;
    }
  })
})
