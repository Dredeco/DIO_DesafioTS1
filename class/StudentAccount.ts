import { DioAccount } from "./DioAccount"

export class StudentAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  deposit = (value: number): void => {
      console.log('Voce depositou')
      this.balance += value + 10;
      console.log(`Saldo: ${this.balance}`)
  }
}