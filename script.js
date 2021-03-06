google.charts.load('current', { 'packages': ['map'],
// 'mapsApiKey': 'AIzaSyAAhy_9WWHiIYdANue9UquWcrhSQ8wPJiQ'
});
google.charts.setOnLoadCallback(drawMap);

function drawMap() {
  var data = google.visualization.arrayToDataTable([
  ['Lat', 'Long', 'Name'],
[6.524379,3.379206, 'Lagos'],
[7.131980, 3.642200, 'Ogun State'],
[9.076479, 7.398574, 'Abuja'],
[6.444550, 7.490180, 'Enugu'],
[10.314159, 9.846282, 'Bauchi'],
[7.292550, 7.697180, 'Edo'],
[7.706490, 5.365730, 'Ekiti'],
[7.544510, 4.556030, 'Osun'],
[7.842958, 3.936844, 'Oyo'],
[5.022600, 6.973740, 'Rivers']
  ]);

var options = {
  showTooltip: true,
  showInfoWindow: true

};

var map = new google.visualization.Map(document.getElementById('chart_div'));

map.draw(data, options);
};