'use strict';

var greuler = window.greuler;
(function () {
  var options = {
    target: '#hello-world',
    linkDistance: 70,
    height: 500,
    data: {
      nodes: [
        {id: 0},
        {id: 1},
        {id: 2},
        {id: 3},
        {id: 4},
        {id: 5},
        {id: 6},
        {id: 7},
        {id: 8},
        {id: 9},
        {id: 10}
      ],
      links: [
        {source: 0, target: 1, weight: 50},
        {source: 0, target: 1, directed: true},
        {source: 1, target: 2, weight: 30},
        {source: 2, target: 3},
        {source: 3, target: 6},
        {source: 6, target: 7},
        {source: 7, target: 10},
        {source: 0, target: 10},
        {source: 8, target: 10},
        {source: 8, target: 9},
        {source: 9, target: 10},
        {source: 5, target: 8},
        {source: 5, target: 7},
        {source: 7, target: 8},
        {source: 5, target: 6},
        {source: 4, target: 5},
        {source: 3, target: 4},
        {source: 1, target: 3},
        {source: 1, target: 6}
      ]
    }
  };
  var instance = greuler(options);

  setTimeout(function () {
    instance.manager.addNode({ id: 11 });
    instance.update();
  }, 1000);

  setTimeout(function () {
    instance.manager.removeNode(11);
    instance.update();
  }, 2000);

  setTimeout(function () {
    instance.manager.removeNode(1);
    instance.update();
  }, 3000);

  setTimeout(function () {
    instance.manager.addNode({ id: 1 });
    instance.manager.addEdge({ source: 1, target: 10, directed: true, weight: 50 });
    instance.manager.addEdge({ source: 1, target: 6, directed: true, weight: 100 });
    instance.update();
  }, 4000);

  setTimeout(function () {
    instance.manager.removeNode(1);
    instance.update();
  }, 5000);

  setTimeout(function () {
    var edge = options.data.links[10];
    instance.manager.removeEdge(edge.id);
    instance.update();
  }, 6000);

  setTimeout(function () {
    instance.selector.edgesByFn(function (e) {
      return e.target.id === 7 || e.source.id === 7;
    })
      .selectAll('path')
      .transition('test')
      .attr('stroke', 'red');
  }, 6500);
})();