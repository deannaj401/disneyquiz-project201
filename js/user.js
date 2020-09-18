'use strict';

// Character constructor
var Character = function (characterName, id, characterImage, foodImage, drinkImage, drinkName, foodName, description, foodLink, drinkLink, funFact) {
  this.characterName = characterName;
  this.id = id;
  this.characterImage = characterImage;
  this.foodImage = foodImage;
  this.drinkImage = drinkImage;
  this.drinkName = drinkName;
  this.foodName = foodName;
  this.description = description;
  this.foodLink = foodLink;
  this.drinkLink = drinkLink;
  this.funFact = funFact;
  characterArray.push(this);
};


//this is where we need to put all Character object as well as thier propreties
var characterArray = [];



new Character(
  'You are...Captain Hook',
  'captain-hook',
  'img/char/capthook.png',
  'img/food/crocgumbo.jpg',
  'img/drink/crazedcaptain.jpg',
  'Crazed Captain',
  'Crocodile Gumbo',
  'You are intellegent and charming. You know what you want, and will do anything to get it. Luxery is a necessity. Its important to you that people respect you',
  'https://www.thriftyfoods.com/recipes/recipes/crocodile-gumbo-with-chorizo-prawns-and-beer',
  'http://www.barnotes.co/recipes/crazed-captain-hook',
  'Captain Hook can play the piano even though he has a hook for a hand.'
);
new Character(
  'You are...Alice',
  'alice',
  'img/char/alice.png',
  'img/food/alicecookie.jpg',
  'img/drink/alicedrink.jpg',
  'Cheshire Cat Cocktail',
  'Alice Cookies',
  'You are very courteous and trusting. You are also very clever and well mannered. You believe that the world should be a stable and orderly place. However, your curious nature will bring you to challenging and frustrating situations.',
  'https://rosannapansino.com/blogs/recipes/alice-wonderland-eat-me-cookies',
  'https://ourwabisabilife.com/cheshire-cat-inspired-cocktail/',
  'The White Rabbits clock is always set to 12:25'
);

new Character(
  'You are....Hades',
  'hades',
  'img/char/hades.png',
  'img/food/greekhero.jpg',
  'img/drink/hadesunderworldlagoon.jpg',
  'Hades Underworld Lagoon',
  'Greek Hero Sandwich',
  'You are a planner and enjoy strategic encounters.You like things to move at a fast pace. Some might say you are a little sarcastic and cynical but its possible you are just a realist and use humor to express yourself. You also have an anger management problem.',
  'https://oukosher.org/recipes/greek-hero-sandwich-meat/',
  'https://www.halloweencostumes.com/blog/p-1351-disney-villains-cocktail-and-mocktail-recipes.aspx',
  'In Greek Mythology Hades was not considered to be evil even though he is Lord of the Dead.'
);

new Character(
  'You are...Baymax',
  'baymax',
  'img/char/baymax.png',
  'img/food/sloppyjoes.png',
  'img/drink/baymaxdrink.jpg',
  'The Baymax',
  'Kyoto Sloppy Joes',
  'You are selfless caring and extremely devoted to your friends. You are very curious of your surroundings and tend to get easily distracted. You love to help others and are usually very calm.',
  'https://www.foodrepublic.com/2018/02/12/recipes-japanese-fusion/',
  'https://www.picuki.com/tag/personalhealthcarecompanion',
  'Baymax is 6ft tall and weighs 75 pounds'
);

new Character(
  'You are...Princess Leia',
  'princess-leia',
  'img/char/leia.png',
  'img/food/cinnamonbuns.jpg',
  'img/drink/princess-leia.jpg',
  'Princess Leia Cocktail',
  'Princess Leia Cinnamon Buns',
  'You are sometimes stubborn and sassy but have a great deal of integrity. You like to get things done but you also have a strong sense of teamwork. You are out for the victory of the many rather than personal gain.',
  'https://www.asdagoodliving.co.uk/food/recipes/princess-leia-cinnamon-buns',
  'https://unsobered.com/featured/5-star-wars-inspired-cocktails-to-get-your-jedi-on/',
  'Leia has the best hit ratio with a blaster in the all the Star Wars Movies'
);

