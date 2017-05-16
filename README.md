nodejs CLI ：查看git commit工具
===

## 使用：
### 首先安装：
```npm install```

### 查看使用参数
```node index.js -h```

### 参数： 
1. --begin, -b 表示开始时间，例子："2017-05-16"、"2017-05-16 11:12"、"2017-05-16T10:00:37.855Z" 
2. --end, -e 表示结束时间
3. --search, -s 搜索内容`

### 例子

* ```node index.js -s 'fix bug' -b '2017-05-17'```
* ```node index.js -s 'hotfix error'```
* ```node index.js -e '2017-05-16 15:30'```
* ```node index.js -b '2017-05-16 15:21:04' -e '2017-05-16 15:30'```


      注意：参数的值有空格等特殊字符需要用引号，
      否则可以不加引号。
    
