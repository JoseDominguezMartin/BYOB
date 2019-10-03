function buildTable(tableData) {
    // adding table rows and cells to add data from data.js into table format
    var tbody = d3.select('tbody');
    tbody.html('');
    tableData.forEach((report) => {
        console.log(report);
        // tbody.html('');
        var row = tbody.append('tr');
        Object.entries(report).forEach(([key, value]) => {
            console.log(key, value);
            var cell = row.append('td');
            cell.text(value);
        });
    })
}


function init() {
    d3.json(`/beerinfo`).then((data) => {
            buildTable(data);
    // Object.entries(data).forEach(([key, value]) => {
    //         console.log(key, value);
})
          }
init()

