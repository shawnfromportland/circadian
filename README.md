
## Circadian
<a href="https://www.buymeacoffee.com/shawnfromportland" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="41" width="174"></a>
Circadian animates the color of page elements according to a time and place on earth.  
  
  live demo: <a href="https://shawnfromportland.com/circadian">shawnfromportland.com/circadian</a>

## Usage

1. Include it from CDN in your html file:
```
// relies on sunCalc:
<script src="https://cdnjs.cloudflare.com/ajax/libs/suncalc/1.8.0/suncalc.min.js"></script>
// include circadian:
<script src="https://cdn.jsdelivr.net/gh/shawnfromportland/circadian@main/circadian.js"></script>
```
2. add the circadian class to anything you want to receive a circadian animation:
```
<body class="circadian">
<p>
 circadian animated text
</p>
```
the circadian-invert class is available as well to apply an inverted color circadian animation:
```
<p class="circadian-invert">
 circadian animated animated text (color-inverted)
</p>
```
3. instantiate it
```
const myCircadian = new Circadian();
```
4. initialize the animations
```
myCircadian.init();
```


## Configuration

Call `circadian.init()` with any configuration settings
### Example:
```javascript
// initialize a circadian animation based on today's data in Syracuse, NY, using the staged transitionMode and realistic theme colors.
myCircadian.init({
  coordinates: { lat: 44.5, lon: -123.2 },
  transitionMode: 'staged',
  themeName:'realistic' 
});
```

  ### All Configuration Options

  - `coordinates` (object): Specifies the latitude and longitude for the location. Example: `{ lat: 44.5, lon: -123.2 }`.
  - `transitionMode` (string): Determines the transition mode for the animation. Options are `'continuous'` or `'staged'`.`'continuous'`: continually fades between all slices of the day around the 24 hour cycle or `'staged'`: has a uniform animation stage when moving between stage of the day cycle
  - `themeName` (string): Selects the theme for the animation. Options include `'original'`, `'claude'`, `'chatgpt4o'`, `'grayscale'`, `'redscale'`, `'cyber'`, `'realistic'`, and `'apple'`.
  - `bgColors` (object, optional): Custom background color scheme, these values override any `themeName` selection. Must include all the following keys:
    - `nadir`: "rgba(239, 239, 239, 1)" // Beige
    - `nightEnd`: "rgba(223, 223, 223, 1)" // Light beige
    - `nauticalDawn`: "rgba(95, 189, 62, 1)"
    - `dawn`: "rgba(255, 185, 0, 1)"
    - `sunrise`: "rgba(247, 130, 0, 1)"
    - `sunriseEnd`: "rgba(226, 56, 56, 1)"
    - `goldenHourEnd`: "rgba(151, 57, 153, 1)"
    - `solarNoon`: "rgba(0, 156, 223, 1)"
    - `goldenHour`: "rgba(255, 255, 204, 1)"
    - `sunsetStart`: "rgba(255, 175, 55, 1)"
    - `sunset`: "rgba(255, 120, 60, 1)"
    - `dusk`: "rgba(120, 120, 120, 1)"
    - `nauticalDusk`: "rgba(150, 120, 120, 1)"
    - `night`: "rgba(239, 239, 239, 1)" // Beige
  - `textColors` (object, optional): Custom text color scheme, these values override any `themeName` selection. Must include all the following keys:
    - `nadir`: "#f7ca83"
    - `nightEnd`: "#f7ca83"
    - `nauticalDawn`: "#f7ca83"
    - `dawn`: "#946ed2"
    - `sunrise`: "#e28336"
    - `sunriseEnd`: "#e28336"
    - `goldenHourEnd`: "#e28336"
    - `solarNoon`: "#c0ae68"
    - `goldenHour`: "#dd3805"
    - `sunsetStart`: "#dd3805"
    - `sunset`: "#dd3805"
    - `dusk`: "#f9e287"
    - `nauticalDusk`: "#f7c283"
    - `night`: "#f7ca83"

## Applying Circadian Animation with Classes

You can use the `.circadian` or `.circadian-invert` classes to apply the circadian animation to any element. By default, the animation will run on a 24-hour cycle synced to the present date (showing night colors if it is night time).

To apply the animation, simply add the class to your HTML element:
```html
<div class="circadian">This element will animate with circadian colors.</div>
<div class="circadian-invert">This element will animate with inverted circadian colors.</div>
```

### Overriding Animation Duration

If you want to cycle the animation faster than the default 24 hours, you can override the animation duration using CSS. For example, to run the full day cycle in 10 seconds:
```css
.circadian {
  animation-duration: 10s;
}

.circadian-invert {
  animation-duration: 10s;
}
```


## What do you mean 'based on a time and place on earth'?
   This code uses the [`sunCalc`](https://github.com/mourner/suncalc) library and the latitude and longitude coordinates provided to circadian via config param to get real-world data about today's actual daylight ranges at those coordinates (time of dawn, time of sunset, etc). Circadian then maps these real-world values on a 24-hour css animation cycle, morphing through the colors provided by the selected color palette theme or your own custom palettes. 
     
## Example use cases
- time-of-day localized color scheme for your whole website. dawn color scheme during dawn. night color scheme at night. centered on the visitor's location or the headquarters location.
- create a simple 10 minute day/night ambience cycle for a browser-based sidescroller game.
- create a snow globe scene in html that animates a day night cycle every 30 seconds.
- many more
  
  
