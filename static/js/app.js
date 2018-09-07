// from data.js
var tableData = data;

var filterDate = d3.select("#datetime");

function filter1(inputDate) {
    console.log(inputDate);
    var filteredData = tableData.filter(row => row.datetime == inputDate);

    if (filteredData.length === 0) {
        console.log("No reason to build");
        var tbody = d3.select("tbody");
        tbody.html("");
        d3.select("h4").text(`There were no sightings on your chosen date.`);
    }
    else {
        console.log("I'm building");
        tabla(filteredData);
    }
    
}

function filterDown(dateChoice, cityChoice, stateChoice, countryChoice, shapeChoice) {
    var filteredData = tableData; // start by giving the data to filteredData

    // Now run through an "if" statement for everything it could be filtered on, and filter down 
    // the data based on that... if any of the fields are left "all", just skip them.

    if (dateChoice !== "all") {
        filteredData = filteredData.filter(row => row.datetime == dateChoice);
    }
    if (cityChoice !== "all") {
        filteredData = filteredData.filter(row => row.city == cityChoice);
    }
    if (stateChoice !== "all") {
        filteredData = filteredData.filter(row => row.state == stateChoice);
    }
    if (countryChoice !== "all") {
        filteredData = filteredData.filter(row => row.country == countryChoice);
    }
    if (shapeChoice !== "all") {
        filteredData = filteredData.filter(row => row.shape == shapeChoice);
    }

    // Finally, if there's no data left, tell the user, and if there is, build the table
    if (filteredData.length === 0) {
        console.log("No reason to build");
        var tbody = d3.select("tbody");
        tbody.html("");
        d3.select("h4").text(`There were no sightings that meet your criteria.`);
    }
    else {
        console.log("I'm building");
        tabla(filteredData);
    }
}


function tabla(filteredData) {
    console.log(filteredData);
    var tbody = d3.select("tbody");
    tbody.html("");
    filteredData.forEach((sighting) => {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
            var cell = tbody.append("td");
            cell.text(value);
        });
    });
    
}

function unpack(data, attribute) {
    var newArr = [];
    var thisOne = "";

    for (i=0; i < data.length; i++) {
        thisOne = data[i][attribute];
        if (newArr.includes(thisOne)) { 
        }
        else {
            newArr.push(thisOne);
        }
    }
    return newArr;
}

function buildDropdowns() {
    // set up the lists I want to loop through
    var value_criteria = ["datetime", "city", "state", "country", "shape"];
    //var var_names = ["date_ops", "city_ops", "state_ops", "country_ops", "shape_ops"];
    var element_ids = ["list_select_date", "list_select_city", "list_select_state", "list_select_country", "list_select_shape"];
    //var tiny_names = ["date", "city", "state", "country", "shape"];
    console.log(element_ids[0]);
    for (j=0; j < value_criteria.length; j++){
        var list_var = [];
        var criteria = value_criteria[j];
        var element = element_ids[j];
        list_var = unpack(tableData, criteria);

        list_var.forEach((item) => {
            var select = document.getElementById(element);
            select.options[select.options.length] = new Option(item, item, false, false);
        });
        console.log(j);
    }
}
    
    // Date options
    //var date_ops = unpack(tableData, "datetime");
    //console.log(date_ops);

    //date_ops.forEach((date) => {
    //    var select = document.getElementById("list_select_date");
    //    select.options[select.options.length] = new Option(date, date, false, false);
    //});

    // City options
    //city_ops.forEach(())
    // State options

    // Country options

    // Shape options
    //var shape_ops = unpack(tableData, "shape");
    //console.log(shape_ops);

    //shape_ops.forEach((shape) => {
    //    var select = document.getElementById("list_select_shape");
    //    select.options[select.options.length] = new Option(shape, shape, false, false);
    //});

//}


filterDate.on("keydown", function() {
    if (d3.event.key === "Enter") {
        d3.event.preventDefault();
        var inputDate = d3.select(".form-control").property("value");
        console.log(inputDate);
        d3.select("h4").text(`Sightings on: ${inputDate}`);
        filter1(inputDate);
    }
});

var submit = d3.select("#filter-btn")

submit.on("click", function() {
    d3.event.preventDefault();
    var inputDate = d3.select("#datetime").property("value");
    console.log(inputDate);
    d3.select("h4").text(`Sightings on: ${inputDate}`);
    filter1(inputDate);
});

var filter_submit = d3.select("#filter-btn2")

filter_submit.on("click", function() {
    d3.event.preventDefault();
    var dateChoice = d3.select("#list_select_date").property("value");
    console.log(dateChoice);

    var cityChoice = d3.select("#list_select_city").property("value");
    console.log(cityChoice);
    
    var stateChoice = d3.select("#list_select_state").property("value");
    console.log(stateChoice);

    var countryChoice = d3.select("#list_select_country").property("value");
    console.log(countryChoice);

    var shapeChoice = d3.select("#list_select_shape").property("value");
    console.log(shapeChoice);

    d3.select("h4").text(`Sightings on ${dateChoice} in ${cityChoice}, ${stateChoice}, ${countryChoice} that looked like a ${shapeChoice}`);

    filterDown(dateChoice, cityChoice, stateChoice, countryChoice, shapeChoice);
});

buildDropdowns();


