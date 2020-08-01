
function validateForm() {
   var x = document.forms["myForm"]["fname"].value;
   if (x == "") {
     alert("Name must be filled out");
     return false;
   }
   if (typeof inputs[0].value !== "string" || typeof inputs[1].value !== "string") {
    alert('Please enter a valid name!')
    e.preventDefault()
}

if (isNaN(Number(inputs[2].value)) || isNaN(Number(inputs[3].value))) {
    alert('Please enter a valid number!')
    e.preventDefault()
}
 }
const formValid = document.getElementById('myForm');
formValid.addEventListener('click', function (e) {
else.preventDefault();
});

function showMission() {
    fetch('https://handlers.education.launchcode.org/static/planets.json').then((response) => {
      response.json().then((json : Planet[]) => {
        const destination = document.getElementById('missionTarget')

            if (destination) {
                let formTemplate = `<h2>Mission Destination</h2>
                <ol>
                   <li>Name: ${}</li>
                   <li>Diameter: ${}</li>
                   <li>Star: ${}</li>
                   <li>Distance from Earth: ${}</li>
                   <li>Number of Moons: ${}</li>
                </ol>
                <img src="${}">`
                destination.innerHTML = formTemplate
            } else {
                console.log('document elements not found!')
            }
        })
    })
}