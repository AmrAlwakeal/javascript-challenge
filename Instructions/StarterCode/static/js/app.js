var tableData = data;

// select tbody 
tbody = d3.select("tbody")

var dateInputText = d3.select("#datetime")
var button = d3.select("filter-btn")

function displayData(data){ 
    tbody.text("")

    data.forEach(function(sighting){
    new_tr = tbody.append("tr")
    Object.entries(sighting).forEach(function([key, value]){
        new_td = new_tr.append("td").text(value)	
    })
})}

displayData(tableData)

// filter data with date that the user inputs
function clickSelect(){
    //don't refresh the page!
    d3.event.preventDefault();
    //print the value that was input
    console.log(dateInputText.property("value"));
    //create a new table showing only the filterd data
    var new_table = tableData.filter(sighting => sighting.datetime===dateInputText.property("value"))
    //display the new table
    displayData(new_table);
}

// event listener to handle change and click
dateInputText.on("change", clickSelect)

