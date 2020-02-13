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
    var list_length = data.personal.list.length;
    
    // console.log('data.personal.list', list_length, index, id);

    var name = $.cookie('name');
    var pass = 'a0440790f293dab54f79324f66f1ed6ca08ae6e1';
    if (!name || name != pass) {
        location.href = 'http://insights.finnexus.io/'
        return
    }

    if (list_length <= index || id > 3) {
        location.href = 'http://insights.finnexus.io/'
        return
    }

    var item = data.personal.list[index][id];
    
    // console.log('item', item);

    var personalHtml = '<div class="personal-video-centext"><dl>'
        + '<dt><img src="./img/' + item.img + '" style="width: 88px;border-radius: 50px;filter:grayscale(100%);-webkit-filter:grayscale(100%)" ' + '></dt>'
        + '<dd>' + '<h3>' + item.title + '</h3>' + '<b><img src=""></b>' + '<p>' + item.partner + '</p>'
        + '<span>' + item.arrington + '</span>' + '</dd></dl></div>'



        $('.personal-profile-title').html(personalHtml);

    
    var video_item = data_video.personal.list[index][id];
    var video_length = video_item.video.length;
    if (video_length >1) {
        var videoHtml = [];

        video_item.video.forEach(function (v) {
            videoHtml.push('<iframe class = "video_frame" '  
            + 'src="' + 'https://www.youtube.com/embed/' + v +
            '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
        });

        $('.modal-content').append(videoHtml.join(''));
    } else {
        var videoFrame = '<iframe class="video_frame2" '  
        + 'src="' + 'https://www.youtube.com/embed/' + video_item.video[0] +
        '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'

       $('.modal-content').html(videoFrame);
    }

    

})

