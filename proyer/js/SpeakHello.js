// STEP 2: Wrap the entire contents of SpeakHello.js inside of an IIFE
// See Lecture 52, part 2


// STEP 3: Create an object, called 'helloSpeaker' to which you will attach
// the "speak" method and which you will expose to the global context
// See Lecture 52, part 1
// var helloSpeaker =

// DO NOT attach the speakWord variable to the 'helloSpeaker' object.


// STEP 4: Rewrite the 'speak' function such that it is attached to the
// helloSpeaker object instead of being a standalone function.
// See Lecture 52, part 2

// STEP 5: Expose the 'helloSpeaker' object to the global scope. Name it
// 'helloSpeaker' on the global scope as well.
// See Lecture 52, part 2
// (Note, Step 6 will be done in the SpeakGoodBye.js file.)
// xxxx.xxxx = helloSpeaker;





(function speak(name) {
	var helloSpeaker= {};
	var speakWord = "Hello";
  	
  helloSpeaker.speak = function (name) {
    console.log(speakWord +" "+ name);
  }

  window.helloSpeaker = helloSpeaker;

})(name);


// PASO 3: Crea un objeto, llamado 'helloSpeaker' al que adjuntarás
// el método "speak" y que expondrá al contexto global
// Ver Clase 52, parte 1
// var helloSpeaker =

// NO adjunte la variable speakWord al objeto 'helloSpeaker'.


// PASO 4: Vuelva a escribir la función 'hablar' de modo que esté adjunta a la
// objeto helloSpeaker en lugar de ser una función independiente.
// Ver Clase 52, parte 2


// PASO 5: Exponga el objeto 'helloSpeaker' al alcance global. Nombralo
// 'helloSpeaker' también en el ámbito global.
// Ver Clase 52, parte 2
// (Tenga en cuenta que el paso 6 se realizará en el archivo SpeakGoodBye.js).
// xxxx.xxxx = helloSpeaker
