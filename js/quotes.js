const quotes = [
{
    quote: "무슨 생각을 해요. 그냥 하는 거지!",
    author: "김연아",
},
{
    quote: "전 오늘이 무슨 요일인지도 몰라요, 날짜도 모르구요. 전 매일 수영만해요.",
    author: "마이클 펠프스",
},
{
    quote: "사랑은 오래 참고 사랑은 온유하며 시기하지 아니하며 사랑은 자랑하지 아니하며 교만하지 아니하며",
    author: "고린도전서 13:4",
},
{
    quote: "If you have knowledge, let others light their candles at it.",
    author: "Margaret Fuller",
},
{
    quote: "Improvements are invented only by those who can feel that something is not good.",
    author: "Friedrich Nietzsche",
},
{
    quote: "Only passions, great passions, can elevate the soul to great things.",
    author: "Denis Diderot",
},
{
    quote: "For one human being to love another; that is perhaps the most difficult of all our tasks, the ultimate, the last test and proof, the work for which all other work is but preparation.",
    author: "Rainer Maria Rilke",
},
{
    quote: "There is no mistaking a real book when one meets it. It is like falling in love.",
    author: "Christopher Morley",
},
{
    quote: "Integrity without knowledge is weak and useless, and knowledge without integrity is dangerous and dreadful.",
    author: "Samuel Johnson",
},
{
    quote: "A good plan, violently executed now, is better than a perfect plan next week.",
    author: "George S. Patton",
}
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;