const buttonFiltreEl = document.querySelectorAll(".filterForside button");

buttonFiltreEl.forEach(button => {
    button.addEventListener("click", () => {
        const ulEl = button.nextElementSibling; // Finder det næste element i html --> ul (efter knappen)kilde: https://www.w3schools.com/Jsref/prop_element_nextelementsibling.asp

        // Luk alle andre
        document.querySelectorAll(".filterForside ul").forEach(ul => {
            //hvis det ikke den man klikkede på, så fjerner man class "open", så den åbner kun en liste af gangen. (!== ik lig med)
            if (ul !== ulEl) {
                ul.classList.remove("open");
            }
        });

        //Classlist gør at man kan ændre et element, tilføje eller fjerne (CSS classes), Kilde: https://developer.mozilla.org/en-US/docs/Web/API/Element/classList

        // Åbn og luk funktion på den valgte
        ulEl.classList.toggle("open");
    })
})

const recipeEl = document.querySelectorAll(".numbRecipeHidden");
const buttonEl = document.querySelector(".loadKnap");

let index = document.querySelectorAll(".numbRecipe").length;
const step = 12;

//Når man trykker på knappen, så skal det gøre med 12 opskriter for hver gang, hvis der ikke er flere elementer til sidst. 
//dernæst viser den dropdown boksen med remove og add classlist. og derefter rykke videre til næste opskrift ved hjælpe af index++. 

buttonEl.addEventListener("click", () => {
    for (let i = 0; i < step; i++) {
        if (recipeEl[index]) {
            recipeEl[index].classList.remove("numbRecipeHidden");
            recipeEl[index].classList.add("numbRecipe");
            index++;
        }
    }

    // hvis index er større eller lig med længden af opskrifter (recipeEl), så skal knappen fjernes. 
    if (index >= recipeEl.length) {
        buttonEl.style.display = "none";
    }
});