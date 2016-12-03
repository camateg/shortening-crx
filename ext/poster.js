link_site = 'https://shortening.herokuapp.com';


function handler(info, tab) {
	if (typeof info.linkUrl != 'undefined') {
		if (info.linkUrl.match(/\w+/)) {
			var url_enc = encodeURIComponent(info.linkUrl);

			html = new Object();

			$.getJSON(link_site + '/json/add?url=' + url_enc + '&callback=?', {}, function(data){
				alert(link_site + '/' + data.status);
			});
		} 
	}
}

var id_img = chrome.contextMenus.create({'title': 'Post ' + link_site + ' Link', 'contexts':['link'], 'onclick': handler});
