


var quotes=[
    `“Do one thing every day that scares you.”<br>
    ― Eleanor Roosevelt`,
    `“We are what we pretend to be, so we must be careful about what we pretend to be.”<br>
    ― Kurt Vonnegut, Mother Night`,
    `“Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.”<br>
    ― Roy T. Bennett, The Light in the Heart`,
    `“We delight in the beauty of the butterfly, but rarely admit the changes it has gone through to achieve that beauty.”<br>
    ― Maya Angelou`,
    `“You only live once, but if you do it right, once is enough.”<br>
    ― Mae West`,
    `“To live is the rarest thing in the world. Most people exist, that is all.”<br>
    ― Oscar Wilde`,
    `“It is better to be hated for what you are than to be loved for what you are not.”<br>
    ― Andre Gide, Autumn Leaves`,
    `“There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.”<br>
    ― Albert Einstein`,
    `“Good friends, good books, and a sleepy conscience: this is the ideal life.”<br>
    ― Mark Twain`,
    `“Life is what happens to us while we are making other plans.”<br>
    ― Allen Saunders`,
   ]

function getQuote(){
    var x = Math.floor(Math.random()*quotes.length)

    document.getElementById('getquote').innerHTML=quotes[x]
}
