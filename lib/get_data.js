var fs = require('fs');
var data = [
            {
              location: "Point Hope",
              locID: 1,
              lat: 68.3477778,
              long: -166.8080556,
              wind_direction: "NE", //North East
              wind_speed: 9.65,  //km/hour
              current_velocity: 20, //metre/second
              sea_temp: 8,
              ice_level: 2, //metres thick ==> LOW
              precipitation: 0.53,
              snow_fall: "none",
              visibility: "good",
              dangerous_environment: false,
              class: "safe",
              text: "You're good to go!"
            },
            {
              location: "Noatak",
              locID: 2,
              lat: 67.5711111,
              long: -162.96527779999997,
              wind_direction: "NE",
              wind_speed: 80,
              current_velocity: 23,
              sea_temp: -3,
              ice_level: 2,
              precipitation: 0,
              snow_fall: "heavy",
              visibility: "poor",
              dangerous_environment: true,
              class: "danger",
              text: "danger! High wind speeds and heavy snowfall causing poor visibility!"
            },
            {
              location: "Kotzebue",
              locID: 3,
              lat: 66.89833329999999,
              long: -162.5966666,
              wind_direction: "NE",
              wind_speed: 20.8,
              current_velocity: 13,
              sea_temp: 2,
              ice_level:22,
              precipitation: 0.45,
              snow_fall: "none",
              visibility: "good",
              dangerous_environment: false,
              class: "safe",
              text: "You're good to go!"
            },
            {
              location: "Council",
              locID: 4,
              lat: 64.8953301,
              long: -163.67737550000004,
              wind_direction: "NE",
              wind_speed: 12,
              current_velocity: 2,
              sea_temp: 4,
              ice_level:6, //LOW
              precipitation: 0,
              snow_fall: "light",
              visibility: "slightly hindering",
              dangerous_environment: false,
              class: "caution",
              text: "danger! Ice level is LOW and visibility SLIGHTLY HINDERING because of LIGHT SNOWFALL, so BE CAREFUL of where you step!"
            },
            {
              location: "Wainwright",
              locID: 5,
              lat: 70.63694439999999,
              long: -160.03833329999998,
              wind_direction: "NE",
              wind_speed: 3,
              current_velocity: 13,
              sea_temp: 10, //degrees celsius
              ice_level: 10,
              precipitation: 0.35,
              snow_fall: "none",
              visibility: "good",
              dangerous_environment: false,
              class: "safe",
              text: "You're good to go!"
            },
];

exports.getLocationMetrics = function(locID) {
  // var data = fs.readFileSync('./data/data.json', 'utf8');
console.log("THIS IS LOCATION ID", locID);
  var input = data.filter(function(item) {
    return item.locID === Number(locID);
  });
  console.log("THIS IS INPUT", input);
  return input;
};
