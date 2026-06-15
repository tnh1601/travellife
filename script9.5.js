var danhMuc = document.getElementsByClassName("sidebar-menu-item");

for (var i = 0; i < danhMuc.length; i++) {
  danhMuc[i].onclick = function () {
    for (var j = 0; j < danhMuc.length; j++) {
      danhMuc[j].classList.remove("active");
    }

    this.classList.add("active");

    noiDung.innerHTML = "<h2>" + this.textContent + "</h2><p>Đây là nội dung của danh mục bạn vừa chọn.</p>";
  };
}
const btn = document.getElementById("accountBtn");
const menu = document.getElementById("menu");

btn.addEventListener("click", function () {
    menu.classList.toggle("show");
});



var arr_image = [
    "background.jpg",
    "pcanh.jpg",
    "pcanh1.jpg",
    "pcanh2.jpeg",
    "pcanh3.jpg",
];

var index = 0;

var anh = document.getElementById("anh");

var clicks = document.querySelectorAll(".click");

function showImage() {

    anh.src = arr_image[index];


    clicks.forEach(click => {
        click.classList.remove("active");
    });


    clicks[index].classList.add("active");
}


function next() {

    index++;

    if (index >= arr_image.length) {
        index = 0;
    }

    showImage();
}


setInterval(next, 1000);


clicks.forEach((click, i) => {

    click.addEventListener("click", () => {

        index = i;

        showImage();

    });

});
