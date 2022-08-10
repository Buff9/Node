function createUser(name, age){
    return{
        name,
        age,
        sayHello: () => {
            console.log(`hello! My name is ${name} and Im ${age} years old`)
        }
    }
}

module.exports = {
    createUser
}