//1
const result1 = document.querySelector('#resultFirstExecise')
const sel = document.querySelector('#ex1')
const etherium = {
    USD: 2811,
    RUB: 2000612,
    EUR: 2666
}
function getRate() {  
    if (sel.value == "USD") {
        result1.textContent = etherium.USD;
    } else if (sel.value == "RUB") {
        result1.textContent = etherium.RUB;
    } else {
        result1.textContent = etherium.EUR;
    }
    console.log(result1)
    
}


//2
const result2 = document.querySelector('#resultSecondExecise')
const ll = document.querySelector('#ex21')
const cc = document.querySelector('#ex22')

function getValues() {
    const ex2 = {
        lang: ll.value.toUpperCase(),
        course: cc.value.toUpperCase()
    }
    values = Object.values(ex2)
    result2.textContent = values;
    console.log(values)
}

//3
const result3 = document.querySelector('#resultThirdExecise')
const adress = (street, building, flat) => {
    const address = {
        street,
        building,
        flat
    }
    return address
}
function getInfo() {
    keys = Object.keys(adress('Lenina', 1, 40))
    values = Object.values(adress('Lenina', 1, 40))
    result3.textContent = keys +" "+ values;
    console.log(adress('Lenina', 1, 40))
    
}


//4
const result4 = document.querySelector('#resultFourthExecise')
const rr = document.querySelector('#ex31')

function joinArrays() {
    const ex31 = {
        farr: rr.value
    }
    const ex32 = {
        sarr: document.querySelector('#ex32').value
    }
    const newobj = {...ex31, ...ex32}
    console.log(newobj)
    result4.textContent = newobj.farr + " " + newobj.sarr;
}

//5
const result5 = document.querySelector('#resultFifthExecise')

function createUser() {
    class User {
        constructor(name, email) {
            this.name = name
            this.email = email
        }
        sayHi() {   
            return this.name + " " + this.email
        }    
    }
    let user = new User(document.querySelector('#ex51').value, document.querySelector('#ex52').value)
    console.log(user.sayHi())
    result5.textContent = user.sayHi();
}

//6
const result6 = document.querySelector('#resultSixthExecise')

function User() {
    class User {
        constructor(id, role) {
            this.role = role
            this.id = id
        }
        getId() {   
            return "#"+this.id
        } 
        isAdmin() {
            return this.role == "Admin"
        }     
    }
    const user1 = new User(100, "Admin")
    console.log(user1.getId())// "#100"
    console.log(user1.isAdmin()) // true
    const user2 = new User(217, "SimpleUser")
    console.log(user2.getId()) // "#217"
    console.log(user2.isAdmin()) // false
    const ansuser =  new User(document.querySelector('#ex61').value, document.querySelector('#ex62').value)
    result6.textContent = ansuser.getId() + ", " + ansuser.isAdmin();
}

//7
const result7 = document.querySelector('#resultSeventhExecise')

function AreaOfCircle() {
    class Circle {
        constructor(area) {       
            this.area = area  
        }     
        get area() {        
            return this._area
        } 
        set area(value) {
            this._area = value*value*Math.PI
        }
    }
        
    const circle = new Circle("31")
    console.log(circle.area)
    circle.area = "6"
    console.log(circle.area)
    const circle1 = new Circle(document.querySelector('#ex7').value)
    result7.textContent = circle1.area
}

//8
const result8 = document.querySelector('#resultEightExecise')

function lolCourse() {
    class Course {
        constructor(grade) {       
            this.grade = grade 
        }     
        getGrade() {        
            return this.grade>3
        } 
        getCertificate() {
            if (this.getGrade()) {
                return "Выдать сертификат"
            } else {
                return "Курс не пройден"
            }
        }
    }
    const course1 = new Course(5)
    console.log(course1.getCertificate()) // Выдать сертификат
    const course2 = new Course(3)
    console.log(course2.getCertificate()) // Курс не пройден
    const course3 = new Course(document.querySelector('#ex8').value)
    result8.textContent = course3.getCertificate();
}