let helloSay1 = (name) => console.log('Hi ' + name);
let helloSay2 = (name1, name2 = 'veena') => {
	console.log('Hi ' + name1 + ' & ' + name2);
};
let helloSay3 = () => {
	console.log('Hello');
};
let helloSay4 = () => {
	return 'Hello3';
};

// function sayHello(name) {
//   console.log('Hi ' + name);
// }
helloSay1('prem');
helloSay2('praveen', 'prashant');
helloSay2('praveen');
helloSay3();
console.log(helloSay4());

function callBackTxt(cb, ...argsd) {
	let hasEmptyTxt = false;
	for (const txt of argsd) {
		if (!txt) {
			hasEmptyTxt = true;
			break;
		}
	}
	if (!hasEmptyTxt) {
		cb();
	}
}

callBackTxt(
	() => {
		console.log('All not emptuy!');
	},
	's0',
	'dd',
	'dddd',
	'fff',
	'ddsd',
	'kkkfkf',
  's',
  5
);
