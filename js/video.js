$(function () {

    var getPram = function GetQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if(r != null) return decodeURI(r[2]);
        return null;
    };
  
    $('.personal-profile-title p:first span').text(data.personal.title);
    $('.personal-profile-title p:last').text(data.personal.Subheading);

    var index = getPram('index');
    var id = getPram('id');

    // console.log('index, id', index, id);

    var item = data.personal.list[index][id];

    // console.log('item', item);

    var personalHtml = '<div class="personal-video-centext"><dl>'
        + '<dt><img src="./img/' + item.img + '" style="width: 88px;border-radius: 50px;filter:grayscale(100%);-webkit-filter:grayscale(100%)" ' + '></dt>'
        + '<dd>' + '<h3>' + item.title + '</h3>' + '<b><img src=""></b>' + '<p>' + item.partner + '</p>'
        + '<span>' + item.arrington + '</span>' + '</dd></dl></div>'



        $('.personal-profile-title').html(personalHtml);
    
    var video_length = item.video.length;
    if (video_length >1) {
        var videoHtml = [];

        item.video.forEach(function (v) {
            videoHtml.push('<iframe class = "video_frame" '  
            + 'src="' + 'https://www.youtube.com/embed/' + v +
            '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
        });

        $('.modal-content').append(videoHtml.join(''));
    } else {
        var videoFrame = '<iframe width="60%" height="500"  style ="display: block; margin: 0 auto;" '  
        + 'src="' + 'https://www.youtube.com/embed/' + item.video[0] +
        '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'

       $('.modal-content').html(videoFrame);
    }

    

})

