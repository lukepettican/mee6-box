var quotes = [
    `I'm Mr Meeseeks LOOK AT ME!`, 
    `Existance is suffering!`,
    `No, Jerry, I’m the one who sucks!`,
    // `I can’t take it anymore. I just want to die!`,
    `Wubba lubba dub dubs! Yeah! That’s my new thing!`,
    `Nobody exists on purpose. Nobody belongs anywhere. We're all going to die. Come watch TV.`,
    `Love is just a chemical reaction...`,
    `Weddings are basically funerals with cake.`,
    `What about the reality where Hitler cured cancer, Morty? The answer is: don't think about it.`,
    `It's like the N word and the C word had a baby and it was raised by all the bad words for Jews.`,
    `I turned myself into a pickle. I'm Pickle Riiiiick!`,
    `I mean, why would a Pop-Tart want to live inside a toaster? `,
    `I’ll tell you how I feel about school - it’s a waste of time.`,
    `Having a family doesn’t mean that you stop being an individual.`,
    `... little biiitsss ...`
]

function showQuote() {
    var quote = quotes[Math.floor(Math.random() * quotes.length)];
    var cloud = document.getElementById('cloud');
    var button = document.getElementsByClassName('button')[0];
    cloud.setAttribute("style", "display : none");
    button.setAttribute("style", "display : none");
    var quoteElement = document.createElement('p');
    var node = document.createTextNode(quote);
    quoteElement.appendChild(node);
    quoteElement.classList.add('quote');
    var boxWrapper = document.getElementsByClassName('meeseeks-box-wrapper')[0];
    boxWrapper.classList.add('quoted');
    boxWrapper.appendChild(quoteElement);
}

function poof(element) {
    // Removes an element from the document
    element.parentNode.removeChild(element);
    var cloud = document.getElementById('cloud');
    cloud.setAttribute("style", "display : block");
    setTimeout(() => {
        showQuote();
    }, 500);
}
