const Request1 = () => new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('success request1');
	}, 1000)
});

const Request2 = () => new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('success request2');
	}, 1000)
});


// Через .then
Request1().then((value) => {
	console.log(value)
	Request2().then((value) => {
		console.log(value)
	})
})

// через async/await
;(async () => {
	const value1 = await Request1()
	console.log(value1)
	const value2 = await Request2()
	console.log(value2)
})()


