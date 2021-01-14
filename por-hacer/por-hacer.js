const fs =require('fs');

let listadoPorHacer=[];

const guardarDB=()=>{
  let data=JSON.stringify(listadoPorHacer);
  fs.writeFile('db/data.json',data,function(err){
    if(err) return console.log(err+' hubo un error no se pudo grabar');
    console.log(data +'+==> data.json');
  })
}


const crear=(descripcion)=>{

  let porHacer={
    descripcion,
    completado:false
  };
  listadoPorHacer.push(porHacer);
  guardarDB();
  return porHacer;
}

module.exports={
  crear
}