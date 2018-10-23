

angular.module('app')
  .controller('AppCtrl', (itemsService) => {
    itemsService.getAll((works) => {
      this.works = works;
    });
  })
  .component('app', {
    bindings: {},
    controller: 'AppCtrl',
    templateUrl: '/templates/app.html',
  });
