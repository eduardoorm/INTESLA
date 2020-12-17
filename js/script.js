(()=>{

    const btnSend = document.getElementById('btnSend');

    const textoError = document.querySelectorAll('p');
    

      const validarNombre = (nombre)=>{
        if(typeof nombre!== 'string') alert('Usted no ingreso un nombre valido');
        var expreg= /^([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\']+[\s])+([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\'])+[\s]?([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\'])?$/;
        if(expreg.test(nombre)){
          textoError[7].innerText="";
          return true;
        } else{
          textoError[7].innerText="Introduzca un nombre valido";
        }
}

const validarTelefono=(telefono)=>{

  if(isNaN(telefono) || !(telefono)){
    textoError[8].innerText="Introduzca un telefono valido";
  } 
  else{
    textoError[8].innerText="";
    return true;
  }
}

const validarCorreo=(correo)=>{
 let expreg2= /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/ ;
  if(expreg2.test(correo)){
    textoError[9].innerText="";
    return true;
  }
  else{
    textoError[9].innerText="Introduzca un correo valido";
  }
}

 const formulario = document.getElementById('formulario');

  formulario.addEventListener('submit',function(e){
    
    let nom= validarNombre(document.getElementById('names').value);
    let tel=validarTelefono(document.getElementById('phone').value);
    let cor= validarCorreo(document.getElementById('email').value);
    if((nom===true && tel===true && cor===true) ){
      console.log("f");
    }else{
      e.preventDefault();
      let datos = new FormData(formulario);
      console.log(datos)
    }
  });

})();
  
  

 /*  let nom= validarNombre(document.getElementById('names').value);
  let tel=validarTelefono(document.getElementById('phone').value);
  let cor= validarCorreo(document.getElementById('email').value); */

/* 
validarNombre("eduardo ormeño");
validarTelefono(9203033);
validarCorreo("Eduardo@hotmail.com"); */