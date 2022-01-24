/***
 * 
 * 
 * Classes are a template for creating objects.
 * 
 * One way to define a class is using a class declaration. 
 * To declare a class, you use the class keyword with the name of the class ("Rectangle" here).
 * 
 * 
 * ***/


class Cat {
    // savybes
    // name = 'Rainius'
    // age = 2

    // metodai
    constructor(catName, catAge) {
        this.name = catName;
        this.age = catAge;

    }

    inceaseCatAge = () => {
        console.log(`Icrease ${this.name} age by 1 year: `, ++this.age);
    }
    bigLetters = () => {

        console.log(`Cat ${this.name} Uppercase: `, this.name.toUpperCase());
    }

    repeatName = () => {
        let i = 0;
        do {
            this.bigLetters();
            i++
        }
        while (i < this.age);
    }
}

const catNo1 = new Cat('Rainius', 3);
const catNo2 = new Cat('Leopoldas', 5);
const catNo3 = new Cat('Pupsius', 11);

console.log(`1 cat Name: `, catNo1.name)
console.log(`1 cat Age: `, catNo1.age)
console.log(`2 cat: `, catNo2)
console.log(`3 cat: `, catNo3)

catNo2.inceaseCatAge()

catNo2.bigLetters()

catNo1.repeatName();
