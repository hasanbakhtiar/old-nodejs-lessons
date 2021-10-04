const user ={ id:10, name:'Hasan'};
const friends =[ { id:11, name:'Eldar'}, {id:12, name:'Cavid'} ];

const getUser = ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(user);
        }, 1000);
        
    });
};

const getFriends = (userId) =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject("no friends");
        }, 500);
    });
};



// ----------------------------------------------------------------------------
// async 
async function asenxronGedis () {
   
    try{
        const user = await getUser();
        const friends = await getFriends(user.id);
        console.log(user,friends);
    }catch(error){
        console.log(error);
    }
       


}
asenxronGedis();