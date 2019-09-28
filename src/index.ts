import db from './db.json'

export class Member {
  public firstName: string;
  public middleName: string;
  public lastName: string;
  public committee: string;
  public joinDate: Date;
  
  constructor(firstName: string, middleName: string, lastName: string, committee: string, joinDate: Date) {
    this.firstName = firstName;
    this.middleName = middleName;
    this.lastName = lastName;
    this.committee = committee;
    this.joinDate = joinDate;
  }

  get fullName() {
    return this.firstName + " " + this.middleName + " " + this.lastName;
  }
}

const arr = db.map(i => new Member(i.firstName, i.middleName, i.lastName, i.committee, new Date(i.joinDate)));

type MyObj = {
  [key: string]: object[]
}

let obj: MyObj = {};

for (let i in arr) { 
  const committee = arr[i].committee;
  
  if (!obj[committee]) {
    obj[committee] = [];
  }
  obj[committee] = [...obj[committee], arr[i]];   

}

Object.keys(obj).forEach(
  i => obj[i].sort(function compare(a: any, b:any){
    return a.fullName > b.fullName ? 1 : -1;
  })
)

console.log(obj);