export function* getLocation() {
	yield { pending: true };

	let f = new Promise((res, rej) => {
		navigator.geolocation.getCurrentPosition((l) => {
			res(l.coords);
		}, (error) => {
			rej(error);
		});
	});

	yield f;
}
