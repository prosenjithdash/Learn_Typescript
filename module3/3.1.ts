{
    // OOP -- CLASS
    // code run commant --> ts-node-dev --respawn --transpile-only ./module3/3.1.ts

    // class
    class Animal  {
    //    public name: string;
    //    public species: string;
    //    public sound: string;

        // inisilation

        // parameter properties --> Aita use korle typescript auto type difin korbe  and inisilation o  kore dibe

        constructor(public name: string, public species: string, public sound: string) {
            // this.name = name;
            // this.species = species;
            // this.sound = sound;
            
        }

        // class er modde kuno function likle take bole method
        // this not for work arrow function so must use normal function.
        makeSound() {
            console.log(`The ${this.name} says ${this.sound}`);
        }
    }

    // dog object
    const dog = new Animal('German Shepard', 'dog', 'Ghew Ghew');
    // dog.name
    // dog.sound
    // dog.species
    const cat = new Animal('Parsian', 'cat', 'meaw meaw')
    // cat.name
    // cat.sound
    // cat.species

    // call makeSound method
    cat.makeSound();
    dog.makeSound();


}