document.getElementById("spinner").style.display="block";
const loadUser = () => {
  fetch("https://randomuser.me/api/")
    .then((res) => res.json())
    .then((data) => {
        // console.log(data);
        showDetail(data.results[0])
    })
    .catch(err=> console.log(err))
    ;
};
const showDetail =(user) =>{
    console.log(user)
    document.getElementById("spinner").style.display="none";

    const userContainer = document.getElementById("user-container");
    userContainer.innerHTML += `<div class="card mb-3">
    <div class="row g-0">
      <div class="col-md-4">
        <img src=${user.picture.large} class="w-25 rounded-start" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${user.name.title} ${user.name.first } ${user.name.last }</h5>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
         
        </div>
      </div>
    </div>
  </div>`
}
loadUser();
