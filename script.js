// variables 

let btn = document.querySelector('#new-quote')
let quote = document.querySelector('.quote')

let person = document.querySelector('.person')


const quotes = [ {
   quote: "“Here's to the crazy ones. The misfits. The rebels. The troublemakers. The round pegs in the square holes. The ones who see things differently. They're not fond of rules. And they have no respect for the status quo. You can quote them, disagree with them, glorify or vilify them. About the only thing you can't do is ignore them. Because they change things. They push the human race forward. And while some may see them as the crazy ones, we see genius. Because the people who are crazy enough to think they can change the world, are the ones who do. ",
   person: "― Steve Jobs " 
}, {
    quote: "I believe that everything happens for a reason. People change so that you can learn to let go, things go wrong so that you appreciate them when they're right, you believe lies so you eventually learn to trust no one but yourself, and sometimes good things fall apart so better things can fall together. ",
    person: "― Marilyn Monroe " 
 }, {
    quote: " Success seems to be connected with action. Successful people keep moving. They make mistakes, but they don't quit",
    person: "  —Conrad Hilton" 
 }, {
    quote: "Success in business requires training and discipline and hard work. But if you're not frightened by these things, the opportunities are just as great today as they ever were. ",
    person: "—David Rockefeller " 
 }, {
    quote: "Talent is nothing without persistence. ",
    person: " —Dean Crawford " 
 }, {
    quote: "If you get tired, learn to rest, not to quit. ",
    person: " —Banksy " 
 }, {
    quote: "Dream is not that which you see while sleeping it is something that does not let you sleep. ",
    person: "-Dr APJ Abdul Kalam " 
 }, {
    quote: "If you fail, never give up because FAIL means ‘First attempt in learning.’ ",
    person: "-Dr APJ Abdul Kalam " 
 }, {
    quote: " To become 'unique,' the challenge is to fight the hardest battle which anyone can imagine until you reach your destination.",
    person: "-Dr APJ Abdul Kalam " 
 },]

 btn.addEventListener('click',function () {
    let random = Math.floor(Math.random() * quotes.length)
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
 })