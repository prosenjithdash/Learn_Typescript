// Learning Function

// Normal Function
// Arrow Function
// callback function



// Normal function
function sum(num1: number, num2: number = 29): number{  // add default value num2=10;

    let result = num1 + num2;
    return result;
}

sum(2, 3)
sum(2, 'e') // it's not possible

// Arrow function
const mul = (n1: number, n2: number): number => n1 * n2;
mul(5, 2);


// object er modde kuno function thakle saitake bole method;
// object --> function ---> method
const poorUser = {
    name: 'pappu',
    balance: 0,
    addBalance(balance: number):number { //anonomias function
        return this.balance + balance;
    },

      addBalances(balance: number):string { //anonomias function
        return `My new balance is: ${this.balance + balance}`;
    }


    
}

// callback function
const arr: number[] = [34, 54, 32];

const newArray: number[] = arr.map((element:number):number => element * element);


