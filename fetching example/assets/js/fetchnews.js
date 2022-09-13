const apiData = []

const fetchNews = () => {

    const apiEndpoint = 'https://newsapi.org/v2/everything?q=tesla&from=2022-08-07&sortBy=publishedAt&apiKey=f83e5056cc7749409aa864c1d2438641';

    // endpoint er den url jeg far data fra
    fetch(apiEndpoint)
    //response er serverns response til mig i fald det lykkes () at nå mit endpoint
    .then((response) => {
        if(response.status == 200) {
            return response.json();
        }
    })
    // data er det json jeg har returneret ud fra mit response
    .then((data) => {
        // console.log(data.articles);
        apiData.push(data.articles);
    })
    // catch er hvis mit promise bliver rejected
    .catch((error) => {
        console.error(error);
    })
    .finally(() => {
        // er når alt foregående er lykkes
        // console.log("awega");

        apiData[0].map((news) => createCards(news));
        
    })

};

const createCards = (data) => {

    document.getElementById("mother").innerHTML += `
    <figure class="card" >
    <img src=${data.urlToImage} alt=${data.title} >
    <article class="container" >
    <h2> ${data.title} </h2>
    <p> ${data.author} </p>
    <p> ${data.description} </p>
    <p> ${data.publishedAt} </p>
    <a href=${data.url} target="_blank" > læs mere> </a>
    </article>
    </figure>
    `
}

fetchNews();