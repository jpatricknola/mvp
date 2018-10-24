angular.module('app')
  .controller('AppCtrl', function AppCtrl(itemsService) {
    itemsService.getAll((works) => {
      this.works = works.reverse();
      console.log(this.works, 'array of haiku objects, inApp');
    });
    this.getHaiku = (input) => {
      itemsService.getHaiku(input);
      // const obj = {
      //   title: 'FAKE',
      //   first: 'just a test',
      //   second: 'definitely just a test',
      //   third: 'still a test',
      // };
      // itemsService.postReq(obj);
      setTimeout(() => {
        window.location.reload();
      }, 4000);
    };
  })
  .component('app', {
    bindings: {},
    controller: 'AppCtrl',
    templateUrl: '/templates/app.html',
  });
