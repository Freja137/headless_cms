const baseUrl = "https://test.albertefriis.dk/wp-json/";
const postsUrl = "wp/v2/posts/?per_page=100&acf_format=standard";

const params = new URLSearchParams(window.location.search);


function getAllPosts() {
    fetch(baseUrl + postsUrl)
        .then(res => res.json())
        .then(data => {
            console.log('data:', data)
            /* renderRecipe(data); */
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

/* const paramsString = window.location.search;
console.log('window.location:', window.location)
const searchParams = new URLSearchParams(paramsString);
console.log(searchParams.get("foo"));


if (window.location.pathname.includes("recipe")) {
    const slug = searchParams.get("slug");
    console.log("slug:", slug);
    async function getPostBySlug(slug) {
        try {
            const res = await fetch(baseUrl + postsUrl + "?acf_format=standard&slug=" + slug, {

            })
            const posts = await res.json();
            return (posts);
        } catch (err) {
            console.log("Fejl skete...", err)
        }

    }
    getPostBySlug(slug).then((sko) => renderRecipe(sko));
}


function renderRecipe(posts) {


    const containerEl = document.querySelector(".container");
    containerEl.innerHTML = "";

    console.log('posts', posts);

    posts.forEach(post => {

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
            <h2>${posts.acf.titel}</h2>
  <img src="${posts.acf.primaert_billede.sizes.medium_large}"></img>
  <p>${posts.acf.beskrivelse}</p>
  <h2>Ingredienser:</h2>
  <ul>
      ${ingredients.map(ing => `<li>${ing}</li>`).join("")}
  </ul>
  <p class="author">${posts.acf.forfatter[0].post_title}</p>
  <button><a href="recipe.html?&slug=${posts.slug}">Læs mere</a></button>
</article>`
    })

}
 */


