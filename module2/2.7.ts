{
    // generic constraint with keyof operator
    type Vehicle = {
        bike: 'string';
        car: 'string';
        ship: 'string';
    }
    type Owner = 'bike' | 'car' | 'ship'; // manually
    type Owner2 = keyof Vehicle; // Owner1 & Owner2 means same




    // Arrow function with use generic
    const getPropertyValue  = <X,Y extends keyof X> (obj:X,key:Y) =>{
        return obj[key]
    }

      const user = {
        name: 'Asif',
        age: 23,
        address: 'dhaka'

      }
    const car = {
        model: 'Asif',
        year: 2023,
      

    }
        
    const result1 = getPropertyValue(user, 'age'); // It is right coz must be have any property of user object

    const result2 = getPropertyValue(user, 'model');







    // const user = {
    //     name: 'Asif',
    //     age: 23,
    //     address: 'dhaka'

    // }
    // user.name // Asif
    // user['age'] // 26

    // obj[key] 
    // user['name'] // Asif
}