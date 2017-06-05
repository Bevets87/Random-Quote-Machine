(function(window){

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
    this.$quoteText = document.getElementById('text');
    this.$quoteAuthor = document.getElementById('author');
}


  View.prototype.bind = function (event, handler) {
    var self = this;
    if (event == 'newQuote') {
      self.$quoteButton.addEventListener('click', function (event) {
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
      }
    }
    viewCommands[cmd]();
  }

  window.app = window.app || {};
  window.app.View = View
}(window))
