$(document).ready(function() {

  makeQuotes();

  function makeQuotes() {
    var quotes = ["I can't change the direction of the wind, but I can adjust my sails to always reach my destination.@Jimmy Dean ",
      "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.@Helen Keller ",
      "Start by doing what's necessary; then do what's possible; and suddenly you are doing the impossible.@Francis of Assisi ",
      "Perfection is not attainable, but if we chase perfection we can catch excellence.@Vince Lombardi ",
      "As we express our gratitude, we must never forget that the highest appreciation is not to utter words, but to live by them.@John F.Kennedy ",
      "Every story I create, creates me. I write to create myself.@Octavia E.Butler ",
      "My mission in life is not merely to survive, but to thrive; and to do so with some passion, some compassion, some humor, and some style.@Maya Angelou ",
      "Don't limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve.@Mary Kay Ash ",
      "We can't help everyone, but everyone can help someone.@Ronald Reagan "
    ];

    rndQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteAuthor = rndQuote.split("@");
    $('.quote_S').text(quoteAuthor[0]);
    $('.author').text(quoteAuthor[1]);
  }

  $(".button").on("click", function() {
    makeQuotes();
  });
});