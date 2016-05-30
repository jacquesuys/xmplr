var firstRect;

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

  var skills = d3.select('.skills')
  .selectAll('div')
  .data(dataset)
  .enter()
  .append('div')
  .text(function(d) { return d.skill + ': ' + (d.score * 10) + '%'; })
  .style({
    'margin-bottom': '5px',
    'color': 'white',
    'border-bottom': 'solid 3px black',
    'width': '0%'
  });

  function debounce(func, wait, immediate) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

  var myEfficientFn = debounce(function() {
    firstRect = document.querySelectorAll('.container')[0].getBoundingClientRect();
    var offset = firstRect.height * 0.75;

    console.log(firstRect);

     skills
      .transition()
      .duration(2000)
      .delay(500)
      .style('width', function(d){
        return (d.score * 10) + '%';
      });  

    if (offset <= 0) {
     
    }
    // console.log('container', document.querySelector('.container').getBoundingClientRect());

    // console.log('body', document.body.getBoundingClientRect());
  }, 250);

  window.addEventListener('scroll', myEfficientFn());
});