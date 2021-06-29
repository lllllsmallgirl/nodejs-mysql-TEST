// const { connect } = require('http2');
var mysql = require('mysql');
var connection = mysql.createConnection({
    host:'39.97.105.230',
    user:'root',
    password:'84670681',
    database:'class219'
});
connection.connect((err) => {
    if(err){
        console.log('---:'+err);
        return;
    }
    console.log('连接成功')
});
//增
// var addsql = 'insert into test1(Name,password) values(?,?)';
// var addsqlParams = ['bert','123456'];

// connection.query(addsql,addsqlParams,(err,rs)=>{
//     if(err){
//         console.log(err.message);
//         return;
//     }
//     console.log('insert name',rs);
// });

//删
// var delsql = "delete from test1 where Name='bert'";
// connection.query(delsql,(err,rs)=>{
//     if(err){
//         console.log(err.message)
//         return;
//     }
//     console.log('delete',rs);
// });

//查
// var sql = 'select * from test1';
// connection.query(sql,(err,rs)=>{
//     if(err){
//         console.log(err.message);
//     }
//     console.log(rs);
// })

//改
var modsql = "update test1 set password=? where Name='bert' ";
var modsqlParams = ['654321'];
connection.query(modsql,modsqlParams,(err,rs)=>{
    if(err){
        console.log(err.message);
    }
    console.log(rs);
})
connection.end();
var zmm=1