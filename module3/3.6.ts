{
   
    // GETTER AND SETTER

    class BankAccount{
      public readonly id: number;
      public  name: string;
      protected _balance: number;

        constructor(id: number, name: string, balance: number) {
            this.id = id;
            this.name = name;
            this._balance = balance;
            
        }

        // balance method


        // use setter
        set deposit(amount:number) {
            this._balance = this._balance + amount;
        }

        // without use setter
        // public addDeposit(amount: number) {
        //     this._balance = this._balance + amount;
        // }


        // use getter
        get balance() {
            return this._balance;
        }
        
        // without use getter
        // public getBalance() {
        //     return this._balance;
        // }
    }

  

    // instence
    const poorPersonAccount = new BankAccount(111, 'Pappu', 50000);
    // poorPersonAccount.id = 333; // coz of balance is readonly

    // poorPersonAccount.addDeposit(500); // function call korte hochche

    // use setter
    poorPersonAccount.deposit = 200;

    // const myBalance = poorPersonAccount.getBalance();  // function call korte hochche

    // use getter
    const myBalance = poorPersonAccount.balance // property er moto kore // aita use korar jonno code ta clear hoye gelo
    console.log(myBalance);



}