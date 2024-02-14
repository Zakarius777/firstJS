//alert('Привет Мир!')

function bubbleSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length - 1 - i; j++) {
			if (arr[j] > arr[j + 1]) {
				const tmp = arr[j]
				arr[j] = arr[j + 1]
				arr[j + 1] = tmp
			}
		}
	}
	console.log(arr)
}
const test = [112, 33, 43, 55, 29, 41, 1, 34, 77, 11]
bubbleSort(test)

function stringChanger(str) {
	let leters = ['а', 'е', 'ё', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я']
	let result = ''

	for (let i = 0; i < str.length; i += 1) {
		if (leters.includes(str[i].toLowerCase())) {
			result = result + str[i].toUpperCase()
		} else {
			result = result + str[i].toLowerCase()
		}
	}
	return result
}

console.log(stringChanger('Азбука Вкуса!'))

function search(arr, target) {
	for (let i = 0; i < test.length; i++) {
		if (arr[i] === target) return i
	}
	return -1
}
console.log(search(test, 1) + 1)
console.log(test)
