var argv = require('yargs').argv;
if(argv.buat){
buatCodenvy(argv.buat)  
}
function buatCodenvy(nama){
var postmark=require("./postmark")
var koneksi=require("./koneksi")
var menggunakan=require("./perang")
// menggunakan.masukPertamaCodenvy("https://codenvy.io/site/auth/create?bearertoken=PGrHHPiH5yK5jHHfTfGXT4C4iPe98WDLvuyvPOOi4eG5ejrz58P9Xnn11G9551nyOfHivnGnXranCqGrzf4TeL8OTi8LzXPW08Onyu4H5bunvzTOmaOfmyrvyKLKq9nXfLi5fabT1PXrXqmizvbLaGj19muzauvDqqCDjGibDWWW1erWbmrDDP51qjHn0fC95GSib1T0jL54jCbiumXva5KfXbnCqnWHH0Cv8jvnKzHPHmarWCbzqXeDr85rjn8&redirect_url=https://codenvy.io/","salakojiko2")
postmark.mendapatkanServer(saka=>{
  if(saka.length>0){
  postmark.deleteServer(saka[0].ID,function(lakim){
    console.log(lakim)

koneksi.cari("codenvy",{},function(sampai){
var cane=sampai.length+1;
console.log(cane)
if(sampai.length<100000){

  postmark.buatServer("polski","https://panda-kolotibablo.c9users.io/facebook",function(data){
    menggunakan.buatCodenvy(data.InboundAddress,nama+cane)
  })


}
else{
  process.exit(0)
}
})
  })
  }
  else{

koneksi.cari("codenvy",{},function(sekolah){
var cane=sekolah.length+1;
console.log(cane)
if(sekolah.length<100000){

  postmark.buatServer("polski","https://panda-kolotibablo.c9users.io/facebook",function(data){
    menggunakan.buatCodenvy(data.InboundAddress,nama+cane)
  })


}
else{
  process.exit(0)
}
})
  }
})
}