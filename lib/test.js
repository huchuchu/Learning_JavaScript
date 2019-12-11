'use strict';

const sentences = [{
  subject: 'JavaScript',
  verb: 'is',
  object: 'great'
}, {
  subject: 'Elephants',
  verb: 'are',
  object: 'large'
}]; //es6의 객체분해

function say(_ref) {
  let {
    subject,
    verb,
    object
  } = _ref;
  console.log('${subject} ${verb} ${object}');
}

for (let s of sentences) {
  say(s);
}