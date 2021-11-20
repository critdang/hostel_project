document.querySelectorAll('.sidebar-submenu').forEach(e => {
    e.querySelector('.sidebar-menu-dropdown').onclick = (event) => {
        event.preventDefault();
        e.querySelector('.sidebar-menu-dropdown .dropdown-icon').classList.toggle('active');

        let dropdown_content = e.querySelector('.sidebar-menu-dropdown-content')
        let dropdown_content_lis = dropdown_content.querySelectorAll('li');

        let active_height = dropdown_content_lis[0].clientHeight + dropdown_content_lis.length;

        dropdown_content.classList.toggle('active');

        dropdown_content.style.height = dropdown_content.classList.contains('active') ? active_height + 'px': '0';
    }
})
let category_options = {
    series: [44, 55, 41, 17],
    labels: ['Cloths','Devices','Bags','Ưatches'],
    chart: {
        type: 'donut',
    },
    color: ['#6ab04c','#2980b9','#f39c12','#d35400']
//   responsive: [{
//     breakpoint: 480,
//     options: {
//       chart: {
//         width: 200
//       },
//       legend: {
//         position: 'bottom'
//       }
//     }
//   }]
  };

let category_chart = new ApexCharts(document.querySelector("#category-chart"), category_options);
category_chart.render();

 
let customer_options = {
    series: [{
        name: "Store Customers",
        data: [40, 70, 29, 90, 36, 80, 30, 91, 60]
    },{
        name: "Online Customers",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
    }],
    color: ['#6ab04c','#2980b9'],
    chart: {
        height: 350,
        type: 'line',
        zoom: {
            type: 'x',
            enabled: true,
            autoScaleYaxis: true
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth'
    },
    title: {
        text: 'Product Trends by Month',
        align: 'left'
    },
    grid: {
        row: {
        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.5
        },
    },
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    },
    
};

  let customer_chart = new ApexCharts(document.querySelector("#customer-chart"), customer_options);
  customer_chart.render();

// Dark mode toggle 
let darkmode_toggle = document.querySelector('#darkmode-toggle');

darkmode_toggle.onclick = (e) => {
    e.preventDefault();
    document.querySelector('body').classList.toggle('dark');
    darkmode_toggle.querySelector('.darkmode-switch').classList.toggle('active');
}