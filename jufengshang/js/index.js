//购物袋显示与隐藏
$("#head_back .top-cart").mouseover(function() {
	$("#head_back #cart").show();
});
$("#head_back #cart").mouseleave(function() {
	$("#head_back #cart").hide();
});

$("#head_back .code").mouseover(function() {
	$("#head_back .weixin_hide").show();
}).mouseout(function() {
	$("#head_back .weixin_hide").hide();
});

//顶部轮播图
var $index;
var lunbo = function() {
	$("#lunbo_back .num-list li").each(function(i, e) {
		$(this).index = i;
		$(this).click(function() {
			$("#lunbo_back .lunbo_list .lunbo-item").fadeOut(400);
			$("#lunbo_back .num-list li").each(function() {
				$(this).removeClass("active");
			});
			$(this).addClass("active");
			$index = $(this).index();
			$("#lunbo_back .lunbo_list li").eq($index).fadeIn(400);
		});
	});
}
lunbo();
var count = 0;
setInterval(function() {
	count++;
	if(count > 3) {
		count = 0;
	}
	$("#lunbo_back .lunbo_list .lunbo-item").fadeOut(400);
	$("#lunbo_back .num-list li").each(function() {
		$(this).removeClass("active");
	});
	$("#lunbo_back .num-list li").eq(count).addClass("active");
	$("#lunbo_back .lunbo_list li").eq(count).fadeIn(400);
}, 4000);

/*
 	名表推荐区
 */

ajax({
	method: "get",
	url: "json/hotgoods.json",
	isAsyc: true,
	success: function(data) {
		var goods_body = document.querySelector("#homehot_back .homehot_body");
		var arr = JSON.parse(data);
		for(var i = 0; i < arr.length; i++) {
			var dl = document.createElement("dl");
			dl.innerHTML = '<dt>' +
				'<a href="' + arr[i].address + '"><img src="' + arr[i].imgsrc + '"/></a>' +
				'</dt>' +
				'<dd>' +
				'<p class="pname">' +
				'<a href="' + arr[i].address + '">' + arr[i].desc + '</a>' +
				'</p>' +
				'<p class="price"><span>&gt;现价:￥' + arr[i].price + '</span></p>' +
				'</dd>' +
				'<span other="' + arr[i].other + '" id="add_shopcart" pid="' + arr[i].pid + '">加入购物袋</span>';
			goods_body.appendChild(dl);
		}
	},
	error: function(mes) {
		console.log(mes);
	}
});

/*
 	品牌区点击换批
 */
$.getJSON("json/logolist01.json", function(data) {
	$.each(data, function(i, o) {
		var $objul = o.ul;
		$("<ul></ul>").appendTo("#homebrand_back .brand_left .brandList");
		var html = "";
		$.each($objul, function(i, o) {
			html += '<li>' +
				'<a title="' + o.title + '" href="' + o.address + '"><img src="' + o.imgsrc + '" /></a>' +
				'</li>';
		});
		$("#homebrand_back .brand_left .brandList :last").html(html);
	});
});
$.getJSON("json/logolist02.json", function(data) {
	$.each(data, function(i, o) {
		var $objul = o.ul;
		$("<ul></ul>").appendTo("#homebrand_back .brand_right .brandList");
		var html = "";
		$.each($objul, function(i, o) {
			html += '<li>' +
				'<a title="' + o.title + '" href="' + o.address + '"><img src="' + o.imgsrc + '" /></a>' +
				'</li>';
		});
		$("#homebrand_back .brand_right .brandList :last").html(html);
	});
});
var counter = 0;
$("#shuaxin01").click(function() {
	counter++;
	if(counter > 3) {
		counter = 0;
	}
	$("#homebrand_back .brand_left .brandList ul").removeClass("active");
	$("#homebrand_back .brand_left .brandList ul").eq(counter).addClass("active");
});
$("#shuaxin02").click(function() {
	counter++;
	if(counter > 3) {
		counter = 0;
	}
	$("#homebrand_back .brand_right .brandList ul").removeClass("active");
	$("#homebrand_back .brand_right .brandList ul").eq(counter).addClass("active");
});
/*
 	品牌切换区域
 */
$("#brand_back .top01 .brand_nav ul li").each(function(i, e) {
	$(this).click(function() {
		$("#brand_back .top01 .brand_nav ul li").children().removeClass("active");
		$(this).children().eq(0).addClass("active");
		var $index = $(this).index();
		$("#brand_back .top01 .nav-item").removeClass("active");
		$("#brand_back .top01 .nav-item").eq($index).addClass("active");
	});
})
$("#brand_back .top02 .brand_nav ul li").each(function(i, e) {
		$(this).click(function() {
			$("#brand_back .top02 .brand_nav ul li").children().removeClass("active_two");
			$(this).children().eq(0).addClass("active_two");
			var $index = $(this).index();
			$("#brand_back .top02 .nav-item").removeClass("active");
			$("#brand_back .top02 .nav-item").eq($index).addClass("active");
		});
	})
	/*
	 	品牌区右部轮播图
	 */
	//获取logo
$.getJSON("json/brandlogo01.json", function(data) {
		$.each(data, function(i, o) {
			var $ul = o.ul
			$("<ul></ul>").appendTo("#brand_back .top01 .nav-item:eq(" + i + ") .brand-bottom .brandBody");
			var html = "";
			$.each($ul, function(i, o) {
				html += '<li>' +
					'<a href="' + o.address + '"><img src="' + o.imgsrc + '" /></a>' +
					'</li>';
			});
			$("#brand_back .top01 .nav-item:eq(" + i + ") .brand-bottom .brandBody :last").html(html);
		});
	})
	//轮播运动
