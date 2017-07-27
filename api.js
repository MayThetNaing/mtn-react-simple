// mock api
const people = [
	{name: 'Yan Lin Aung', age: 18},
	{name: 'Su Mon Nwe', age: 19},
	{name: 'May Thet Naing', age: 20},
	{name: 'Su Mon Yee', age: 21},
	{name: 'Kaung Chit Wai', age: 22},
]

export default () => {
	return new Promise(
		(resolve, reject) => {
			setTimeout(
				() => {
					return resolve(people)
				}, 3000
			)
		}
	)
}
