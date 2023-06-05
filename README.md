## Value shortening function

The function takes 2 parameters: value and desiredValueUnit and returns a shortened value and valueUnit.

```
shortening(10000) -> {value: 10, valueUnit: "K"}
```

The supported valueUnits:
* "" (no units)
* "K" (thousands)
* "M" (millions)
* "bn" (billions)
* "T" (trillions)

### Setup

1. Install [Node.js](https://nodejs.org/en/download)
2. Clone this repository
3. Download dependencies: `npm install`

### Tests

Used testing framework: [Jest](https://jestjs.io/)

* Execute all tests: `npm test`