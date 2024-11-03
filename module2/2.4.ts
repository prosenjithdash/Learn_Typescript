{
    // Interface


// Array of object

    type GenericArray<T> = Array<T>

    // TYPE ALIAS
    // type User = {
    //     name: string,
    //     age:number
    // }


    //INTERFACE
    interface User  {
        name: string,
        age:number
    }
    
     const user:GenericArray<User> = [
        {
            name: 'pappu',
            age: 23
        },
        {
            name: 'bappu',
            age:21
        }
    ]

    // const user:GenericArray<{name:string,age:number}> = [
    //     {
    //         name: 'pappu',
    //         age: 23
    //     },
    //     {
    //         name: 'bappu',
    //         age:21
    //     }
    // ]




    ///////////////////////////////////


    // Interface --> generic

    interface Developer<T,X=null>{
        name: string,
        computer: {
            brand: string,
            model: string,
            releaseYear:number
        }
        smartWatch: T;
        bike?:X

    }

    type Emilab = {
        brand: string,
        model: string,
        display: string
    };

    const poorDeveloper: Developer<Emilab> = {
        name:'Pappu',
        computer: {
            brand: 'Apple',
            model: 'Mackbook air m2',
            releaseYear:2022
        },
        smartWatch: {
            brand: 'Emilab',
            model: 'kw66',
            display:'OLED'
        }
    }


    interface AppleWatch15 {
        brand: string,
        model: string,
        display: string,
        heartTrack: boolean,
        sleepTrack: boolean
    }
    interface Kawashaki{
         brand: string,
            model: string,
            silender: string,
            cc: number,
            price: number
    }

    const richDeveloper: Developer<AppleWatch15,Kawashaki> = {
        name:'Prosenjith',
        computer: {
            brand: 'Apple',
            model: 'Mackbook pro m5',
            releaseYear:2026
        },
        smartWatch: {
            brand: 'Apple',
            model: 'Apple watch 15',
            display: 'Retina',
            heartTrack: true,
            sleepTrack: true
            
        },
         bike: {
            brand: 'Kawashaki',
            model: '10x 10r',
            silender: '4 stoke',
            cc: 1000,
            price: 100000
            
        }
    }
}