function npmDemo(argument) {
    var name = 'finit';
    console.log('hello,npm');
	var f1 =function f(arg){console.log(arg)}
	return {
		name:name,
		f1:f1
	}
}
module.exports=npmDemo();