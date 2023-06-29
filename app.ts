import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { StudentAccount } from './class/StudentAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)


const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)


const studentAccount: StudentAccount = new StudentAccount('Andre', 5)
studentAccount.deposit(10)
