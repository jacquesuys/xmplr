document.addEventListener('DOMContentLoaded', function(){
  var w = window.innerWidth, h = window.innerHeight, ms = 5000;
  var svg = d3.select('.stage').attr({'width': w, 'height': h});
  
  var random = function(val) {
    return Math.floor(Math.random() * val);
  };

  var icons = d3.selectAll('.icon');

  icons.each(function(){
    d3.select(this)
    .attr({'x': random(w) + 'px', 'y': random(h) + 'px'});
  });

  var custom = setInterval(function(){
    icons
    .each(function(){
      d3.select(this)
      .transition()
      .duration(ms)
      .ease('linear')
      .style({
        'opacity': Math.random() - 0.10,
        'transform': 'scaleX(' + (Math.random() + 1) + ')'
      })
      .attr({
        'x': random(w) + 'px',
        'y': random(h) + 'px'
      });
    });
  }, ms);

  icons.transition().tween(custom);
});