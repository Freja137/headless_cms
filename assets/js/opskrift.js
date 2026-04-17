const baseUrl = "https://test.albertefriis.dk/wp-json/";
const postsUrl = "wp/v2/posts/?per_page=100&acf_format=standard";
/* 
const params = new URLSearchParams(window.location.search);


function getAllPosts() {
    fetch(baseUrl + postsUrl)
        .then(res => res.json())
        .then(data => {
            renderRecipe(data);
        })
        .catch(err => console.log("FEJL!", err))
}

getAllPosts()

async function getAllPostsByCategory(id) {

    try {
        const res = await fetch(baseUrl + postsUrl + "?acf_format=standard&categories=" + id, {

        })
        const posts = await res.json();
        renderRecipe(posts);
    } catch (err) {
        console.log("Fejl skete...", err)
    }
}

const paramsString = window.location.search;
console.log('window.location:', window.location)
const searchParams = new URLSearchParams(paramsString);
console.log(searchParams.get("foo"));


if (window.location.pathname.includes("recipe")) {
    const slug = searchParams.get("id");
    console.log("id:", id);
    async function getPostById(id) {
        try {
            const res = await fetch(baseUrl + postsUrl + "?acf_format=standard&id=" + id, {

            })
            const posts = await res.json();
            return (posts);
        } catch (err) {
            console.log("Fejl skete...", err)
        }

    }
    getPostById(id).then((sko) => renderRecipe(sko));
}



function renderRecipe(post) {


    const containerEl = document.querySelector(".container");
    containerEl.innerHTML = "";

    console.log('post', post);

    post.forEach(post => {

        let ingredients = [];
        for (const key in post.acf.ingredienser) {
            const value = post.acf.ingredienser[key];
            if (value) {

                ingredients.push(value)
            }
        }
        console.log('ingredients:', ingredients)
        containerEl.innerHTML +=
            `<article>
            <h2>${post.acf.titel}</h2>
  <img src="${post.acf.primaert_billede.sizes.medium_large}"></img>
  <p>${post.acf.beskrivelse}</p>
  <h2>Ingredienser:</h2>
  <ul>
      ${ingredients.map(ing => `<li>${ing}</li>`).join("")}
  </ul>
  <p class="author">${post.acf.forfatter[0].post_title}</p>
  <button><a href="recipe.html?&slug=${post.slug}">Læs mere</a></button>
</article>`
    })

}


 */

