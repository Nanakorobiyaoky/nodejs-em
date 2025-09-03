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

Promise.allSettled([Request1(), Request2()]).then((results) => {
	console.log(results.filter((result) => result.status === 'fulfilled'))
})