const Request1 = () => new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('success');
	}, 100)
});

const Request2 = () => new Promise((resolve, reject) => {
	setTimeout(() => {
		reject('Ошибка');
	}, 100)
});

Promise.all([Request1(), Request2()])
	.then((value) => {
		console.log(value);
	})
	.catch((err) => {
		console.error(err);
	});