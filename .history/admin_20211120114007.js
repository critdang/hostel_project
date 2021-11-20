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
var category_options = {
    series: [44, 55, 41, 17, 15],
    chart: {
        type: 'donut',
  },
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200
      },
      legend: {
        position: 'bottom'
      }
    }
  }]
  };

var category_chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();

// Dark mode toggle 
let darkmode_toggle = document.querySelector('#darkmode-toggle');

darkmode_toggle.onclick = (e) => {
    e.preventDefault();
    document.querySelector('body').classList.toggle('dark');
    darkmode_toggle.querySelector('.darkmode-switch').classList.toggle('active');
}