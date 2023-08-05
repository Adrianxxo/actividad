const reasons = [
    "Me encanta cómo sonríes",
    "Tu bondad es inspiradora",
    "Eres la persona más inteligente que conozco",
    "Me haces sentir amado todos los días",
    "Tus abrazos son el mejor lugar del mundo",
    "Contigo siempre me siento feliz",
    "Admiro tu fortaleza y determinación",
    "Eres lo mejor que me ha pasado",
    "Tienes un corazón increíble",
    "Nuestros momentos juntos son inolvidables",
    "Te extraño muchisimo",
    "Quiero volverte a dar besos",
    "Necesito volverte a tener cerca"
];

document.getElementById("generateButton").addEventListener("click", () => {
    const inputName = document.getElementById("inputName").value;
    if (inputName) {
        const randomReason = getRandomReason();
        const displayReason = ` ${inputName}. ${randomReason}`;
        document.getElementById("reasonDisplay").innerText = displayReason;
    } else {
        alert("Por favor, ingresa tu nombre antes de generar una razón.");
    }
});

function getRandomReason() {
    return reasons[Math.floor(Math.random() * reasons.length)];
}
