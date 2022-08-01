if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(success);
}else{
    alert("No se puede odtener");
}

function success(geolocationPosition){
    console.log(geolocationPosition);

    let coords = geolocationPosition.coords;

  

  let map = L.map('map').setView([coords.latitude,coords.longitude],6)


  var marker = L.marker([coords.latitude,coords.longitude]).addTo(map);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

document.getElementById("select-location").addEventListener('change',function(e){

  let coords = e.target.value.split(",");
  map.flyTo(coords,13);
  L.marker(coords).addTo(map);  

});
}



/*

document.getElementById("select-location").addEventListener('change',function(e){

  let coords = e.target.value.split(",");
  map.flyTo(coords,13);
  L.marker(coords).addTo(map);  

});
*/