var num = 0;
//向前轮播
$("#brand_back .top01 .brand-bottom .prev").click(function() {
	num--;
	if(num <= -1) {
		num = 11;
	}
	$(this).next().children().animate({
		left: -130 * num
	}, 300);
});
//向后轮播
$("#brand_back .top01 .brand-bottom .next").click(function() {
	num++;
	if(num >= 12) {
		num = 0;
	}
	$(this).prev().children().animate({
		left: -130 * num
	}, 300);
});
var timer01;
var autoPlay = function() {
	timer01 = setInterval(function() {
		num++;
		if(num >= 12) {
			num = 0;
		}
		$("#brand_back .top01 .brand-bottom .next").prev().children().animate({
			left: -130 * num
		}, 300);
	}, 2000)
}
autoPlay();
$("#brand_back .top01 .brand-bottom").mouseover(function() {
	clearInterval(timer01);
});
$("#brand_back .top01 .brand-bottom").mouseout(function() {
	autoPlay();
});
$.getJSON("json/brandlogo02.json", function(data) {
	$.each(data, function(i, o) {
		var $ul = o.ul
		$("<ul></ul>").appendTo("#brand_back .top02 .nav-item:eq(" + i + ") .brand-bottom .brandBody");
		var html = "";
		$.each($ul, function(i, o) {
			html += '<li>' +
				'<a href="' + o.address + '"><img src="' + o.imgsrc + '" /></a>' +
				'</li>';
		});
		$("#brand_back .top02 .nav-item:eq(" + i + ") .brand-bottom .brandBody :last").html(html);
	});
})

$("#brand_back .top02 .brand-bottom .prev").click(function() {
	num--;
	if(num <= -1) {
		num = 11;
	}
	$(this).next().children().animate({
		left: -130 * num
	}, 300);
});
$("#brand_back .top02 .brand-bottom .next").click(function() {
	num++;
	if(num >= 12) {
		num = 0;
	}
	$(this).prev().children().animate({
		left: -130 * num
	}, 300);
});
var timer02;
timer02 = setInterval(function() {
	num++;
	if(num >= 12) {
		num = 0;
	}
	$("#brand_back .top02 .brand-bottom .next").prev().children().animate({
		left: -130 * num
	}, 300);
}, 2000);

/*
 	名表资讯轮播区
 */
$("#message_back .message .lunbo_list li").each(function(i, e) {
	$(this).click(function() {
		$("#message_back .message .lunbo_list li").children().removeClass("active");
		$(this).children().addClass("active");
		$("#message_back .message .lunbo-item").removeClass("active");
		var $index = $(this).index();
		$("#message_back .message .lunbo-item").eq($index).addClass("active");
		$("#message_back .message .news .news-item").removeClass("active");
		$("#message_back .message .news .news-item").eq($index).addClass("active");
	});
});

var mess_count = 0;
setInterval(function() {
	mess_count++;
	if(mess_count >= 3) {
		mess_count = 0;
	}
	$("#message_back .message .lunbo_list li").children().removeClass("active");
	$("#message_back .message .lunbo_list li").eq(mess_count).children().addClass("active");
	$("#message_back .message .lunbo-item").removeClass("active");
	$("#message_back .message .lunbo-item").eq(mess_count).addClass("active");
	$("#message_back .message .news .news-item").removeClass("active");
	$("#message_back .message .news .news-item").eq(mess_count).addClass("active");
}, 3000);

//底部图片浮动显示
$("#saoma").hover(function() {
	$("footer .iphone .footer_apperweima_hidden").show();
}, function() {
	$("footer .iphone .footer_apperweima_hidden").hide();
});
$("footer #weixin").hover(function() {
	$("footer .telephone .footer_weixin_hidden").show();
}, function() {
	$("footer .telephone .footer_weixin_hidden").hide();
});

$("footer .trust ul li:first").hover(function() {
	$("footer .trust").animate({
		width: 1200
	}, 400);
}, function() {
	$("footer .trust").animate({
		width: 108
	}, 400);
})
var isHide = true;
$("#linkMore").click(function() {
	if(isHide) {
		$(this).html("收起&gt;");
		$("#linkBody").show();
		isHide = false;
	} else {
		$(this).html("更多&gt;");
		$("#linkBody").hide();
		isHide = true;
	}
});
$("#weixin_right").hover(function() {
	$("#simple .erweima_right").show();
}, function() {
	$("#simple .erweima_right").hide();
})

/*
 	点击加入购物袋
 	查询cookie状态
 */

$("#homehot_back").click(function(e) {
	if($(e.target).is("span")) {
		var $target = $(e.target);
		var id = $target.attr("pid");
		var pname = $target.prev().children().first().children().html();
		var img = $target.prev().prev().children().children().attr("src");
		var price = $target.prev().children().last().children().html();
		var other = $target.attr("other");
		var str = id + "#" + pname + "#" + img + "#" + price + "#" + "1" + "#" + other;
		var $shopcart = $.cookie("shopcart");
		if(!$shopcart) { //cookie文件是空的
			$.cookie("shopcart", str, {
				expires: 7
			});
		} else {
			var result = strOper.add($shopcart, str);
			$.cookie("shopcart", result);
			getcartGoods();
		}
	}
});
getcartGoods();
//购物袋删除商品功能
$("#heading").click(function(e) {
	if($(e.target).attr("del") == "del") {
		var $shopcart = $.cookie("shopcart");
		var id = $(e.target).data("pid");
		var result = strOper.del($shopcart, id);
		$.cookie("shopcart", result);
		getcartGoods();
		if($shopcart == undefined) {
			$.cookie("shopcart", null);
		}
	}
});