import React from "react";
import {useFormik} from 'formik'

function App() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''      
    },
    onSubmit: values =>{
      console.log('form:', values);
    },
    validate: values => {
      let errors = {};
      if (!values.email) errors.email = 'Username should be email format';
      if (!values.password) errors.password = 'Field required';
      return errors:
    }
    });

  return (
      <div>
        <form onSubmit={formik.handleSubmit}>
        <div>Email</div>
        <input name="email" type="text" onChange={formik.handleChange} value={formik.values.email} />
        {formik.errors.email ? <div>{formik.errors.email}
        </div> : null} 
        <div>Password</div>
        <input name="password" type="text" onChange={formik.handleChange} value={formik.values.password} />
        {formik.errors.password ? <div>{formik.errors.password}</div> : null}  
        <button type="submit">Submit</button> 
        </form>
      </div>
  );

}
export default App;
