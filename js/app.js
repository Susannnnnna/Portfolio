var quotesLength;
var randomQuoteIndex;
var randomQuoteText;
const quotes = [
    "Will you regret if you do not do this?",
    "If the world were as we imagine it, it would be completely differen.",
    "Human can do what he wants, but it is not up to him to decide what he wants.",
    "The power of science in not being afraid of reinvent things.",
    "Life is not about finding yourself, it is about creating yourself.",
    "Life is a tragedy for those who feel, and a comedy for those who think.",
    "When you understand the game you do not panic.",
    "We are the raw material from which dreams are made, and life is a waking moment between two dreams.",
    "It was found that the brain expects what it should see, inferring from the accumulated knowledge and what has happened before. It prepares a predicted picture of what the eyes should see. This information travels from the brain to the eyes, overcoming a whole series of intermediate points. Nervous systems only send signals to the brain when a discrepancy is detected between what the brain expected and the light reaching the eyes. Thus, images of our surroundings are not transmitted from the eyes to the brain - only information about incompatibility with what the brain expects reaches there.",
    "80% of our individual bad behavior is attributable to version of ourselfe that exist only 20% of the time.",
    "To replace programmers with AI, clients will need to accurately describe what they want.",
    "The stage at which the naked monkey is now is also a temporary, relatively primitive stage of development. In time we will be evolutionarily replaced by beings who will be separated from us by a gap much larger than the one that separates us from ants. [...] To speak with certainty about anything is therefore not only insolence, but what is worse - tactless.",
    "Before you heal someone, ask him if he is willing to give up the things that makes him sick.",
    "Do not say things you do not mean and do not go with things you do not agree with.",
    "The world will ask you who you are, and if you do not know the world will tell you.",
    "Everything that irritates us about others can lead us to an understanding of ourselves.",
    "If you get tired, learn to rest. Not to quit.",
    "If having a coffee in the morning does not wake you up, try deleting a table in a production database insted.",
    "Nothing can destroy iron, only its own rust can. Likewise, nothing can destroy you, only your own mindset can.",
    "Treat yourself like a Porsche.",
    "How does mom wake up an eight? Get up, you can not stay like this forever.",
    "What does zero say to eight - nice bar.",
    "The integral enters the train, and this is not its interval.",
    "Talent without hard work is nothing.",
    "There are two ways to live life. One is to live as if nothing is a miracle. The second is to live as if everything were a miracle.",
    "Our life is what our thoughts make it.",
    "There is nothing permanent except change.",
    "Never give up on a dream just because it takes time to realize it. Time will pass anyway.",
    "The greatest glory is not in never falling, but in being able to get up every time we fall.",
    "If you cannot fly, run. If you cannot run, walk. If you cannot walk, crawl. Whatever you do, keep moving forward.",
    "Success is the sum of small efforts repeated day after day.",
];

function randomQuote() {

    quotesLength = quotes.length;
    randomQuoteIndex = Math.floor(Math.random() * quotesLength);
    randomQuoteText = quotes[randomQuoteIndex];
   
    document.getElementById("quote").innerHTML = randomQuoteText;

};
