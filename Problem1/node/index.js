const http = require('http');
const url = require('url');

const myFizzBuzz = (array) => {
   let result = [];
   for (let i = 1; i < 31; i++) {
      let texts = [];
      for(const record of array) {
         if(i % record.num === 0) {
            texts.push(record.text);
         }
      }
      if(texts.length === 0) {
         result.push(i);
      } else {
         result.push(texts.join(" "));
      } 
   }
   return result.join(", ");
}

const server = http.createServer((req, res)=>{
   const queryObject = url.parse(req.url, true).query;
   console.log(queryObject.obj);

   // ここに処理を記述してください。

   res.setHeader('Access-Control-Allow-Origin', '*');
   res.setHeader('Access-Control-Request-Method', '*');
   res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
   res.setHeader('Access-Control-Allow-Headers', '*');
   res.writeHead(200, {'Content-Type': 'text/html'});
   
   let data = ""
   req.on('data', (chunk) => {
      data += chunk;
   });

   
   req.on('end', () => {
      if(data){
         const params = new URLSearchParams(data);
         const obj = JSON.parse(params.get('pattern')).obj;
         console.log(obj);
         console.log(myFizzBuzz(obj));
         res.write(myFizzBuzz(obj));
      }
      res.end();
   });


   
   
   
});
server.listen(8080); 
