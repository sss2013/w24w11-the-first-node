const http = require('http')

// 서버에 함수를 넘겨줘야 하는데 res에는 writeHead
// responseData는 json 객체이며 이것을 넘겨줄 때 stringify로 넘겨줌
const server = http.createServer(
    (req,res) => {
        res.writeHead(
            200, 
            {'Content-Type':'application/json'}
        )
        
        const responseData = {
            status: 'success',
            message: '안녕하세요',
        }

        res.end(JSON.stringify(responseData))
    }
)

server.listen(3000, ()=>{
    console.log('서버 실행 (포트 : 3000)')
})