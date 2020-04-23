/*
srlink vpn 无限VIP时长

[rewrite_local]
^http:\/\/abc\.vpncenters\.com\/api\/user url script-response-body angellball/Script/Crack/srlink.js

[mitm]
hostname = abc.vpncenters.com
*/

var obj = JSON.parse($response.body);
if ($request.url.match(/\/api\/user\/\.\*times=/g) != -1){
  obj.data.gateways = [
    {
    "location": "tw",
    "imgUrl": "http://apa.vpncenters.com/images/tw.png",
    "port": 4500,
    "psk": "Kom8PW1",
    "cert": "-----BEGIN CERTIFICATE-----\nMIIDLjCCAhagAwIBAgIIRjJJhTeIXgYwDQYJKoZIhvcNAQELBQAwNTELMAkGA1UE\nBhMCVVMxEjAQBgNVBAoTCWFwcHJvY2tldDESMBAGA1UEAxMJcm9ja2V0bmV0MB4X\nDTIwMDQxNDE0MTUyMloXDTMwMDQxMjE0MTUyMlowNTELMAkGA1UEBhMCVVMxEjAQ\nBgNVBAoTCWFwcHJvY2tldDESMBAGA1UEAxMJcm9ja2V0bmV0MIIBIjANBgkqhkiG\n9w0BAQEFAAOCAQ8AMIIBCgKCAQEApedokqmwGkarx4L+QyCtdRXNGRieKYYZCPci\nk3UUUiHocaCXMZHtSyrBr3AYPWaiIwSk6L9i2ykwxkq2weOYzpxH0QcGSfwm/oMx\neGzboKNhljRPJlrULVm+PtS4FH/yXvr4SxSJ3B/Jv8AZbVvnPwe4EGJbGTpGi+qv\nMll3HPY5u0vg3L1ek1Pqeqf9hFmWx3hlyDGaZJp4v0/BWAc+QJelaWWrl1iUKYsA\nJqODyIyHTTwDSV4WSIZBx44vYv0QvC5e3NH+xW5hyNyqwMsHqkUe84O98HR843SZ\nU7cqMH2CwMAORUC2QQpX7fB6f29SVCapYyeD+NzIuvi1Kho7XQIDAQABo0IwQDAP\nBgNVHRMBAf8EBTADAQH/MA4GA1UdDwEB/wQEAwIBBjAdBgNVHQ4EFgQU17kyKQtp\nUdmeprJ309XfFSgwmD0wDQYJKoZIhvcNAQELBQADggEBACl7AkASfepCF5Y3z4g8\ns6CRYOyLZCvGiePYdVCUq/VNM0DVyxXaOCvjar+dKZK9ihKMmzh/l+WPuchym1Mw\nPzD8Xc1js59WbM+Swy4HsuVCdmUFCFSLdy2wmpmpbvgW4vE5IAT5uMbWObFJkDHx\nWxLP43kWMYxoziY8OHas+cuN3eSx/a1Rj2LLws/yBQsHFT1Wj2ud16SHF3XTY7o0\nHDTn+h1ISAOv5s6vnA4gUiNio+/iLal6dIuO/AiLrsBCDshHcYLgnoHG/Nh9H3Zv\nuFIjxBXCb7dkQAl8Mw1HRXzp1pNm0LCyoO7Jo/yhAY0POa3MSd2TI8m8E28KBBML\nmto=\n-----END CERTIFICATE-----\n",
    "locationName": "China Taiwan 100M",
    "ip": "61.220.130.70"
   },
   {
    "location": "hk",
    "imgUrl": "http://apa.vpncenters.com/images/hk.png",
    "port": 4500,
    "psk": "Kom8PW1",
    "cert": "-----BEGIN CERTIFICATE-----\nMIIDLjCCAhagAwIBAgIIHLqY5Xrxv2cwDQYJKoZIhvcNAQELBQAwNTELMAkGA1UE\nBhMCVVMxEjAQBgNVBAoTCWFwcHJvY2tldDESMBAGA1UEAxMJcm9ja2V0bmV0MB4X\nDTIwMDIyMDEyMTYxMFoXDTMwMDIxNzEyMTYxMFowNTELMAkGA1UEBhMCVVMxEjAQ\nBgNVBAoTCWFwcHJvY2tldDESMBAGA1UEAxMJcm9ja2V0bmV0MIIBIjANBgkqhkiG\n9w0BAQEFAAOCAQ8AMIIBCgKCAQEA42WvEfysajxJpCZV1UTRbf389xIgRT63e2CW\nmJ7PgXIc2yuVxmbt2tfczHeMdII+2OskIkLaGvqpfgWomkDsSmu9g0BnoKXC68lK\nYN/hmb6fq3MaQ/bwwAEKyZwqAj5Odk0bHxP31K+H92J3prEWrnex3TGk4H1S3u2B\nLngCtGQNt5tQ4zVcevRuzb8cM1ai1G5rM8dKzqMF9uwxW/aJEApbZfddqZ47iCxn\nBOtYQAe2pVIrM5hQ910vsmJjR5PjYX7WrBJbywabGn1l1TLx65kKqPN8fG2QuOA2\npUrZa6+s+deQNIvaskbGyn677RO6ldmx2nHGBfnw2Yn40Ic1cQIDAQABo0IwQDAP\nBgNVHRMBAf8EBTADAQH/MA4GA1UdDwEB/wQEAwIBBjAdBgNVHQ4EFgQUYNLMkPho\nIBrRhuqXmzuq5b4Cv0kwDQYJKoZIhvcNAQELBQADggEBAMNORii+xQH91gFeuRyh\nIz0jENng4Yeuz7kfDBFWJ/AhOWlhxJ7pJWPbvuGLyi2V+Cq9fH02PJXBu1nWQBK1\nO9uF/JXPefBHqjzeMAHEWWo41CkpVjOHWHK8DVE4uF6/ss8vvTsbmkvKAGxZ8AnG\nzmy9sAuo8RI01+0C1wfOj5RYYO+CSiqtiroZHEJuzYRuYQh08dnngwIqsCy66viR\nQkFYVsg+Om9pJUV3PAmK5m1fpe+DVuVbH6uHbZCf3aLOLeEaKZ/HW1sIc0ydx+Hc\nlvkBKdXODf5PX4ueDiU2VIH/95k82Vdw1LIhUBdpxkmD287srfi0zGzo3kxkBUuS\naos=\n-----END CERTIFICATE-----\n",
    "locationName": "China Hong Kong",
    "ip": "124.248.227.190"
   },
   {
    "location": "jp",
    "imgUrl": "http://apa.vpncenters.com/images/jp.png",
    "port": 4500,
    "psk": "Kom8PW1",
    "cert": "-----BEGIN CERTIFICATE-----\nMIIDLjCCAhagAwIBAgIIfVEGBXVxMn8wDQYJKoZIhvcNAQELBQAwNTELMAkGA1UE\nBhMCVVMxEjAQBgNVBAoTCWFwcHJvY2tldDESMBAGA1UEAxMJcm9ja2V0bmV0MB4X\nDTIwMDQxNDA0NTI1NloXDTMwMDQxMjA0NTI1NlowNTELMAkGA1UEBhMCVVMxEjAQ\nBgNVBAoTCWFwcHJvY2tldDESMBAGA1UEAxMJcm9ja2V0bmV0MIIBIjANBgkqhkiG\n9w0BAQEFAAOCAQ8AMIIBCgKCAQEA2SkbgHa6FZTqKSm2qtI0VKE7yPIhLlbAwHN8\n6bgp0WhLfcS4rj6Ab6F+Hy2W++V+d79ITwp9uggRhSANlQf1ce1lT8a76AQiwVVC\nFyxgFrbJqAEFiiimP9qbzMm1DUNTpKSRcUDZUYvS398FGQiwtAvDhssldUc+1hMr\n3BObT/inVYC8YpyMx7SlTBNCx+Z/QOD5ggJ8oRFT5v5SBxYzoW8M0aM+ilziSiVm\nhY89fzmGQWuKDGh7OrALhGQBxUUb7TBP5Jtb9ujoBtZ0aOKQLbJAfIEJo7iTKZVk\nWzNQ3Ps4DrVep1fuRSBcW9I+4MrhnF6FsqipqKyEpuyJRXJeEwIDAQABo0IwQDAP\nBgNVHRMBAf8EBTADAQH/MA4GA1UdDwEB/wQEAwIBBjAdBgNVHQ4EFgQU9k+IUz92\nEWt3nC+NvDnR4dugF/IwDQYJKoZIhvcNAQELBQADggEBAEgsS+aE5ymL0ibU/wlI\nKIRuLC6Zf91tIgK/sw8jARgjTdc/fcHkgtTeh7mTD2yB7O7yWwrb98rNUvZHGxC+\nVwfTv93Eg2M3IXICylSXxCrijpURSEzR/HTxea0ts9dhawk8ox0B/6LPUWZKpEu0\n2u/jNZmC33HyQasN52SyqsUdNfRO1E/5TT/0WN/crBb2WV55K184+I/dYKe/jIIs\n2aTGTqjIsQeTViBp2t8dyqsC3OwtrTjz25m160vfLNKqsHTNH3elJWxuqgpmLm2E\nH5fixwVxTVaspPTm1pSKH/i1KL1+ISs4r8XgXguMUiP0D+6/SuUagjk1Rp6Ixh3y\nFcU=\n-----END CERTIFICATE-----\n",
    "locationName": "Japan",
    "ip": "160.16.113.90"
   },
   {
    "location": "sgp",
    "imgUrl": "http://apa.vpncenters.com/images/sgp.png",
    "port": 4500,
    "psk": "Kom8PW1",
    "cert": "-----BEGIN CERTIFICATE-----\nMIIDLjCCAhagAwIBAgIIHzDXI3uTQhQwDQYJKoZIhvcNAQELBQAwNTELMAkGA1UE\nBhMCVVMxEjAQBgNVBAoTCWFwcHJvY2tldDESMBAGA1UEAxMJcm9ja2V0bmV0MB4X\nDTIwMDIyMDExNTIwMloXDTMwMDIxNzExNTIwMlowNTELMAkGA1UEBhMCVVMxEjAQ\nBgNVBAoTCWFwcHJvY2tldDESMBAGA1UEAxMJcm9ja2V0bmV0MIIBIjANBgkqhkiG\n9w0BAQEFAAOCAQ8AMIIBCgKCAQEAuLALKPYw47Wh0zJfA8LBvGecF1aGtNx5HbhL\niz180ZnA5MoSrGTYDbTC3sySfuClXA6cg0sNjq90go6xwKI3a/Ra5Y6cqWDrFlIA\nZqtpMzFg4bwGg+C70iVkjdRxXlmvVDiSOZNuY5XoLvSii+uOI28JOmx9RrNFY3+N\n4omNbshH7aXdaaT8E/arej12FMFhzLVPz5E0nP5NzIyx/WHvC6mqDxFm+10idJPQ\nyNLcCLO4oHaUw6fXUoOLIkGs9uuG4Wje0ZTKvOKbtT26yl0icYBjbmbaZ5tZgJ0g\nMeuzJPxGEZnUUWxGAAODzpc0MvPPI6f08hsGChwbwtsElIGcrQIDAQABo0IwQDAP\nBgNVHRMBAf8EBTADAQH/MA4GA1UdDwEB/wQEAwIBBjAdBgNVHQ4EFgQU92irW9ve\nWzA0Z6cEAuknZl/2ArQwDQYJKoZIhvcNAQELBQADggEBACNMKQzncGP+lwCvZ2b0\nQB+pQFDN7WvMkbXKeRTl2ULT1aWfMoNtU5CuDLeJt4Fdk7Lr8staCL4CVAxbLS6l\nUU8jYNkv5B6Z2BP8E5vH5I+64fiQi5P0QSC1c/C7P/qAO/5pDN3tKS8+UcGurh68\ntlPglYvICE/hV3lzav0SiypYLuDEwaKCRGHPGN8QOatMkxUNYrMQuKb0hzThNorB\niqNOE+5YwffcV9fMyvgO16FA3b3cJnlKTKbJpBSUWF7IowJL0xJCB0wTN0VkkJr8\nP0XzeDEoqq5ANc7oRovYTifzYFmORzlXyZIwxdAlRrPUaGt72xjD2KHhf2ZVV9jS\nPqU=\n-----END CERTIFICATE-----\n",
    "locationName": "Singapore",
    "ip": "149.28.144.10"
   }
   ]
  obj.data["vipEndTime"] = "2099-03-25 19:08:50";
  obj.data["userType"] = "vip";
}
$done({body: JSON.stringify(obj)});
