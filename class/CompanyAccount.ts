import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (value: number): void => {
    console.log('Voce pegou um empréstimo')
    this.balance += value
    console.log(`Saldo: ${this.balance}`)
  }
}
