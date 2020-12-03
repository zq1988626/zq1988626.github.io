# 自签名证书

生成私钥
```
openssl genpkey -algorithm RSA -pkeyopt rsa_keygen_bits:2048 -out private-key.pem
```
生成带密码的私钥
```
openssl genpkey -aes256 -algorithm RSA -pkeyopt rsa_keygen_bits:2048 -out private-key.pem
```

生成公钥
```
openssl pkey -in private-key.pem -out public-key.pem -pubout
```


使用椭圆曲线生成密钥
```
# 生成私钥有两种方式

# 方式1
# 生成曲线参数
openssl ecparam -name prime256v1 -out prime256v1.pem
# 查看参数
openssl ecparam -in prime256v1.pem -noout -C
# 生成私钥
openssl genpkey -paramfile prime256v1.pem -out private-key.pem
# 生成带密码的私钥
openssl genpkey -aes256 -paramfile prime256v1.pem -out private-key.pem

# 方式2
# 生成私钥
openssl genpkey -algorithm EC -pkeyopt ec_paramgen_curve:P-256 -out private-key.pem
# 生成带密码的私钥
openssl genpkey -aes256 -algorithm EC -pkeyopt ec_paramgen_curve：P-256 -out private-key.pem

```


1. 生成服务端客户端公钥私钥

```bash
// 生成服务器端私钥
$ openssl genrsa -out server.key 1024 
  openssl genrsa -out private.pem 2048
//生成服务端公钥
$ openssl rsa -in server.key -pubout -out server.pem
```

2. 生成自签名CA证书 

```bash
//生成CA私钥
$ openssl genrsa -out ca.key 1024
//生成csr文件,网站信息
$ openssl req -new -key ca.key -out ca.csr
//生成自签名证书，使用私钥认证签名
$ openssl x509 -req -in ca.csr -signkey ca.key -out ca.crt
```

3.
```
//生成server.csr文件
$ openssl req -new -key server.key -out server.csr
//生成带有ca签名的证书
$ openssl x509 -req -CA ca.crt -CAkey ca.key -CAcreateserial -in server.csr -out server.crt
```




## 实例

首先是私钥
```
openssl genrsa -out private.pem 2048
```
生成证书签名
```
openssl req -new -key private.pem -out csr.pem
```
需要填写信息
```
Country Name (2 letter code) [AU]:CH   
State or Province Name (full name) [Some-State]:CH   
Locality Name (eg, city) []:CH   
Organization Name (eg, company) [Internet Widgits Pty         Ltd]:CH   
Organizational Unit Name (eg, section) []:CH   
Common Name (e.g. server FQDN or YOUR name) []:CH   
Email Address []:CH   
Please enter the following 'extra' attributes   
to be sent with your certificate request   
A challenge password []:123123123   
An optional company name []:CH   
```

```
openssl x509 -req  -in csr.pem -signkey private.pem -out csr.crt
```