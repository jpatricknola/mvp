
const headers = {
  'Content-Type': 'application/json',
  'X-Mashape-Key': '6U2CKCVZRgmsha22w8iMjsZvezrwp1FRLd2jsnqtGBtMZpyIuj',
  'X-Mashape-Host': 'wordsapiv1.p.mashape.com',
};

angular.module('app')
  .service('itemsService', function itemsService($http) {
    // FETCH ALL HAIKUS IN DATABASE, TRIGGERED ON PAGE LOAD
    this.getAll = (callback) => {
      console.log('sending get request');
      $http({
        method: 'GET',
        url: '/works',
      })
        .then((response) => {
          callback(response.data);
        })
        .catch((err) => {
          console.log(err, 'ERR IN SERVICE');
          callback(err);
        });
    };


    // CREATE A NEW HAIKU, TRIGGERED ON CLICK EVENT
    // this.getHaiku = (word, callback) => {
    //   const haikuObj = {
    //     title: word,
    //     first: 'just a test',
    //     second: 'definitely just a test',
    //     third: 'still a test',
    //   };
    //   let syns;

    //   $http({
    //     method: 'GET',
    //     url: `https://wordsapiv1.p.mashape.com/words/${word}/synonyms/`,
    //     headers,
    //   })
    //     .then(({ data }) => {
    //       syns = data.synonyms;
    //       console.log(syns);
    //       if (!syns.length) {
    //         $http({
    //           method: 'GET',
    //           url: 'https://wordsapiv1.p.mashape.com/words?random=true/&syllables=5',
    //           headers,
    //         }).then((randomWord) => {
    //           haikuObj.first = randomWord;
    //           console.log(randomWord.data);
    //         });
    //       } else {
    //         // const index = Math.floor(Math.random() * syns.length);
    //         // console.log(index);
    //         const newWord = syns[0];
    //         $http({
    //           method: 'GET',
    //           url: `https://wordsapiv1.p.mashape.com/words/${newWord}/syllables/`,
    //           headers,
    //         }).then((result) => {
    //           const num = 5 - result.data.syllables.count;
    //           console.log(num);
    //           if (num >= 0) {
    //             haikuObj.first = result.data.word;
    //           } if (num > 0) {
    //             $http({
    //               method: 'GET',
    //               url: `https://wordsapiv1.p.mashape.com/words?random=true&syllables=${num}`,
    //               headers,
    //             }).then((word2) => {
    //               console.log(word2.data.word);
    //               haikuObj.first += ' ';
    //               haikuObj.first += word2.data.word;
    //             })
    //               .catch((err) => {
    //                 console.log(err);
    //               });
    //           }
    //         });
    //       }
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     }).then(() => {
    //       $http({
    //         method: 'GET',
    //         url: 'https://wordsapiv1.p.mashape.com/words?random=true&syllables=3&partOfSpeech=noun',
    //         headers,
    //       }).then((rando) => {
    //         console.log(rando);
    //         haikuObj.second = rando.data.word;
    //       }).then(() => {
    //         $http({
    //           method: 'GET',
    //           url: 'https://wordsapiv1.p.mashape.com/words?random=true&syllables=4',
    //           headers,
    //         }).then((randoword2) => {
    //           haikuObj.second += ' ';
    //           haikuObj.second += randoword2.data.word;
    //           console.log(haikuObj);
    //         });
    //       });
    //     })
    //     .then(() => {
    //       $http({
    //         method: 'GET',
    //         url: 'https://wordsapiv1.p.mashape.com/words?random=true&syllables=2&partOfSpeech=adjective',
    //         headers,
    //       }).then((rando3a) => {
    //         haikuObj.third = rando3a.data.word;
    //         $http({
    //           method: 'GET',
    //           url: 'https://wordsapiv1.p.mashape.com/words?random=true&syllables=3&partOfSpeech=noun',
    //           headers,
    //         })
    //           .then((rando3b) => {
    //             haikuObj.third += ' ';
    //             haikuObj.third += rando3b.data.word;
    //             console.log(haikuObj);
    //           });
    //       });
    //     })
    //     .then(() => {
    //       console.log('got here');
    //       // post request to save haiku
    //       // $http({
    //       //   method: 'POST',
    //       //   url: '/works',
    //       //   data: haikuObj,
    //       // }).then((response) => {
    //       //   console.log(response);
    //       // }).catch((err) => {
    //       //   console.log(err, 'bad post request');
    //       // });
    //       callback(haikuObj);
    //     });
    // };
  });
// .catch((err) => {
//   console.log(err);
//   $http({
//     method: 'GET',
//     url: 'https://wordsapiv1.p.mashape.com/words?random=true/&syllables=5',
//     headers,
//   }).then((randomWord) => {
//     haikuObj.first = randomWord;
//   });
// })
