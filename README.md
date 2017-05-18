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
3. --search, -s 搜索内容
4. --dir, -d 指定git库路径，默认为当前目录

### 例子

* ```node index.js -s 'fix bug' -b '2017-05-17'```
* ```node index.js -s 'hotfix error'```
* ```node index.js -e '2017-05-16 15:30'```
* ```node index.js -b '2017-05-16 15:21:04' -e '2017-05-16 15:30'```


      注意: 1.参数的值有空格等特殊字符需要用引号，否则可以不加引号；2. 开发时使用的node版本为7.0+，由于没有使用es6等语法，低版本应该也没问题。
