var soccerActions = {

	urlWS_soccer: "http://www.reddit.com/r/soccer.json",

	init: function(){
		
		$.ajax({
            url: soccerActions.urlWS_soccer,
            crossDomain: true,
            type: 'GET',
            success: function (data) {
                $.each(data.data.children, function(i, post){
                	var subr = post.data.subreddit;
                	var title = post.data.title;
                	var linkurl = post.data.url;
                	var content = post.data.selftext;

                	$('.content[data-subr="'+ subr +'"]').append('<div>\n\
                		<h4><a target="_blank" href="'+ linkurl +'">'+ title +'</a></h4>\n\
                		<p>'+ content +'</p>\n\
                	</div>');
                });
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                console.log("Error status :" + textStatus);
                console.log("Error type :" + errorThrown);
                console.log("Error responseText :" + XMLHttpRequest.responseText);
            }
        });
	}

};

$(soccerActions.init);

