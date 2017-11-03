var txt = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur = 'triceratops';
var dinosaurUpperCased = dinosaur.toUpperCase();
var txtReplace = txt.replace('Velociraptor', dinosaurUpperCased);

var iloscZnakow = txtReplace.length/2;
var partOfTxt = txtReplace.slice(0,iloscZnakow);
console.log(partOfTxt);