document.addEventListener('DOMContentLoaded', function(){

  setInterval(function(){
    document.querySelector('.name').classList.add('active');
  }, 2500);

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

  var custom = setInterval(function(){
    
    icons
    .each(function(){

      var size = Math.max((Math.random() * 7.5), 3);

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

  icons.transition().tween(custom);
});