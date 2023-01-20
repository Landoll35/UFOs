// import the data from data.js
const tableData = Data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Clear out any existing data
function buildTable(data) {
    tbody.html("")
}

data.forEach((dataRow) => {
    let row = tbody.append("tr");
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
      }
    );
  });