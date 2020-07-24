import React,{useState} from 'react';

const ErrorMessageHOC = (WrapperComponnet) => {
    const WithStateComponent = () => {
        const [error,setError] = useState({
            status : false,
            message : ''
          });
        const setErr = (res) => {
            setError({
                status : true,
                message: res.response.data.message
              })
              setTimeout(() => {
                setError({
                  status : false,
                  message : ''
                })
              }, 3000);
        }
        return <WrapperComponnet 
                    error = {setErr}
                    errorMsg = {error}
                />
    }
    return WithStateComponent;
}
export default ErrorMessageHOC;

 