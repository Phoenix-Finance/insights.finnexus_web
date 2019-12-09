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
    $.each(list, function(index,childreds){
        personalHtml.push('<div class="personal-profile-centext">')
            childreds.forEach(function(item,k){
                personalHtml.push('<dl>');
                personalHtml.push('<dt><img src="./img/'+ item.img +'" alt=""></dt>');
                personalHtml.push('<dd>');
                personalHtml.push('<h3>'+  item.title +'</h3>');
                personalHtml.push('<b><img src="./img/loding.png" alt=""></b>');
                personalHtml.push('<p>'+ item.partner +'</p>');
                personalHtml.push('<span>'+ item.arrington +'</span>');
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
    $.each(data.agenda.table, function(index,item){
        agendaHtml.push('<li>');
        agendaHtml.push('<p><b>'+ item.hour +' AM</b><span>'+ item.specificDate +'</span></p>');
        agendaHtml.push('<p><b>'+ item.name +'</b> <span>'+ item.briefIntroduction +'</span></p>');
        agendaHtml.push('<p><b>'+ item.Theme+'</b></p>');
        agendaHtml.push('</li>');
    })
    $('.agenda-centext-table ul').append(agendaHtml.join(''));
    


    var linkHtml = [];
    data.company.forEach(function(item) {
        linkHtml.push('<a href="#"><img src="./project/'+ item +'" alt=""></a>');
    });
    $('.link-icon').append(linkHtml.join(''));



    $('.participate-link-title p:first span').text(data.participate.title);
    $('.participate-link-title p:last').text(data.participate.Subheading);
    $('.participate-centext-middel p').eq(0).text(data.participate.briefIntroduction.text_1);
    $('.participate-centext-middel p').eq(1).text(data.participate.briefIntroduction.text_2);
    $('.participate-centext-middel p').eq(2).text(data.participate.briefIntroduction.text_3);
    $('.participate-link-group p').text(data.participate.presentation.title);

    var participateHtml = [];
    data.participate.presentation.links.forEach(function(item) {
        participateHtml.push('<a href="#">'+ item +'</a>');
    });
    $('.participate-link-group-box').append(participateHtml.join(''));


 













})
