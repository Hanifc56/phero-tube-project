const handleCatagory = async () => {
  const response = await fetch(
    "https://openapi.programming-hero.com/api/videos/categories"
  );
  const data = await response.json();
  const tabContainer = document.getElementById("tab-container");
  const dataChain = data.data;
  dataChain.forEach((category) => {
    const tabDiv = document.createElement("div");
    // tabDiv.classList.add('');
    tabDiv.innerHTML = `
        <a onclick="getVideos('${category.category_id}')" class="tab bg-gray-400 text-black rounded-lg m-2 text-xl hover:bg-red-500 hover:text-white">${category.category}</a> 
        `;
    tabContainer.appendChild(tabDiv);
  });
};
const getVideos = async (category_id) => {
  const response = await fetch(
    `https://openapi.programming-hero.com/api/videos/category/${category_id}`
  );
  const data = await response.json();
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  // use conditon to show the data if there is no data then show the no vidios
  data.data.forEach((videoCard) => {
    console.log(videoCard);
    const div = document.createElement("div");
    div.classList.add("grid");
    div.innerHTML = `
        <div class="">
        <div class="card w-96 h-96">
          <figure class="w-full rounded-xl"><img src=${
            videoCard.thumbnail
          } alt="" /></figure>
          <div class="flex py-8 px-4">
              <div class="avatar ">
                <div class="w-12 h-12 rounded-full">
                  <img src=${videoCard?.authors[0].profile_picture} />
                  
                </div>
              </div>
              <div class="pl-8">
                  <h2 class="card-title">
                    ${videoCard.title}
                  </h2>
                 <p>${videoCard?.authors[0].profile_name} <span>${
      videoCard.authors[0].verified
        ? '<img src="images/verified.svg"></img>'
        : ""
    } </span></p>
               
                 <p>${videoCard.others.views} views</p>
              </div>
          </div>
        </div>
      </div>
        `;
    cardContainer.appendChild(div);
  });
  onClickBlog("1005");
};

const onClickBlog = () => {
  const modalContainer = document.getElementById("modal-container");
  const btn = document.createElement("div");
  btn.innerHTML = `
   
   <div class=" flex justify-center"><img src="images/Icon.png" alt="">
   <h1>NO VIDEO FOUND!</h1></div>
   <dialog id="my_modal_1" class="modal">
     <div class="modal-box">
       <h3 class="font-bold text-lg">Hello!</h3>
       <p class="py-4">Press ESC key or click the button below to close</p>
       <div class="modal-action">
         <form method="dialog">
           <!-- if there is a button in form, it will close the modal -->
           <button class="btn">Close</button>
         </form>
       </div>
     </div>
   </dialog>
  `;
  modalContainer.appendChild(btn);
};

handleCatagory();
getVideos("1000", "1001", "1002", "1003");
