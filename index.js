//Geeft waardes mee aan de SVG in de HTML.
var svg = d3.select("svg"),
    margin = {top: 40, right: 40, bottom: 90, left: 80},
    width = +svg.attr("width") - margin.left - margin.right,
    height = +svg.attr("height") - margin.top - margin.bottom;
    
var x = d3.scaleBand().rangeRound([0, width]).padding(0.1), //Helpt het genereren van de bars.
    y = d3.scaleLinear().rangeRound([height, 0]); //Helpt met het aangeven van de lengte.

var g = svg.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

//laad de data in van data.tsv file.
d3.tsv("data.tsv", function(d) {
  d.speakers = +d.speakers;
  return d;
}, function(error, data) {
  if (error) throw error;

  x.domain(data.map(function(d) { return d.languages; }));
  y.domain([0, d3.max(data, function(d) { return d.speakers; })]);

    //Genereerd de x axis.
  g.append("g")
      .attr("class", "axis axis--x")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

    //Genereerd de y axis.
  g.append("g")
      .attr("class", "axis axis--y")
      .call(d3.axisLeft(y).ticks(10)) //Geeft de hoevelheid intervals aan.
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", "0.71em")
      .attr("text-anchor", "end")
      .text("langue");

  g.selectAll(".bar")
    .data(data)
    .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d) { return x(d.languages); })
      .attr("y", function(d) { return y(d.speakers); })
      .attr("width", x.bandwidth())
      .attr("height", function(d) { return height - y(d.speakers); });
});
