let lastQuoteIndex = -1; 

function generateQuote() {
  const quotes = [
    {
      text: "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.",
      author: "H. Jackson Brown Jr., P.S. I Love You"
    },
    {
      text: "It is better to be hated for what you are than to be loved for what you are not.",
      author: "Andre Gide, Autumn Leaves"
    },
    {
      text: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
      author: "Ralph Waldo Emerson"
    },
    {
      text: "Without music, life would be a mistake.",
      author: "Friedrich Nietzsche, Twilight of the Idols"
    },
    {
      text: "A friend is someone who knows all about you and still loves you.",
      author: "Elbert Hubbard"
    },
    {
      text: "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
      author: "J.K. Rowling, Harry Potter and the Goblet of Fire"
    }
  ]
  let randomIndex;
  
 
  do {
    randomIndex = Math.floor(Math.random() * quotes.length);
  } while (randomIndex === lastQuoteIndex);

  lastQuoteIndex = randomIndex; 

  const randomQuote = quotes[randomIndex];

 
  document.getElementById("quote").textContent = `"${randomQuote.text}"`;
  document.getElementById("author").textContent = `-- ${randomQuote.author}`;


  localStorage.setItem("selectedQuote", JSON.stringify(randomQuote));
}

function loadQuote() {
  const quoteElement = document.getElementById("quote");
  const authorElement = document.getElementById("author");

  quoteElement.textContent = "";
  authorElement.textContent = "";


  localStorage.removeItem("selectedQuote");
}
window.onload = loadQuote;

  