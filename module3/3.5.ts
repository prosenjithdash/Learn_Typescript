{
    // ACCESS MODIFIERS

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
        public addDeposit(amount: number) {
            this._balance = this._balance + amount;
        }

        getBalance() {
            return this._balance;
        }
    }

    class StudentAccount extends BankAccount{
        test() {
            this._balance
        }
    }

    const poorPersonAccount = new BankAccount(111, 'Pappu', 50000);
    // poorPersonAccount.id = 333; // coz of balance is readonly

    poorPersonAccount.addDeposit(500);
    const myBalance = poorPersonAccount.getBalance();
    console.log(myBalance);


}