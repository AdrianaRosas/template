import React from 'react';
import { withFormik, Field, ErrorMessage} from 'formik'; //high order component --- Field ahorra la estructura de codigo larga
// import './style.css';

// funcion para regresar la promesa 
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));


//manejador de estado de los formularios
function MyForm(props){
   const {
       handleSubmit, //provisto por withFormik
       isSubmitting, //propiedad que sirve para saber si est[a] submiteado algo y evitar que se haga mas de una vez
       handleChange, //Funcion que provee formik para manejar el estado de ese elemento
       handleBlur, //Marcador de estado
       values,
       errors, 
       isValid, 
       touched, //tiene la misma estructura que errors y values, si se hace focus y se quito se agrega la propiedad
    } = props;


   return(
       <form onSubmit={handleSubmit}>
          <div className="row">
             Email:
             <Field name="email" type="email" className="input"/> 
             <ErrorMessage name="email" > 
            {message => <div className="error">{message}</div>} 
            </ErrorMessage>
          </div>
          <div className="row">
              Password: 
          <input
             name="password"
             type="password"
             className="input"
             onChange={handleChange}//Funcion que provee formik para manejar el estado de ese elemento
             onBlur={handleBlur}//
             values={values.password}
          /> 
          {/* Manejo de errores y touch de estructura basica */}
          <ErrorMessage name="password" > 
            {message => <div className="error">{message}</div>} 
            </ErrorMessage>
          </div>

          <div className="row">
              <button 
              type="submit"
              className={`submit ${isSubmitting || !isValid ? 'disabled' : '' }`} //esta propiedad agrega la clase si se esta haciendo submitida y si no es valida  deshabilita el boton
              disabled={isSubmitting || !isValid}//formik ya da control a esta propiedad, se habilita como verdadera al dar click en submit
              >Submit</button>
          </div>
       </form>
   );
}

export default withFormik({
  mapPropsToValues(props){
    return {
        email: '',
        password:'',
    };
  } ,  //funcion que recibe las propiedades del componente 
    //Propiedad Validate funciona como Redux. Regresa un arreglo de errores
    //Utilizando el metodo de redux se agrega async para que regrese una promesa

    async validate(values){
        const errors = {};

        if(!values.password){
            errors.password= 'Password is required';
        } else if(values.password.lenght < 8) {
            errors.password = 'Password de 8 caracteres';
        }
 //manejo de errores a partir de tiempo, se agrega throw para que la promesa falle
        await sleep(5000);
  //verificacion si hay algun elemento dentro del objeto
        if (Object.keys().lenght) {
          throw errors;
        }

        return errors;
    },

    //formikBag es un helper que da acceso a propiedades del form 
  handleSubmit(values, formikBag){
      formikBag.setSubmitting(false); //Para deshabilitar la funcion una vez que ya haya sido submiteada
      console.log(values);
  }
})(MyForm);