// Donut Chart
var options = {
  series: [8.7, 9.9, 23.8, 32.0, 25.6],
  chart: {
  width: '100%',
  height:'100%',
  type: 'donut',
  foreColor:'#838fb9',
},
labels:['Direct','Social','Email','Other','Referrals'],
plotOptions: {
  pie: {
    startAngle: -90,
    endAngle: 270
  }
},
dataLabels: {
  enabled: true,
  style:{
    fontFamily:'Poppins, sans-serif',
    fontWeight: 'normal',
    fontSize:'12px'
  }
},
fill: {
  type: 'gradient',
},
legend: {
  position: 'bottom',
  horizontalAlign: 'center', 
  fontSize: '14px',
  fontFamily: 'Poppins, sans-serif',
  fontWeight: 400,
  formatter: function(val) {
    return val;
  },
},

// responsive: [{
//   breakpoint: 1920,
//   options: {
//     chart: {
//       width: 400
//     },
//     legend: {
//       position: 'bottom'
//     }
//   }
// }]
};

var chart = new ApexCharts(document.querySelector("#pie"), options);
chart.render();


//column
var options = {
  series: [{
  name: 'iTest Factory',
  data: [44, 55, 41, 67, 22, 43]
}, {
  name: 'Digitech Galaxy',
  data: [13, 23, 20, 8, 13, 27]
}, {
  name: 'Zoetic Fashion',
  data: [11, 17, 15, 15, 21, 14]
}, {
  name: 'Meta4Systems',
  data: [21, 7, 25, 13, 22, 8]
}],
  chart: {
  type: 'bar',
  height: '400',
  stacked: true,
  toolbar: {
    show: false
  },
  zoom: {
    enabled: true
  }
},
responsive: [{
  breakpoint: 480,
  options: {
    legend: {
      position: 'bottom',
      offsetX: -10,
      offsetY: 0
    }
  }
}],
plotOptions: {
  bar: {
    horizontal: false,
    borderRadius: 8,
    dataLabels: {
      total: {
        enabled: true,
        style: {
          fontSize: '13px',
          fontWeight: 900
        }
      }
    }
  },
},
xaxis: {
  type: 'datetime',
  categories: ['01/01/2011 GMT', '01/02/2011 GMT', '01/03/2011 GMT', '01/04/2011 GMT',
    '01/05/2011 GMT', '01/06/2011 GMT'
  ],
},
legend: {
  position: 'right',
  offsetY: 40
},
fill: {
  opacity: 1
}
};

var chart = new ApexCharts(document.querySelector("#column"), options);
chart.render();




// graph
var options = {
    series: [{
    name: 'Orders',
    type: 'column',
    data: [89, 98, 68 , 108, 77, 84, 51, 28, 92, 42, 87,36]
  }, {
    name: 'Earning',
    type: 'area',
    data: [34, 65, 46, 67, 42, 63, 41, 71, 56, 47, 53,64]
  }, {
    name: 'Refunds',
    type: 'line',
    data: [8, 12, 7, 17, 21, 11, 5,9 , 7, 29, 12,35]
  }],
    chart: {
    height: 310,
    type: 'line',
    stacked: false,
    toolbar:{
        show:false,
    },
  },
  stroke: {
    width: [0, 2, 5],
    curve: 'smooth'
  },
  plotOptions: {
    bar: {
      columnWidth: '50%'
    }
  },
  
  fill: {
    opacity: [0.85, 0.25, 1],
    gradient: {
      inverseColors: false,
      shade: 'light',
      type: "vertical",
      opacityFrom: 0.85,
      opacityTo: 0.55,
      stops: [0, 100, 100, 100]
    }
  },
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
    'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ],
  markers: {
    size: 0
  },
  xaxis: {
    type: 'text'
  },
  yaxis: {
    title: {

    },
    min: 0,
    max:120,
    tickAmount: 4,

  },
  tooltip: {
    shared: true,
    intersect: false,
    y: {
      formatter: function (y) {
        if (typeof y !== "undefined") {
          return y.toFixed(0) + " ";
        }
        return y;
  
      }
    }
  }
  };

  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();