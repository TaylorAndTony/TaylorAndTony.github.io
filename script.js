let githubPage = 'https://github.com/TaylorAndTony';
let biliPage = 'https://space.bilibili.com/47256272';
let giteePage = 'https://gitee.com/taylorandtony';
let acfunPage = 'https://www.acfun.cn/u/29348557';
let weiboPage = 'https://weibo.com/u/5264623497';
let happyPage = 'https://TaylorAndTony.github.io/happy-simple';

function toUrl(url) {
    window.open(url);
}

/**
 * Add a wesite jump card to page
 * @param {string} website 
 * @param {string} favicon 
 * @param {string} domain 
 */
function webpageBoxFactory(website, favicon, domain, mountToID, largeBox=false) {
    let wrapper = document.createElement('div');
    wrapper.className = 'box webpage-box';

    let boxWidth = null;
    if (largeBox) {
        boxWidth = '200px';
    } else {
        boxWidth = '150px';
    }

    wrapper.style.cssText = `
    width: ${boxWidth};
    height: 40px;
    display: flex;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    text-align: center;
    cursor: pointer;
    padding-left:20px;
    `;
    wrapper.addEventListener('click', () => {
        toUrl(website);
    })

    let img = document.createElement('img');
    img.src = favicon;
    img.style.cssText = `
    width: 20px;
    height: 20px;
    `;
    img.className = 'web-icon';

    let desc = document.createElement('div');
    desc.innerHTML = domain;
    desc.className = 'web-text';

    wrapper.appendChild(img);
    wrapper.appendChild(desc);

    document.getElementById(mountToID).appendChild(wrapper);
}

function customFunctionBox(name, func, mountToID) {
    let wrapper = document.createElement('div');
    wrapper.className = 'box webpage-box';
    wrapper.style.cssText = `
    width: 150px;
    height: 40px;
    display: flex;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    text-align: center;
    cursor: pointer;
    padding-left:20px;
    `;

    let desc = document.createElement('div');
    desc.innerHTML = name;
    desc.className = 'web-text';
    wrapper.addEventListener('click', func)
    wrapper.appendChild(desc);
    document.getElementById(mountToID).appendChild(wrapper);
}

// init
window.onload = function () {
    // repo
    webpageBoxFactory('https://gitee.com/taylorandtony/avatar-with-border', 'https://gitee.com/favicon.ico', '头像加边框', 'repo-list', true);
    webpageBoxFactory('https://gitee.com/taylorandtony/learn-rar-pls', 'https://gitee.com/favicon.ico', '简明解压教程', 'repo-list', true);
    webpageBoxFactory('https://gitee.com/taylorandtony/play-linux', 'https://gitee.com/favicon.ico', '折腾 Linux', 'repo-list', true);
    webpageBoxFactory('https://github.com/TaylorAndTony/AHK_Scripts', 'https://github.githubassets.com/favicon.ico', 'My AHK Script', 'repo-list', true);
    webpageBoxFactory('https://github.com/TaylorAndTony/PhoneImageOCR', 'https://github.githubassets.com/favicon.ico', 'OCR your phone', 'repo-list', true);
    // load `find me on these` boxes
    webpageBoxFactory(biliPage, 'https://static.hdslb.com/images/favicon.ico', 'Bilibili', 'website-list');
    webpageBoxFactory(giteePage, 'https://gitee.com/favicon.ico', 'Gitee', 'website-list');
    webpageBoxFactory(githubPage, 'https://github.githubassets.com/favicon.ico', 'Github', 'website-list');
    webpageBoxFactory(weiboPage, 'https://weibo.com/favicon.ico', 'Weibo', 'website-list');
    webpageBoxFactory(acfunPage, 'https://www.acfun.cn/favicon.ico', 'Acfun', 'website-list');
    webpageBoxFactory(happyPage, 'https://github.githubassets.com/favicon.ico', '乐道至简', 'website-list');
    // load instersting box
    webpageBoxFactory('https://neumorphism.io/#e0e0e0', 'https://neumorphism.io/favicon.ico', '2.5D 生成器', 'interesting-list', true);
    webpageBoxFactory('https://byrut.org/', 'https://byrut.org/favicon.png', 'Russian torrents', 'interesting-list', true);
    webpageBoxFactory('https://myacg.xyz/', 'https://mynovel.life/img/favicon.ico', 'MyACG 导航', 'interesting-list', true);
    // anime
    webpageBoxFactory('https://bbs.mihoyo.com/', 'https://bbs.mihoyo.com/favicon.ico', '米游社', 'anime-list');
    webpageBoxFactory('http://www.imomoe.live/', 'https://github.githubassets.com/favicon.ico', '樱花动漫', 'anime-list');
    webpageBoxFactory('https://xsear.ch/', 'https://xsear.ch/favicon.ico', 'Xsearch', 'anime-list');
    webpageBoxFactory('https://gelbooru.com/', 'https://gelbooru.com/favicon.ico', 'Gelbooru', 'anime-list');
    webpageBoxFactory('https://safebooru.org/index.php', 'https://safebooru.org/favicon.ico', 'safebooru', 'anime-list');
    // webpageBoxFactory('https://idol.sankakucomplex.com/?tags=bondage', 'https://idol.sankakucomplex.com/favicon.ico', 'sankaku', 'anime-list');
    // webpageBoxFactory('http://2021-03-09-xh953kvogkc.icu/index.php', 'http://2021-03-09-xh953kvogkc.icu/favicon.ico', '仓库', 'anime-list');

}