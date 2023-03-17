const quotes = [
	{
		quote: "Don't dwell on the past",
		translate: "과거에 연연하지 마세요.",
	},
	{
		quote: "Believe in yourself",
		translate: "자기 자신을 믿으세요.",
	},
	{
		quote: "Follow your heart",
		translate: "마음이 원하는 대로 따르세요.",
	},
	{
		quote: "Seize the day.",
		translate: "오늘을 즐기세요.",
	},
	{
		quote: "You only live once.",
		translate: "인생은 한 번 뿐이에요.",
	},
	{
		quote: "Love yourself",
		translate: "자기 자신을 사랑하세요.",
	},
	{
		quote: "Where there is a will there is a way",
		translate: "뜻이 있는 곳엔 길이 있다.",
	},
	{
		quote: "Don't dream, Be it.",
		translate: "꿈만 꾸지 말고 이루어라.",
	},
	{
		quote: "No pain, No gain",
		translate: "고통 없인 얻는 것도 없다.",
	},
	{
		quote: "The dies is cast",
		translate: "주사위는 던져졌다.",
	},
];

const quote = document.querySelector("#quotes span:first-child");
const translate = document.querySelector("#quotes span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
translate.innerText = todayQuote.translate;
