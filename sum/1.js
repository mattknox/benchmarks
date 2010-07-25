var sys = require("sys");
var start = (new Date);

var sum = 0, i;

for(i = 0; i < 1000000; i += 1) {
    sum += i;
}

var end = (new Date);
var run_time = end - start;

sys.puts("this took: " + run_time);
