
const pool=require('./mysql/mysql.conect')
if(pool){
console.log('db connected');
}
else{
console.log('err')}
module.exports = {
  create: (data, callBack) => {
    pool.query(
      `insert into users(username, email, phone,age, password) 
                values(?,?,?,?,?)`,
      [
        data.username,
   
        data.email,
        data.phone,
	      data.age,
        data.password
        
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getUserByUserEmail: (email, callBack) => {
	
    pool.query(
      `select * from users where email = ?`,
      [email],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },


};
