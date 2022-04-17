let githubPage = 'https://github.com/TaylorAndTony';
let biliPage = 'https://space.bilibili.com/47256272';
let giteePage = 'https://gitee.com/taylorandtony';
let acfunPage = 'https://www.acfun.cn/u/29348557';
let weiboPage = 'https://weibo.com/u/5264623497';
let happyPage = 'https://TaylorANDTony.github.io/happy-simple';

function toUrl(url) {
    window.open(url);
}

/**
 * Add a wesite jump card to page
 * @param {string} website 
 * @param {string} favicon 
 * @param {string} domain 
 */
function webpageBoxFactory(website, favicon, domain) {
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

    document.getElementById('website-list').appendChild(wrapper);
}

// init
window.onload = function () {
    webpageBoxFactory(biliPage, 'https://static.hdslb.com/images/favicon.ico', 'Bilibili');
    webpageBoxFactory(giteePage, 'https://gitee.com/favicon.ico', 'Gitee');
    webpageBoxFactory(githubPage, 'https://github.githubassets.com/favicon.ico', 'Github');
    webpageBoxFactory(weiboPage, 'https://weibo.com/favicon.ico', 'Weibo');1
    webpageBoxFactory(acfunPage, 'https://www.acfun.cn/favicon.ico', 'Acfun');
    webpageBoxFactory(happyPage, 'https://github.githubassets.com/favicon.ico', '乐道至简');
}