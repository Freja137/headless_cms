
//DROPDOWN MENU
//Tilføjer en eventlistener, som lytter efter et klik
document.addEventListener("click", (e) => {
    // Finder det nærmeste element med klassen .dropdown-toggle, som der er klikket på
    const toggle = e.target.closest(".dropdown-toggle");

    // Luk alle dropdowns hvis der klikkes udenfor
    document.querySelectorAll(".dropdown").forEach(dropdown => {
        // Hvis der klikkes udenfor dropdown-elementet, lukkes dropdownen
        if (!dropdown.contains(e.target)) {
            dropdown.classList.remove("open");
            dropdown.querySelector(".nav-dropdown").classList.remove("show");
        }
    });

    // Hvis der klikkes på en toggle-knap, åbnes eller lukkes den tilhørende dropdown
    if (toggle) {
        const dropdown = toggle.closest(".dropdown");
        const menu = dropdown.querySelector(".nav-dropdown");

        dropdown.classList.toggle("open");
        menu.classList.toggle("show");
    }
});

// ID på opskrift
const recipe = 7;

// ID på taxonomies
const allergies = 7;
const type = 253;
const preference = 101;
const season = 255;
const difficulty = 97;
const time = 75;

// ID på filtre til allergier
const glutenFree = 22;
const dairyFree = 23;
const nutFree = 24;
const shellFishFree = 25;

// ID på kategori til præferencer
const fish = 28;
const meat = 29;
const vegan = 26;
const vegetarian = 27;

// ID på kategori sæson
const spring = 43;
const summer = 42;
const autumn = 41;
const winter = 44;

// ID på filtre til sværhedsgrad
const beginner = 15;
const intermediate = 16;
const advanced = 17;

// ID på til tid - Både kategori og filtre
const under15 = 12;
const under30 = 18;
const under45 = 19;
const under60 = 20;
const over60 = 21;

// ID på opskrifter
const ragu = 234;
const kartoffelBur = 243;
const ananasSalad = 248;
const eggs = 199;
const pestoPasta = 201;
const appleSalad = 203;
const greenSoup = 205;
const cornBread = 197;
const yogurtCake = 212;
const appleDonut = 214;
const macnCheese = 216;
const pumpkinDonut = 218;
const chickenNugget = 220;
const lasagne = 245;
const meatballs = 241;
const vegchili = 239;
const turkeySoup = 237;
const pumpkinPie = 235;
const overnightRolls = 232;
const pizza = 230;
const bananaChips = 228;
const kaleChips = 225;
const cookies = 223;
const lemonCakes = 194;
const glutenBread = 191;
const milkshakesCupcakes = 181;
const tikkaMasala = 141;
const burritoBowl = 137;
const lemonCurd = 134;
const granola = 130;
const chorizo = 125;
const avocadoToast = 108;
