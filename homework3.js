const quadratic = function(a, b, c, x){
	return a*x**2 + b*x + c;
};

const useless = function(){
	return 'useless piece of code';
};

const modulus = function(a, b){
	c = a % b;
	console.log('did I need console.log here? :D');
};

const fullName = function(first, last){
	return first + ' ' + last;
};

const longest = function(a, b, c){
	return a.length >= b.length ? (a.length >= c.length ?  a.length : c.length ) : (b.length >= c.length ? b.length : c.length);
};

const compare = function(a, b){
	return a === b ? 0 : a > b ? 1 : -1;
};

const firstTruethy = function(a, b, c){
	return a && true ? a : b && true ? b : c && true ?  c : "no truethy value";
};
