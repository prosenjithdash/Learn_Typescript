{
    // OOP ---  v

    // When we take anything from our father that is inheritance product.

    //PARENT CLASS
    class Parent {
        name: string;
        age: number;
        address: string;

        constructor(name: string, age: number, address: string) {
            this.name = name;
            this.age = age;
            this.address = address;
        }

        // method
        getSleep(numOfHours: number) {
            console.log(`${this.name} will sleep for ${numOfHours} hours.`)
        }
    }

    // Student Class
    class Student extends Parent {
        // name: string; // Ai guli ai place theke remove kore dibo karon ami ai sob parent class theke peye jachchi.
        // age: number;
        // address: string;

        constructor(name: string, age: number, address: string) {
            // this.name = name; // already uses in parents 
            // this.age = age;
            // this.address = address;

            // child er maddome parents er constructor a value guli patabo super() er help niye
            super(name, age, address);
        }

        // method
        // getSleep(numOfHours: number) {
        //     console.log(`${this.name} will sleep for ${numOfHours} hours.`)
        // }  // Ai guli ai place theke remove kore dibo karon ami ai sob parent class theke peye jachchi.
    }

    const student1 = new Student('Pappu', 23, 'Dhaka');


    // Teacher Class
    class Teacher extends Parent {
        // name: string;
        // age: number;
        // address: string;
        designation: string;

        constructor(name: string, age: number, address: string,designation:string) {
            // this.name = name;
            // this.age = age;
            // this.address = address;
            super(name, age, address);
            this.designation = designation;
        }

        // method
        // getSleep(numOfHours: number) {
        //     console.log(`${this.name} will sleep for ${numOfHours} hours.`)
        // }

        takeClass(numOfClass:number) {
            console.log(`${this.name} will take class for ${numOfClass} hours.`)
        }
    }

        const teacher1 = new Teacher('Tuser', 35, 'Sylhet','Ast.Teacher');

    


}