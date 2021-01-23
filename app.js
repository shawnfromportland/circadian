// import sunCalc and set global variables
//============================================================================
const SunCalc = require('suncalc');

// define constants for our different phases
const ASTRONIMCAL_TWILIGHT_MORNING = 'ASTRONIMCAL_TWILIGHT_MORNING'
const NAUTICAL_TWILIGHT_MORNING = 'NAUTICAL_TWILIGHT_MORNING'
const CIVIL_TWILIGHT_MORNING = 'CIVIL_TWILIGHT_MORNING'
const DAY = 'DAY'
const CIVIL_TWILIGHT_EVENING = 'CIVIL_TWILIGHT_EVENING'
const NAUTICAL_TWILIGHT_EVENING = 'NAUTICAL_TWILIGHT_EVENING'
const ASTRONIMCAL_TWILIGHT_EVENING = 'ASTRONIMCAL_TWILIGHT_EVENING'
const NIGHT = 'NIGHT'

// first set some defaults if the user does not give location permission:
let latitude = 51.5
let longitude = -0.1

//create empty global variable that will hold suncalc result
let sunCalcTimes = {}


// prompt user for location permission and read their location from browser:
// read about the browser location feature here:
// https://www.w3schools.com/html/html5_geolocation.asp
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(positionFound)
}

// get times from default values
getSuncalcTimes()


function getSuncalcTimes(){
    sunCalcTimes = SunCalc.getTimes(new Date(), latitude, longitude);
}

function positionFound(position){
    console.log("position found:")
    console.log(position)
    // update the global settings:
    latitude = position.coords.latitude
    longitude = position.coords.longitude
    getSuncalcTimes()
    outputSuncalcTimes()
}




// define our methods that make use of suncalc:
//============================================================================
function outputSuncalcTimes(){
    console.log('outputSuncalcTimesAsATest:');
    console.log(sunCalcTimes)

    outputAllFunctionResults()
}

function outputAllFunctionResults(){
    console.log('getPhases: '+getPhases())
    console.log('getPhase: '+getPhase())
    console.log('getPercentageOfDaylightCompleted: '+getPercentageOfDaylightCompleted())
    console.log('getPercentageOfDaylightRemaining: '+getPercentageOfDaylightRemaining())
    console.log('getSecondsOfDaylightCompleted: '+getSecondsOfDaylightCompleted())
    console.log('getSecondsOfDaylightRemaining: '+getSecondsOfDaylightRemaining())
    console.log('getPercentageOfPhaseCompleted: '+getPercentageOfPhaseCompleted())
    console.log('getPercentageOfPhaseRemaining: '+getPercentageOfPhaseRemaining())
    console.log('getSecondsOfPhaseCompleted: '+getSecondsOfPhaseCompleted())
    console.log('getSecondsOfPhaseRemaining: '+getSecondsOfPhaseRemaining())
    console.log('getAzimuth: '+getAzimuth())

}

function getPhases(){
    // returns array of objects containing a start: date object, phase_name: 'phase_name',end: date object
    /*
        [
            {
                phase: 'CIVIL_TWILIGHT',
                start: Date object,
                end: Date object
            },
            {
                phase: 'DAY',
                start: Date object,
                end: Date object
            },
            ...
        ]
     */
    return 'TBD'
}


function getPhase(phaseName){
    // accepts a specific phase name (later will accept parameters for location and date)
    // returns: same as getPhases but just a single object for the current phase.
    return 'TBD'
}


function getPercentageOfDaylightCompleted(){

    //0.75
    return 'TBD'
}

function getPercentageOfDaylightRemaining(){
    //0.25
    return 'TBD'
}


function getSecondsOfDaylightCompleted(){
    //1800
    return 'TBD'
}


function getSecondsOfDaylightRemaining() {
    //2400
    return 'TBD'
}

function getPercentageOfPhaseCompleted() {
    //.98
    return 'TBD'
}

function getPercentageOfPhaseRemaining() {
    //1.0
    return 'TBD'
}

function getSecondsOfPhaseCompleted() {
    //8400
    return 'TBD'
}

function getSecondsOfPhaseRemaining() {
    //0
    return 'TBD'
}

function getAzimuth() {
    //21.6
    return 'TBD'
}



// run any tests using the above functions, below here:
//============================================================================
outputSuncalcTimes()