var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { album: 'Frog and Code' });
  // CONSIDER SENDING THE DECODE FUNCTION  HERE
});

module.exports = router;

// import Quagga from 'quagga'; // ES6
const Quagga = require('quagga').default; // Common JS (important: default)
console.log('quagga init so close');

// var Quagga = require('quagga');

// Quagga.decodeSingle({
//     src: "image-abc-123.jpg",
//     numOfWorkers: 0,  // Needs to be 0 when used within node
//     inputStream: {
//         size: 800  // restrict input-size to be 800px in width (long-side)
//     },
//     decoder: {
//         readers: ["code_128_reader"] // List of active readers
//     },
// }, function(result) {
//     if(result.codeResult) {
//         console.log("result", result.codeResult.code);
//     } else {
//         console.log("not detected");
//     }
// });
