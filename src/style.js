function displayRecipe(response) {

    new Typewriter('#recipe', {
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
        cursor: null,
    });
}

function generateRecipe(event) {
    event.preventDefault();

    let instructionsInput = document.querySelector("#user-instructions");
    let apiKey = "e520df23o0033b9f5bbe4tf4ae4a9b0f";
    let context = "You are a professional chef who helps people create quick easy short recipes with the ingredients in user's fridge. Write the recipes in basic html. Do not include the word html. Include measurements and cook time. Make quick easy recipes with the ingredients that people submit. Use bullet points for the recipe. Follow User instructions.";
    let prompt = `User instructions: Generate a recipe using ${instructionsInput.value}`;
    let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    let recipeElement = document.querySelector("#recipe");
    recipeElement.classList.remove("hidden");
    recipeElement.innerHTML = `<div class="generating">👩‍🍳 Creating an amazing recipe using ${instructionsInput.value} in my kitchen!</div>`;

    axios.get(apiURL).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener('submit', generateRecipe);
