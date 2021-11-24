# 暴力驗證
透過消耗用戶端/伺服器CPU實現防爆破

### 即刻開始

使用者瀏覽器
```html
<script src="./client.js"></script>
<script>
    let key = captcha(Math.ceil(new Date()/1000));
    console.log(key) // Return Key
</script>
```

伺服器
```sh
node ./server/server.js timestamp # 鍵入用戶端開始計算時的 timestamp
# Tips. 鍵入超過 10s 前的 timestamp 將會返回 timeout
# 返回正確的 key
```