# openssl enc

/*
// 传入密码
// 生成密码密文 Y.p6S4vTRl6yw
openssl passwd 222 

## rsa-非对称加密
openssl genrsa -out rsa.key 2048
openssl rsa -in rsa.key -pubout -out pub.key
openssl rsautl -encrypt -inkey pub.key -pubin -in test.html -out test.html.encode
openssl rsautl -decrypt -inkey rsa.key -in test.html.encode -out test2.html

## 对称加密

### aes256
```
# 需要手动输入密码
openssl enc -e -aes256 -in test.html -out test.html.encode3
openssl enc -d -aes256 -in test.html.encode3 -out test3.html

# 指定密码(-K)和初始向量值(-iv)：密码222  初始向量值01234
openssl enc -e -aes256 -K 222 -iv 01234 -in test.html -out test.html.encode3
openssl enc -d -aes256 -K 222 -iv 01234 -in test.html.encode3 -out test3.html
```


### des
指定密码：-K e0e0e0e0f1f1f1f1
```
openssl enc -des-ecb -K e0e0e0e0f1f1f1f1 -in test.html -out test.html.enc
openssl enc -d -des-ecb -K e0e0e0e0f1f1f1f1 -in test.html.enc -out test4.html
```

## base64
```
openssl enc -base64 -in test.html -out test.html.base64
openssl enc -d -base64 -in test.html.base64 -out test3.html
```