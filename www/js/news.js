let Nieuws = function () {

    let init = function () {
        $('.spinner-grow').show();
        $('#news').empty().hide();
        _getNews();
    };


    let _getNews = function () {
        $('#titel').text('Even geduld...');
        $.getJSON('https://newsapi.org/v2/top-headlines?sources=the-verge&apiKey=09e22a82cbeb4344b5f768852d5f3588', function (data) {
            console.log(data);
            try {

                let article = data.articles;
                $.each(article, function () {
                        let source = this.source.name;
                        let author = this.author;
                        let title = this.title;
                        let description = this.description;
                        let url = this.url;
                        let image = this.urlToImage;
                        let content = this.content;
                        $('#news').append(
                            `<div class="card">
						<img src="${image}" class="card-img-top" alt="picture">
						<div class="card-body">
							  <h4>${title}</h4>
							  <p>${description}</p>
							  <p>${author}, ${source}</p>
							  <a href="${url}" onclick="window.open('${url}', '_blank', 'location=yes'); return false">read more</a>
						</div>
					</div>
                        <br>`
                        );

                    }
                );
            } catch (err) {
                console.error(err.message);
                $('#titel').text(err.message);
            }
        }).done(function () {
            $('#news').show();
            $('#titel').text('');
        }).fail(function (jqxhr, textStatus, error) {
            console.error(error);
            $('#titel').text(error);
        }).always(function () {
            $('.spinner-grow').hide();
        })
    };


    return {
        init: init
    };

}();



