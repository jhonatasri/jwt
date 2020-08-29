const db = require('../databases/connection');

const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');

module.exports = {
    async index(req,res) {
       const users = await db('user').select('*');

       res.json(users);
    },
    async create(req,res){
        const {nome, email, senha} = req.body;

       const newPassword = await bcrypt.hash(senha, 8);

       await db('user').insert({
        nome,
        email,
        senha: newPassword
        });

      res.json(newPassword)
    },

    async auth(req,res, next){
    const {email,senha} = req.body;

     const users = await db('user').select('*').where({email}).first();

     if(users == undefined) return res.status(401).send();

     const senhas = await bcrypt.compare(senha, users.senha)

     if(senhas === false) return res.status(401).send();


     const token = jwt.sign({id: users.id, nome: users.nome}, "secret",{
         expiresIn: 86400
     });


     const verify = jwt.verify(token,'secret');


     res.header('authorization', token);
     res.json({token, verify});
     next();
    },

}
