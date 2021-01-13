## getPhases()//array of objects containing a start: date object, name: 'phase_name',end: date object
[
{
identifier: 'CIVIL_TWILIGHT',
name: 'Civil Twilight',
start: Date object,
end: Date object
},
{
identifier: 'CIVIL_DUSK',
name: 'Civil Dusk',
start: Date object,
end: Date object
},
...
]
## getPhase()//accepts a specific phase name and date and location
{
identifier: 'CIVIL_DUSK',
name: 'Civil Dusk',
start: Date object,
end: Date object
}
## getCustomRange(),
{
start:
    {
        identifier: 'CIVIL_DAWN',
        name: 'Civil Dawn',
        start: Date object,
        end: Date object
    },
end: {
        identifier: 'NOON',
        name: 'Noon',
        start: Date object,
        end: Date object
    },
}
## getPhaseName()
'Civil Twilight'
## getPhaseIdentifier()
'CIVIL_TWILIGHT'

## getPercentageOfDaylightCompleted()
0.75

## getPercentageOfDaylightRemaining()
0.25
## getSecondsOfDaylightCompleted()
1800
## getSecondsOfDaylightRemaining()
2400
## getPercentageOfPhaseCompleted()
.98

## getPercentageOfPhaseRemaining()
1.0
## getSecondsOfPhaseCompleted()
8400
## getSecondsOfPhaseRemaining()
0
## getAzimuth()
21.6
## getPercentageRemainingOfCustomRange()
.49
## getSecondsRemainingOfCustomRange(),
4200
