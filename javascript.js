// Model
const advice = ['Mest sannsynlig', 'Ikke regn med det', 'Uten tvil',
    'Det er umulig å svare på', 'Spør igjen senere', 'Jeg sier JA',
    'Det ser dårlig ut', 'Det er definitivt ett ja',
    'Det kan jeg ikke gi deg et godt svar på', 'Meget usikker på det du'];
let receivedAdvice = '';
let lastAdvice = 0; // initialiserer lastAdvice til 0 slik at det første advicet ikke blir skippet

// View
updateView();
function updateView() {
    document.getElementById('app').innerHTML = /*HTML*/ `
    <div id="container">
    <div id="outerCircleBall"><div id="innerCircleBall">8</div></div>
        <div id="description"><i>Still meg ett ja eller nei spørsmål, og du vil få svar</i></div>
        <input id="userInput" type="text">
        <button id="button" onclick="shakeBall()">*Rist på kula*</button>
        <div id="receiveAdvice"></div>
    </div>
    `;
}

// Controller
function shakeBall() {
    let userInput = document.getElementById('userInput').value;
    if (userInput.trim() === '') {
        document.getElementById('receiveAdvice').innerHTML = 'Du må skrive noe før du kan trykke på knappen';
        return;
    }

    let randomAdviceIndex = generateUniqueAdvice();
    receivedAdvice = advice[randomAdviceIndex];
    document.getElementById('receiveAdvice').innerHTML = receivedAdvice;
    document.getElementById('userInput').value = '';
}

function generateUniqueAdvice() { // funksjon som genererer et tilfeldig advice fra arrayet, som sikrer at det er det samme som det forrige
    let newAdvice;
    do {
        newAdvice = Math.floor(Math.random() * advice.length);
    } while (newAdvice === lastAdvice);
    lastAdvice = newAdvice; // oppdaterer lastAdvice med det nye advicet
    return newAdvice; // returnerer the nye advicet
}