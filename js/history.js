const historyData = [
    { date: "2025 - 4", title: "製作開始", text: "元素パズルを開発するメンバーが集結。最初は四人いた。" },
    { date: "2025 - 8", title: "夏休みの到来", text: "時間と課題がたっぷり。" },
    { date: "2025 - 9", title: "作品提出", text: "目標としていた埼玉県プログラミングコンテストにエントリー。" },
    { date: "2025 - 9", title: "試遊", text: "後輩の一年生たちに遊んでもらう。意見もたくさんもらう。" },
    { date: "2025 - 10", title: "文化祭", text: "先輩たちと並んで元素パズルを展示。" },
    { date: "2025 - 11", title: "優勝", text: "修学旅行に行っている裏で優勝していた。嬉しい。" },
    { date: "2026 - 7", title: "スマホ版完成", text: "windowsだけだった元素パズルが、iosにも登場" }
];

window.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('history-container');
    
    if (!container) return;

    let htmlContent = '';
    
    historyData.forEach(item => {
        htmlContent += `
            <div class="card">
                <span class="date">${item.date}</span>
                <h3>${item.title}</h3>
                <p>${item.text}</p>
            </div>
        `;
    });

    container.innerHTML = htmlContent;
});