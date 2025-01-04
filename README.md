Circadian
animate color of page elements according to a time and place on earth.

usage:
include it from the cdn:
const myCircadian = new Circadian();
myCircadian.init()

this will animate your page's `<body>` background and text colors on a 24 hour cycle, using the default coordinates (Syracuse, NY) based on the current time within the 24 hour day.

config:
call init with any config settings:
myCircadian.init({
   coordinates: { lat: 44.5, lon: -123.2 },
  transitionMode: 'continuous' or 'staged',
  themeName: (options: original, claude, chatgpt4o, grayscale, redscale, cyber, realistic, apple),
  bgColors: (optional, to specify your own background color scheme. must use all these keys: ){
                nadir: "rgba(239, 239, 239, 1)", // Beige
                nightEnd: "rgba(223, 223, 223, 1)", // Light beige
                nauticalDawn: "rgba(95, 189, 62, 1)",
                dawn: "rgba(255, 185, 0, 1)",
                sunrise: "rgba(247, 130, 0, 1)",
                sunriseEnd: "rgba(226, 56, 56, 1)",
                goldenHourEnd: "rgba(151, 57, 153, 1)",
                solarNoon: "rgba(0, 156, 223, 1)",
                goldenHour: "rgba(255, 255, 204, 1)",
                sunsetStart: "rgba(255, 175, 55, 1)",
                sunset: "rgba(255, 120, 60, 1)",
                dusk: "rgba(120, 120, 120, 1)",
                nauticalDusk: "rgba(150, 120, 120, 1)",
                night: "rgba(239, 239, 239, 1)" // Beige
            },
  textColors: (optional, to specify your own text color scheme. must use all these keys: ){
                nadir: "#f7ca83",
                nightEnd: "#f7ca83",
                nauticalDawn: "#f7ca83",
                dawn: "#946ed2",
                sunrise: "#e28336",
                sunriseEnd: "#e28336",
                goldenHourEnd: "#e28336",
                solarNoon: "#c0ae68",
                goldenHour: "#dd3805",
                sunsetStart: "#dd3805",
                sunset: "#dd3805",
                dusk: "#f9e287",
                nauticalDusk: "#f7c283",
                night: "#f7ca83"
            },
    };
})
## Circadian

Circadian animates the color of page elements according to a time and place on earth.

### Usage

Include it from the CDN:
```javascript
const myCircadian = new Circadian();
myCircadian.init();
```

This will animate your page's `<body>` background and text colors on a 24-hour cycle, using the default coordinates (Syracuse, NY) based on the current time within the 24-hour day.

### Configuration

Call `init` with any configuration settings:
```javascript
myCircadian.init({
  coordinates: { lat: 44.5, lon: -123.2 },
  transitionMode: 'continuous' or 'staged',
  themeName: 'original' | 'claude' | 'chatgpt4o' | 'grayscale' | 'redscale' | 'cyber' | 'realistic' | 'apple',
  bgColors: {
    nadir: "rgba(239, 239, 239, 1)", // Beige
    nightEnd: "rgba(223, 223, 223, 1)", // Light beige
    nauticalDawn: "rgba(95, 189, 62, 1)",
    dawn: "rgba(255, 185, 0, 1)",
    sunrise: "rgba(247, 130, 0, 1)",
    sunriseEnd: "rgba(226, 56, 56, 1)",
    goldenHourEnd: "rgba(151, 57, 153, 1)",
    solarNoon: "rgba(0, 156, 223, 1)",
    goldenHour: "rgba(255, 255, 204, 1)",
    sunsetStart: "rgba(255, 175, 55, 1)",
    sunset: "rgba(255, 120, 60, 1)",
    dusk: "rgba(120, 120, 120, 1)",
    nauticalDusk: "rgba(150, 120, 120, 1)",
    night: "rgba(239, 239, 239, 1)" // Beige
  },
  textColors: {
    nadir: "#f7ca83",
    nightEnd: "#f7ca83",
    nauticalDawn: "#f7ca83",
    dawn: "#946ed2",
    sunrise: "#e28336",
    sunriseEnd: "#e28336",
    goldenHourEnd: "#e28336",
    solarNoon: "#c0ae68",
    goldenHour: "#dd3805",
    sunsetStart: "#dd3805",
    sunset: "#dd3805",
    dusk: "#f9e287",
    nauticalDusk: "#f7c283",
    night: "#f7ca83"
  }
});
```

### Configuration Options

- `coordinates` (object): Specifies the latitude and longitude for the location. Example: `{ lat: 44.5, lon: -123.2 }`.
- `transitionMode` (string): Determines the transition mode for the animation. Options are `'continuous'` or `'staged'`.
- `themeName` (string): Selects the theme for the animation. Options include `'original'`, `'claude'`, `'chatgpt4o'`, `'grayscale'`, `'redscale'`, `'cyber'`, `'realistic'`, and `'apple'`.
- `bgColors` (object, optional): Custom background color scheme. Must include all the following keys:
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
- `textColors` (object, optional): Custom text color scheme. Must include all the following keys:
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

  
   ## What do you mean based on a time and place on earth?
   This code uses the `sunCalc` library and the provided latitude and longitude coordinates to get real-world data about today's daylight ranges according to their names like dusk, nautical twilight, etc. The `circadian` function then maps these real-world values on a 24-hour animation cycle, morphing through the colors provided by the selected color palette theme. 
     

  You can then run the 24-hour cycle in any duration you want. For example:
  - For a browser-based game having 10-minute day cycles.
  - For a snow globe that animates a day cycle every 30 seconds.
  
  ### Applying Circadian Animation with Classes

  You can use the `.circadian` or `.circadian-invert` classes to apply the circadian animation to any element. By default, the animation will run on a 24-hour cycle synced to the present date (showing night colors if it is night time).

  To apply the animation, simply add the class to your HTML element:
  ```html
  <div class="circadian">This element will animate with circadian colors.</div>
  <div class="circadian-invert">This element will animate with inverted circadian colors.</div>
  ```

  ### Overriding Animation Duration

  If you want to cycle the animation faster than the default 24 hours, you can override the animation duration using CSS. For example, to run the animation in 1 hour:
  ```css
  .circadian {
    animation-duration: 10s;
  }

  .circadian-invert {
    animation-duration: 10s;
  }
  ```

  This will make the circadian animation complete a full cycle in 1 hour instead of 24 hours.