// const ajax = require("node.ajax");

angular.module('app')
  .controller('AppCtrl', (itemsService) => {
    itemsService.getAll((data) => {
      this.works = data;
    });
  })
  .component('app', {
    bindings: {},
    controller: 'AppCtrl',
    templateUrl: '/templates/app.html',
  });
