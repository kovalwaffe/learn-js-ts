for (let i = 0; i < 5; i++) {
    for (var j = 5; j <= 5; j++) {
      console.log(i);
    }
  }
  // Jest dostep do zmiennej 'j' poniewaz var ma zakres funcji/skryptu
  console.log('j' + j);