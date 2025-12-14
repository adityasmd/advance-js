function getUSer(username, cb){
   setTimeout(() => {
     cb(username);
   }, 1000);
}

function getUserPosts(cb){
  setTimeout(() => {
    cb(["1Post of user" , "2Post of user"]);
  }, 1200);
}

getUSer("Aditya", function(username){
   console.log(username);
   getUserPosts(function (post){
      console.log(post);
   })
}) 