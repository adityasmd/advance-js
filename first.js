function loginUser(cb){  
  setTimeout(() => {
        cb("loginUser");
  }, 1000);
}
function fetchPermissions(cb){  
  setTimeout(() => {
        cb("fetchPermissions");

  }, 2000);
}
function loadDashboard(cb){  
  setTimeout(() => {
        cb("loadDashboard");

  }, 3000);
}

loginUser(function(user){
  console.log(user);
    fetchPermissions(function(permissions){
    console.log(permissions);
    loadDashboard(function(loaded){
    console.log(loaded);
       })
    })
})