/*
 源码 by Kai  球加速

;https://github.com/kai2ou/Script/blob/master/QuantumultX/qiujiasu-DailyBonus/readme

; 偶尔云免费机场✈️注册：https://ouers.co/auth/register?code=9oPF
; 偶尔云Cookies 获取
; 偶尔云登入：https://ouers.co/user

[filter_local]
//偶尔云走本地节点
host-suffix, ouers.co, direct



[rewrite_local]
//偶尔云获取Cookie 登陆https://ouers.co/user后获取   成功后注释掉，Cookie失败后重新获取

^https:\/\/ouers\.co\/user url script-request-header oueryunCookie.js

[mitm]
ouers.co

[task_local]
0 0 * * * oueryun.js

*/

    
    
let Cookie = $prefs.valueForKey("oueryunCookie");

let Req = {
  url: "https://ouers.co/user/checkin",
  method: "POST",
  headers: {
    Cookie: Cookie,
    //Origin: "http://www.qiujiasu01.com",
    Referer: "https://ouers.co/user",
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36"
  }
};

$task.fetch(Req).then(response => {
  try {
    var doc = JSON.parse(response.body);
    var str = unescape(response.body.replace(/\\u/g, "%u"));
    console.log(str);
    if (doc["ret"] == 1) {
      //var str = eval("'" + doc + "'");
      //var str = unescape(doc.replace(/\u/g, "%u"));
      //console.log(str);
      
      $notify(
        "偶尔云✈️",
        "签到成功",
        `\n签到流量：${doc["msg"]}`
      );
    } else {
      $notify("偶尔云✈️", "重复签到", doc["msg"]);
    }
  } catch (error) {
    $notify("偶尔云✈️", "失败", error);
  }
});

