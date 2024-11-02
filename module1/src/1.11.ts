{
    // ternary operator || optional chaining || nullish coalescing operator

    const age: number = 23;

    if (age >= 18) {
        console.log('Adult')
    } else {
        console.log('Not Adult');
    }


    const isAdult = age >= 18 ? "Adult" : 'Not Adult';
    console.log({ isAdult })
    

    // Nullish coalescing operator
    // null / undefined ---> decision making

    const isAuthenticated = null;
    const result1 = isAuthenticated ?? 'Guest';
    console.log({ result1 })
    

    type User = {
        name: string;
        address: {
            city: string;
            road: string;
            preAddress: string;
            perAddress?: string;

        }
    }

    const user: User = {
        name: 'Pappu',
        address: {
            city: 'Dhaka',
            road: '13 cental road',
            preAddress: 'New market'            
        }
    }

    const perAddress = user?.address?.perAddress ?? 'No Permanent Address';
    console.log({ perAddress });
}