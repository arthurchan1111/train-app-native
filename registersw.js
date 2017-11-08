
navigator.serviceWorker.register('sw.js').then(function(reg){
  if (!navigator.serviceWorker.controller) {
    return;
  }
console.log('Service Worker initiated');
}).catch(function(error){
  console.log(error);
  console.log('something went wrong');
});
