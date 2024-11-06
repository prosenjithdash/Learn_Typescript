{
    // ts-node-dev --respawn --transpile-only ./module3/3.8.ts

    // polymorphisom

    // output different different dibe oi sesuation onujae
    
    // EXAMPLE : 1
    class Person{
        getSleep() {
            console.log(`I am sleeping for 8 hours per day`);
        }
    }

    class Student extends Person{
        getSleep() {
            console.log(`I am sleeping for 7 hours per day`);
        }
    }

    class Developer extends Person{
        getSleep() {
            console.log(`I am sleeping for 5 hours per day`);
        }
    }

    // function
    const getSleepingHours = (param: Person) => {
        param.getSleep();
    }
    // create instance
    const person1 = new Person();
    const person2 = new Student();
    const person3 = new Developer();
    
    getSleepingHours(person1);
    getSleepingHours(person2); getSleepingHours(person3);
    

    // EXAMPLE :2
    class Shape{
        getArea(): number{
            return 0;
        }
    }

    // pi* r* r
    class Circle extends Shape{
        radius: number;
        constructor(radius: number) {
            super();
            this.radius = radius;
        }
        getArea(): number {
            return Math.PI * this.radius * this.radius;
        }
    }


    // height * width
    class Rectangle extends Shape{
        height: number;
        width: number;
        constructor(height: number, width:number) {
            super();
            this.height = height;
            this.width = width;
        }
        getArea(): number {
            return this.height * this.width
        }
    }


    const getShapeArea = (param: Shape) => {
        console.log(param.getArea());
    }

    const shape1 = new Shape();
    const shape2 = new Circle(10);
    const shape3 = new Rectangle(10, 20);
    
    getShapeArea(shape2)



} 