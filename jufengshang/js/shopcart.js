//顶部二维码
$("#top_back .code").hover(function() {
	$("#top_back .ewm_hidden").show();
}, function() {
	$("#top_back .ewm_hidden").hide();
})

$("#simple .weixin").hover(function() {
	$("#simple .erweima_right").show();
}, function() {
	$("#simple .erweima_right").hide();
})

/*
	购物车功能 
*/

createTable();
$("table").click(function(e){
	if($(e.target).attr("del")=="del"){
		$shopcart=$.cookie("shopcart");
		var id=$(e.target).data("pid");
		var result=strOper.del($shopcart,id);
		$.cookie("shopcart",result);
		getcartGoods();
		createTable();
	}else if($(e.target).is("#down")){
		counter(e.target,false);
		var $shopcart=$.cookie("shopcart");
		var price=$(e.target).parent().prev().prev().prev().html();
		var numprice=price.slice(8,price.length);//价格转纯数字
		var count=$(e.target).next().html();
		var other=$(e.target).parent().prev().prev().prev().prev().html();
		var numother=other.slice(1,other.length);//专柜价转纯数字
		var favorable=(numother-numprice) * count;//优惠
       	$(e.target).parent().prev().prev().html(favorable);
       	$(e.target).parent().prev().html(count*numprice);
       	var result=strOper.del($shopcart,id);
		$.cookie("shopcart",result);
		getcartGoods();
	}else if($(e.target).is("#up")){
		counter(e.target,true);
		var $shopcart=$.cookie("shopcart");
		var price=$(e.target).parent().prev().prev().prev().html();
		var numprice=price.slice(8,price.length);
		var count=$(e.target).prev().html();
		var other=$(e.target).parent().prev().prev().prev().prev().html();
		var numother=other.slice(1,other.length);
		var favorable=(numother-numprice) * count;
		$(e.target).parent().prev().prev().html(favorable);
       	$(e.target).parent().prev().html(count*numprice);
       	var result=strOper.del($shopcart,id);
		$.cookie("shopcart",result);
		getcartGoods();
	}
})