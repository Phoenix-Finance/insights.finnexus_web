$(function () {

    $('.banner-title h3:first').text(data.banner.title.text_1);
    $('.banner-title h3:last').text(data.banner.title.text_2);
    $('.banner-title p:first').text(data.banner.title.text_3);
    $('.banner-title img').attr('src', './img/logo2.png');
    $('.btn-group p:first').text(data.banner.speaker);
    $('.btn-group p:last').text(data.banner.audience);





    $('.personal-profile-title p:first span').text(data.personal.title);
    $('.personal-profile-title p:last').text(data.personal.Subheading);

    var personalHtml = [];
    var list = data.personal.list;
    $.each(list, function (index, childreds) {
        personalHtml.push('<div class="personal-profile-centext">')
        childreds.forEach(function (item, k) {
            personalHtml.push('<dl class="plyr" style="cursor: pointer;" data-id=' + item.url +  '>');
            personalHtml.push('<dt><img src="./img/' + item.img +  '" style="width: 88px;border-radius: 50px;filter:grayscale(100%);-webkit-filter:grayscale(100%)" ' + '></dt>');
            personalHtml.push('<dd>');
            personalHtml.push('<h3>' + item.title + '</h3>');
            personalHtml.push('<b><img src="./img/loding.png" alt=""></b>');
            personalHtml.push('<p>' + item.partner + '</p>');
            personalHtml.push('<span>' + item.arrington + '</span>');
            personalHtml.push('</dd>');
            personalHtml.push('</dl>');
        });
        personalHtml.push('</div>');
    })
    $('.personal-profile-title').after(personalHtml.join(''));





    $('.agenda-title p:first span').text(data.agenda.title);
    $('.agenda-title p:last').text(data.agenda.Subheading);
    $('.agenda-centext-thead .time').text(data.agenda.thead.time);
    $('.agenda-centext-thead .name').text(data.agenda.thead.name);
    $('.agenda-centext-thead .theme').text(data.agenda.thead.theme);



    var agendaHtml = [];
    $.each(data.agenda.table, function (index, item) {
        agendaHtml.push('<li>');
        agendaHtml.push('<p><b>' + item.hour + ' AM</b><span>' + item.specificDate + '</span></p>');
        agendaHtml.push('<p><b>' + item.name + '</b> <span>' + item.briefIntroduction + '</span></p>');
        agendaHtml.push('<p><b>' + item.Theme + '</b></p>');
        agendaHtml.push('</li>');
    })
    $('.agenda-centext-table ul').append(agendaHtml.join(''));



    var linkHtml = [];
    data.company.forEach(function (item) {
        linkHtml.push('<a target="_blank" href="' + item[1] + '"><img src="./project/' + item[0] + '" alt=""></a>');
    });
    $('.link-icon').append(linkHtml.join(''));



    $('.participate-link-title p:first span').text(data.participate.title);
    $('.participate-link-title p:last').text(data.participate.Subheading);
    $('.participate-centext-middel p').eq(0).text(data.participate.briefIntroduction.text_1);
    $('.participate-centext-middel p').eq(1).html(data.participate.briefIntroduction.text_2);
    $('.participate-centext-middel p').eq(2).html(data.participate.briefIntroduction.text_3);
    $('.participate-link-group p').text(data.participate.presentation.title);

    var participateHtml = [];
    data.participate.presentation.links.forEach(function (item) {
        participateHtml.push('<div><a>' + item + '</a></div>');
    });
    $('.participate-link-group-box').append(participateHtml.join(''));

    var btnElement = document.getElementsByTagName('button')[0]; //第一个button元素
    btnElement.addEventListener('click', b);

    function b() {
        var h1 = "https://docs.google.com/forms/d/1utKnMJ636uqPm1UaJxbuBs0FHLz1BPuxkYI4CFOFQvg/edit#response=ACYDBNhEom4NNG2wrH-TuuW1-kX3NjeByOjB_YYY7rKYnZDg_X4gdq8vLjcUuAvzEjtXx5Q";
        window.open(h1, '_blank');
        // window.location.href = "";//跳转
    }


    var btnElement2 = document.getElementsByTagName('button')[1]; //第一个button元素
    btnElement2.addEventListener('click', b2);

    function b2() {
        var h2 = "https://mailchi.mp/e135a0f4e0d6/insights_summit";
        window.open(h2, '_blank');
    }


    $(".plyr").click(function(e){
        var name = $.cookie('name');
        var pass = 'finnexus';
        console.log('name: ', name);

        var video_url = e.currentTarget.dataset.id;

        if(name == pass) {
            var tempwindow=window.open('_blank')
            tempwindow.location = video_url
        } else {
            $('#myModal').modal('show');

            var videoFrame = `
            <div class="form-group">
                    <div class="form-group">
                    <label for="pwd">Password:</label>
                    <input type="password" class="form-control" id="pwd" placeholder="Enter password">
            </div>
            <button id="submit" type="submit" class="btn btn-primary">Submit</button>
            `

            $('.modal-content').html(videoFrame);

            $("#submit").click(function(e){
                // console.log('ess: ', $("*[id='pwd']").val())
                var val = $("*[id='pwd']").val();
                if (val === pass) {
                    $.cookie('name', val);

                    console.log("$.cookie('name');", $.cookie('name'))

                    $('#myModal').modal('hide');

                    var tempwindow=window.open('_blank')
                    tempwindow.location = video_url
                } else {
                    alert("password wrong!")
                }
                
            });
        }

      });

})
