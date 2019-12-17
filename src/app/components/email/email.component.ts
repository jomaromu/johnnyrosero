import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

// sweetalert
import Swal from 'sweetalert2';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  forma: FormGroup;

  // banderas para el nombre
  banderaNombre = false;
  banderaNombreMin3 = false;
  banderaNombreMin15 = false;
  banderaNombreEspacio = false;

  // banderas para el correo
  banderaCorreo = false;

  // banderas para el celular
  banderaCelular = false;
  banderaCelMin7 = false;
  banderaCelMax20 = false;
  banderaCelPermitidos = false;
  checkNumero = false;
  banderaCelEspacios = false;

  // banderas para mensaje
  banderaMensaje = false;
  banderaMenMin10 = false;
  banderaMenMax300 = false;
  banderaEspacio = false;
  contadorMensaje = 0;

  // tslint:disable-next-line: variable-name
  constructor(public _MessageService: MessageService) {

    // constructor con los controles del formulario
    this.forma = new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.pattern('^[a-z|A-Z|ñÑ|áéíóúÁÉÍÓÚ|\S]{3,15}$')]),
      correo: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$")]),
      celular: new FormControl('', [Validators.required, Validators.pattern("^[0-9]{7,20}$")]),
      mensaje: new FormControl('', [Validators.required, Validators.pattern("^([a-z|A-Z|0-9|ñÑ|áéíóú|ÁÉÍÓÚ|.!#$%&'*+\/=?^_`¿¡,;:@<>\"-(){}]{3})\\s*([a-z|A-Z|0-9|ñÑ|áéíóú|ÁÉÍÓÚ|.\\[\\]!#$%&'*+\/=?^_`¿¡,;:@<>\"-(){}]\\s*){1,300}$")]),
      // mensaje: new FormControl('', [Validators.required, Validators.pattern("^([a-z|A-Z|0-9|ñÑ|áéíóú|ÁÉÍÓÚ|.!#$%&'*+\/=?^_`¿¡,;:@<>\"-(){}]{3,})\\s*([a-z|A-Z|0-9|ñÑ|áéíóú|ÁÉÍÓÚ|.\\[\\]!#$%&'*+\/=?^_`¿¡,;:@<>\"-(){}]\\s*){1,30}$")]),
    });
  }

  ngOnInit() {
    // desactivar el resize del textarea
    const textMensaje = document.getElementById('mensaje');
    textMensaje.style.resize = 'none';
  }

  // keyup nombre
  verificaNombre(event, forma: FormGroup): boolean {

    // nombre control
    const nombreControl = forma.controls.nombre;
    // errores del control
    const errorNombre = nombreControl.errors;

    // si no existe un error o nombre es null
    if (errorNombre === null) {
      this.banderaNombre = false;
      // console.log('No hay errores');
      event.target.classList.remove('bordeRojo');
      return true;
    }

    if (errorNombre.pattern === undefined) {
      this.banderaNombre = false;
      return false;
    }

    // validaciones
    if (errorNombre.pattern.actualValue.includes('')) {
      this.banderaNombre = true;
      this.banderaNombreEspacio = true;
      this.banderaNombreMin15 = false;
      this.banderaNombreMin3 = false;
    }

    if (errorNombre.pattern.actualValue.length < 3) {
      this.banderaNombre = true;
      this.banderaNombreMin3 = true;
      this.banderaNombreMin15 = false;
    } else if (errorNombre.pattern.actualValue.length > 15) {
      this.banderaNombre = true;
      this.banderaNombreMin15 = true;
      this.banderaNombreMin3 = false;
    } else if (errorNombre.pattern.actualValue.length > 3) {
      this.banderaNombreMin3 = false;
    }

  }

  verificaCorreo(event, forma: FormGroup) {

    // nombre control
    const nombreControl = forma.controls.correo;
    // errores del control
    const errorCorreo = nombreControl.errors;

    // si no existe un error o correo es null
    if (errorCorreo === null) {
      this.banderaCorreo = false;
      // console.log('No hay errores');
      event.target.classList.remove('bordeRojo');
      return true;
    }

    if (errorCorreo.pattern === undefined) {
      this.banderaCorreo = false;
      return false;
    }

    // validaciones
    if (errorCorreo.pattern.requiredPattern) {
      this.banderaCorreo = true;
    }
  }

  verificaCelular(event, forma: FormGroup) {

    // nombre control
    const nombreControl = forma.controls.celular;
    // errores del control
    const errorCelular = nombreControl.errors;

    // si no existe un error o correo es null
    if (errorCelular === null) {
      this.banderaCelular = false;
      // console.log('No hay errores');
      event.target.classList.remove('bordeRojo');
      return true;
    }

    if (errorCelular.pattern === undefined) {
      this.banderaCelular = false;
      return false;
    }

    // validaciones
    const insertVal = errorCelular.pattern.actualValue.charAt(errorCelular.pattern.actualValue.length - 1);
    const checkNum = parseInt(insertVal, 0);

    // console.log(isNaN(checkNum));

    if (isNaN(checkNum) === true) {
      this.banderaCelular = true;
      this.checkNumero = true;
      this.banderaCelMax20 = false;
      this.banderaCelMin7 = false;
    }

    if (errorCelular.pattern.actualValue.length <= 7) {
      this.banderaCelular = true;
      this.banderaCelMin7 = true;
      this.banderaCelMax20 = false;
    } else if (errorCelular.pattern.actualValue.length >= 20) {
      this.banderaCelular = true;
      this.banderaCelMin7 = false;
      this.banderaCelMax20 = true;
    } else if (errorCelular.pattern.actualValue.length < 20) {
      this.banderaCelular = true;
      this.banderaCelMin7 = false;
      this.banderaCelMax20 = false;
    }

  }

  verificaMensaje(event, forma: FormGroup) {


    // nombre control
    const nombreControl = forma.controls.mensaje;
    // errores del control
    const errorMensaje = nombreControl.errors;

    // si no existe un error o es null
    if (errorMensaje === null) {
      this.banderaMensaje = false;
      // console.log('No hay errores');
      event.target.classList.remove('bordeRojo');
      return true;
    }

    if (errorMensaje.pattern === undefined) {
      this.banderaMensaje = false;
      return false;
    }

    // validaciones
    if (errorMensaje.pattern.actualValue.length <= 4) {
      this.banderaMensaje = true;
      this.banderaMenMin10 = true;
      this.banderaMenMax300 = false;
      this.banderaEspacio = false;
    } else if (errorMensaje.pattern.actualValue.length >= 34) {
      this.banderaMensaje = true;
      this.banderaMenMin10 = false;
      this.banderaMenMax300 = true;
      this.banderaEspacio = false;
    }

    if (errorMensaje.pattern.actualValue.charAt(0) === ' ') {
      this.banderaMensaje = true;
      this.banderaMenMin10 = false;
      this.banderaMenMax300 = false;
      this.banderaEspacio = true;
    }
  }

  // al hacer click al boton submit
  enviarMensaje(event, forma: FormGroup) {

    // controles
    const subNombre: any = this.verificaNombre(event, forma);
    const subCorreo: any = this.verificaCorreo(event, forma);
    const subTelefono: any = this.verificaCelular(event, forma);
    const subMensaje: any = this.verificaMensaje(event, forma);

    // inputs
    const inputNombre = document.getElementById('nombre');
    const inputCorreo = document.getElementById('correo');
    const inputCelular = document.getElementById('celular');
    const inputMensaje = document.getElementById('mensaje');

    if (subNombre === false) {
      inputNombre.classList.add('bordeRojo');
    }
    if (subCorreo === false) {
      inputCorreo.classList.add('bordeRojo');
    }
    if (subTelefono === false) {
      inputCelular.classList.add('bordeRojo');
    }
    if (subMensaje === false) {
      inputMensaje.classList.add('bordeRojo');
    }

    if (subNombre === true && subCorreo === true && subTelefono === true && subMensaje === true) {

      // datos del formulario
      const datos = {
        nombre: forma.controls.nombre.value,
        correo: forma.controls.correo.value,
        celular: forma.controls.celular.value,
        mensaje: forma.controls.mensaje.value,
      };

      console.log(datos);

      Swal.fire({
        icon: 'info',
        title: 'Mensaje',
        text: 'Enviando correo...',
        allowOutsideClick: false,
        animation: true,
      });
      Swal.showLoading();

      this._MessageService.sendMessage(datos).subscribe((resp) => {

        console.log('mensaje enviado');
        console.log(resp);

        Swal.fire({
          title: 'Mensaje',
          text: 'Correo enviado',
          icon: 'success',
        });

        // reset formulario
        this.forma.reset();
      });

    }
  }
}

