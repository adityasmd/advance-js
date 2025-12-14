function afterdealy(time, cb){
  setTimeout(() => {
     cb();
  }, time);
}

afterdealy(1000, function(){
     console.log("Callback executed")
})