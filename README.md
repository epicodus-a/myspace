<h1 align="center"> Doctor Lookup </h1>

<p align="center">An application to find the best doctor in target area</p><br>


## Setup/Installation Requirements

To clone and run this application, you'll need Git and Node, Npm installed on your computer. From your command line:

```
// Clone this repository
$ git clone https://github.com/epicodus-a/doctor-lookup.git

// Go into the repository
$ cd doctor-lookup

// Install dependencies
$ npm install

Get your api key at https://developer.betterdoctor.com and developers.google.com

// create file .env at projet root
$ touch .env

// add your key to .env as below format:
exports.apiKey=[Your api key]
exports.googleApiKey=[Your api key]


// Run the app
$ npm start
```

## Specifications

- A user should be able to enter a medical issue to receive a list of doctors in the Portland area that fit the search query.
- A user should be able to to enter a name to receive a list of doctors in the Portland area that fit the search query.
- If the query response includes any doctors, the following information should be included about each doctor: first name, last name, address, phone number, website and whether or not the doctor is accepting new patients (the API provides this data).
- If the API call results in an error (any message not a 200 OK), the application should return a notification that states what the error is.
- If the query response doesn't include any doctors (for instance, if no doctors meet the search criteria), the application should return a notification that states that no doctors meet the criteria. (This is not an error so it should be handled separately from any errors.)
- Allow users to search by location (instead of just hardcoding a value for Portland). This will involve making two API calls: one to geocode the latitude and longitude of a location and then a second call to the BetterDoctor API.
- Add an additional API call to retrieve the list of specialities from the database before you query for a doctor, then return that list in a dropdown menu.
- Create a list of "recently viewed" doctors and display it.
- Create a list of "related doctors" and display it. You can define related however you wish.
- Add static pages, links to your GitHub, social media, and more.
- Use Google Maps API to plot the locations of doctors's practices on a map.


## Known Bugs

- ?

## Support and contact details

- @Adrianacmy


## Credits

This software uses code from several open source packages.

  - babel-core: "^6.26.0",
  - babel-loader: "^7.1.3",
  - babel-preset-es2015: "^6.24.1",
  - clean-webpack-plugin: "^0.1.18",
  - css-loader: "^0.28.10",
  - eslint: "^4.18.2",
  - eslint-loader: "^2.0.0",
  - html-webpack-plugin: "^3.0.6",
  - jasmine: "^3.1.0",
  - jasmine-core: "^2.99.1",
  - karma: "^2.0.0",
  - karma-chrome-launcher: "^2.2.0",
  - karma-cli: "^1.0.1",
  - karma-jasmine: "^1.1.1",
  - karma-jasmine-html-reporter: "^0.2.2",
  - karma-jquery: "^0.2.2",
  - karma-webpack: "^2.0.13",
  - style-loader: "^0.20.2",
  - uglifyjs-webpack-plugin: "^1.2.2",
  - webpack: "^4.0.1",
  - webpack-cli: "^2.0.9",
  - webpack-dev-server: "^3.1.0"
  - bootstrap: "^4.1.0",
  - jquery: "^3.3.1",
  - popper.js": "^1.14.3"

### License

- MIT

Copyright (c) 2018 Adriana

