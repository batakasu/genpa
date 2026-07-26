fetch('/genpa/html/header.html')
    .then(response => {
        if (!response.ok) {
            throw new Error('ヘッダーの読み込みに失敗しました');
        }
        return response.text();
    })
    .then(data => {
        document.getElementById('header-placeholder').innerHTML = data;
    })
    .catch(error => {
        console.error('エラー:', error);
    });
    
fetch('/genpa/html/footer.html')
    .then(response => {
        if (!response.ok) {
            throw new Error('フッターの読み込みに失敗しました');
        }
        return response.text();
    })
    .then(data => {
        document.getElementById('footer-placeholder').innerHTML = data;
    })
    .catch(error => {
        console.error('エラー:', error);
    });