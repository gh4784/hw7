const tmi = [
    {
        question : '좋아하는 날은?'
        answer : '크리스마스'
    },
    {
        question : '최근 다시 가보고픈 나라는?'
        answer : '호주'
    },
    {
        question : '좌우명은?'
        answer : '지혜롭게 살자'
    },
    {
        question : '좋아하는 말은'
        answer : '사랑'
    },
    {
        question : '좋아하는 색은?'
        answer : '핑크'
    },
];

const question = document.getElementById("question")
const answer = document.getElementById("answer")
const todaysTmi = tmi[Math.floor(Math.random()*tmi.length)]

question.innerText = todaysTmi.question
answer.innerText = todaysTmi.answer
