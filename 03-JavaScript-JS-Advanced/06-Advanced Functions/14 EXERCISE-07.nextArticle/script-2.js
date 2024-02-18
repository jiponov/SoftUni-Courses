function getArticleGenerator(input) {       // 100/100

    const div = document.getElementById('content');

    return function () {
        const firstElement = input.shift();

        if (firstElement) {
            const article = document.createElement('article');
            article.textContent = firstElement;
            div.appendChild(article);
        }
    };
}
