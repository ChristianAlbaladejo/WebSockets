var socket = io.connect('http://192.168.200.227:8080', { 'forceNew': true });
var caniceria = 0;
var pescaderia= 0;
var fruteria = 0;
var panaderia = 0;

socket.on('messages', function (data) {
      console.log(data);
      render(data);
})

function render(data) {
      var html = data.map(function (elem, index) {
            caniceria = elem.carniceria;
            return (`<div>
              <strong>${elem.carniceria}</strong>
          </div>`);
      }).join(" ");
      document.getElementById('carniceria').innerHTML = html;
      var html = data.map(function (elem, index) {
            fruteria = elem.fruteria;
            return (`<div>
              <strong>${elem.fruteria}</strong>
          </div>`);
      }).join(" ");
      document.getElementById('fruteria').innerHTML = html;
      var html = data.map(function (elem, index) {
            pescaderia = elem.pescaderia;
            return (`<div>
              <strong>${elem.pescaderia}</strong>
          </div>`);
      }).join(" ");
      document.getElementById('pescaderia').innerHTML = html;
      var html = data.map(function (elem, index) {
            panaderia = elem.panaderia;
            return (`<div>
              <strong>${elem.panaderia}</strong>
          </div>`);
      }).join(" ");
      document.getElementById('panaderia').innerHTML = html;
      var audio = document.getElementById("audio");

      audio.play(); 
}

function addCarniceria(e){
      caniceria = caniceria + 1;
      addMessage(e);
}

function addFruteria(e){
      fruteria = fruteria + 1;
      addMessage(e);
}

function addPescaderia(e) {
      pescaderia = pescaderia + 1;
      addMessage(e);
}
function addPanaderia(e) {
      panaderia = panaderia + 1;
      addMessage(e);
}

function addMessage(e) {
      var message = {
            carniceria: caniceria,
            fruteria: fruteria,
            pescaderia: pescaderia,
            panaderia: panaderia
      };

      socket.emit('new-message', message);
      return false;

}