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
            resolve(friends);
        }, 500);
    });
};

//callback hell
// let userId;
// getUser()
// .then(function(user){
//     userId = user.id;
//     // console.log(user);
//     getFriends(userId).then(function(friends){
//             console.log(user);
//             console.log(friends);
//     })
// });

//----------------------------------------------------------------------------------
// let userId;
// getUser().then(function(user){
//     userId = user.id;
//     console.log(user);
// });
// getFriends(userId).then(function(friends){
//     console.log(friends);
// });

// ---------------------------------------------------------------------------
// promise chain
// getUser().then((user)=>{
//             return user.id;
// }).then((userId)=>{
//             getFriends(userId).then(()=>{
//                 console.log(friends);
//             })
// })

// ----------------------------------------------------------------------------
// getUser().then((user)=>{
//     return getFriends(user.id);
// }).then((friends)=>{
//     console.log(friends);
// });

// ----------------------------------------------------------------------------
// async 
async function asenxronGedis () {
    console.log('progress start'); 

       const user = await getUser();
    console.log('user progress end'); 
    console.log('friends progress start'); 

       const friends = await getFriends(user.id);
    console.log('friends progress start'); 
    console.log('My Data:',{user, friends}); 

}
asenxronGedis();