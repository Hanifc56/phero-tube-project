const handleCatagory = async () => { 
    const response=await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const data = await response.json();
    const tabContainer =document.getElementById('tab-container');
    const dataChain = data.data;
    dataChain.forEach((category)=>{
        const tabDiv = document.createElement('div');
        // tabDiv.classList.add('');
        tabDiv.innerHTML=`
        <a onclick="getVideos('${category.category_id}')" class="tab bg-gray-400 text-black rounded-lg m-2 text-xl hover:bg-red-500 hover:text-white">${category.category}</a> 
        `;
        tabContainer.appendChild(tabDiv);
    }) 
};
const getVideos = async (category_id)=>{
    const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/${category_id}`);
    const data = await response.json();
    const cardContainer = document.getElementById('card-container');
    data.data.forEach((videoCard)=>{
        console.log(videoCard);
        const div = document.createElement('div');
        div.classList.add('grid');
        div.innerHTML=`
        <div class="">
        <div class="card w-96">
          <figure class="w-fit rounded-xl"><img src=${videoCard.thumbnail} alt="" /></figure>
          <div class="flex justify-between py-8 px-4">
              <div class="avatar flex-1">
                <div class="w-24 h-24 rounded-full">
                  <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
              <div class="flex-1">
                  <h2 class="card-title">
                    Building a Winning UX Strategy Using the Kano Model
                  </h2>
                 <p>Awlad Hossain</p>
                 <p>91K views</p>
              </div>
          </div>
        </div>
      </div>
        `;
        cardContainer.appendChild(div);
    })
}









handleCatagory();
