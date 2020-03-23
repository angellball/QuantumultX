/*
; 源码 by Kai  球加速

;https://github.com/kai2ou/Script/blob/master/QuantumultX/qiujiasu-DailyBonus/readme

; 偶尔云免费机场✈️注册：https://ouers.co/auth/register?code=9oPF
; 偶尔云Cookies 获取
; 偶尔云登入：https://ouers.co/user


[filter_local]
//偶尔云走本地节点
host-suffix, ouers.co, direct



[rewrite_local]
//偶尔云获取Cookie 登陆https://ouers.co/user后获取   成功后注释掉，Cookie失败后重新获取

^https:\/\/ouers\.co\/user url script-request-header angellball/Script/oueryun/oueryun.cookie.js

[mitm]
ouers.co

[task_local]
0 0 * * * angellball/Script/oueryun/oueryun.js




*/

let headerCookie = $request.headers["Cookie"];

if (headerCookie) {
  if ($prefs.valueForKey("oueryunCookie") != undefined) {
    if ($prefs.valueForKey("oueryunCookie") != headerCookie) {
      var cookie = $prefs.setValueForKey(headerCookie, "oueryunCookie");
      if (!cookie) {
        $notify("更新偶尔云✈️Cookie失败！", "", "");
      } else {
        $notify("更新偶尔云✈️Cookie成功！", "", "");
      }
    }
  } else {
    let cookie = $prefs.setValueForKey(headerCookie, "oueryunCookie");
    if (!cookie) {
      $notify("首次写入偶尔云✈️Cookie失败！", "", "");
    } else {
      $notify("首次写入偶尔云✈️Cookie成功！", "", "");
    }
  }
}
$done({});
