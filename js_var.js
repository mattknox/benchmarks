var target = function() {};
target.foo = 1;
var acc = 0;
for(var i = 0; i < 100000; i++) {
    acc += target.foo;
}
