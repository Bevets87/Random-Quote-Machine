(function (window) {

  'use strict'

  function App () {
    this.view = new window.app.View()
    this.controller = new window.app.Controller(this.view, $)
  }

  var RandomQuoteMachine = new App()

  window.onload = RandomQuoteMachine.controller.init()

}(window));