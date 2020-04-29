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
				delta = 30;

			if (j === 0) {
				p = sector(cx, cy, r, angle, angle + angleplus, {
					fill: col,
					stroke: stroke,
					"stroke-width": 3,
					transform: "s1.1 1.1 " + cx + " " + cy
				})
			} else {
				p = sector(cx, cy, r, angle, angle + angleplus, {
					fill: col,
					stroke: stroke,
					"stroke-width": 3,
					transform: ""
				})
			};

			txt = paper.text(cx + (r - delta - 40) * Math.cos(-popangle * rad), cy + (r - delta - 40) * Math.sin(-popangle * rad), labels[j]).attr({
				fill: "#ffffff",
				stroke: "none",
				"font-size": 20
			})
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

	$('#counter').countdown({
		timestamp: (new Date("2020/5/11 16:00:00")).getTime() // + 08*10*60*60*1000
	});

	// 5
	var data_list = icto.rate.list;

	var tbodayHtml = [];
	$.each(data_list, function (index, childreds) {
		var ht = '<tr><th scope="row">' + childreds.title + '</th><td>' + childreds.par + '</td></tr>'
		tbodayHtml.push(ht)
	});

	$('#tbody1').append(tbodayHtml.join(''));
	$('#tbody2').append(tbodayHtml.join(''));


	// // last
	var values = [],
		labels = [],
		values2 = [],
		labels2 = [];
	$("#tbody1 tr").each(function () {
		values.push(parseInt($("td", this).text(), 10));
		labels.push($("th", this).text());
	});
	$("#tbody2 tr").each(function () {
		values2.push(parseInt($("td", this).text(), 10));
		labels2.push($("th", this).text());
	});

	$("#rates1").hide();
	$("#rates2").hide();
	Raphael("holder1", 400, 400).pieChart(200, 200, 150, values, labels, "#fff");
	Raphael("holder2", 400, 400).pieChart(200, 200, 150, values2, labels2, "#fff");
});