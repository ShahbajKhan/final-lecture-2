const loadCategory = () => {
  fetch("https://openapi.programming-hero.com/api/news/categories")
    .then((res) => res.json())
    .then((data) => showCategory(data.data.news_category));
};

const showCategory = (categories) => {
  const categoryContainer = document.getElementById("category-container");
  categories.forEach((category) => {
    categoryContainer.innerHTML += `<p class="nav-link" onclick="loadCategoryNews('${category.category_id}','${category.category_name}' )">${category.category_name}</p>`;
  });
};
const loadCategoryNews = (id, category_name) => {
  const url = `https://openapi.programming-hero.com/api/news/category/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => showCategoryNews(data.data, category_name));
};
const showCategoryNews = (newses, category_name) => {
  const alertContainer = document.getElementById("alert");
  alertContainer.innerHTML = `${newses.length} items found for category ${category_name}`;
  const newsContainer = document.getElementById("news-container");
  newsContainer.innerHTML = "";
  newses.forEach((news) => {
    newsContainer.innerHTML += `<div class="card mb-3">
        <div class="row g-0">
          <div class="col-md-4">
            <img src=${
              news.thumbnail_url ? news.thumbnail_url : "https://google.com"
            } class="img-fluid rounded-start" alt="...">
            
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${news.title}</h5>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
              <!-- Button trigger modal -->
              <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="fetchNewsDetail('${
                news._id
              }')">
                  Detail
                </button>
            </div>
          </div>
        </div>
      </div>`;
  });
};

const fetchNewsDetail = (id) => {
  console.log(id);
  const url = `https://openapi.programming-hero.com/api/news/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => showNewsDetail(data.data[0]));
};
const showNewsDetail = (news) => {
  const modalBody = document.getElementById("modal-body");
  modalBody.innerHTML = `<div class="row g-0">
    <div class="col-md-4">
      <img src=${
        news.thumbnail_url ? news.thumbnail_url : "https://google.com"
      } class="img-fluid rounded-start" alt="...">
      
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${news.title} <span class="badge text-bg-warning">${news.others_info.is_todays_pick ? "Todays pick" : "Not Todays pick"}</span> <span class="badge text-bg-danger">${news.others_info.is_trending ? "Trending" : "Not Trending"}</span></h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
        <!-- Button trigger modal -->
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="fetchNewsDetail('${
          news._id
        }')">
            Detail
          </button>
      </div>
    </div>
  </div>
</div>`;
};
loadCategory();
// category-container
