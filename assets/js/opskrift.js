// Laver en eventlistener som lytter efter, hvornår musen hover over ikonet og ved gem ikonet fylder det dét ud. 
document.addEventListener("mouseover", function (e) {
    const span = e.target.closest(".ikoner span"); // Finder det nærmeste span ikon, hvis det har et bookmark skifter class'en fra tom til at være fyldt ud.
    if (span && span.querySelector(".fa-bookmark")) {
        span.querySelector("i").classList.replace("fa-regular", "fa-solid");
    }
});

// Når musen ikke hover over ikonet, skfiter class'en tilbage til regular, så det bliver tomt igen.
document.addEventListener("mouseout", function (e) {
    const span = e.target.closest(".ikoner span");
    if (span && span.querySelector(".fa-bookmark")) {
        span.querySelector("i").classList.replace("fa-solid", "fa-regular");
    }
});

const baseUrl = "https://test.albertefriis.dk/wp-json/";
const postsUrl = "wp/v2/posts/?per_page=100&acf_format=standard";

const params = new URLSearchParams(window.location.search);

// Mapping from HTML filename (without .html) to WordPress post slug
const slugMap = {
    "appledonut": "donuts-med-aeble",
    "applesalad": "frisk-aeble-og-valnoed-salat",
    "avocado": "grillede-sandwich-m-avocado-groenkaal-og-pesto",
    "banana": "hjemmelavede-bananchips",
    "bowl": "quinoa-burrito-bowl",
    "chorizo": "staerk-soja-chorizo-roeraeg",
    "cookies": "glutenfri-chocolate-chip-cookies",
    "cornbread": "glutenfri-majs-broed",
    "cupcakes": "jordbaer-milkshake-cupcakes",
    "eggs": "scramble-eggs",
    "granola": "sukker-og-krydderi-og-alt-muligt-laekkert-granola",
    "greensoup": "groentsags-suppe",
    "kale": "bagte-groenkaalschips",
    "lasagne": "lasagne",
    "lemoncake": "smaa-citron-kager",
    "lemoncurd": "hjemmelavet-lemon-curd",
    "macncheese": "mac-and-cheese",
    "meatball": "spaghetti-og-koedboller",
    "nugget": "hjemmelavet-chicken-nuggets",
    "pestopasta": "basilikumspesto-pasta",
    "pineapple": "ananas-jordbaersalat",
    "pizza": "margherita-pizza-napoletana-style",
    "pumpkindonut": "graeskar-donuts",
    "pumpkinpie": "graeskartaerte",
    "ragu": "svampe-ragu",
    "rolls": "overnight-cinnamon-rolls",
    "sandwichbread": "glutenfri-sandwich-broed",
    "sweetburrito": "soede-kartoffel-burritos",
    "tikka": "vegetarisk-tikka-masala",
    "turkeysoup": "kalkunnudelsuppe",
    "vegchili": "vegetarisk-chili",
    "yogcake": "fransk-yoghurt-kage"
};

function getAllPosts() {
    fetch(baseUrl + postsUrl)
        .then(res => res.json())
        .then(data => {
            renderRecipe(data);
        })
        .catch(err => alert("Hov der skete en fejl!"))
}


//window.location.pathname henter URL-stien — f.eks. /opskrifter/pasta.html og .split("/") splitter stien op ved hver / og laver et array: ["", "opskrifter", "pasta.html"]
const pathParts = window.location.pathname.split("/");

// pathParts.length - 1 er indekset på det sidste element i arrayet. Så filename bliver fx "pasta.html".
const filename = pathParts[pathParts.length - 1];

// .replace(/\.html$/i, "") fjerner .html fra slutningen af filnavnet. 
const pageName = filename.replace(/\.html$/i, "").toLowerCase();

if (slugMap[pageName]) {
    // Fetch den specifikke opskrift via dens slug i wordpress.
    const wpSlug = slugMap[pageName];

    fetch(baseUrl + "wp/v2/posts/?acf_format=standard&slug=" + wpSlug)
        .then(res => res.json())
        .then(data => {

            // hvis data er true og data.length er større end 0, køres det her statement.
            if (data && data.length > 0) {
                renderRecipe(data);
            } else {
                getAllPosts();
            }
        })
        .catch(err => alert("FEJL ved hentning af opskrift!", err));
} else {
    getAllPosts();
}

