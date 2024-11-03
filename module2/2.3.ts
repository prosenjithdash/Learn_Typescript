{
    // generic type

    // dynamic vabe  amader proujon onusare amra type make korte pari and reuse korte pari saitai holo generic type

    type GenericArray = Array<number> | Array<string> | Array<boolean>

    // GenericArray

    // const rollNumbers: number[] = [2, 4, 5];
    // const rollNumbers: Array<number> = [2, 4, 5];
        const rollNumbers: GenericArray= [2, 4, 5];


    // const mentors: string[] = ['x', 'y', 'z'];
    // const mentors: Array<string> = ['x', 'y', 'z'];
        const mentors: GenericArray = ['x', 'y', 'z'];


    // const boolArray: boolean[] = [true, false, true];
    // const boolArray: Array<boolean> = [true, false, true];
        const boolArray: GenericArray = [true, false, true];



}