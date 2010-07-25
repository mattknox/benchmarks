// var sys = require("sys");
// var start = (new Date);

var sum;

for(j = 0; j < 100; j += 1) {
    sum = 0;
    for(i = 0; i < 1000000; i += 1) {
	sum += i;
	sum = sum % 7123;
    }
}

// var end = (new Date);

// var run_time = end - start;

// sys.puts("result: " + sum);
//sys.puts("this took: " + run_time);