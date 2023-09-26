let count = 1;
let aux = 1;
alert(
  Swal.fire('Any fool can use a computer')
);
document.getElementById("radio1").checked = true;

setInterval(function() {
  nextImage();
}, 1000);

function nextImage() {
  count++;
  if (count > 4) {
    count = 1;
  }
  document.getElementById("radio" + count).checked = true;
}

function openNav() {
  document.getElementById("myNav").style.width = '13%';
}
 
function closeNav() {
  document.getElementById("myNav").style.width = '0';
}

function openNavMobile() {
  document.getElementById("myNav").style.width = '50%';
}
 
function closeNavMobile() {
  document.getElementById("myNav").style.width = '0';
}
