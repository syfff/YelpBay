import define1 from "./450051d7f1174df8@254.js";

function _1(md){return(
md`#### Data source
In this notebook, I used the dataset containing information about Coffee Shops, Cafes, and Bubble Tea Shops in the Bay Area sourced from Yelp provided by the teaching group. `
)}

function _2(md){return(
md`#### Data cleaning
Data cleaning is carried out in R, where only features that used in the following analysis are kept. I first checked that every entry in the 6803 records are unique as each of them has a unique Yelp url. However, 157 of the shops share the same coordinate and 437 of them share the same address. It would not be a concern to share the same address, however, when plotting the dots on graph based on their coordinates, extra attention should be taken so that these shops sharing the same coordinate will not overlap with each other. `
)}

function _3(md){return(
md`Select your desired circle radius (from 5 to 25 miles, default is 5, increment is 2.5)`
)}

function _radius(Scrubber,d3){return(
Scrubber(
  d3.range(5, 27.5, 2.5), 
  { autoplay: false, loop:false}
)
)}

function _radius1(Scrubber,d3){return(
Scrubber(
  d3.range(5, 27.5, 2.5), 
  { autoplay: false, loop:false}
)
)}

function _filtering(html,d3,dots,map)
{
  const status = html`<code>Rating: 1, Review Count: 0</code>`;
  
  d3.select("#rating")
	.on("change", function() {
    dots.filter(d => ((d.rating < d3.select("#rating").property("value"))|| (d.review < d3.select("#rc").property("value")))).attr('fill-opacity', 0).attr("r", 0).on("mouseover.hover2", function(event, d){
      d3.selectAll("div#details").remove();
    }).on("mouseover.highlight", function(event, d) { 
        d3.select(this)
        .style("stroke", null);
    });
    
    dots.filter(d => ((d.rating >= d3.select("#rating").property("value")) && (d.review >= d3.select("#rc").property("value")))).attr('fill-opacity', 0.75).attr("r", Math.max(map.getZoom()*1/3, 3)).on("mouseover.hover2", function(event, d){
      let me = d3.select(this);
      let div = d3.select("body").append('div');
      
      div.attr("id", "details");
      div.attr("class", "tooltip");
    
      const res = Object.entries(d).filter(([key, value]) => key !== 'coordinates')
                                     
      let rows = div.append("table")
        .selectAll("tr")
        .data(res)
        .enter()
        .append("tr");

      rows.append("th").text(key => key[0]);
      rows.append("td").text(key => key[1]);
    
      // d3.select(status).text("hover: " + d.name);
    }).on("mouseover.highlight", function(event, d) { 
        d3.select(this)
        .style("stroke", "black");
    });
    
    status = d3.select(status).text("Rating: " + d3.select("#rating").property("value") + " Review Count: " + 
                                    d3.select("#rc").property("value"));
	});
  
  d3.select("#rc")
	.on("change", function() {
    dots.filter(d => ((d.rating < d3.select("#rating").property("value")) || (d.review < d3.select("#rc").property("value")))).attr('fill-opacity', 0).attr("r", 0).style("stroke", null).on("mouseover.hover2", function(event, d){
      d3.selectAll("div#details").remove();
    }).on("mouseover.highlight", function(event, d) { 
        d3.select(this)
        .style("stroke", null);
    });
    dots.filter(d => ((d.rating >= d3.select("#rating").property("value")) && (d.review >= d3.select("#rc").property("value")))).attr('fill-opacity', 0.75).attr("r", Math.max(map.getZoom()*1/3, 3)).on("mouseover.hover2", function(event, d){
      let me = d3.select(this);
      let div = d3.select("body").append('div');
      
      div.attr("id", "details");
      div.attr("class", "tooltip");
    
      const res = Object.entries(d).filter(([key, value]) => key !== 'coordinates')
                                     
      let rows = div.append("table")
        .selectAll("tr")
        .data(res)
        .enter()
        .append("tr");

      rows.append("th").text(key => key[0]);
      rows.append("td").text(key => key[1]);
    
      // d3.select(status).text("hover: " + d.name);
    }).on("mouseover.highlight", function(event, d) { 
        d3.select(this)
        .style("stroke", "black");
    });
    status = d3.select(status).text("Rating: " + d3.select("#rating").property("value") + " Review Count: " + d3.select("#rc").property("value"));
	})  
  return status
}


