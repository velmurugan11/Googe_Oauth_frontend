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