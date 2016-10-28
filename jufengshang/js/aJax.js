
	/*key:value
	 		method:"post",   //请求的方式  值：get或post
	 		url:"路径",
	 		//请求或提交的条件
	 		params:{key1:value,key2:value,key3:value.....}   //key1=value1&key2=value2&key3=value3
	 		isAsyc:true,    //表示是否是异步  true 或 false
	 		success:function(data){   //data表示会话成功后返回后的结果
	 			
	 		},
	 		error:function(mes){   //mes表示的会话失败后返回后的结果
	 			
	 		}*/
function ajax(o) {
	var xr;
	if (window.XMLHttpRequest) {
		xr = new XMLHttpRequest;
	} else {
		xr = new ActiveXObject("Microsoft.XMLHTTP");
	}
	if (o.method == "get") {
		if (o.params) {
			xr.open("GET", o.url + "?random=" + new Date().getTime()+ "&"+ getStr(o.params), o.isAsyc);
		} else {
			xr.open("GET", o.url + "?random=" + new Date().getTime(), o.isAsyc);
		}
		xr.send();
	} else {
		xr.open("POST", o.url, o.isAsyc)
		var params = getStr(o.params);
		xr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		xr.send(params);
	}
	if(o.isAsyc){
		xr.onreadystatechange = function(){
			hander();
		}
	}else{
		hander();
	}
	function hander(){
		if (xr.readyState==4){
			if (xr.status==200){
				o.success(xr.responseText);
			}else{
				o.error(xr.status);
			}
		}
	}
}

function getStr(params) {
	var arr = [];
	for (var item in params) {
		arr.push(item + "=" + params[item])
	}
	var str = arr.join("&");
	return str;
}

