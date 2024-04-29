// Chart options
const options = {
  chart: {
    height: 700,
    width: "100%",
    type: "bar",
    background: "#f4f4f4",
    foreColor: "#333",
  },
  plotOptions: {
    bar: {
      horizontal: false,
      colors: {
        ranges: [
          {
            from: 0,
            to: 99999999,
            color: "#F44336",
          },
        ],
      },
    },
  },
  series: [
    {
      name: "Population",
      data: [
        8804190, 3898747, 2746388, 2304580, 1608139, 1603797, 1434625, 1386932,
        1304379, 1013240, 961855, 949611, 918915, 905748, 897041, 874579,
        873965, 737015, 715522, 715884, 681054, 678815, 675647, 652503, 641903,
        639111, 633104, 633045, 585708, 577222,
      ],
    },
  ],
  xaxis: {
    categories: [
      "New York",
      "Los Angeles",
      "Chicago",
      "Houston",
      "Phoenix",
      "Philadelphia",
      "San Antonio",
      "San Diego",
      "Dallas",
      "San Jose",
      "Austin",
      "Jacksonville",
      "Fort Worth",
      "Columbus",
      "Indianapolis",
      "Charlotte",
      "San Francisco",
      "Seattle",
      "Denver",
      "Nashville",
      "Oklahoma City",
      "El Paso",
      "Boston",
      "Portland",
      "Las Vegas",
      "Detroit",
      "Memphis",
      "Louisville",
      "Baltimore",
      "Milwaukee",
    ],
  },
  fill: {
    colors: ["#F44336"],
  },
  dataLabels: {
    enabled: false,
  },
  title: {
    text: "Largest Top 30 US Cities By Population in 2020",
    align: "center",
    margin: 20,
    offsetY: 20,
    style: {
      fontSize: "25px",
    },
  },
};

// Init chart
const chart = new ApexCharts(document.querySelector("#chart"), options);

// Render chart
chart.render();

// Event example
document.getElementById("change-horizontal").addEventListener("click", () =>
  chart.updateOptions({
    plotOptions: {
      bar: {
        horizontal: true,
        colors: {
          ranges: [
            {
              from: 0,
              to: 99999999,
              color: "#FFC107",
            },
          ],
        },
      },
    },
  })
);

document.getElementById("change-vertical").addEventListener("click", () =>
  chart.updateOptions({
    plotOptions: {
      bar: {
        horizontal: false,
        colors: {
          ranges: [
            {
              from: 0,
              to: 99999999,
              color: "#F44336",
            },
          ],
        },
      },
    },
  })
);
