// ─── TOGGLE DROPDOWN TÀI KHOẢN ───
function toggleMenu() {
  document.getElementById('menu').classList.toggle('show');
}
document.addEventListener('click', function(e) {
  const btn  = document.getElementById('accountBtn');
  const menu = document.getElementById('menu');
  if (!btn.contains(e.target) && !menu.contains(e.target)) {
    menu.classList.remove('show');
  }
});

// ─── DATA ───
const TOURS = [
  { id:1,  name:'Đà Nẵng – Hội An 3N3D',             loc:'Đà Nẵng',            price:2990000,  old:3700000,  discount:20, type:'domestic',      hot:false,
    img:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Da_Nang_beach.jpg/640px-Da_Nang_beach.jpg',       days:3, pax:'Mọi độ tuổi' },
  { id:2,  name:'Sapa – Fansipan 3N2D',                loc:'Lào Cai',            price:1890000,  old:2200000,  discount:15, type:'domestic',      hot:false,
    img:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Sapa_Vietnam.jpg/640px-Sapa_Vietnam.jpg',         days:3, pax:'Mọi độ tuổi' },
  { id:3,  name:'Hà Nội – Hạ Long 3N2D',              loc:'Quảng Ninh',         price:3490000,  old:3490000,  discount:0,  type:'domestic',      hot:true,
    img:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Halong_bay.jpg/640px-Halong_bay.jpg',             days:3, pax:'Gia đình' },
  { id:4,  name:'Huế – Phong Nha 4N3D',               loc:'Thừa Thiên Huế',     price:2290000,  old:2540000,  discount:10, type:'domestic',      hot:false,
    img:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Hue_Citadel.jpg/640px-Hue_Citadel.jpg',          days:4, pax:'Mọi độ tuổi' },
  { id:5,  name:'Phú Quốc 4N3D',                      loc:'Kiên Giang',         price:4190000,  old:5580000,  discount:25, type:'domestic',      hot:false,
    img:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Phu_Quoc_island.jpg/640px-Phu_Quoc_island.jpg',  days:4, pax:'Honeymoon' },
  { id:6,  name:'Côn Đảo 3N2D',                       loc:'Bà Rịa – Vũng Tàu', price:3800000,  old:4200000,  discount:10, type:'domestic',      hot:false,
    img:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Con_Dao_Island.jpg/640px-Con_Dao_Island.jpg',     days:3, pax:'Mọi độ tuổi' },
  { id:7,  name:'Đà Lạt 4N3D',                        loc:'Lâm Đồng',           price:2100000,  old:2700000,  discount:22, type:'domestic',      hot:true,
    img:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Da_Lat_city.jpg/640px-Da_Lat_city.jpg',          days:4, pax:'Mọi độ tuổi' },
  { id:8,  name:'Nha Trang – Vinpearl 4N3D',          loc:'Khánh Hòa',          price:3500000,  old:3500000,  discount:0,  type:'domestic',      hot:true,
    img:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Nha_Trang_beach.jpg/640px-Nha_Trang_beach.jpg',  days:4, pax:'Gia đình' },
  { id:9,  name:'Bangkok – Pattaya 5N4D',              loc:'Thái Lan',           price:6500000,  old:8100000,  discount:20, type:'international', hot:false,
    img:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Bangkok_skyscraper.jpg/640px-Bangkok_skyscraper.jpg', days:5, pax:'Mọi độ tuổi' },
  { id:10, name:'Singapore – Malaysia 5N4D',           loc:'Singapore',          price:9900000,  old:11000000, discount:10, type:'international', hot:true,
    img:'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Singapore_skyline_at_night.jpg/640px-Singapore_skyline_at_night.jpg', days:5, pax:'Gia đình' },
  { id:11, name:'Nhật Bản – Hoa Anh Đào 7N6D',        loc:'Tokyo, Osaka',       price:22000000, old:25000000, discount:12, type:'international', hot:true,
    img:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Tokyo_Sakura.jpg/640px-Tokyo_Sakura.jpg',        days:7, pax:'Mọi độ tuổi' },
  { id:12, name:'Hàn Quốc Mùa Thu 6N5D',              loc:'Seoul, Jeju',        price:18500000, old:21000000, discount:12, type:'international', hot:false,
    img:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Gyeongbokgung.jpg/640px-Gyeongbokgung.jpg',      days:6, pax:'Honeymoon' },
  { id:13, name:'Mù Cang Chải – Mùa Vàng 2N1D',      loc:'Yên Bái',            price:1200000,  old:1500000,  discount:20, type:'domestic',      hot:false,
    img:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Mu_Cang_Chai.jpg/640px-Mu_Cang_Chai.jpg',       days:2, pax:'Mọi độ tuổi' },
  { id:14, name:'Quy Nhơn – Phú Yên 3N2D',            loc:'Bình Định',          price:2600000,  old:3000000,  discount:13, type:'domestic',      hot:false,
    img:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Quy_Nhon_beach.jpg/640px-Quy_Nhon_beach.jpg',   days:3, pax:'Mọi độ tuổi' },
  { id:15, name:'Bali – Thiên Đường Nhiệt Đới 5N4D',  loc:'Indonesia',          price:12000000, old:14000000, discount:14, type:'international', hot:true,
    img:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Tegallalang_Rice_Terrace.jpg/640px-Tegallalang_Rice_Terrace.jpg', days:5, pax:'Honeymoon' },
  { id:16, name:'Cần Thơ – Miền Tây Sông Nước 2N1D', loc:'Cần Thơ',            price:1100000,  old:1300000,  discount:15, type:'domestic',      hot:false,
    img:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Can_Tho_floating_market.jpg/640px-Can_Tho_floating_market.jpg', days:2, pax:'Gia đình' },
];

// ─── STATE ───
let activeSort  = 'default';
let searchQ     = '';
let currentPage = 1;
let liked       = new Set();
const PER_PAGE  = 8;

// ─── HELPERS ───
function fmt(n) { return n.toLocaleString('vi-VN') + 'đ'; }

function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2400);
}

// ─── FILTER + SORT ───
function getFiltered() {
  let data = [...TOURS];

  if (searchQ)
    data = data.filter(t =>
      t.name.toLowerCase().includes(searchQ) ||
      t.loc.toLowerCase().includes(searchQ)
    );

  if (activeSort === 'price-asc')  data.sort((a, b) => a.price - b.price);
  if (activeSort === 'price-desc') data.sort((a, b) => b.price - a.price);
  if (activeSort === 'discount')   data.sort((a, b) => b.discount - a.discount);

  return data;
}

// ─── RENDER GRID ───
function renderGrid() {
  const data     = getFiltered();
  const grid     = document.getElementById('tourGrid');
  const noResult = document.getElementById('noResult');
  const count    = document.getElementById('resultCount');
  const total    = data.length;
  const pages    = Math.ceil(total / PER_PAGE);

  if (currentPage > pages) currentPage = 1;
  const slice = data.slice((currentPage - 1) * PER_PAGE, currentPage * PER_PAGE);

  count.textContent = `Tìm thấy ${total} tour`;

  if (total === 0) {
    grid.innerHTML = '';
    noResult.style.display = 'block';
    renderPagination(0);
    return;
  }

  noResult.style.display = 'none';
  grid.innerHTML = slice.map(t => `
    <div class="card" onclick="openTour(${t.id})">
      <div class="card-img">
        <img src="${t.img}" alt="${t.name}"
             onerror="this.src='https://via.placeholder.com/300x155/0a7fa5/fff?text=Tour'">
        ${t.hot
          ? '<span class="badge hot">HOT</span>'
          : t.discount > 0
            ? `<span class="badge sale">-${t.discount}%</span>`
            : ''}
        <button class="wishlist-btn" onclick="toggleLike(event,${t.id})">
          ${liked.has(t.id) ? '❤️' : '🤍'}
        </button>
      </div>
      <div class="card-body">
        <div class="card-title">${t.name}</div>
        <div class="card-loc">📍 ${t.loc}</div>
        <div class="card-price">
          <span class="price-main">${fmt(t.price)}</span>
          ${t.discount > 0
            ? `<span class="price-old">${fmt(t.old)}</span>
               <span class="discount">-${t.discount}%</span>`
            : ''}
        </div>
        <div class="card-meta">
          <span>🗓️ ${t.days} ngày</span>
          <span>👥 ${t.pax}</span>
        </div>
      </div>
    </div>`).join('');

  renderPagination(pages);
}

// ─── PAGINATION ───
function renderPagination(pages) {
  const pg = document.getElementById('pagination');
  if (pages <= 1) { pg.innerHTML = ''; return; }

  let html = '';
  if (currentPage > 1)
    html += `<button class="page-btn" onclick="goPage(${currentPage - 1})">‹</button>`;
  for (let i = 1; i <= pages; i++)
    html += `<button class="page-btn ${i === currentPage ? 'active' : ''}"
                     onclick="goPage(${i})">${i}</button>`;
  if (currentPage < pages)
    html += `<button class="page-btn" onclick="goPage(${currentPage + 1})">›</button>`;

  pg.innerHTML = html;
}

// ─── ACTIONS ───
function filterTours() {
  searchQ     = document.getElementById('searchInput').value.toLowerCase().trim();
  currentPage = 1;
  renderGrid();
}

function sortTours(val) {
  activeSort  = val;
  currentPage = 1;
  renderGrid();
}

function goPage(p) {
  currentPage = p;
  renderGrid();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleLike(e, id) {
  e.stopPropagation();
  if (liked.has(id)) { liked.delete(id); showToast('Đã bỏ yêu thích'); }
  else               { liked.add(id);    showToast('❤️ Đã thêm vào yêu thích!'); }
  renderGrid();
}

function openTour(id) {
  const t = TOURS.find(x => x.id === id);
  showToast(`🗺️ Xem tour: ${t.name}`);
}

// ─── INIT ───
renderGrid();