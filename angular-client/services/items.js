angular.module('app')
  .service('itemsService', function itemsService($http) {
    this.getAll = (callback) => {
      $http.get('wordsapiv1.p.mashape.com/words/try/rhymes')
        .then(({ data }) => {
          if (callback) {
            callback(data);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };
  });
