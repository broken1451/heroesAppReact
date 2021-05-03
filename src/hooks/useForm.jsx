import { useState } from 'react'

export const useForm = (initialState={}) => {
  

    const [values, setvalues] = useState(initialState)

    const reset = () => {
      setvalues(initialState)
    }

    const inputChange = (e) => {
      console.log( e.target.value);
        setvalues({
          ...values,
          [e.target.name]: e.target.value, // computando, quiero q esta propiedad sea lo q venga en el objeto
        });
    };
    // console.log({values});
    return [values, inputChange, reset]
    // return {values, inputChange}

}
