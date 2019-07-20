let header = document.getElementsByTagName('h1')[0],
    siteData = {
        siteName: 'My Site',
        siteDescription: 'Another JS Site'
    },
    localData;
localStorage.setItem('siteData', JSON.stringify(siteData));
localData = JSON.parse(localStorage.getItem('siteData'));
console.log(localData);
console.log(localStorage.getItem('siteData'));
header.innerHTML = localData.siteName;