async function getAllPostsByCategory(id) {
    try {
        const res = await fetch(baseUrl + postsUrl + "?acf_format=standard&categories=" + id, {})
        const posts = await res.json();
        renderRecipe(posts);
    } catch (err) {
        alert("Fejl skete...", err)
    }
}


const paramsString = window.location.search;
const searchParams = new URLSearchParams(paramsString);


if (window.location.pathname.includes("recipe")) {
    const slug = searchParams.get("id");
    async function getPostById(id) {
        try {
            const res = await fetch(baseUrl + postsUrl + "?acf_format=standard&id=" + id, {})
            const posts = await res.json();
            return (posts);
        } catch (err) {
            alert("Fejl skete...", err)
        }

    }
    getPostById(slug).then((opskrift) => renderRecipe(opskrift));
}

function renderRecipe(post) {
    const containerEl = document.querySelector(".container");
    containerEl.innerHTML = "";

    post.forEach(post => {

        // Her henter vi alle values i et objekt, derefter filtrer vi det med .filter hvor vi tjekker om det inhold der kommer ud er en string og ikke er et tal osv. Til sidst bruger vi .trim for at sikre os at der er indhold i objekt, så der ikke kommer tomme listepunkter på siden.
        const ingredients = Object.values(post.acf.ingredienser).filter(v => typeof v === "string" && v.trim() !== "");

        //definerer en variabel for fremgangsmåden.
        const fremgangsmadeRaw = post.acf.fremgangsmade;
        let stepsHtml = "";

        // Hej tjekker vi om der er indhold i vores ovenstående variabel, derefter om indholdet er et objekt og til sidst tjekker den om indholdet er et array eller ej. Hvis det er, kører den ikke. Der bruges && for at tjekke om alle "statements" er true.
        if (
            fremgangsmadeRaw &&
            typeof fremgangsmadeRaw === "object" &&
            !Array.isArray(fremgangsmadeRaw)
        ) {
            const steps = Object.values(fremgangsmadeRaw).filter(
                e => typeof e === "string" && e.trim() !== ""
            );

            stepsHtml = `
              <h2>Fremgangsmåde:</h2>
              <div class="steps-list">
                ${steps.map(step => `
                  <label class="step-item">
                    <input type="checkbox">
                    <span>${step}</span>
                  </label>
                `).join("")}
              </div>
            `;
        }

        containerEl.innerHTML +=
            `<article>
            <h2 class = "titelRecipe">${post.acf.titel}</h2>
            <div class="recipe-top">
                <img src="${post.acf.primaert_billede.sizes.medium_large}" class = "image-Recipe"></img>

                <div class = "recipe-text">
                    <p>${post.acf.beskrivelse}</p>

                    <div class="ikoner">
                        <span><i class="fa-regular fa-bookmark"></i> Gem</span>
                        <span><i class="fa-solid fa-plus"></i> Føj til indkøbsliste</span>
                    </div>
                </div>
                
            </div>
            <div class = "filter-icons">
                <span><i class="fa-regular fa-clock" id = "cookingtime"></i>${post.acf.tilberedningstid[0].name}</span >
                <span><i class="fa-solid fa-utensils" id = "servings"></i>${post.acf.antal_portioner}</span>
                <span><img src="../assets/img/chef_hat.png" class = "chef-hat">${post.acf.svaerhedsgrad[0].name}</img></span>
            </div >
            <div class = "recipe-bottom">

                <div class = "ingredients">
                    <h2>Ingredienser:</h2>
                    <ul>${ingredients.map(ing => `<li>${ing}</li>`).join("")}</ul>
                     <button class = "print-recipe"><i class="fa-solid fa-print"></i>Udskriv</button>
                </div>

                <div class = "steps">
                    ${stepsHtml}
                </div>
            
            </div>
            <article class = "tips-section">
                <h3>Tips:</h3>
                <p>${post.acf.tips}</p>
            </article>
</article > `
    })

}


