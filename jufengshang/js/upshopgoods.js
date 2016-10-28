//更新购物车商品
var getcartGoods = function() {
	var $shopcart = $.cookie("shopcart");
	if($shopcart != undefined) {
		var json = strOper.get($shopcart);
		var html = "";
		var num;
		var total_prices = 0;
		$.each(json, function(i, o) {
			html += '<li>' +
				'<div class="goods_pic"><a href="/VacheronConstantin9179"><img src="' + o.img + '" width="60" height="60"></a></div>' +
				'<div class="goods_name"><a href="/VacheronConstantin9179">' + o.name + '</a></div>' +
				'<div class="action">' +
				'<p class="price">' + o.price + '<em>x' + o.count + '</em></p>' +
				'<span id="del"><a data-pid="' + o.id + '" del="del" href="javascript:;" style="color:red;" >删除</a></span>' +
				'</div>' +
				'</li>';
			var numprice = o.price.slice(8, o.price.length);
			num = i + 1;
			total_prices += numprice * o.count;
		});
		$("#cart .main .total_price").html("￥" + total_prices);
		$("#cart .main .total_number").html(num);
		$("#cart .goods").html(html);
	}
}

//对商品数量进行加减的程序
var counter = function(element, type) {
		var count = type === true ? 1 : -1;
		var $p = type === true ? $(element).prev() : $(element).next();
		if($p.html() == "1" && type === false) {
			count = 0;
		} else {
			var $shopcart = $.cookie("shopcart");
			var id = $(element).data("pid");
			var result = strOper.counter($shopcart, id, type);
			$.cookie("shopcart", result);
		}
		$p.html(parseInt($p.html()) + count);
	}
	//创建商品列表
var createTable = function() {
	if($.cookie("shopcart")!=undefined) {
		$("#confirm_back .goback").hide();
		var $shopcart = $.cookie("shopcart");
		//if($shopcart != undefined) {
			var json = strOper.get($shopcart);
			var html = "";
			$.each(json, function(i, o) {
				var numprice = o.price.slice(8, o.price.length);
				var other = o.other.slice(0, o.other.length);
				var favorable = (other - numprice) * o.count;
				html += '<tr>' +
					'<td>' +
					'<a style="display:block;" href="#">移入收藏</a>' +
					'<span id="del" del="del" style="display:block;" data-pid="' + o.id + '">删除</span>' +
					'</td>' +
					'<td>' +
					'<a href="#"><img src="../' + o.img + '" /></a>' +
					'</td>' +
					'<td>' + o.name + '</td>' +
					'<td>￥' + o.other + '</td>' +
					'<td>' + o.price + '</td>' +
					'<td>' + favorable + '</td>' +
					'<td>' + numprice * o.count + '</td>' +
					'<td style="text-align:center;">' +
					'<a id="down" href="javascript:;" data-pid="' + o.id + '" >-</a>' +
					'<p  style="line-height:22px;">' + o.count + '</p>' +
					'<a id="up" href="javascript:;" data-pid="' + o.id + '" >+</a>' +
					'</td>' +
					'</tr>';
			});
			$("#confirm_back table tbody").html(html);

		//}
	} else {
		$("#confirm_back .goback").show();
	}
}