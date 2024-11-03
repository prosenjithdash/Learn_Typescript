{
    // Function with generics

    // const createArray = (param: string): string[] => {
    //     return [param];
    // }
    // const createArrayWithGeneric = (param: string): string[] => {
    //     return [param];
    // }

    // const res1 = createArray('Bangladesh')


     const createArray = (param: string): string[] => {
        return [param];
    }
    const createArrayWithGeneric = <T>(param: T): T[] => {
        return [param];
    }

    const res1 = createArray('Bangladesh')
    const resGeneric = createArrayWithGeneric<string>('Bangladesh')
    // const resGenericobj = createArrayWithGeneric<object>({id:14749,name:'Pappu'}) // It's not good


    type User = { id: number; name: string }
    
    const resGenericobj = createArrayWithGeneric<User>({id:14749,name:'Pappu'})



    ////

     const createArrayWithTuple = <T,Q>(param1: T, param2:Q): [T,Q]  => {
        return [param1,param2];
    }

    const res2 = createArrayWithTuple<string, number>('Bangladesh', 14749);
    const resGeneric2 = createArrayWithTuple<string,{name:string}>('Bangladesh', {name:'Asia',})
    // const resGenericobj = createArrayWithGeneric<object>({id:14749,name:'Pappu'}) // It's not good



    const addCourseToStudent = <T> (student:T) => {
        const course = 'Next Level Web Development'

        return {
            ...student,
            course
        }
    }

    const student1 = addCourseToStudent({ name: 'x', email: 'x@gmail.com', devType: 'NLWD' })

     const student2 = addCourseToStudent({name:'y',email:'y@gmail.com',devType:'NLWD',hasWatch:'Apple Watch'})

}