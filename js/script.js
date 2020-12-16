(()=>{

  const btnSend = document.getElementById('btnSend');

  const textoError = document.querySelectorAll('small');


const validarNombre = (nombre)=>{
  if(typeof nombre!== 'string') alert('Usted no ingreso un nombre valido');

    var expreg= /^([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\']+[\s])+([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\'])+[\s]?([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\'])?$/;
    if(expreg.test(nombre)){
      textoError[0].innerText="";
      return true;
    } else{
      textoError[0].innerText="Introdusca un Nombre Valido";
    }
}

const validarTelefono=(telefono)=>{

  if(isNaN(telefono)){
    textoError[1].innerText="Introdusca un Telefono Valido";
  } 
  else{
    textoError[1].innerText="";
    return true;
  }
}

const validarCorreo=(correo)=>{
 let expreg2= /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/ ;
  if(expreg2.test(correo)){
    textoError[2].innerText="";
    return true;
  }
  else{
    textoError[2].innerText="Introdusca un correo valido";
  }
}

 const formulario = document.getElementById('formulario');

  formulario.addEventListener('submit',function(e){
    let nom= validarNombre(document.getElementById('names').value);
    let tel=validarTelefono(document.getElementById('phone').value);
    let cor= validarCorreo(document.getElementById('email').value);
    if(nom===true && tel===true && cor===true ){
      console.log("funca");
      
    }else{
      e.preventDefault();
      let datos = new FormData(formulario);
      console.log(datos)
      console.log("tiene errores");
    }
  })





})();
  
  

 /*  let nom= validarNombre(document.getElementById('names').value);
  let tel=validarTelefono(document.getElementById('phone').value);
  let cor= validarCorreo(document.getElementById('email').value); */

/* 
validarNombre("eduardo ormeño");
validarTelefono(9203033);
validarCorreo("Eduardo@hotmail.com"); */