var galleryInitCount = 0;
function createGallery(tag, containerId) {
	galleryInitCount++;
    var apiKey = '55ee2fd5b04b436eb07f894a8f8213e2';
    var userId = '67916954@N00';
    var perPage = '1000';
    var showOnPage = '1000';

    $.getJSON('http://api.flickr.com/services/rest/?format=json&method=flickr.photos.search&api_key=' + apiKey + '&user_id=' + userId + '&tags=' + tag + '&per_page=' + perPage + '&jsoncallback=?', 
    function(data){
        var classShown = 'class="lightbox"';
        var classHidden = 'class="lightbox hidden"';

        $.each(data.photos.photo, function(i, rPhoto){
          var basePhotoURL = 'http://farm' + rPhoto.farm + '.static.flickr.com/'
            + rPhoto.server + '/' + rPhoto.id + '_' + rPhoto.secret;            

            var thumbPhotoURL = basePhotoURL + '_s.jpg';
            var mediumPhotoURL = basePhotoURL + '.jpg';

            var photoStringStart = '<a ';
            var photoStringEnd = 'title="' + rPhoto.title + '" href="'+ 
                mediumPhotoURL +'" id="' + rPhoto.id + '"><img src="' + thumbPhotoURL + '" alt="' + 
                rPhoto.title + '"/></a>;'                
            var photoString = (i < showOnPage) ? 
                photoStringStart + classShown + photoStringEnd : 
                photoStringStart + classHidden + photoStringEnd;

            $(photoString).appendTo("#" + containerId);
        });
        $("a.lightbox").lightBox();
		galleryInitCount--;
		if(galleryInitCount==0)
		{
			autoLaunch();
		}
    });
}
function autoLaunch()
{
	if(document.hashData.query && document.hashData.query.imageId)
	{
		$('#'+document.hashData.query.imageId).click();
	}
}
createGallery('sccmantles', 'mantles');
createGallery('sccdecks', 'decks');
createGallery('sccrenovations', 'renovations');
createGallery('scccabinetry', 'cabinetry');
createGallery('scctrim', 'trim');