const API_KEY = "8f8d4fdf20034dfaabc1c21fc6812183"
const url = "https://newsapi.org/v2/everything?q=";
window.addEventListener('load', ()=>fetchNews("India"));

const ipl = document.querySelector(".IPL");
const finance = document.querySelector(".finance");
const technology = document.querySelector(".technology");
const politics = document.querySelector(".politics");


const searchButton = document.querySelector(".search-button");

searchButton.addEventListener("click", ()=>{
    const yourSearch = document.querySelector(".news-input").value;
    console.log(yourSearch);
    fetchNews(yourSearch);
})

politics.addEventListener('click', () => {
    fetchNews(politics.textContent);
});
ipl.addEventListener('click', () => {
    fetchNews(ipl.textContent);
});
technology.addEventListener('click', () => {
    fetchNews(technology.textContent);
});
finance.addEventListener('click', () => {
    fetchNews(finance.textContent);
});




async function fetchNews (query){
   const apiData = await fetch(`${url}${query}&apiKey=${API_KEY}`);
   const fetchedData = await apiData.json();
   console.log(fetchedData);
   if(fetchedData.totalResults!=0){
    const errorMess = document.getElementById("errorMessage");
    errorMess.style.display = "none";
    bindData(fetchedData.articles);
   }

   else{
    const errorMess = document.getElementById("errorMessage");
    errorMess.style.display = "block";
    errorMess.textContent = "OOPS! Error😮...dekh kya raha hai, input sahi daal"
   }

}  

function bindData(articles){
    const allCardsContainer = document.getElementById("allCards");
    const newsCardTemplate = document.getElementById("templateOfCard");

    allCardsContainer.innerHTML = "";

    articles.forEach(myArticle => {
        if(!myArticle.urlToImage){
            return;
        } 

        const cardClone = newsCardTemplate.content.cloneNode(true);
        fillDataInCard(cardClone, myArticle);
        allCardsContainer.appendChild(cardClone);
    });
}

function fillDataInCard(cardClone, myArticle){
    const newsImg = cardClone.querySelector("#news-Image");
    const newsTitle = cardClone.querySelector("#news-Title");
    const newsDescription = cardClone.querySelector("#news-Description");
    const newsSource = cardClone.querySelector("#news-Source");

    newsImg.src = myArticle.urlToImage; // Assuming 'urlToImage' holds the image URL
    newsTitle.innerHTML = myArticle.title;
    newsDescription.innerHTML = myArticle.description;

    const date = new Date(myArticle.publishedAt).toLocaleString("en-US", {
        timeZone: "Asia/Jakarta"
    })
    newsSource.innerHTML = `${myArticle.source.name} •• ${date}`;
    cardClone.firstElementChild.addEventListener('click', () =>{
        window.open(myArticle.url, "_blank");
    })
}