function _7(md){return(
md`Select your desired rating (from 1 to 5, default 1)`
)}

function _8(htl){return(
htl.html`<input type="range" min="1" max="5" step = "0.5" value="1" id="rating">`
)}

function _9(md){return(
md`Select your desired minimum review count (from 0 to 1000, default 0)`
)}

function _10(htl){return(
htl.html`<input type="range" min="0" max="1000" step = "100" value = "0" id="rc">`
)}

function _11(htl){return(
htl.html`<div id='map' style='width: 100%; height: 30rem;'></div>`
)}

function _12(md){return(
md`#### Some commentary on the development process
Roughly, I spent about 25 hours in this assignment. The first 5 hours were spent on importing the map base and setting up the project, then, another 8 hours was spent on implementing the dots, two circles, and the filter function. However, while implementing the filter, I was encountered with several bugs. I spent approximately 5 hours to figure out the bugs with the help of the CA team. The last 7 hours were 2 hours of polishing the aesthetics and 5 hours of highlighting the intersection between 2 circles. 

#### Briefly detail a shortcoming or design deficiency with your visualization. 
I would like to improve the tooltip I designed for each shop when the mouse is hovering over the points. Specifically, I would like to design a custom style that can layout the photo from \`image_url\`, and reorganize the layout so that it can appear to be more appealing to the readers. Now, it is just a plain \`hmtl\` table. 

Moreover, for the meter to radius conversion, currently, I am fixing the latitude to be the center point of the bay area, so that I don't need to update the latitude dynamically. However, if possible, I should also implement it to change dynamically to be more rigorous. 

Another small improvement would be, currently, the size of the dot representing each shop is really small. Sometimes, the tooltip will not appear as I am not hovering precisely over the dot. If possible, I would like to resolve this by implementing more user-friendly judgement criteria about whether users are hovering over a dot or not. `
)}

function _13(md){return(
md`#### Code`
)}

function _14(md){return(
md`#### Import data`
)}

function _yelp_cleaned(__query,FileAttachment,invalidation){return(
__query(FileAttachment("yelp_cleaned.csv"),{from:{table:"yelp_cleaned"},sort:[],slice:{to:null,from:null},filter:[],select:{columns:null}},invalidation)
)}

function _file(FileAttachment){return(
FileAttachment("yelp_cleaned.csv")
)}

async function _data(d3,file){return(
d3.csvParse(await file.text())
)}

function _18(md){return(
md`#### libraries`
)}

function _d3(require){return(
require('d3@7')
)}

async function _mapboxgl(require,html)
{
  const gl = await require("mapbox-gl@2.12.1");
  if (!gl.accessToken) {
    gl.accessToken =
      "pk.eyJ1IjoieWlmYW5zaGVuIiwiYSI6ImNsZTBjcnM3NTA4MjMzcXFrcmJ0OHVyOWwifQ.iehJsm74bvd3cL8ehr4lVQ";
    const href = await require.resolve("mapbox-gl@2.12.1/dist/mapbox-gl.css");
    document.head.appendChild(html`<link href=${href} rel=stylesheet>`);
  }
  return gl;
}


function _22(md){return(
md`#### Map implementation`
)}

