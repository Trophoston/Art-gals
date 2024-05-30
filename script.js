  
    // Sample artwork data
    window.addEventListener('load', function () {
        document.body.classList.add('loaded');
    });

    window.addEventListener('backler', function () {
        document.body.classList.add('backler');
    });

    const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
  toastTrigger.addEventListener('click', () => {
    toastBootstrap.show()
  })
}


AOS.init();

function MissingNumbers(arr, maxNumber) {
  const numberSet = new Set();
  for (let i = 1; i <= maxNumber; i++) {
      numberSet.add(i.toString());
  }
  for (const item of arr) {
      numberSet.delete(item.noumber);
  }
  return Array.from(numberSet);
}

console.log("arrayname\n 1.artworks\n 2.???\n 3.krajang\n 4.???\n_________________________________\nmissnum func :\n MissingNumbers(arr, maxNumber)" );




