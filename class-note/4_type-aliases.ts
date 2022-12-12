// 인터페이스: 확장 가능, missing name, age
interface Person {
  name: string;
  age: number;
}

//타입: 확장 불가능, 타입의 모습 전체 볼 수 있음
type Person2 = {
  name: string;
  age: number;
};

var seho: Person = {
  name: "seho",
  age: 100,
};

type MyString = string;
var str: MyString = "hello";

type Todo = {
  id: number;
  title: string;
  done: boolean;
};
function getTodo(todo: Todo) {}
