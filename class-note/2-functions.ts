//함수의 파라미터에 타입을 정의하는 방식
function sum(a: number, b: number) {
  return a + b;
}
//함수의 반환값에 타입을 정의하는 방식
function number(): number {
  return 10;
}

//함수에 타입을 정의하는 방식
function sum2(a: number, b: number): number {
  return a + b;
}

//함수의 옵셔널 파라미터
function log(a: string, b?: string, c?: string) {}
log("hello world");
log("hello world", "abc");
