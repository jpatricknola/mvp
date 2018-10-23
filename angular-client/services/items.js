

angular.module('app')
  .service('itemsService', function itemsService($http) {
    this.getAll = (callback) => {
      console.log('sending get request')
      $http({
        method: GET,
        url: '/works',
      })
        .then((result) => {
          console.log(result);
          callback(result);
        })
        .catch((err) => {
          console.log(err);
          callback([]);
        });
    };
    // this.getWords = (word, callback) => {
    //   const selector = 'synonyms';
    //   let results = [];
    //   const randos = [];
    //   $http({
    //     method: 'GET',
    //     url: `https://wordsapiv1.p.mashape.com/words/${word}/${selector}`,
    //     headers: {
    //       'Content-Type': 'application/json',
    //       'X-Mashape-Key': '6U2CKCVZRgmsha22w8iMjsZvezrwp1FRLd2jsnqtGBtMZpyIuj',
    //       'X-Mashape-Host': 'wordsapiv1.p.mashape.com',
    //     },
    //   })
    //     .then(({ data }) => {
    //       results = results.concat(data.synonyms);
    //       $http({
    //         method: 'GET',
    //         url: `https://wordsapiv1.p.mashape.com/words/${word}/also`,
    //         headers: {
    //           'Content-Type': 'application/json',
    //           'X-Mashape-Key': '6U2CKCVZRgmsha22w8iMjsZvezrwp1FRLd2jsnqtGBtMZpyIuj',
    //           'X-Mashape-Host': 'wordsapiv1.p.mashape.com',
    //         },
    //       })
    //         .then((result) => {
    //           console.log(result.data);
    //           results = results.concat(data.synonyms);
    //           console.log(results);
    //           $http({
    //             method: 'GET',
    //             url: 'https://wordsapiv1.p.mashape.com/words/?random=true',
    //             headers: {
    //               'Content-Type': 'application/json',
    //               'X-Mashape-Key': '6U2CKCVZRgmsha22w8iMjsZvezrwp1FRLd2jsnqtGBtMZpyIuj',
    //               'X-Mashape-Host': 'wordsapiv1.p.mashape.com',
    //             },
    //           })
    //             .then((rando) => {
    //               console.log(rando, 'rando');
    //             });
    //         });
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    };
  });
// .get("https://wordsapiv1.p.mashape.com/words/lovely/synonyms")
// .header("X-Mashape-Key", "<required>")
// .header("Accept", "application/json")
