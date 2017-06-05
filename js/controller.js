(function (window) {

  'use strict'

  function Controller (view, $) {
    var self = this;
    self.view = view;
    self.url = 'https://cors-anywhere.herokuapp.com/http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=';

    self.view.bind('newQuote', function () {
      $.ajax(self.url,{
        cache:false,
        success: function (response) {
          var data = response[0]
          self.view.render('clearQuote')
          self.view.render('showQuote', {text: data.content, author: data.title})
        }
      })
    })

    self.view.bind('newTweet', function () {
      self.view.render('tweetQuote')
    })
  }

  Controller.prototype.init = function () {
    var self = this;
    self.view.render('showQuote', {
      text:'<p>Roses are red, violets are blue. I wont send the job unless you pay me.</p>',
      author: 'Giulio Pinotti'
    })
  }

  window.app = window.app || {}
  window.app.Controller = Controller

}(window, $))
