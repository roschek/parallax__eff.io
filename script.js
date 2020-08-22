const blockHeight = document.querySelector('.content').clientHeight;
const coverHeight = document.querySelector('.cover').clientHeight;
const coverWidth = document.body.clientWidth;
const fog = document.querySelector('.cover__fog');
const mount1 = document.querySelector('.cover__mount-1');
const mount2 = document.querySelector('.cover__mount-2');
const mount3 = document.querySelector('.cover__mount-3');


window.addEventListener('scroll', function(evt) {
    const scroll = scrollY
    const percentHeight = scroll / blockHeight * 100
    const percentCover = scroll / coverHeight * 100
    const opacitiPercent = 1 - 1 / 100 * percentCover
    const moveFog = 1 + (coverWidth / 10000 * percentCover);
    const moveBigMount = 1 + (coverWidth / 5000000 * percentHeight)
    const moveMount = 1 + (coverWidth * 0.000009 * percentCover)
    const changeMount = coverWidth / 2000 * percentCover
    fog.style.transform = `scale(${moveFog})`
    fog.style.opacity = `${opacitiPercent}`
    mount1.style.transform = `scale(${moveBigMount})`
    mount2.style.transform = `scale(${moveMount})`
    mount2.style.transform = `translate3d(${changeMount}px 0,0)  `
    mount3.style.transform = `scale(${moveMount})`
    mount3.style.transform = `translate3d(${changeMount}px 0,0)  `
})