import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const handleLoginSuccess = async (credentialResponse) => {
    const { credential } = credentialResponse;

    // Send token to backend
    try{
    const response = await axios.post('http://localhost:8081/api/google', {
      token: credential,
    });

    if (response.status === 200) {
      window.location.href = '/home'; // Redirect to home
    }
  }catch (err) {
      console.error('Login failed or backend error:', err);
    }
};
  return <GoogleLogin onSuccess={handleLoginSuccess} onError={() => console.error('Login Failed')} />;
};

export default Login;


// import { GoogleLogin } from '@react-oauth/google';
// import axios from 'axios'; // You can remove this if you no longer use it
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const navigate = useNavigate();

//   const handleLogin = async (token) => {
//     try {
//       const res = await fetch('http://localhost:8081/api/google', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ token }),
//       });

//       const data = await res.json();

//       if (data.status === 'existing_user') {
//         navigate('/home');
//       } else if (data.status === 'new_user') {
//         localStorage.setItem('email', data.email);
//         navigate('/signup');
//       } else {
//         console.error('Unexpected response:', data);
//       }
//     } catch (err) {
//       console.error('Login failed or backend error:', err);
//     }
//   };

//   const handleLoginSuccess = async (credentialResponse) => {
//     const { credential } = credentialResponse;
//     if (credential) {
//       await handleLogin(credential);
//     } else {
//       console.error('No credential received from Google');
//     }
//   };

//   return (
//     <GoogleLogin
//       onSuccess={handleLoginSuccess}
//       onError={() => console.error('Login Failed')}
//     />
//   );
// };

// export default Login;
