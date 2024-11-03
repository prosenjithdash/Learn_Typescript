{
    // constraints

    const addCourseToStudent = <T extends { id: number; name: string; email:string}> (student:T) => {
        const course = 'Next Level Web Development'

        return {
            ...student,
            course
        }
    }

    const student1 = addCourseToStudent<{
    id:number
    name: string;
    email: string;
    devType: string;
    }>({
        id:14749,
        name: 'x',
        email: 'x@gmail.com',
        devType: 'NLWD'
    })

    const student2 = addCourseToStudent({
        id:14750,
        name: 'y',
        email: 'y@gmail.com',
        devType: 'NLWD',
        hasWatch: 'Apple Watch'
    })

    const student3 = addCourseToStudent({id:434342,name:'labib',email:'e@gmail.com', emni: 'emni' })
    


}