// from data.js
var tableData = data;

var filterDate = d3.select("#datetime");

function tabla(inputDate) {
    console.log(tableData);
    var filteredData = tableData.filter(row => row.datetime == inputDate);
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

filterDate.on("keydown", function() {
    if (d3.event.key === "Enter") {
        d3.event.preventDefault();
        var inputDate = d3.select(".form-control").property("value");
        console.log(inputDate);
        d3.select("h4").text(`Sightings on: ${inputDate}`);
        
        var filteredData = tableData.filter(row => row.datetime == inputDate);
        console.log(filteredData)
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
        //var tabla = data.tabla(inputDate);
        //console.log(tabla);
});

var submit = d3.select("#filter-btn")

submit.on("click", function() {
    d3.event.preventDefault();
    var inputDate = d3.select("#datetime").property("value");
    console.log(inputDate);
    d3.select("h4").text(`Sightings on: ${inputDate}`);
    tabla(inputDate);
});

var filter_submit = d3.select("#filter-btn2")

filter_submit.on("click", function () {
    

}




