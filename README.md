# Javascript: Filtering through a database of UFO sightings

Main file: /static/js/app.js                  
Data file: /static/js/data.js                   
HTML: index.html, filterpage.html                 

How to run: start a local server using python -m https.server, then navigate to local host.

This application allows a user to input a specific date, then searches a UFO dataset (in javascript) for any sightings that match, and dynamically returns a table populated with those matching records. 

Given that the dataset is extremely limited (only sightings between Jan 1 and Jan 13, 2010), I decided to make a second page with dropdown menus (option select statements), where users can select attributes of a given sighting (date, location, shape, etc.), and the application returns a filtered table. 

The part of this project I am most proud of is the dynamically-created dropdown lists, that run through the dataset and create the dropdown options based on unique values in each column of the dataset (this code can be found in the app.js file under "function buildDropdowns()". 
