const examples = [
	{
		id: 001,
		name: 'JavaScript Auth',
		url: 'https://github.com/bytebane/OTPless-js-auth',
	},
	{
		id: 002,
		name: 'ReactJS Auth',
		url: 'https://github.com/bytebane/OTPless-react-auth',
	},
	{
		id: 003,
		name: 'VueJS Auth',
		url: 'https://github.com/bytebane/OTPless-vue-auth',
	},
	{
		id: 004,
		name: 'NodeJS Auth',
		url: 'https://github.com/bytebane/OTPless-node-auth',
	},
	{
		id: 005,
		name: 'Firebase Auth',
		url: 'https://github.com/bytebane/OTPless-firebase-auth',
	},
	{
		id: 006,
		name: 'Firebase+ReactJS Auth',
		url: 'https://github.com/bytebane/OTPless-firebase-auth/tree/main/firebase-react-auth',
	},
	{
		id: 007,
		name: 'Android Auth',
		url: 'https://github.com/bytebane/OTPless-android-auth/',
	},
	{
		id: 008,
		name: 'Flutter Android Auth',
		url: 'https://github.com/bytebane/OTPless-flutter-auth/',
	},
]
document.addEventListener('DOMContentLoaded', () => {
	const appEL = document.getElementById('app')
	const examplesListEl = document.getElementById('examples-list')

	examples.forEach((example) => {
		const liEl = document.createElement('li')
		liEl.className = 'list-item'
		const aEl = document.createElement('a')
		aEl.className = 'list-item-link'
		aEl.href = example.url
		aEl.target = '_blank'
		aEl.textContent = example.name
		liEl.appendChild(aEl)
		examplesListEl.appendChild(liEl)
	})
})
