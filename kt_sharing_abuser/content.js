var div = document.getElementById('MobileUsePriceHtml')
var sharingArea = div.getElementsByClassName('btn-datashare')[0];
var sharingBtn = document.createElement('a');

sharingBtn.setAttribute('href', '#');
sharingBtn.setAttribute('class', 'btn30-gray');
sharingBtn.setAttribute('id', 'dataSharingBtn');
sharingBtn.setAttribute('svcurl', '/product/MobileDataSharingSetPopup.do');
sharingBtn.textContent = "데이터쉐어링 설정(베타)"

sharingArea.appendChild(sharingBtn);
