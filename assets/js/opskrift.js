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
