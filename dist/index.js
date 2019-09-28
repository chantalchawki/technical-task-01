"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var db_json_1 = __importDefault(require("./db.json"));
var Member = /** @class */ (function () {
    function Member(firstName, middleName, lastName, committee, joinDate) {
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.committe = committee;
        this.joinDate = joinDate;
    }
    return Member;
}());
exports.Member = Member;
var arr = db_json_1.default;
var obj = {};
for (var i in arr) {
    if (arr[i].committee === "Technical") {
        obj.technical = [arr[i],];
    }
    else if (arr[i].committee === "Training") {
        obj.training = [arr[i]];
    }
    else if (arr[i].committee === "HR") {
        obj.hr = [arr[i]];
    }
}
console.log(obj);
// const technical = [];
// const training = [];
// const hr = [];
// const events = [];
// const media = [];
// const publicity = [];
// const fr = [];
// for (let i in arr) {
//   if(arr[i].committee === "Technical"){
//     technical.push(arr[i]);  
//   }
//   else if(arr[i].committee === "Training"){
//     training.push(arr[i]);
//   }
//   else if(arr[i].committee === "HR"){
//     hr.push(arr[i]);
//   }
//   else if(arr[i].committee === "Events"){
//     events.push(arr[i]);
//   }
//   else if(arr[i].committee === "Media"){
//     media.push(arr[i]);
//   }
//   else if(arr[i].committee === "Publicity"){
//     publicity.push(arr[i]);
//   }
//   else if(arr[i].committee === "FR"){
//     fr.push(arr[i]);
//   }
// }
// for(let i in technical){
//   console.log(technical[i].firstName);
// }
