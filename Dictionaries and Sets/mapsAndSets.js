//messing around with maps

let places = new Map();

places.set("England", "Manchester")
    .set("Scotland", "Aberdeen")
    .set("Wales", "Llandudno")
    .set("Northern Ireland", "Belfast");

console.log(places);

console.log(places.size)

console.log(places.has("Wales"))

console.log(places.has("Manchester")) //doesn't work - you can only search for the key/first value

let faves = new Set();

faves.add("The Cure").add("Boyhood").add("steak").add("Volkswagen").add("Macc Town").add("Aphrodite").add("Hermes");

//console.log(faves)

faves.forEach(fave => {
 console.log(fave + " is one of my faves")
})