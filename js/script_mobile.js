function browserRedirect2() {
    var sUserAgent = navigator.userAgent.toLowerCase();
    var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
    var bIsMidp = sUserAgent.match(/midp/i) == "midp";
    var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
    var bIsAndroid = sUserAgent.match(/android/i) == "android";
    var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
    var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
    if (!(bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM)) {
        location.href = '/icto.html';
    }
}

function showtime() {
    var nowtime = new Date(), //获取当前时间
        endtime = new Date("2020/8/8"); //定义结束时间
    var lefttime = endtime.getTime() - nowtime.getTime(), //距离结束时间的毫秒数
        leftd = Math.floor(lefttime / (1000 * 60 * 60 * 24)), //计算天数
        lefth = Math.floor(lefttime / (1000 * 60 * 60) % 24), //计算小时数
        leftm = Math.floor(lefttime / (1000 * 60) % 60), //计算分钟数
        lefts = Math.floor(lefttime / 1000 % 60); //计算秒数
    return '<br/>' + leftd + "D " + lefth + "H:" + leftm + "M:" + lefts + "S"; //返回倒计时的字符串
}

Raphael.fn.pieChart = function (cx, cy, r, values, labels, stroke) {
    var paper = this,
        rad = Math.PI / 180,
        chart = this.set();

    function sector(cx, cy, r, startAngle, endAngle, params) {
        var x1 = cx + r * Math.cos(-startAngle * rad),
            x2 = cx + r * Math.cos(-endAngle * rad),
            y1 = cy + r * Math.sin(-startAngle * rad),
            y2 = cy + r * Math.sin(-endAngle * rad);

        return paper.path(["M", cx, cy, "L", x1, y1, "A", r, r, 0, +(endAngle - startAngle > 180), 0, x2, y2, "z"]).attr(params);
    }
    var angle = 0,
        total = 0,
        start = 0,
        process = function (j, col) {
            var value = values[j],
                angleplus = 360 * value / total,
                popangle = angle + (angleplus / 2),
                color = Raphael.hsb(start, .75, 1),
                ms = 500,
                delta = 30,
                bcolor = Raphael.hsb(start, 1, 1);

            if (j === 0) {
                p = sector(cx, cy, r, angle, angle + angleplus, {
                    // fill: "90-" + bcolor + "-" + color,
                    fill: col,
                    stroke: stroke,
                    "stroke-width": 3,
                    transform: "s1.1 1.1 " + cx + " " + cy
                })

                txt = paper.text(cx + (r - delta) * Math.cos(-popangle * rad), cy + (r - delta - 20) * Math.sin(-popangle * rad), labels[j]).attr({
                    fill: "#ffffff",
                    stroke: "none",
                    // opacity: 0,
                    "font-size": 16
                })
            } else {
                p = sector(cx, cy, r, angle, angle + angleplus, {
                    // fill: "90-" + bcolor + "-" + color,
                    fill: col,
                    stroke: stroke,
                    "stroke-width": 3,
                    transform: ""
                })

                txt = paper.text(cx + (r - delta - 40) * Math.cos(-popangle * rad), cy + (r - delta - 40) * Math.sin(-popangle * rad), labels[j]).attr({
                    fill: "#ffffff",
                    stroke: "none",
                    // opacity: 0,
                    "font-size": 16
                })
            };

            // p.mouseover(function () {
            //     p.stop().animate({
            //         transform: "s1.1 1.1 " + cx + " " + cy
            //     }, ms, "elastic");
            //     txt.stop().animate({
            //         opacity: 1
            //     }, ms, "elastic");
            // }).mouseout(function () {
            //     p.stop().animate({
            //         transform: ""
            //     }, ms, "elastic");
            //     txt.stop().animate({
            //         // opacity: 0
            //     }, ms);
            // });
            angle += angleplus;
            chart.push(p);
            chart.push(txt);
            start += .1;
        };
    for (var i = 0, ii = values.length; i < ii; i++) {
        total += values[i];
    }
    for (i = 0; i < ii; i++) {
        var col = ["#22409A", "#6E2C90"]
        process(i, col[i]);
    }
    return chart;
};

$(function () {
    var values = [],
        labels = [];
    $("tr").each(function () {
        values.push(parseInt($("td", this).text(), 10));
        labels.push($("th", this).text());
    });
    $("table").hide();
    Raphael("holder2", 300, 300).pieChart(150, 150, 100, values, labels, "#fff");
});