# 自签名

* openssl genrsa -out private.pem 2048
* openssl req -new -key private.pem -out csr.pem

Common Name：对应网站域名   
其他都可为空
```
Country Name (2 letter code) [AU]:
State or Province Name (full name) [Some-State]:
Locality Name (eg, city) []:
Organization Name (eg, company) [Internet Widgits Pty Ltd]:
Organizational Unit Name (eg, section) []:
Common Name (e.g. server FQDN or YOUR name) []:localhost
Email Address []:
Please enter the following 'extra' attributes
to be sent with your certificate request
A challenge password []:
An optional company name []:
```

* openssl x509 -req  -in csr.pem -signkey private.pem -out csr.crt