new Character(
  'You are...Boba Fett',
  'boba-fett',
  'img/char/bobafett1.png',
  'img/food/bobafettucine.jpg',
  'img/drink/surlysarlac.jpg',
  'Surly Sarlac',
  'Boba Fettucine',
  'You are utterly professional and never welch on a contract. You never have much to say but you know how to get a job done. Some people think you are a bad guy for being ruthlessbut you think of yourself as goal oriented.',
  'http://www.apronstringsblog.com/boba-fettucine-with-feta-for-may-the-fourth/',
  'https://www.diznify.com/surly-sarlacc-drink-copycat-recipe/',
  'Boba Fetts helmet gives him 360 degree vision'
);

new Character(
  'You are...Ursula',
  'ursula',
  'img/char/ursula.png',
  'img/food/spicyoctopus.jpg',
  'img/drink/seawitchesbrew.jpg',
  'Sea Witches Brew',
  'Spicy Lemony Grilled Octopus ',
  'You are ambitious and flamboyant. You are very comfortable in your own skin. You have a great sense of humor and are concerned with the love lives of those you meet. You may be a little power-hungry but you also have an appreciation for a great singing voice',
  'http://tchakayiti.com/home/en/',
  'https://www.halloweencostumes.com/blog/p-1351-disney-villains-cocktail-and-mocktail-recipes.aspx',
  'Ursula is King Tritons sister'
);

new Character(
  'You are...Maleficent',
  'maleficent',
  'img/char/maleficent.png',
  'img/food/birthdaycake.jpg',
  'img/drink/malmelonsour.jpg',
  'Deep Sleep Sour Drink',
  '16th Birthday Cake',
  'You are the ultimate Mastermind. You can follow a plan to its completion even if it takes 16 years. You take it personally when you arent invited to parties but realize that maybe its just an oversight and you go anyway. You like to give gifts that last a lifetime.',
  'https://www.deleukstetaartenshop.com/recipe-sweet-16-cake-banoffee-11421',
  'https://www.halloweencostumes.com/blog/p-1351-disney-villains-cocktail-and-mocktail-recipes.aspx',
  'Maleficents ravens name is Diablo though this is never actually mentioned in the movie.'
);

new Character(
  'You are...Genie',
  'genie',
  'img/char/genie.png',
  'img/food/agrabahbites.jpg',
  'img/drink/bluegenie.jpg',
  'Blue Genie',
  'Agrabah Baklava Bites',
  'You are happy and fun-loving and are rarely seen without a smile. You like to crack jokes and use humor to difuse tense situations. You are creative and outgoing and do NOT like being cooped up.',
  'https://2geekswhoeat.com/agrabah-baklava-bites-aladdin-recipe/',
  'https://unexpectedlygeeky.com/aladdin-inspired-cocktails/',
  'The peddler that we see at the beginning of Aladdin is in fact the Genie in disguise'
);

new Character(
  'You are...Snow White',
  'snow-white',
  'img/char/snowwhite.png',
  'img/food/snowwhitepie.jpg',
  'img/drink/snowwhitedrink.jpg',
  'Snow White Chocolate Cocktail',
  'Caramel Apple Crunch Pie',
  'You are assertive but kind and have never lost your sense of child-like wonder. You like to keep things tidy and take care of people. You love animals. You are very trusting. As a hopeless romantic you dream of falling in love some day. ',
  'https://lemonbabydesigns.blogspot.com/2015/03/disney-inspired-dinner-movie-snow-white.html',
  'https://www.inliterature.net/food-in-literature/drinks/alcoholic/2012/05/snow-white-cocktail.html',
  'Snow White has her own star on the Hollywood Walk of Fame'
);

new Character(
  'You are...Pinnocchio',
  'pinnocchio',
  'img/char/pinnocchio.png',
  'img/food/spaghetti.jpg',
  'img/drink/greengrasshopper.jpg',
  'Jiminys Conscience',
  'Perfect Spaghetti and Meatballs',
  'You are whimsical and maybe a little impressionable. You have a mischevious nature and might be considered to be  over-trusting and sometimes end up in trouble. But, you want to be better and try really hard to do the right thing most of the time. You are known for your Big Fish stories.',
  'https://smittenkitchen.com/2019/03/perfect-meatballs-and-spaghetti/',
  'http://yohodisney.com/jiminys-conscience-a-disney-inspired-cocktail/',
  'When you lie the temperature in your nose actually rises.'
);







// function that will render the Character to the page
// characterId will find the index in the array that the character lives in

