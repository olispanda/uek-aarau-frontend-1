if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        if (img.dataset.src !== undefined) {
            img.src = img.dataset.src;
            console.log("Image lazyloaded");
        }
    });
}