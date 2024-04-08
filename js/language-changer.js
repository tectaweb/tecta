const languages = {
    en: {
        tecta:"ტეცტა",
        buttonText: "Change Language"
    },
    Eng: {
        tecta: "ტექტა",
        buttonText: "Cambiar Idioma"
    },
    // Add more languages as needed
};

// Initial language
let currentLanguage = 'en';

// Function to change the language
function changeLanguage() {
    // Toggle between available languages (in this case, English and Spanish)
    currentLanguage = currentLanguage === 'en' ? 'es' : 'en';

    // Update the content on the page
    updateContent();
}

// Function to update the content based on the selected language
function updateContent() {
    document.getElementById('heading').textContent = languages[currentLanguage].heading;
    document.getElementsByTagName('button')[0].textContent = languages[currentLanguage].buttonText;
}