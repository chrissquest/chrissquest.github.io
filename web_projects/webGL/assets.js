// Load model files
// Load from this link so it can work locally w/out CORS error, works online too, but can be replaced with local paths, not big enough of a concern to matter
//const source_link = "https://raw.githubusercontent.com/garstka1245/garstka1245.github.io/master/projects/webGL/models/";
const source_link = "./models/";
const model_names = [
"basic/tetrahedron.obj",
"basic/cube.obj",
"basic/cube_indented.obj",
"basic/level4.obj",
"basic/bean.obj",

"animals/cat.obj",

"maps/beavercreek/beavercreek.obj",

"raptin/Raptin.obj"

];

var model_promises = [];
var LOADED_MODELS = [];

// model_promises becomes the promises from fetching all the urls
model_promises = model_names.map(name =>
  fetch(source_link + name)
);

// Load all the models here
Promise.all(model_promises).then(promise_outputs => {
  // model_outputs from the promise returns a "Result" instead of the raw text, so we need to grab the .text() from each result and use that
  // but .text is itself a promise so... we have to have two calls for .all
  Promise.all(promise_outputs.map(m => m.text())).then(model_outputs => {
    LOADED_MODELS = model_outputs;
    // Start the program
    initMain();
  });
});
