// const newsContentTagged = (strs, ...args) => {
//     return  strs.reduce((html, part, idx) => {
//         html = html + part + (args[idx] || "");
//         return html;
//     }, "")
// }

const fnNewsListTemplate = ({logoImgUrl, company, thumbnews:{imageUrl}, thumbnews:{text}, newslist}) => {
    return `<div class="title">
    <div class="logo-wrap">
        <img class="company" src="${logoImgUrl}" alt="${company}">
    </div>
        <button> <a href="#">X</a> </button>
    </div>
    <div class="newsList">
        <div class="img-title-wrap">
            <img src="${imageUrl}" alt="">
            <div class="title-desc">${text}</div>
        </div>
        <ul>
         ${newslist.reduce((html, newsTitle) => {
             return html + '<li>' + newsTitle + '</li>';
         }, "")}
        </ul>
    </div>`
}

const fnNewsCompanyList = (companyList) => {
    return `
        ${companyList.reduce((html, company) => {
            return html + '<li> <a href="#" data-name=' + company + ' > ' + company +' </a></li>';
        }, "")}
    `
}

export {fnNewsListTemplate, fnNewsCompanyList}