function renderCharacter() {
  var mainCharacter = document.getElementById('id');
  var characterEl = document.createElement('div');

  var characterScore = parseInt(localStorage.getItem('score'));
  console.log(typeof (characterScore));
  var characterToRender = chooseCharacter(characterScore);
  mainCharacter.setAttribute('id', characterToRender);


  var characterId = characterToRender;
  console.log(characterToRender);
  var characterIndex = 0;

  // going through the array and
  for (var i = 0; i < characterArray.length; i++) {
    // seeing if the id of the character obj in the array is equal to the id that the function is accepting.
    if (characterArray[i].id === characterId) {
      characterIndex = i;
      // once we found it, we are done with the loop
      break;
    }
  }

  var h1Name = document.createElement('div');
  characterEl.id = characterArray[characterIndex].id;
  // populate the character name onto the main id
  var characterH1 = document.createElement('h1');
  characterH1.textContent = characterArray[characterIndex].characterName;
  h1Name.appendChild(characterH1);
  characterEl.appendChild(h1Name);


  var imgDiv = document.createElement('div');
  var characterImg = document.createElement('img');
  characterImg.src = characterArray[characterIndex].characterImage;
  imgDiv.appendChild(characterImg);
  characterEl.appendChild(imgDiv);


  var drinkDivs = document.createElement('div');

  var spanText = document.createElement('span');
  spanText.textContent = 'Suggested Drink';

  drinkDivs.appendChild(spanText);

  var characterDrinkImg = document.createElement('img');
  characterDrinkImg.src = characterArray[characterIndex].drinkImage;

  drinkDivs.appendChild(characterDrinkImg);


  var drinkNameP = document.createElement('p');
  drinkNameP.textContent = characterArray[characterIndex].drinkName;


  var characterDrinkLink = document.createElement('a');
  characterDrinkLink.href = characterArray[characterIndex].drinkLink;
  characterDrinkLink.appendChild(drinkNameP);


  drinkDivs.appendChild(characterDrinkLink);

  characterEl.appendChild(drinkDivs);




  var descDiv = document.createElement('div');
  var characterArticle = document.createElement('article');
  characterArticle.textContent = characterArray[characterIndex].description;
  descDiv.appendChild(characterArticle);
  characterEl.appendChild(descDiv);



  var foodDiv = document.createElement('div');

  var foodSpan = document.createElement('p');
  foodSpan.textContent = 'Suggested Food';
  foodDiv.appendChild(foodSpan);

  var characterFoodImg = document.createElement('img');
  characterFoodImg.src = characterArray[characterIndex].foodImage;

  foodDiv.appendChild(characterFoodImg);

  var foodNameP = document.createElement('p');
  foodNameP.textContent = characterArray[characterIndex].foodName;

  var characterFoodLink = document.createElement('a');
  characterFoodLink.href = characterArray[characterIndex].foodLink;
  characterFoodLink.appendChild(foodNameP);
  foodDiv.appendChild(characterFoodLink);
  characterEl.appendChild(foodDiv);


  var funDiv = document.createElement('div');
  var funPara = document.createElement('p');
  funPara.textContent = 'Fun Fact';
  funDiv.appendChild(funPara);


  var funFact = document.createElement('span');
  funFact.textContent = characterArray[characterIndex].funFact;
  funDiv.appendChild(funFact);

  characterEl.appendChild(funDiv);

  mainCharacter.appendChild(characterEl);



}

function chooseCharacter(score) {

  var characterId = '';


  if (score <= 6) {
    characterId = ('alice');
  }
  else if (score === 7 || score === 8) {
    characterId = ('snow-white');
  }
  else if (score === 9 || score === 10) {
    characterId = ('baymax');
  }
  else if (score === 11 || score === 12) {
    characterId = ('pinnocchio');
  }
  else if (score === 13 || score === 14) {
    characterId = ('princess-leia');
  }
  else if (score === 15 || score === 16) {
    characterId = ('genie');
  }
  else if (score === 17 || score === 18) {
    characterId = ('boba-fett');
  }
  else if (score === 19 || score === 20) {
    characterId = ('captain-hook');
  }
  else if (score === 21 || score === 22) {
    characterId = ('ursula');
  }
  else if (score === 23 || score === 24) {
    characterId = ('hades');
  }
  else if (score === 25) {
    characterId = ('maleficent');
  }

  return characterId;

}

renderCharacter();
