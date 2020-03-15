$(function () {

    var name_sha = $.cookie('name') ? sha1($.cookie('name')) : '';
    var pass = 'a0440790f293dab54f79324f66f1ed6ca08ae6e1';
    if (!name_sha || name_sha != pass) {
        location.href = '/'
        return
    }

    var getPram = function GetQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if(r != null) return decodeURI(r[2]);
        return null;
    };

    var index = getPram('index');
    var personal = data_video.personal[index];
  
    // $('.personal-profile-title p:first span').text(personal.title);    
    

    var personalHtml = '<div class="personal-video-centext"><dl>'
        + '<dt><img src="./img/' + personal.img + '" style="width: 88px;border-radius: 50px;filter:grayscale(100%);-webkit-filter:grayscale(100%)" ' + '></dt>'
        + '<dd>' + '<h3>' + personal.title + '</h3>' + '<b><img src=""></b>' + '<p>' + personal.partner + '</p>'
        + '<span>' + personal.arrington + '</span>' + '</dd></dl></div>'

    $('.personal-profile-title').html(personalHtml);
    
    var video_length = personal.video.length;
    if (video_length >1) {
        var videoHtml = [];

        personal.video.forEach(function (v) {
            videoHtml.push('<iframe class = "video_frame" '  
            + 'src="' + 'https://www.youtube.com/embed/' + v +
            '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
        });

        $('.modal-content').append(videoHtml.join(''));
    } else {
        var videoFrame = '<iframe class="video_frame2" '  
        + 'src="' + 'https://www.youtube.com/embed/' + personal.video[0] +
        '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'

       $('.modal-content').html(videoFrame);
    }    

})

