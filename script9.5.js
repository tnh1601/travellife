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

// ===== KIỂM TRA TRẠNG THÁI ĐĂNG NHẬP =====
function capNhatTrangThaiDangNhap() {
  const accountBtnText = document.getElementById("accountBtnText");
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const userData = localStorage.getItem("user");

  if (isLoggedIn && userData) {
    const user = JSON.parse(userData);

    accountBtnText.textContent = "Xin chào, " + user.name + " ▼";

    menu.innerHTML = `
      <a href="#" style="font-weight:bold; color:#006994;">👤 ${user.name}</a>
      <a href="#" style="font-size:12px; color:#888;">${user.email}</a>
      <a href="#" id="logoutLink">Đăng xuất</a>
    `;

    document.getElementById("logoutLink").addEventListener("click", function (e) {
      e.preventDefault();
      dangXuat();
    });

  } else {
    accountBtnText.textContent = "Tài khoản ▼";

    menu.innerHTML = `
      <a href="dangnhap.html">Đăng nhập</a>
      <a href="dangki.html">Đăng ký</a>
    `;
  }
}

function dangXuat() {
  localStorage.removeItem("isLoggedIn");
  alert("Bạn đã đăng xuất!");
  capNhatTrangThaiDangNhap();
  menu.classList.remove("show");
}

capNhatTrangThaiDangNhap();



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
