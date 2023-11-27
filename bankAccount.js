            // Construction Function


function BankAccount(accountNumber,name,type,balance,status){
    this.accountNumber=accountNumber;
    this.name=name;
    this.type=type;
    this.balance=balance;
    this.status=status;
    this.deposit= (amount)=>{
        this.balance+=amount;
        console.log(`Your Have Deposited ${amount} Rupees`)
    }
    this.withdraw= (amount)=>{
        if(amount<this.balance){
            this.balance-=amount
            console.log(`Your Account has deducted ${amount} Rupees`)
        }else{
            console.log("You Don't have Sufficient Balance")
        }
    }
    this.checkBalance= ()=>{
        console.log(`Balance : ${this.balance}`)
    }
    this.isActive= ()=>{
        if(this.status==true){
             console.log("Status : Active")
            return true;
        }else{
             console.log("Status : Inactive")
             return false;
        }
    }
}

                // Person 1 Account details


let p1 = new BankAccount(1234543560043,"Ajmat","Saving",200,true)
console.log(p1)
p1.deposit(300)
p1.withdraw(50)
p1.checkBalance()
p1.isActive()

                // Person 2 Account Details


let p2 = new BankAccount(8465002537491,"Najir","Saving",1000,false)
console.log(p2)
p2.deposit(900)
p2.withdraw(450)
p2.checkBalance()
p2.isActive()


                // Person 3 Account Details


let p3 = new BankAccount(12006491026121,"Amit","Saving",700,true)
console.log(p3)
p3.deposit(470)
p3.withdraw(100)
p3.checkBalance()
p3.isActive()
               // Person 4 Account Details


let p4 = new BankAccount(137654338556700,"John","Current",0,true)
console.log(p4)
p4.deposit(590)
p4.withdraw(230)
p4.checkBalance()
p4.isActive()
               // Person 4 Account Details


let p5 = new BankAccount(58618077678926,"Raju","Current",4665,false)
console.log(p5)
p5.deposit(455)
p5.withdraw(927)
p5.checkBalance()
p5.isActive()

                    //  All Active Account Balance

let Allcandidate = [p1,p2,p3,p4,p5]
let total = 0;
function getTotalBalance(){
    for(let i=0; i<Allcandidate.length; i++){
        if(Allcandidate[i]["status"] == true){
            total+=Allcandidate[i]["balance"];
        }
    }
    return console.log(`All Active Account Balance : ${total}`);;
}


getTotalBalance()
