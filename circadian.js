class Circadian {
    config =  {
        coordinates: { lat: 44.5, lon: -123.2 },
        transitionMode: 'continuous',
        themeName: 'original',
    };
    themes = {
        original: {
            bgColors: {
                nadir: "rgba(0, 7, 22, 1)",
                nightEnd: "rgba(39, 50, 79, 1)",
                nauticalDawn: "rgba(58, 79, 110, 1)",
                dawn: "rgba(246, 156, 238, 1)",
                sunrise: "rgba(248, 235, 181, 1)",
                sunriseEnd: "rgba(248, 235, 181, 1)",
                goldenHourEnd: "rgba(248, 235, 181, 1)",
                solarNoon: "rgba(32, 36, 10, 1)",
                goldenHour: "rgba(255, 202, 123, 1)",
                sunsetStart: "rgba(255, 202, 123, 1)",
                sunset: "rgba(255, 202, 123, 1)",
                dusk: "rgba(56, 93, 148, 1)",
                nauticalDusk: "rgba(36, 67, 94, 1)",
                night: "rgba(5, 18, 50, 1)"
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
        },
        claude: {
            bgColors: {
                nadir: "rgba(12, 15, 35, 1)",         // Deep navy but not pure black
                nightEnd: "rgba(25, 35, 65, 1)",      // Dark blue with hint of purple
                nauticalDawn: "rgba(65, 85, 125, 1)", // Steel blue dawn
                dawn: "rgba(255, 182, 193, 1)",       // Soft pink dawn
                sunrise: "rgba(255, 160, 180, 1)",    // Stronger pink sunrise
                sunriseEnd: "rgba(225, 205, 185, 1)", // Light morning sky
                goldenHourEnd: "rgba(195, 215, 235, 1)", // Bright daytime blue
                solarNoon: "rgba(135, 185, 235, 1)",  // Clear afternoon sky
                goldenHour: "rgba(245, 185, 145, 1)", // Warm afternoon glow
                sunsetStart: "rgba(255, 69, 0, 1)",   // Brilliant orange sunset
                sunset: "rgba(255, 20, 147, 1)",      // Vivid pink sunset
                dusk: "rgba(255, 100, 100, 1)",       // Warm pink dusk
                nauticalDusk: "rgba(45, 65, 105, 1)", // Deepening twilight
                night: "rgba(15, 25, 55, 1)"          // Dark but not black night
            },
            textColors: {
                nadir: "#8595B5",                     // Pale blue-grey mountains
                nightEnd: "#7585A5",                  // Slightly lighter mountains
                nauticalDawn: "#657595",              // Pre-dawn mountain silhouettes
                dawn: "#FF69B4",                      // Pink dawn mountains
                sunrise: "#FF1493",                   // Deep pink sunrise mountains
                sunriseEnd: "#354565",                // Daybreak mountains
                goldenHourEnd: "#253555",             // Day mountain shadows
                solarNoon: "#152545",                 // Strong daytime shadows
                goldenHour: "#253555",                // Afternoon mountain color
                sunsetStart: "#1A0F00",               // Dark brown silhouette
                sunset: "#000000",                    // Black silhouette for contrast
                dusk: "#180025",                      // Deep purple-black silhouette
                nauticalDusk: "#657595",              // Evening blue mountains
                night: "#758595"                      // Night mountain silhouettes
            }
        },
        chatgpt4o: {
            bgColors: {
                nadir: "rgba(0, 0,0, 1)",
                nightEnd: "rgba(25, 25, 112, 1)",
                nauticalDawn: "rgba(70, 130, 180, 1)",
                dawn: "rgba(135, 206, 235, 1)",
                sunrise: "rgba(255, 223, 186, 1)",
                sunriseEnd: "rgba(255, 239, 213, 1)",
                goldenHourEnd: "rgba(255, 250, 205, 1)",
                solarNoon: "rgba(255, 255, 224, 1)",
                goldenHour: "rgba(255, 215, 0, 1)",
                sunsetStart: "rgba(255, 140, 0, 1)",
                sunset: "rgba(255, 69, 0, 1)",
                dusk: "rgba(72, 61, 139, 1)",
                nauticalDusk: "rgba(25, 25, 112, 1)",
                night: "rgba(0, 0, 51, 1)"
            },
            textColors: {
                nadir: "#FFD700",
                nightEnd: "#FFD700",
                nauticalDawn: "#FFFFFF",
                dawn: "#000000",
                sunrise: "#FF4500",
                sunriseEnd: "#FF4500",
                goldenHourEnd: "#FF4500",
                solarNoon: "#000000",
                goldenHour: "#000000",
                sunsetStart: "#FFFFFF",
                sunset: "#FFFFFF",
                dusk: "#FFD700",
                nauticalDusk: "#FFD700",
                night: "#FFD700"
            }
        },
        grayscale: {
            bgColors: {
                nadir: "rgba(0, 0, 0, 1)",
                nightEnd: "rgba(30, 30, 30, 1)",
                nauticalDawn: "rgba(60, 60, 60, 1)",
                dawn: "rgba(90, 90, 90, 1)",
                sunrise: "rgba(120, 120, 120, 1)",
                sunriseEnd: "rgba(150, 150, 150, 1)",
                goldenHourEnd: "rgba(180, 180, 180, 1)",
                solarNoon: "rgba(255, 255, 255, 1)",
                goldenHour: "rgba(180, 180, 180, 1)",
                sunsetStart: "rgba(150, 150, 150, 1)",
                sunset: "rgba(120, 120, 120, 1)",
                dusk: "rgba(90, 90, 90, 1)",
                nauticalDusk: "rgba(60, 60, 60, 1)",
                night: "rgba(30, 30, 30, 1)"
            },
            textColors: {
                nadir: "#FFFFFF",
                nightEnd: "#E0E0E0",
                nauticalDawn: "#C0C0C0",
                dawn: "#A0A0A0",
                sunrise: "#808080",
                sunriseEnd: "#606060",
                goldenHourEnd: "#404040",
                solarNoon: "#000000",
                goldenHour: "#404040",
                sunsetStart: "#606060",
                sunset: "#808080",
                dusk: "#A0A0A0",
                nauticalDusk: "#C0C0C0",
                night: "#E0E0E0"
            }
        },
        redscale: {
            bgColors: {
                nadir: "rgba(10, 10, 10, 1)",
                nightEnd: "rgba(25, 25, 25, 1)",
                nauticalDawn: "rgba(50, 50, 50, 1)",
                dawn: "rgba(90, 90, 90, 1)",
                sunrise: "rgba(130, 130, 130, 1)",
                sunriseEnd: "rgba(160, 160, 160, 1)",
                goldenHourEnd: "rgba(180, 180, 180, 1)",
                solarNoon: "rgba(200, 200, 200, 1)",
                goldenHour: "rgba(220, 150, 120, 1)",
                sunsetStart: "rgba(200, 100, 100, 1)",
                sunset: "rgba(180, 50, 50, 1)",
                dusk: "rgba(80, 80, 80, 1)",
                nauticalDusk: "rgba(40, 40, 40, 1)",
                night: "rgba(15, 15, 15, 1)"
            },
            textColors: {
                nadir: "#D3D3D3",
                nightEnd: "#C0C0C0",
                nauticalDawn: "#A8A8A8",
                dawn: "#B0B0B0",
                sunrise: "#D2D2D2",
                sunriseEnd: "#D9D9D9",
                goldenHourEnd: "#E0E0E0",
                solarNoon: "#000000",
                goldenHour: "#D46E46",
                sunsetStart: "#B0B0B0",
                sunset: "#7F2626",
                dusk: "#A9A9A9",
                nauticalDusk: "#C0A0A0",
                night: "#B0B0B0"
            }
        },
        cyber: {
            bgColors: {
                nadir: "rgba(0, 0, 0, 1)",
                nightEnd: "rgba(10, 10, 30, 1)",
                nauticalDawn: "rgba(40, 10, 40, 1)",
                dawn: "rgba(60, 20, 60, 1)",
                sunrise: "rgba(85, 50, 150, 1)",
                sunriseEnd: "rgba(105, 60, 180, 1)",
                goldenHourEnd: "rgba(255, 100, 0, 1)",
                solarNoon: "rgba(0, 255, 255, 1)",
                goldenHour: "rgba(255, 0, 255, 1)",
                sunsetStart: "rgba(255, 80, 0, 1)",
                sunset: "rgba(255, 0, 0, 1)",
                dusk: "rgba(20, 0, 30, 1)",
                nauticalDusk: "rgba(10, 0, 20, 1)",
                night: "rgba(0, 0, 0, 1)"
            },
            textColors: {
                nadir: "#00FF00",
                nightEnd: "#FF00FF",
                nauticalDawn: "#00FFFF",
                dawn: "#FF6347",
                sunrise: "#FFD700",
                sunriseEnd: "#FF1493",
                goldenHourEnd: "#FFA500",
                solarNoon: "#FFFF00",
                goldenHour: "#FF00FF",
                sunsetStart: "#00FF00",
                sunset: "#FF4500",
                dusk: "#DA70D6",
                nauticalDusk: "#8A2BE2",
                night: "#FF69B4"
            }
        },
        realistic: {
            bgColors: {
                nadir: "rgba(0, 0, 0, 1)",
                nightEnd: "rgba(30, 30, 45, 1)",
                nauticalDawn: "rgba(70, 80, 120, 1)",
                dawn: "rgba(150, 180, 230, 1)",
                sunrise: "rgba(255, 210, 150, 1)",
                sunriseEnd: "rgba(255, 245, 180, 1)",
                goldenHourEnd: "rgba(255, 205, 100, 1)",
                solarNoon: "rgba(255, 255, 255, 1)",
                goldenHour: "rgba(255, 190, 80, 1)",
                sunsetStart: "rgba(255, 130, 50, 1)",
                sunset: "rgba(255, 90, 40, 1)",
                dusk: "rgba(100, 60, 100, 1)",
                nauticalDusk: "rgba(40, 20, 60, 1)",
                night: "rgba(0, 0, 0, 1)"
            },
            textColors: {
                nadir: "#FFFFFF",
                nightEnd: "#DCDCDC",
                nauticalDawn: "#D3D3D3",
                dawn: "#000000",
                sunrise: "#A52A2A",
                sunriseEnd: "#8B4513",
                goldenHourEnd: "#8B4513",
                solarNoon: "#000000",
                goldenHour: "#8B4513",
                sunsetStart: "#FFFFFF",
                sunset: "#FFFFFF",
                dusk: "#DCDCDC",
                nauticalDusk: "#A9A9A9",
                night: "#DCDCDC"
            }
        },
        apple: {
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
                nadir: "#000000", // Black
                nightEnd: "#000000", // Black
                nauticalDawn: "#1E1E1E",
                dawn: "#000000",
                sunrise: "#F7D700",
                sunriseEnd: "#D91F1F",
                goldenHourEnd: "#9A4999",
                solarNoon: "#FFFFFF",
                goldenHour: "#F1E0A6",
                sunsetStart: "#FF9F1F",
                sunset: "#FF6633",
                dusk: "#BEBEBE",
                nauticalDusk: "#C8B59C",
                night: "#000000" // Black
            }
        }
    };
    
    constructor() {
        const theme = this.themes[this.config.themeName];
        console.log('config: ', this.config,'theme:', theme);
        this.config.bgColors = {...theme.bgColors};
        this.config.textColors = {...theme.textColors};
    }

    init(config = {}) {
        // Merge default config with provided config
        this.config = { ...this.config, ...config };
        
        
        const theme = this.themes[this.config.themeName];
        console.log('config initting: ', this.config,'theme:', theme);
        this.config.bgColors = {...theme.bgColors};
        this.config.textColors = {...theme.textColors};

        // Initialize the circadian animations
        this.initCircadianAnimation();

    }

    fetchSunData(coords) {
        const now = new Date();
        const dayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        const secondsSinceDayStart = (now - dayStart) / 1000;

        // Use SunCalc or similar library to get sun phases
        const sunData = SunCalc.getTimes(now, coords.lat, coords.lon);

        const sunSorted = Object.entries(sunData).sort(([_, timeA], [__, timeB]) => timeA - timeB);
        console.log("sunSorted", sunSorted);
        return { sunSorted, secondsSinceDayStart };
    }

    generateCircadianCSS(sunData) {
        const { sunSorted, secondsSinceDayStart } = sunData;
        const styleEl = document.createElement('style');
        styleEl.id = "circadian-styles"
        let { bgColors, textColors } = this.config;

        console.log('generateCircadianCSS entered. this.config.transitionMode ', this.config.transitionMode);
        let cssContent = `
            @keyframes circadian-animation {
                0%, 100% {
                    background: ${bgColors.nadir};
                    color: ${textColors.nadir};
                }
        `;

        let invertCssContent = `
            @keyframes circadian-animation-invert {
                0%, 100% {
                    background: ${textColors.nadir};
                    color: ${bgColors.nadir};
                }
        `;

        if (this.config.transitionMode === 'staged') {
            sunSorted.forEach(([key, time], index) => {
                const secondsSinceMidnight = (time - sunSorted[0][1]) / 1000;
                const dayPercent = Math.round((secondsSinceMidnight / 86400) * 100);
                const nextIndex = (index + 1) % sunSorted.length;
                const nextKey = sunSorted[nextIndex][0];
                const nextTime = sunSorted[nextIndex][1];
                const nextSecondsSinceMidnight = (nextTime - sunSorted[0][1]) / 1000;
                const nextDayPercent = Math.round((nextSecondsSinceMidnight / 86400) * 100);
                const transitionStartPercent = dayPercent + 1;
                const transitionEndPercent = nextDayPercent - 1;

                cssContent += `
                    ${dayPercent}% {
                        background: ${bgColors[key]};
                        color: ${textColors[key]};
                    }
                    ${transitionStartPercent}% {
                        background: ${bgColors[key]};
                        color: ${textColors[key]};
                    }
                    ${transitionEndPercent}% {
                        background: ${bgColors[nextKey]};
                        color: ${textColors[nextKey]};
                    }
                `;

                invertCssContent += `
                    ${dayPercent}% {
                        background: ${textColors[key]};
                        color: ${bgColors[key]};
                    }
                    ${transitionStartPercent}% {
                        background: ${textColors[key]};
                        color: ${bgColors[key]};
                    }
                    ${transitionEndPercent}% {
                        background: ${textColors[nextKey]};
                        color: ${bgColors[nextKey]};
                    }
                `;
            });
        } else if (this.config.transitionMode === 'continuous') {
            sunSorted.forEach(([key, time]) => {
                
                const secondsSinceMidnight = (time - sunSorted[0][1]) / 1000;
                const dayPercent = Math.round((secondsSinceMidnight / 86400) * 100);
                cssContent += `
                    ${dayPercent}% {
                        background: ${bgColors[key]};
                        color: ${textColors[key]};
                    }
                `;

                invertCssContent += `
                    ${dayPercent}% {
                        background: ${textColors[key]};
                        color: ${bgColors[key]};
                    }
                `;
            });
        }

        cssContent += `}.circadian {
            animation: circadian-animation 86400s linear -${secondsSinceDayStart}s infinite normal;
        }`;

        invertCssContent += `}.circadian-invert {
            animation: circadian-animation-invert 86400s linear -${secondsSinceDayStart}s infinite normal;
        }`;

        styleEl.innerHTML = cssContent + invertCssContent;
        // Remove old style tag if it exists
        const oldStyleEl = document.getElementById('circadian-styles');
        if (oldStyleEl) {
            oldStyleEl.remove();
        }

        // Add new style tag with an id
        styleEl.id = 'circadian-styles';
        document.head.prepend(styleEl);
    }

    initCircadianAnimation() {
        const sunData = this.fetchSunData(this.config.coordinates);
        this.generateCircadianCSS(sunData);
    }

    
}

