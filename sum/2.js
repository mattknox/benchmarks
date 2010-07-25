 Number.prototype.times = function(f) { for(var i = 0; i < this; i++){ f(i); } return this; };

var acc = "";
(1000000).times( function (i) {acc += i;});
