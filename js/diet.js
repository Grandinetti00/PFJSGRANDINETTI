function api() {

    let diet = document.getElementById("api");

    fetch("https://inshorts.deta.dev/news?category=all")

        .then(response => response.json())
        .then(responseJson => responseJson.data)
        .then(responseData => responseData.forEach(item => {

            createTags(diet, item.title, item.imageUrl, item.content)

        }))

        .catch(error => console.log(error))
};

function createTags(divOrigen, title, img, content) {

    let div = document.createElement("div")

    div.className = "card"
    div.innerHTML = `<h3 class="tituloApi">${title}</h3>
                        <p class="cardText">${content}</p>
                        <img src="${img}">
                     </div>`

    divOrigen.append(div)
}
api();



