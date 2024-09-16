const users=require('../users.json');

function getUser(req,res) {
    try{
        res.json(users)
    }catch(err){
        console.log(err);
    }
}

function getUser1(req,res) {
    try {
        let id =parseInt(req.params.id);
        let user= users.find((user)=>id == user.id);
        res.json(user);
    }catch(err){
        console.log(err);
    }
}


module.exports= {
    getUser,
    getUser1
}