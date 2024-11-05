{
    // INSTANCE OF GUARD

    class Animal { //parent class
        name: string;
        species: string;

        constructor(name: string, species: string) {
            this.name = name;
            this.species = species;
        }

        makeSound() {
            console.log('I am making sound')
        }
    }

    // child class

    class Dog extends Animal {
        constructor(name:string, species:string) {
            super(name,species) 
        }
        makeBark() {
            console.log('I am barking ')
        }
    }

    class Cat extends Animal {
        constructor(name:string, species:string) {
            super(name,species)
        }
        makeMeaw() {
            console.log('I am mewaing ')
        }
      }
    
    
    
    // use instanceof

    // smart way te handle korar jonno chaile amra function use korte pari
    // WITH FUNCTION
    const isDog = (animal: Animal):animal is Dog => {
          return animal instanceof Dog
    }
    
    const isCat = (animal: Animal):animal is Cat => {
          return animal instanceof Cat
    }
    

     const getAnimal = (animal: Animal)=>{
        if (isDog(animal)) {
            animal.makeBark()
        }
        else if (isCat(animal)) {
            animal.makeMeaw();
        } else {
            animal.makeSound();
        }
    
    }


// WITHOUT FUNCTION
    // const getAnimal = (animal: Animal)=>{
    //     if (animal instanceof Dog) {
    //         animal.makeBark()
    //     }
    //     else if (animal instanceof Cat) {
    //         animal.makeMeaw();
    //     } else {
    //         animal.makeSound();
    //     }
    
    // }
    
    
    // create instance
    const dog = new Dog('Dog Mia', 'dog');
    const cat = new Cat('Cat Mia', 'cat');

    getAnimal(cat);
    
}