function _df(data){return(
data.map((y) => {
  return {name:y.name,
         // image_url: y.image_url,
         // url: y.url,
         review: +y.review_count,
         category:y.categories,
         rating:+y.rating,
         coordinates:[parseFloat(y.coordinates.split(',')[0]),parseFloat(y.coordinates.split(',')[1])],
         price:y.price,
         phone: y.phone,
         address: y.address.slice(1,-1).replace(/['"]+/g, '')
         }
})
)}

function _24(htl){return(
htl.html`<style> 
/* You can also set this in the initial declaration, just here for sake of explanation */
#map {
  position: relative;
  z-index: 0;
}
</style>`
)}

function _map(mapboxgl)
{
  let map = new mapboxgl.Map({
    container: 'map',
    center: [-122.2, 37.7],
    zoom: 8.5,
    style: "mapbox://styles/mapbox/streets-v10",
    maxBounds: [
      [-123.0, 37.1],
      [-121.0, 38.6]
    ]
  });
  map.addControl(new mapboxgl.NavigationControl(), 'bottom-left');
  
  return map;
}


function _svg1(map,d3,drag,df)
{
  var container = map.getCanvasContainer();

  // initialize the container
  var svg = d3
      .select(container)
      .append("svg")
      .attr("width", "100%")
      .attr("height", "100%")
      .style("position", "absolute")
      .style("z-index", 2); 

  // implement two draggable circles
  const dragged = svg.append("g");
  
  const rad = 20

  // randomize the position of two circles
  const circles = d3.range(2).map(i => ({
    x: Math.random() * (200 - rad * 2) + rad,
    y: Math.random() * (400 - rad * 2) + rad,
    index: i
  }));

  dragged.selectAll("dragcircles").lower()
  .data(circles)
  .join("circle")
    .attr("cx", d => d.x)
    .attr("cy", d => d.y)
    .attr("r", rad)
    .attr("fill", "gray")
    .attr("class","drag")
    .attr("id", d => "drag" +  d.index)
    .call(drag);

  // implement the shop circles
  const g = svg.append("g").attr("id", "circles");
    
  g.selectAll("circle")
    .data(df)
    .enter()
    .append("circle")
    .attr("r", Math.max(map.getZoom()**1/3, 3))
    .style('fill', '#778472')
    .attr('fill-opacity', 0.5)

  svg.append("g").attr("id", "annotation").raise();

  return svg
}


function _dots(d3,svg1){return(
d3.select(svg1.node()).select("g#circles").selectAll("circle")
)}

function _annotations(d3,svg1){return(
d3.select(svg1.node()).select("g#annotation")
)}

function _29(md){return(
md`#### Utilities`
)}

function _30(map,render)
{
  map.on("viewreset", render);
  map.on("move", render);
  map.on("moveend", render);
  map.on("zoomend", render);
  // d3.drag().on("end", render);
  render();
}


function _render(dots,project,map,updateRadius,radius,radius1,updateColor){return(
function render() {
  dots
    .attr("cx", function (d) {
      return project(d.coordinates[1], d.coordinates[0]).x;
    })
    .attr("cy", function (d) {
      return project(d.coordinates[1], d.coordinates[0]).y;
    })
    .attr("r", Math.max(map.getZoom()*1/3, 3));
  updateRadius(0, radius);
  updateRadius(1, radius1);
  updateColor();
}
)}

function _project(map,mapboxgl){return(
function project(lng,lat) {
  return map.project(new mapboxgl.LngLat(lng, lat));
}
)}

function _updateRadius(d3,svg1,metertoradius,map){return(
function(index, newr) {
  var svg = d3.select(svg1.node());
  
  svg.select("#drag" + index)
      .attr("cx", d => d.x)
      .attr("cy", d => d.y)
      .attr("r", newr*2500/metertoradius(37.7, map.getZoom())) 
      .attr("fill", 'black')
      .attr("class", "drag")
      .style("opacity", 0.15)  
}
)}

function _updateColor(d3,inside){return(
function updateColor() {

    const circle1 = d3.select("#drag0")
    const c1x = parseInt(circle1.attr('cx'));
    const c1y = parseInt(circle1.attr('cy'));
    const c1r = parseInt(circle1.attr('r'));
    const circle2 = d3.select("#drag1")
    const c2x = parseInt(circle2.attr('cx'));
    const c2y = parseInt(circle2.attr('cy'));
    const c2r = parseInt(circle2.attr('r'));
    
    d3.select("g#circles").selectAll("circle").each(function() {
      const point = d3.select(this);
      const cx = parseInt(point.attr('cx'));
      const cy = parseInt(point.attr('cy'));
      const r = parseInt(point.attr('r'));
      // console.log("dot: " + cx, cy, r);
      if (inside(c1x, c1y, cx, cy, c1r, r) && inside(c2x, c2y, cx, cy, c2r, r)) {
        d3.select(this).style("fill", "#AD7A99");
      } else{
        d3.select(this).style("fill", "#778472");
      }
    })
  
  }
)}

function _inside(){return(
function inside(x1, y1, x2, y2, r1, r2) {
    const dist = parseInt(Math.sqrt((x1 - x2)**2+(y1 - y2)**2));
    if (dist + r2 <= r1) {
      return true;
    } else {
      return false;
    }
  }
)}

function _drag(d3,updateColor)
{

  function dragstarted(event, d) {
    d3.select(this).raise().attr("stroke", "black");
  }

  function dragged(event, d) {
    d3.select(this).attr("cx", d.x = event.x).attr("cy", d.y = event.y);
    updateColor()
  }
  function dragended(event, d) {
    d3.select(this).attr("stroke", null);

  }
  return d3.drag()
      .on("start", dragstarted)
      .on("drag", dragged)
      .on("end", dragended);
}


function _metertoradius(){return(
function metertoradius(latitude, zoomLevel) {
  var earthCircumference = 40075017;
  var latitudeRadians = 37.7 * (Math.PI/180);
  return earthCircumference * Math.cos(latitudeRadians) / Math.pow(2, zoomLevel + 8);
}
)}

function _highlight(d3,svg1,html,dots)
{
  const svg = d3.select(svg1.node());
  
  // used to test out interactivity in this cell
  const status = html`<code>highlight: none</code>`;
  
  dots.on("mouseover.highlight", function(event, d) { 
    
      d3.select(this)
        .raise() 
        .style("stroke", "black")
        .style("stroke-width", 1);
    
      d3.select(status).raise().text("highlight: " + d.name);
    });

  dots.on("mouseout.highlight", function(event, d) {
      d3.select(this)
      .raise() 
      .style("stroke", null);
      d3.select(status).text("highlight: none");
    });
  
  return status;
}


function _hover2(d3,svg1,html,dots)
{
  const svg = d3.select(svg1.node());
  
  const status = html`<code>hover: none</code>`;

  dots.on("mouseover.hover2", function(event, d) {
    
      let me = d3.select(this);
      let div = d3.select("body").append('div');
      
      div.attr("id", "details");
      div.attr("class", "tooltip");
    
      const res = Object.entries(d).filter(([key, value]) => key !== 'coordinates')
                                     
      let rows = div.append("table")
        .selectAll("tr")
        .data(res)
        .enter()
        .append("tr");

      rows.append("th").text(key => key[0]);
      rows.append("td").text(key => key[1]);
    
      d3.select(status).text("hover: " + d.name);
    });

  dots.on("mousemove.hover2", function(event, d) {
      let div = d3.select("div#details");
    
      let bbox = div.node().getBoundingClientRect();
    
      div.style("left", event.clientX + "px")
      div.style("top",  (event.clientY - bbox.height) + "px");
    });
  
  dots.on("mouseout.hover2", function(event, d) {
      d3.selectAll("div#details").remove();
      d3.select(status).text("hover: none");
    });
  
  return status;
}


function _40(htl){return(
htl.html`<style>
/* Set the style for the tool-tip */
text, .tooltip {
  font-family: sans-serif;
  font-size: 10pt;
}

.tooltip {
  position: absolute;
  width: auto;
  height: auto;
  padding: 4px;
  background: #EEEBD0;
  pointer-events: none;
  border: 1px solid #eee;
  border-radius: 5px;
}
</style>`
)}

function _42(md){return(
md`#### Reference
For Mapbox: 
- https://franksh.com/posts/d3-mapboxgl/
- https://observablehq.com/@pfoser/using-mapbox-gl-js
- https://observablehq.com/@edhschen/mapbox-d3-guide

For tooltip and interactivity
- https://observablehq.com/@sjengle/interactivity

For drag and two circles
- https://observablehq.com/@d3/circle-dragging-i`
)}

export default function define(runtime, observer) {
  const main = runtime.module();
  function toString() { return this.url; }
  const fileAttachments = new Map([
    ["yelp_cleaned.csv", {url: new URL("./files/c92eb3de4147af102a46a874f30401abf0383e43ded6d3fd99f311f29f2824b25346102398d288fc813a9b5d1315c3bcc62b6f019633404d796fd8c80ac9c60d.csv", import.meta.url), mimeType: "text/csv", toString}]
  ]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  main.variable(observer()).define(["md"], _1);
  main.variable(observer()).define(["md"], _2);
  main.variable(observer()).define(["md"], _3);
  main.variable(observer("viewof radius")).define("viewof radius", ["Scrubber","d3"], _radius);
  main.variable(observer("radius")).define("radius", ["Generators", "viewof radius"], (G, _) => G.input(_));
  main.variable(observer("viewof radius1")).define("viewof radius1", ["Scrubber","d3"], _radius1);
  main.variable(observer("radius1")).define("radius1", ["Generators", "viewof radius1"], (G, _) => G.input(_));
  main.variable(observer("filtering")).define("filtering", ["html","d3","dots","map"], _filtering);
  main.variable(observer()).define(["md"], _7);
  main.variable(observer()).define(["htl"], _8);
  main.variable(observer()).define(["md"], _9);
  main.variable(observer()).define(["htl"], _10);
  main.variable(observer()).define(["htl"], _11);
  main.variable(observer()).define(["md"], _12);
  main.variable(observer()).define(["md"], _13);
  main.variable(observer()).define(["md"], _14);
  main.variable(observer("yelp_cleaned")).define("yelp_cleaned", ["__query","FileAttachment","invalidation"], _yelp_cleaned);
  main.variable(observer("file")).define("file", ["FileAttachment"], _file);
  main.variable(observer("data")).define("data", ["d3","file"], _data);
  main.variable(observer()).define(["md"], _18);
  main.variable(observer("d3")).define("d3", ["require"], _d3);
  main.variable(observer("mapboxgl")).define("mapboxgl", ["require","html"], _mapboxgl);
  const child1 = runtime.module(define1);
  main.import("Scrubber", child1);
  main.variable(observer()).define(["md"], _22);
  main.variable(observer("df")).define("df", ["data"], _df);
  main.variable(observer()).define(["htl"], _24);
  main.variable(observer("map")).define("map", ["mapboxgl"], _map);
  main.variable(observer("svg1")).define("svg1", ["map","d3","drag","df"], _svg1);
  main.variable(observer("dots")).define("dots", ["d3","svg1"], _dots);
  main.variable(observer("annotations")).define("annotations", ["d3","svg1"], _annotations);
  main.variable(observer()).define(["md"], _29);
  main.variable(observer()).define(["map","render"], _30);
  main.variable(observer("render")).define("render", ["dots","project","map","updateRadius","radius","radius1","updateColor"], _render);
  main.variable(observer("project")).define("project", ["map","mapboxgl"], _project);
  main.variable(observer("updateRadius")).define("updateRadius", ["d3","svg1","metertoradius","map"], _updateRadius);
  main.variable(observer("updateColor")).define("updateColor", ["d3","inside"], _updateColor);
  main.variable(observer("inside")).define("inside", _inside);
  main.variable(observer("drag")).define("drag", ["d3","updateColor"], _drag);
  main.variable(observer("metertoradius")).define("metertoradius", _metertoradius);
  main.variable(observer("highlight")).define("highlight", ["d3","svg1","html","dots"], _highlight);
  main.variable(observer("hover2")).define("hover2", ["d3","svg1","html","dots"], _hover2);
  main.variable(observer()).define(["htl"], _40);
  main.variable(observer()).define(["md"], _42);
  return main;
}
