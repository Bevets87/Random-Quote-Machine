(function (window) {

  'use strict'

  function App () {
    this.view = new app.View()
    this.controller = new app.Controller(this.view, $)
  }

  var RandomQuoteMachine = new App()

  window.onload = RandomQuoteMachine.controller.init()

}(window));
