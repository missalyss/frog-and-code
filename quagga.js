// // import Quagga from 'quagga'; // ES6
// const Quagga = require('quagga').default; // Common JS (important: default)
//
//
// // $(document).ready(() => {
// //   const picButton = $('button');
// //
// //   picButton.on('click', function() {
//     console.log('quagga init so close');
//     Quagga.init({
//         inputStream : {
//           name : "Live",
//           type : "LiveStream",
//           target: window.document.querySelector('#content')    // Or '#yourElement' (optional)
//         },
//         decoder : {
//           readers : ["code_128_reader"]
//         }
//       }, function(err) {
//           if (err) {
//               console.log(err);
//               return
//           }
//           console.log("Initialization finished. Ready to start");
//           Quagga.start();
//
//           Quagga.onProcessed(data => {
//             console.log('DATA: ', data);
//           })
//
//           Quagga.stop()
//       });
// //   })
// // })
