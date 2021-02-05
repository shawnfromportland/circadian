import("/node_modules/requirejs/require.js")
var SunCalc = require('suncalc');

// get today's sunlight times for London
var times = SunCalc.getTimes(new Date(), 51.5, -0.1);
console.log(times);
// format sunrise time from the Date object
var sunriseStr = times.sunrise.getHours() + ':' + times.sunrise.getMinutes();
console.log(sunriseStr);
// get position of the sun (azimuth and altitude) at today's sunrise
var sunrisePos = SunCalc.getPosition(times.sunrise, 51.5, -0.1);
console.log(sunrisePos);
// get sunrise azimuth in degrees
var sunriseAzimuth = sunrisePos.azimuth * 180 / Math.PI;
console.log(sunriseAzimuth);
