document.addEventListener('DOMContentLoaded', function(){

  var w = window.innerWidth, h = window.innerHeight, ms = 15000;
  var svg = d3.select('.stage').attr({'width': w, 'height': h});
  
  var random = function(val) {
    return Math.floor(Math.random() * val);
  };

  var icons = d3.selectAll('.icon');

  icons.each(function(){
    d3.select(this)
    .attr({'x': random(w) + 'px', 'y': random(h) + 'px'});
  });

  var drift = setInterval(function(){
    
    icons.each(function(){

      var size = Math.max((Math.random() * 7.5), 3.5);

      d3.select(this)
      .transition()
      .duration(ms)
      .ease('linear')
      .style({
        'opacity': Math.random()
      })
      .attr({
        'x': random(w) + 'px',
        'y': random(h) + 'px',
        'width': size + '%',
        'height': size + '%'
      });
    });
  }, ms);

  icons.transition().tween(drift);

  var bounce = function() {
    d3.select('.name')
    .transition()
    .duration(1000)
    .ease('elastic')
    .style({opacity: 1, transform: 'scale(1.25, 1.25)'});
  };

  setTimeout(bounce, 1000);
  setInterval(bounce, 15000);

  var dataset = [
    {"skill": "git", "score": 7},
    {"skill": "javascript", "score": 8},
    {"skill": "d3", "score": 5},
    {"skill": "css3", "score": 9},
    {"skill": "html5", "score": 9},
    {"skill": "angular1", "score": 7},
    {"skill": "nodejs", "score": 6},
    {"skill": "meteor", "score": 6},
    {"skill": "react", "score": 8},
    {"skill": "jquery", "score": 9}
  ];

  var skills = d3.select('.skills');

  skills
  .selectAll('div')
  .data(dataset)
  .enter()
  .insert('div')
  .text(function(d) { return d.skill; })
  .style({
    'margin-bottom': '5px',
    'color': 'white',
    'background-color': "black",
    'width': function(d) {return (d.score * 10) + '%';}
  });
});