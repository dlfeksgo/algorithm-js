//https://school.programmers.co.kr/learn/courses/30/lessons/181939

function solution(a, b) {
  const case1 = String(a) + String(b);
  const case2 = String(b) + String(a);

  return case1 >= case2 ? Number(case1) : Number(case2);
}
