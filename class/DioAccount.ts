export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
  }

  getName = (): string => {
    return this.name
  }

  deposit = (value: number): void => {
    if(this.validateStatus()){
      console.log('Voce depositou')
      this.balance += value;
      console.log(`Saldo: ${this.balance}`)
    }
  }

  withdraw = (value: number): void => {
    if(this.validateStatus()) {
      if(this.balance > value){
        console.log('Voce sacou')
        this.balance -= value
        console.log(`Saldo: ${this.balance}`)
      } else {
        console.log('Saldo Insuficiente')
      }
    }
  }

  getBalance = (): void => {
    console.log(this.balance)
  }

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
