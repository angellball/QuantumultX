/*
srlink vpn 无限VIP时长

[mitm]
hostname = abc.vpncenters.com
*/

var obj = JSON.parse($response.body);
if ($request.url.match(/\/api\/user\/\.\*times=/g) != -1){
  obj.data["vipEndTime"] = "2099-03-25 19:08:50";
  obj.data["userType"] = "vip";
}
$done({body: JSON.stringify(obj)});
