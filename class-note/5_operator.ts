// union type
// function logMessage(value: string | number) {
//   console.log(value);
// }
// logMessage("hello");
// logMessage(100);

var seho: string | number | boolean;
function logMessage(value: string | number) {
  //타입 가드
  if (typeof value === "number") {
    value.toLocaleString();
  }
  if (typeof value === "string") {
    value.toString();
  }
  throw new TypeError("value must be string or number");
}

logMessage("hello");
logMessage(100);

interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function askSomeoneUnion(someone: Developer | Person) {
  /* someone이 어떤 값이 들어올지 모르기 때문에 
  Developer의 skill이나 Person의 age를 타입 검증 없이 바로 쓰게 되면 type safe 하지 않음 
  보장된 속성에 대해서만 제공 
  skill과 age 접근하고 싶다면 type guard 사용 */
  someone.name;
  //   someone.skill;
  //   someone.age;
}

askSomeoneUnion({ name: "디벨로퍼", skill: "웹 개발" });
askSomeoneUnion({ name: "캡틴", age: 100 });

function askSomeoneIntersection(someone: Developer & Person) {
  //someone = name, skill, age 3개의 속성을 가지게 됨
  someone.name;
  someone.skill;
  someone.age;
}

askSomeoneIntersection({ name: "디벨로퍼", skill: "웹 개발", age: 34 });
