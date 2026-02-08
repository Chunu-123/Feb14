const quotesDiv = document.querySelector(".quotes");
const fpNameEl = document.querySelector("#fpname");
const spNameEl = document.querySelector("#spname");

const proposeQuotes = [
  `I Want to spend my today, tomorrow, my entire life with you, I wanna grow old with-you, I love Youuu`,
  `From the moment you walked into my life, my heart choose you. Will you be mine forever?`,
  `I'm not a genie, but I can make your dreams come true. Will you be my wish?`,
  `Are you a camera? Every time I look at you, I smile. Will you be the reason for my happiness?`,
  `Is your name Wi‑fi? Because I'm feeling a connection. Will you be my forever signal?`,
  `Excuse me, but I think you dropped something: MY JAW. Will you pick it up and be my valentine?`,
  `Do you have a map? Because I just got lost in your eyes, and now I need directions to your heart.`,
  `I was blinded by your beauty; I'm going to need your name and number for insurance purposes.`,
  `You're the answer to my prayers. Will you make my dreams come true by being mine?`,
  `If kisses were snowflakes, I'd send you a blizzard. Will you be my snow queen?`
];

fetch('config.json')
  .then(response => response.json())
  .then(config => {
    // Set names from configuration.
    fpNameEl.innerText = config.fpName;
    spNameEl.innerText = config.spName;
    
    // Update Instagram profile link and name.
    const instagramProfileLink = document.getElementById('instagramProfileLink');
    const instagramProfileNameElement = document.getElementById('instagramProfileName');
    instagramProfileLink.href = `https://instagram.com/${config.instagramUsername}`;
    instagramProfileNameElement.textContent = config.instagramProfileName;
    
    const quotesNr = proposeQuotes.length;
    
    for (let i = 0; i < quotesNr; i++) {
      const link = document.createElement('a');
      link.setAttribute('href', 'card.html?source=propose');
      const para = document.createElement("p");
      para.classList.add("quote");
      para.innerText = proposeQuotes[i];
      link.appendChild(para);
      quotesDiv.appendChild(link);
    }
    
    // Add click listener on each quote to save the chosen quote to localStorage.
    const quoteDivs = document.querySelectorAll(".quote");
    quoteDivs.forEach(quote => {
      quote.addEventListener('click', function (e) {
        const chosenQuote = e.target.innerText;
        localStorage.setItem("chosenQuote", chosenQuote);
      });
    });
  })
  .catch(error => console.error('Error loading config:', error));

