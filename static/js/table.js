// d3.json(`/sampleinfo`).then((tableData) => {​
// let beerCategory = '';
​console.log("test")
// function refreshTable(beerCategory) {
//     d3.json(`/sampleinfo`).then((data) => {
//         if (beerCategory) {
//             data = data.filter((obj) => obj.beer === beerCategory);
//         }
//         buildTable(data);
//         // Object.entries(data).forEach(([key, value]) => {
    
//         //         console.log(data);
//     });
// }
​
​
// function buildTable(tableData) {
// ​
// // adding table rows and cells to add data from data.js into table format
    
//     tableData.forEach((report) => {
//     console.log(report);
//     var tbody = d3.select('tbody');
//     tbody.html('');
//     var row = tbody.append('tr');
// ​
//     Object.entries(report).forEach(([key, value]) => {
//         console.log(key, value);
//         var cell = row.append('td');
//         cell.text(value);
//     });
// }) 
// }
// ​
// activating the click button/event listener and form
// ​function create_dropdown(arr){
//     var selector = d3.select('#category-dropdown');
//     arr.forEach(function (category){
//         selector
//             .append("option")
//             .text(category)
//             .property("value", category)
//     })
// }

​
// button.on('click', function () {
//     // d3.event.preventDefault()
//     var inputField = d3.select('#datetime');
//     var inputValue = inputField.property('value');
//     console.log(inputValue)
// ​
//     var filteredData = tableData.filter(item => item.zip_code === inputValue);
// ​
//     console.log(filteredData);
// ​
//     buildTable(filteredData)
//     // var outcome = d3.select('#filters');
//     // tbody.html("")
//     // filteredData.forEach((entry) => {
//     //     console.log(entry);
//     //     var row = tbody.append('tr');
// ​
//     // Object.entries(entry).forEach(([key, value]) => {
//     //     console.log(key, value);
//     //     var cell = row.append('td');
//     //     cell.text(value);
//     });
​
// buildTable()
// create_dropdown(tableData.category_labels)

// })