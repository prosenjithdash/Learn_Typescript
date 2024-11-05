{
    // run code --> ts-node-dev --respawn --transpile-only ./module3/3.3.ts
    // Type guards
    // Type guards function and object a o use kora jay...

    // typeof -- type guard

    // type
    type Alphaneumeric = number | string;

    const add = (param1: Alphaneumeric, param2: Alphaneumeric) => {
        if (typeof param1 === 'number' && typeof param2 === 'number') {
            return param1 + param2;
        } else {
            return param1.toString() + param2.toString();
        }
    }

    const result1 = add(2, 3);
    console.log(result1)
    
    const result2 = add('3', '5');
    console.log(result2)



    // in guard
    type NormalUser = {
        name: string;
    }

    type AdminUser = {
        name: string;
        role: 'admin';
    }

    const getUser = (user: NormalUser | AdminUser) => {
        if ('role' in user) {
            console.log(`My name is ${user.name} and my role is ${user.role}`)
        } else {
            console.log(`My name is ${user.name}`)
        }
    }

    const normalUser: NormalUser = {
        name: "Bappu"
    }

      const adminUser: AdminUser = {
          name: "Pappu",
          role:'admin',
      }
    getUser(adminUser);

}