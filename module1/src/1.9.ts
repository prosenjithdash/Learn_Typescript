{


    // Type Alias

    type Student = {
        name: string;
        age: number;
        gender: string;
        contactNo?: string;
        address:string
    }

    const student1: {
        name: string;
        age: number;
        gender: string;
        contactNo: string;
        address:string
    } = {
        name: 'Pappu',
        age: 23,
        gender: 'male',
        contactNo: '01724154911',
        address:'Dhaka'
    }

     const student2: Student = {
        name: 'Bappu',
        age: 20,
        gender: 'male',
        address:'Dhaka'
     }
    
    
    
    const student4: Student = {
        name: 'Bappu',
        age: 20,
        gender: 'male',
        address: 'Dhaka'
    };

    // use for string
    type UserName = string
    type IsAdmin = boolean
    const userName: UserName = 'Shaikat'
    const isAddmin: IsAdmin = true


    // Types Alias use for function
    type Add = (num1:number,num2:number)=>number;
    // const add = (num1: number, num2: number):number => num1 + num2;
    const add:Add = (num1, num2) => num1 + num2;


}