// const user = {
// name: 'Jan',
// show() {
// 	console.log(user.name)
// }
// }
// user.show()

function User(name, age){
	this.name = name
	this.age = age
}

// const user = {
// 	name: 'Zenobia',
// 	age: 44
// }

// console.log(user)

const newUser = new User('Klara', 23)
const newUser2 = new User('Jagna', 17)
const newUser3 = new User('Majk', 85)
console.log(newUser, newUser2, newUser3)

User.prototype.hello = function () {
	console.log(`Cześć ${this.name}`)
}

newUser.hello()