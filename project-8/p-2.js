const images = 
[
   "https://images-eu.ssl-images-amazon.com/images/I/81jY9p+3RFL._AC_UL600_SR600,600_.jpg",
   "https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/28520794/2024/3/26/98092257-f104-4665-af91-19a8e07742e91711462981604WallArt1.jpg",
   "https://wallpapers.com/images/featured/cartoon-pictures-q3hxkk0gmw6vnivj.jpg",
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLlSGeo64I7x6W55DETCMNffk5TG_hHsSQiw&s",
   "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA0L2pvYjY4Ni0yNTMteC5qcGc.jpg"
];

let index = 0;
const sliderimage = document.getElementById("slider-image");

function showImage()
{
  sliderimage.src = images[index];
}

showImage();

setInterval(() => {
  index = (index + 1) % images.length;
  showImage();
}, 1500);