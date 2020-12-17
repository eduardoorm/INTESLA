

    const btnSend = document.getElementById('btnSend');

    const textoError = document.querySelectorAll('p');
    

      const validarNombre = (nombre)=>{
        if(typeof nombre!== 'string') alert('Usted no ingreso un nombre valido');
        var expreg= /^([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\']+[\s])+([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\'])+[\s]?([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\'])?$/;
        if(expreg.test(nombre)){
          textoError[0].innerText="";
          return true;
        } else{
          textoError[0].innerText="Introduzca un nombre valido*";
        } 
       }
        
       const validarNomCurso=(curso)=>{
        /* (curso)
        ?textoError[1].innerText=""
        :textoError[1].innerText="Introduzca un curso*" */
        if (curso) {
            textoError[1].innerText="";
            return true;
         } else{
            textoError[1].innerText="Introduzca un curso*";
            }     
        }

        const validarCorreo=(correo)=>{
        let expreg2= /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/ ;
        if(expreg2.test(correo)){
            textoError[2].innerText="";
            return true;
        }
        else{
            textoError[2].innerText="Introduzca un correo valido*";
        }
        }

        
        const validarTelefono=(telefono)=>{
            /* ^\+[1-9]{1}[0-9]{3,14}$ */
            
            let expreg3= /^[+]*[1-9]{1}[0-9]{3,14}$/ ;
            if(expreg3.test(telefono)){
                textoError[3].innerText="";  
                return true;
            }
            else{
                textoError[3].innerText="Introduzca un correo valido*";
            }
        }



        const validarLink=(link)=>{
            if (link) {
                textoError[4].innerText="";
                return true;
             } else{
                textoError[4].innerText="Introduzca un link valido*";
                }    
        }


 const formulario = document.getElementById('formulario');

  formulario.addEventListener('submit',function(e){
    
    let nom= validarNombre(document.getElementById('names').value);
    let cur= validarNomCurso(document.getElementById('curse').value)
    let cor= validarCorreo(document.getElementById('email').value);
    let tel=validarTelefono(document.getElementById('phone').value);
    let link= validarLink(document.getElementById('link').value);
   

    if((nom===true && tel===true  && cur==true && cor===true && link==true) ){
      console.log("f");
    }else{
      e.preventDefault();
      let datos = new FormData(formulario);
      console.log(datos)
    }
  });


  