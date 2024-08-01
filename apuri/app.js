// モチベーションの言葉のリスト
const quotes = [
    "失敗を恐れずに挑戦し続けよう。",
    "小さな一歩が大きな成功への第一歩。",
    "今日できることを明日に延ばさない。",
    "どんな困難も乗り越える力がある。",
    "あなたの可能性は無限大です。"
];

// モチベーションの言葉を表示する関数
function showMotivationalQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    document.getElementById("quote").innerText = quote;
}
