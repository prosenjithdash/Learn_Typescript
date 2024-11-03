{ // {} use for scoping

    // type assertion
    // Be carefully using that;
    let anything: any;
    anything = 'Pappu right now learning next level development';
    anything = 898;
    // (anything as string) // it's call developer better understand typescript
    (anything as number)



    const kgToGm = (value: string | number): string | number| undefined => {
        if (typeof value === 'string') {
            const convertedValue = parseFloat(value) * 1000;
            return `The convertedValue value is : ${convertedValue}`;
        }
        if (typeof value === 'number') {
            return value * 1000;
        }
    }

    const result1 = kgToGm(1000) as number;
    const result2 = kgToGm('1000') as string;




    
    type CustomError = {
        message: string
    }

    try {
        
    }catch(error){
        console.log((error as CustomError).message);
    }

}