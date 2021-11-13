function rbg() {
  const red = Math.floor((Math.random() * 256) / 2);
  const blue = Math.floor((Math.random() * 256) / 2);
  const green = Math.floor((Math.random() * 256) / 2);
  return "rgb(" + red + ", " + blue + ", " + green + ")";
}

let canvas1 = document.createElement("canvas");
canvas1.id = "myChart";
canvas1.style.width = "100px";
canvas1.style.height = "50px";
let body = document.getElementById("bodyContent");
body.insertBefore(canvas1, body.childNodes[0]);

let xhr = new XMLHttpRequest();

const ctx3 = document.getElementById("myChart").getContext("2d");
const myChart3 = new Chart(ctx3, {
  type: "line",
  data: {
    labels: [],
    datasets: [
      {
        label: "Y",
        data: [],
        borderColor: rbg(),
      },
    ],
  },
});

let data;
let data2 = [];
let tabX = [];

function getData() {
  xhr.open("POST", "https://canvasjs.com/services/data/datapoints.php", true);
  xhr.send();
  xhr.onreadystatechange;
}

xhr.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    let tabX = [];
    let tabY = [];
    data = this.response;
    data2 = JSON.parse(data);
    console.log(data2);
    for (i = 0; i < data2.length; i++) {
      tabX.push(data2[i][0]);
      tabY.push(data2[i][1]);
    }
    myChart3.data.labels = tabX;
    myChart3.data.datasets[0].data = tabY;
    myChart3.update();
  }
};
setInterval(getData, 2000);

// SECOND GRAPH

let canvas2 = document.createElement("canvas");
canvas2.id = "secondGraph";
canvas2.style.width = "100px";
canvas2.style.height = "50px";
let caption1 = document.querySelector("#table1 > caption");
caption1.insertBefore(canvas2, caption1.childNodes[0]);

let table1 = document.getElementById("table1");
let yearData = [];
let countryData = [];
let dataSets = [];

for (let i = 0; i < table1.rows[1].cells.length; i++) {
  yearData[i - 2] = table1.rows[1].cells[i].innerHTML;
}
for (let j = 2; j < table1.rows.length; j++) {
  countryData = table1.rows[j].cells[1].innerHTML;
  table1.rows[j].cells[1].innerHTML;
  table1.rows[j].cells[1].innerHTML;
  table1.rows[j].cells[1].innerHTML;
  table1.rows[j].cells[1].innerHTML;
  table1.rows[j].cells[1].innerHTML;
  table1.rows[j].cells[1].innerHTML;
  table1.rows[j].cells[1].innerHTML;
  table1.rows[j].cells[1].innerHTML;
  table1.rows[j].cells[1].innerHTML;

  let numbersData = [];
  let tableRow = table1.rows[j];
  let jsonData = {
    label: countryData,
    data: numbersData,
    backgroundColor: rbg(),
  };

  for (let i = 2; i < tableRow.cells.length; i++) {
    numbersData.push(parseInt(tableRow.cells[i].innerHTML));
  }
  dataSets.push(jsonData);
}

let ctx1 = document.getElementById("secondGraph").getContext("2d");
let myChart = new Chart(ctx1, {
  type: "bar",
  data: {
    labels: yearData,
    datasets: dataSets,
  },
});

// LAST GRAPH

let canvas3 = document.createElement("canvas");
canvas3.id = "thirdGraph";
canvas3.style.width = "100px";
canvas3.style.height = "90px";
let caption2 = document.querySelector("#table2 > caption");
caption2.insertBefore(canvas3, caption2.childNodes[0]);

let table2 = document.getElementById("table2");
let yearData2 = [];
let countryData2 = [];
let dataSets2 = [];

// YEAR
for (let i = 1; i < table2.rows[1].cells.length; i++) {
  yearData2[i - 2] = table2.rows[0].cells[i].innerHTML;
}

// COUNTRY
for (let j = 1; j < table2.rows.length; j++) {
  countryData2 = table2.rows[j].cells[1].innerHTML;
  table2.rows[j].cells[1].innerHTML;
  table2.rows[j].cells[1].innerHTML;

  let numbersData2 = [];
  let tableRow2 = table2.rows[j];
  let jsonData2 = {
    label: countryData2,
    data: numbersData2,
    backgroundColor: rbg(),
  };

  for (let k = 2; k < tableRow2.cells.length; k++) {
    numbersData2.push(parseInt(tableRow2.cells[k].innerHTML));
  }
  dataSets2.push(jsonData2);
}

let ctx2 = document.getElementById("thirdGraph").getContext("2d");
let myChart2 = new Chart(ctx2, {
  type: "bar",
  data: {
    labels: yearData2,
    datasets: dataSets2,
  },
});