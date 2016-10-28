/*
	放大镜模块 
*/

$("#goodsinfo_back .pic .zoompad").hover(function(e){
	$("#goodsinfo_back .pic .zoompup").show();
	$("#goodsinfo_back .pic .zoomwindow").show();
	$(this).mousemove(function(e){
		var $zoompup=$("#goodsinfo_back .pic .zoompup");
		var $x=e.clientX-$zoompup.width()/2;
		var $y=e.clientY-$zoompup.height()/2;
		if($x<42){
			$x=42;
		}
		if($x>210){
			$x=210;
		}
		if($y<155){
			$y=155;
		}
		if($y>321){
			$y=321;
		}
		$zoompup.offset({
			left:$x,
			top:$y
		});
		$("#Img #img").offset({
			left:542-$x,
			top:310-$y
		})
	});	
},function(){
	$("#goodsinfo_back .pic .zoompup").hide();
	$("#goodsinfo_back .pic .zoomwindow").hide();
});

$("#up").click(function(){
	var $num=$(this).prev().html();
	$num++;
	$(this).prev().html($num);	
})
$("#down").click(function(){
	var $num=$(this).next().html();
	$num--;
	if($num<=1){
		$num=1;
	}
	$(this).next().html($num);
})
//动态创建热销推荐区域

var recomTab=function(){
	$("#recommend_back .recom_top span").click(function(e){
		if($(e.target).attr("kind")=="hot"){
			$("#recommend_back .recom_top span").removeClass("active");
			$(this).addClass("active");
			$("#recommend_back .recom_bottom div").removeClass("active");
			$("#recommend_back .recom_bottom").children().eq(0).addClass("active");
		}else if($(e.target).attr("kind")=="like"){
			$("#recommend_back .recom_top span").removeClass("active");
			$(this).addClass("active");
			$("#recommend_back .recom_bottom").children().removeClass("active");
			$("#recommend_back .recom_bottom").children().eq(1).addClass("active");
		}
	});
}
var dlMouseover=function(){
	$("#recommend_back .recom_bottom dl").hover(function(){
		$("#recommend_back .recom_bottom dl").removeClass("active");
		$(this).addClass("active");
	},function(){
		$(this).removeClass("active");
	})
}
$.get("../json/goods.json",function(data){
	$.each(data,function(i,o){
		var $dv=o.div;
		$("#recommend_back .recom_bottom").append("<div></div>");
		$("#recommend_back .recom_bottom").children().last().addClass("recom_item");
		if(i==0){
			$("#recommend_back .recom_bottom").children().last().addClass("active");
		}
		var html="";
		$.each($dv,function(i,o){
			html+='<dl class="">'+
							'<dt>'+
								'<a href="'+o.address+'"><img src="../'+o.imgsrc+'"/></a>'+
							'</dt>'+
							'<dd>'+
								'<p class="pname">'+
									'<a href="'+o.address+'">'+o.pname+'</a>'+
								'</p>'+
								'<p class="price">'+o.price+'<s>'+o.other+'</s></p>'+
								'<a href="javascript:;" class="buy"></a>'+
							'</dd>'+
				'</dl>';
		});
		$("#recommend_back .recom_bottom").children().last().html(html);
	});
	recomTab();
	dlMouseover();
});

$(".goodsDesc .sectionTitle li").click(function(e){
	$(".goodsDesc .sectionTitle li").removeClass("cur");
	$(this).addClass("cur");
	var $index=$(this).index();
	$(".goodsDesc .sectionBody").hide();
	switch($index){
		case 0:
		$(".goodsDesc .sectionBody").eq(0).show();
		$(".goodsDesc .sectionBody").eq(2).show();
		break;
		case 2:
		$(".goodsDesc .sectionBody").eq(2).show();
		break;
		default:
		$(".goodsDesc .sectionBody").eq(2).show();
	}	
})

$("#weixin").hover(function(){
	$("#simple .erweima_right").show();
},function(){
	$("#simple .erweima_right").hide();
})
