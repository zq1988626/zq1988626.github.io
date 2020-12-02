# 自建CA

生成私钥
* openssl genrsa -out server.key 2048 
签名
* openssl req -new -key server.key -out server.csr

// 生成公钥，用于CA认证
//* openssl rsa -in server.key -pubout -out server.pem

测试自签名(可以不经过CA,自建CA的好处是可以对CA进行认证)
* openssl x509 -req  -in server.csr -signkey server.key -out server.crt

//生成CA私钥
* openssl genrsa -out ca.key 2048
// 签名
* openssl req -new -key ca.key -out ca.csr
// 自签名
* openssl x509 -req -in ca.csr -signkey ca.key -out ca.crt
```

3.
```
//生成server.csr文件
//生成带有ca签名的证书
* openssl x509 -req -CA ca.crt -CAkey ca.key -CAcreateserial -in server.csr -out server.crt