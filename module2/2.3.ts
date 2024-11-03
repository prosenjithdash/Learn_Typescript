{
    // generic type

    // dynamic vabe  amader proujon onusare amra type make korte pari and reuse korte pari saitai holo generic type

    // type GenericArray = Array<number> | Array<string> | Array<boolean> // It's right or wrong i am not sure

    // GenericArray
    type GenericArray<T> = Array<T>

    

    // const rollNumbers: number[] = [2, 4, 5];
    // const rollNumbers: Array<number> = [2, 4, 5];
    // const rollNumbers: GenericArray= [2, 4, 5]; // not sure
        const rollNumbers: GenericArray<number>= [2, 4, 5];



    // const mentors: string[] = ['x', 'y', 'z'];
    // const mentors: Array<string> = ['x', 'y', 'z'];
    // const mentors: GenericArray = ['x', 'y', 'z']; // not sure
        const mentors: GenericArray<string> = ['x', 'y', 'z'];



    // const boolArray: boolean[] = [true, false, true];
    // const boolArray: Array<boolean> = [true, false, true];
    // const boolArray: GenericArray = [true, false, true]; // not sure
        const boolArray: GenericArray<boolean> = [true, false, true];

    
    // Array of object
    const user:GenericArray<{name:string,age:number}> = [
        {
            name: 'pappu',
            age: 23
        },
        {
            name: 'bappu',
            age:21
        }
    ]


    // generic tuple
    type GenericTuple<x, y> = [x, y]
    
    const man: GenericTuple<string, string> = ['mr.x', 'mr.y']
    const UserWithId:GenericTuple<number,{name:string,email:string}> = [1323,{name:'labib',email:'l@gmail.com'}]
    


    // function
    const add = (x: number, y: number) => x + y
    add(30,20)
    


}