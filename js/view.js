(function (window) {

  'use strict'

  //helper functions

  function getRandomColor () {
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
      return 'rgba('+ r +','+ g +','+ b +',0.3)'
  }

  function View () {
    this.$body = document.getElementsByTagName('body');
    this.$quoteButton = document.getElementById('new-quote');
    this.$tweetButton = document.getElementById('new-tweet');
    this.$quoteText = document.getElementById('text');
    this.$quoteAuthor = document.getElementById('author');
}


  View.prototype.bind = function (event, handler) {
    var self = this;
    if (event == 'newQuote') {
      self.$quoteButton.addEventListener('click', function (event) {
        event.preventDefault()
        handler()
      })
    }
    if (event == 'newTweet') {
      self.$tweetButton.addEventListener('click', function (event) {
        event.preventDefault()
        handler()
      })
    }
  }

  View.prototype.render = function (cmd, quote) {
    var self = this;
    var viewCommands = {
      clearQuote: function () {
        self.$quoteText.innerText = '';
        self.$quoteAuthor.innerText = '';
      },
      showQuote: function () {
        self.$body[0].style.background = getRandomColor();
        self.$quoteText.innerHTML = quote.text;
        self.$quoteAuthor.innerText = quote.author;
      },
      tweetQuote: function () {
        var tweet = encodeURI('"' + self.$quoteText.firstChild.innerText + '"' + self.$quoteAuthor.innerText);
        window.open('http://twitter.com/intent/tweet?text=' + tweet, '_blank')
      }
    }
    viewCommands[cmd]();
  }

  window.app = window.app || {};
  window.app.View = View
}(window))
