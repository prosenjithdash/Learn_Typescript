{
    // conditional type
    // kuno akta type jodi onno akta type er upor nirbor kore ta hole saita conditional type


    type a1 = number
    type b1 = undefined

    type x = a1 extends null ? true : false; // conditional type

    type y = a1 extends null ? true : b1 extends undefined ? undefined : any
    

    type sheikh = {
        bike: string;
        car: string;
        ship: string;
    }

    // type checkVehicle<T> = T extends 'bike' | 'car' | 'ship' ? true : false
    
    // type hastractor = checkVehicle<'tractor'>


    // use keyof sheikh for ('bike' | 'car' | 'ship')
    type checkVehicle<T> = T extends keyof sheikh ? true : false
    
    type hastractor = checkVehicle<'tractor'>
    
    



}