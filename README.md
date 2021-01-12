# circadian
circadian processor javascript library

## Circadian provides 2 main features:

  1. A collection of static methods you can use to return helpful circadian-based data as needed. 
  2. A Circadian object instantiatable with a configuration object. Using a Circadian object, you can animate any feature of your css, or even of your application based on the movements of the sun and mooon and phases of day. 
  
  
  ## Examples uses:
 - animation of a sun traveling in an arc across a web page, matching the real-time sun location at a specific location
 - day/night morphing color schemes on a website that change in real-time based on time of day
 - to model the day/night cycle in games or simulations. Full circadian cycles can be simulated on smaller timescales (for example you can run a Circadian object so that it's whole 24 hour cycle completes in 24 seconds. )
  

## static methods
these methods return any desired piece of circadian data (using the SunCalc package https://github.com/mourner/suncalc), assuming smart defaults and accepting many config options.

//EXAMPLES:
  //Example 1:  
// "What is the name of the phase of day are we currently in?"
Circadian.currentPhaseName()
//returns: 'CIVILIAN_TWILIGHT_MORNING'

  //Example 2:  
// ''what percentage of daylight has passed so far today?"
Circadian.percentageOfDaylightCompleted()
// returns: .75

  //Example 3:  
// "what is the name of the current phase of day at a specific city?"
Circadian.currentPhaseName({ latitude: '35.508', longitude: '-145,0.145' });
//returns: 'NIGHT'



all available methods to be documented here....



## Circadian Object Config:

//Example 4:
// Instantiate a Circadian object with these default settings:
// apply a default animation to the whole document, 
// use a default color palette, 
// use the client's latitude and longitude by default, 
// auto-starting
let myCircadianObject = new Circadian()

  //Example 5:  
// instantiate a Circadian object to animate on a specific DOM element with specific customizations such as a custom color palette and custom lat/long coordinates.
let myCircadianObject = new Circadian({elementId: 'circadianBox', autostart: false, palette: Circadian.VaporWavePalette, latitude: '35.508', longitude: '-145,0.145' })

there could be dozens of optional configuration options that Circadian would support. we will define them all. 

// in addition to auto-start options, provide these methods to start and stop circadian animation effects:
  myCircadianObject.start()
  myCircadianObject.stop()  
  
  
  
 full config object reference to be written here
