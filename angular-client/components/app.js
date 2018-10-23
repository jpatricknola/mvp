angular.module('app')
  .controller('AppCtrl', function AppCtrl(itemsService) {
    // this.getHaiku = function () {
    //   itemsService.getHaiku(input);
    // };


    itemsService.getAll((works) => {
      console.log(this);
      this.works = works;
      console.log(this.works, 'array of haiku objects, inApp');
    });
  })
  .component('app', {
    bindings: {},
    controller: 'AppCtrl',
    templateUrl: '/templates/app.html',
  });
