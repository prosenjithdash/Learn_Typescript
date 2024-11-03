{
    // interface

    // type alias // also use primitive data type
    type User1 = {
        name: string;
        age: number;
    }

    // type rollNumber = number // not possible use for interface

    // kuno akta property jodi extend korate chai ta hole intersection use korbo (&)

    // INTERSECTIONN TYPE for type alias
    type UserWithRole1 = User1 & { role: string }

     const user1:UserWithRole1 = {
        name: 'pappu',
         age: 23,
         role: 'manager'
        
    }


    //interface // not use primitive data type // only use non primitive data type
    interface User2 {
        name: string;
        age: number;
    }

    // const user1:User2 = {
    //     name: 'pappu',
    //     age: 23
    // }


    // INTERSECTIONN TYPE for interface
    // 
    interface UserWithRole2 extends User2{
        role: string
    }

     const user2:UserWithRole2 = {
        name: 'pappu',
         age: 23,
         role: 'manager'
        
    }



    // Array declare with interface

    // js --> object, array --> object , function --> object

    // type alias
    type Roll1 = number[];
    const rollNumber1: Roll1 = [7, 9, 7];
    
    // interface
    interface Roll2 {
        [index:number]:number
    }
    const rollNumber2: Roll2 = [7, 9, 7]; // o,1,3 --> index --> index is number type --> and element also number type

    // Function

    // const add = (num1: number, num2: number): number => num1 + num2;



    // use Type alias for function
    type Add1 = (num1: number, num2: number)=> number;
        const add1:Add1 = (num1, num2): number => num1 + num2;

    
    
    // use Interface for function
    interface Add2 {

        (num1:number,num2:number):number
    }
        const add2:Add2 = (num1, num2): number => num1 + num2;

    // try to stay clean so without object use Type alias

}