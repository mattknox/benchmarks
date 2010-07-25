 Number.prototype.times = function(f) { for(var i = 0; i < this; i++){ f(i); } return this; };

var acc = 0;
(1000000).times( function (i) {acc += i;});
