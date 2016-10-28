$("#top_back .code").hover(function() {
	$("#top_back .ewm_hidden").show();
}, function() {
	$("#top_back .ewm_hidden").hide();
})
$("#simple #weixin").hover(function() {
		$("#simple .erweima_right").show();
	}, function() {
		$("#simple .erweima_right").hide();
	})
	//底部隐藏logo浮动显示
$("#foot_back .chengxin").hover(function() {
	$("#foot_back .hide_logo").show();
}, function() {
	$("#foot_back .hide_logo").hide();
})

//注册验证
var ok1 = false;
var ok1 = false;
var ok1 = false;
var ok1 = false;
var ok5 = false;

//用户名验证
$("#username").focus(function() {
	$("#hide_hint").show();
	$("#hide_hint").html("支持汉字、字母、数字、“-”“_”的组合，4-20个字符");
}).blur(function() {
	var $v = $(this).val();
	if($(this).val().length >= 3 && $(this).val().length <= 12 && $(this).val() != '') {
		if(Regobj.userNameReg.test($v)) {
			$("#hide_hint").html('输入成功');
			ok1 = true;
			var xhr;
				if (window.XMLHttpRequest) {
					xhr = new XMLHttpRequest(); //标准模式
				} else {
					xhr = new ActiveXObject("Microsoft.XMLHTTP") //IE6
				}
				xhr.open("POST", "http://10.9.158.170:8080/API/user/check.aspx", true);
				var data = $v;
				xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
				xhr.send(data);
				//监听响应
				xhr.onreadystatechange = function() {
					if (xhr.readyState == 4) {
						if (xhr.status == 200) {
							//表示登录成功
							if (xhr.responseText == 1) {
								$("#hide_hint").html("该用户名已被注册,不能使用该用户名");
							} else {
								ok1=false;
							}
						} else {
							console.log("请求失败");
						}
					}
				}
		} else {
			$("#hide_hint").html("格式错误，仅支持汉字、字母、数字、“-”“_”的组合，4-20个字符")
		}
	} else {
		$("#hide_hint").html("格式错误，仅支持汉字、字母、数字、“-”“_”的组合，4-20个字符");
	}
})

//密码验证

$("#pwd").focus(function() {
	$("#hide_hint").show();
	$("#hide_hint").html('建议使用数字、字母和符号两种以上的组合，6-20个字符');
}).blur(function() {
	var $v = $(this).val();
	if($(this).val().length >= 6 && $(this).val().length <= 20 && $(this).val() != '') {
		if(Regobj.wordReg.test($v)) {
			$("#hide_hint").html('输入成功');
			ok2 = true;
		} else {
			$("#hide_hint").html('建议使用数字、字母和符号两种以上的组合，6-20个字符');
		}
	} else {
		$("#hide_hint").html('密码应该为6-20位之间');
	}
});

//密码确认

$("#is_pwd").focus(function() {
	$("#hide_hint").show();
	$("#hide_hint").html('请再次输入密码');
}).blur(function() {
	var $v = $(this).val();
	var $pwd_v = $("#pwd").val();
	if($(this).val().length >= 6 && $(this).val().length <= 20 && $(this).val() != '') {
		if($v == $pwd_v) {
			$("#hide_hint").html('密码确认成功');
			ok3 = true;
		}
	} else {
		$("#hide_hint").html('前后两次密码不一致');
	}
});

//验证码验证
$("#body_back .yzm .yzm_pic").click(function() {
	var yzmstr = "";
	var yzmarr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
	for(var i = 0; i <= 4; i++) {
		var index = parseInt(Math.random() * yzmarr.length);
		yzmstr += yzmarr[index];
	}
	$(this).html(yzmstr);
});
$("#yzm").focus(function() {
	$("#hide_hint").show();
	$("#hide_hint").html('请输入验证码');
}).blur(function() {
	var $v = $(this).val();
	var $yzmword = $("#body_back .yzm .yzm_pic").html();
	if($v == '') {
		$("#hide_hint").html('验证码不能为空');
	} else {
		if($v == $yzmword) {
			$("#hide_hint").html('验证通过');
			ok4 = true;
		} else {
			$("#hide_hint").html('验证码输入错误');
		}
	}
});

//协议是否同意

$("#btn").click(function() {
	$("#ck").change(function() {
		if($("#ck").is(":checked")) {
			ok5 = true;
			if(ok1 && ok2 && ok3 && ok4 && ok5) {
				$("#hide_hint").html("可以注册");
				$("#hide_hint").hide();
			}
		} else {
			$("#hide_hint").show();
			$("#hide_hint").html('请阅读并同意服务协议');
		}
	})
})