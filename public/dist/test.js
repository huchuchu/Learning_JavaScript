'use strict'; //es6 기능: 블록 스코프 변수 선언

var sentences = [{
  subject: 'JavaScript',
  verb: 'is',
  object: 'great'
}, {
  subject: 'Elephants',
  verb: 'are',
  object: 'large'
}]; //es6의 기능:  객체분해

function say(_ref) {
  var subject = _ref.subject,
      verb = _ref.verb,
      object = _ref.object;
  //es6 기능: 템플릿 문자열
  //아래 사용한것은 따옴표가 아닌 백틱(`), 즉 키보드의 탭 바로 위에있는 문자이다.
  console.log("".concat(subject, " ").concat(verb, " ").concat(object));
} //es6 기능: for...of


for (var _i = 0, _sentences = sentences; _i < _sentences.length; _i++) {
  var s = _sentences[_i];
  say(s);
}