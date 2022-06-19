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
    quote: "그런즉 믿음, 소망, 사랑, 이 세 가지는 항상 있을 것인데 그 중의 제일은 사랑이라",
    author: "고린도전서 13:13",
},
{
    quote: "높음이나 깊음이나 다른 어떤 피조물이라도 우리를 우리 주 그리스도 예수 안에 있는 하나님의 사랑에서 끊을 수 없으리라",
    author: "로마서 8:39",
},
{
    quote: "너희는 이 세대를 본받지 말고 오직 마음을 새롭게 함으로 변화를 받아 하나님의 선하시고 기뻐하시고 온전하신 뜻이 무엇인지 분별하도록 하라",
    author: "로마서 12:2",
},
{
    quote: "나의 기도를 기쁘게 여기시기를 바라나니 나는 여호와로 말미암아 즐거워하리로다",
    author: "시편 104:34",
},
{
    quote: "그러므로 내가 너희에게 말하노니 무엇이든지 기도하고 구하는 것은 받은 줄로 믿으라 그리하면 너희에게 그대로 되리라",
    author: "마가복음 11:24",
},
{
    quote: "새벽 아직도 밝기 전에 예수께서 일어나 나가 한적한 곳으로 가사 거기서 기도하시더니",
    author: "마가복음 1:35",
},
{
    quote: "아무 것도 염려하지 말고 다만 모든 일에 기도와 간구로, 너희 구할 것을 감사함으로 하나님께 아뢰라",
    author: "빌립보서 4:6",
}
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;