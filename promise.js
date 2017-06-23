function addPromise(a,b)
{
  return new Promise(function(resolve,reject){
    if((typeof(a) == 'number')&&(typeof(b)=='number'))
    {
    resolve(a+b);}
    else {
      reject("404");
    }
  });
}

addPromise(2,3).then(function(c){
  console.log(c);
},function(err)
{console.log('404');});


addPromise('a',3).then(function(c){
  console.log("not number");
},function(err)
{console.log('404');});
