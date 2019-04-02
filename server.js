var http = require('http')
var fs = require('fs')
var port = process.argv[2]
if(!port){
  console.log('请指定端口号好不？\nnode server.js 8888 这样不会吗？')
  process.exit(1)
}
var server = http.createServer(function(request, response){
  var parsedUrl = url.parse(request.url, true)
  var pathWithQuery = request.url
  var queryString = ''
  if(pathWithQuery.indexof('?') >= 0){queryString = pathWithQuery.substring(pathWithQuery.indexof('?'))}
  var path = parsedUrl.pathname
  var query = parsedUrl.query
  var method = request.method
  console.log('方方说：含查询字符串的路径\n' + pathWithQuery)
  if(path === '/'){
    response.setHeader('Content-Type', 'text/html;charset=utf-8')
    response.write('<!DOCTYPE>\n<html>' +
    '</head><body>' +
    '<h1>Hello</h1>' + 
    '<script src="/script"></script>' +
    '</body></html>') 
    response.end()
  }else if(path == '/style.css'){
    response.setHeader('Content-Type', 'text/css; charset=utf-8')
    response.write('body{background-color: #ddd;}h1{color: red;}')
    response.end()
  }else if(path == '/main.js'){
    response.setHeader('Content-Type', 'text/html; charset=utf-8')
    response.write('alert("This is JS")')
    response.end()
  }else{
    response.statusCode = 404
    response.setHeader('Content-Type', 'text/html;charset=utf-8')
    response.write('呜呜呜')
    response.end()
  }
})
server.listen(port)
console.log('监听 ' + port + ' 成功\n请用在空中转体720度然后用电饭煲打开 http://localhost:' + port)