function evalNumber(){
    var inputValue = prompt("Enter an five-digit number without commas")
    if (isNaN(inputValue)) {
        alert(inputValue + "is not a number.")
    }  
    else if(inputValue % 2 ==0) {
        alert(inputValue + " is an even number.")
    } else { 
       alert(inputValue + " is an odd number.")
    }}

/*function longerWord(){
  var inputWord = prompt("enter any word")
  if (length(inputWord)>startword) {
    return(inputWord)
  }
  else{
    return(startWord)
  };}*/


function minute(){
    var minuteOfHour = new Date().getMinutes()
    var hour = new Date().getHours()
    var currentMinute = ((hour * 60) + minuteOfHour)

    {alert("It's minute " + currentMinute + " of today." )
}}


function addElements(){
    var valueArray = ['first', 'second', 'third'];
    for (i in valueArray){
        var newDiv = document.createElement('div');
        newDiv.setAttribute('class', 'row');
        newDiv.setAttribute('id', 'div '+i);
        document.getElementById('addElements').appendChild(newDiv);
        newDiv.innerText = valueArray[i];
    }
}

function vanishText(){
    let selectedElement = document.getElementById("columns");
    //selectedElement.innerText = NONE;
    selectedElement.style.display = "none";
 }

/*function lastLetter(){
  getElementById("animals")
  animals.sort();
  alert (animals[3])
} */

function mapLoad(){
    //Define the lat lon coordinate
    var latLng = [41.789649, -87.599702];
  
    var mbAttr = 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
    'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    mbUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';
  
    var grayscale   = L.tileLayer(mbUrl, {id: 'mapbox/light-v9', tileSize: 512, zoomOffset: -1, attribution: mbAttr}),
    streets  = L.tileLayer(mbUrl, {id: 'mapbox/streets-v11', tileSize: 512, zoomOffset: -1, attribution: mbAttr});
  
    var map = L.map('map', {
      center: latLng,
      zoom: 16,
      layers: [streets]
    });
  
    var baseLayers = {
      "Grayscale": grayscale,
      "Streets": streets
    };
  
    L.control.layers(baseLayers).addTo(map);
  
    L.marker(latLng).addTo(map)
    .bindPopup("<b>UChicago<br>Campus</b>").openPopup();
  
  
  
    //Click event
    var popup = L.popup();
  
    function onMapClick(e) {
      popup
      .setLatLng(e.latlng)
      .setContent("You clicked the map at " + e.latlng.toString())
      .openOn(map);
    }
    map.on('click', onMapClick);
  }


/*<!--p class="h3">New Tasks for February 11 — JS Function</p>
<ol>
  <li>Write a function that takes one parameter.</li>

  <li>Call the function: functionName(parameter)</li>

  <li>The parameter will be an array; see the sample array.</li>

  <li>newArray = ["Orange", "Apple", "Mango", "Banana", "Papaya"]</li>

  <li>Define this array outside of the function so it can be passed in as a parameter.</li>

  <li>The function should return the item that is last alphabetically.</li>

  <li>Test your function by adding new values to the array.</li>

  <li>You can just console.log the value.</li>

  >If you want more of a challenge, allow the user to submit a new value to the array, then return the last alphabetic item.</li>
</ol>
</div--> */