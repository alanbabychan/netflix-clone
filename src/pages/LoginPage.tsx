import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  Container,
  Alert,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { login } from 'src/store/slices/authSlice';
import { useNavigate } from 'react-router-dom';

interface User {
  firstName: string;
  lastName: string;
  mobile: string;
  email: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const [tab, setTab] = useState<'login' | 'signup' | 'forgot'>('login');
  const [loginData, setLoginData] = useState({ identifier: '', password: '' });
  const [signupData, setSignupData] = useState({
    firstName: '',
    lastName: '',
    mobile: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [forgotEmail, setForgotEmail] = useState('');
  const [error, setError] = useState('');
  const [users, setUsers] = useState<User[]>([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) setUsers(JSON.parse(storedUsers));
  }, []);

  const handleLogin = () => {
    const user = users.find(
      (u) =>
        (u.email === loginData.identifier || u.mobile === loginData.identifier) &&
        u.password === loginData.password
    );
    if (user) {
      dispatch(login(user));
      navigate('/browse');
    } else {
      setError('Invalid credentials');
    }
  };

  const handleSignup = () => {
    if (signupData.password !== signupData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    const existingUser = users.find(
      (u) => u.email === signupData.email || u.mobile === signupData.mobile
    );
    if (existingUser) {
      setError('User already exists with this email or mobile');
      return;
    }

    const newUser: User = {
      firstName: signupData.firstName,
      lastName: signupData.lastName,
      mobile: signupData.mobile,
      email: signupData.email,
      password: signupData.password,
    };

    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    setError('');
    setTab('login'); // back to login
  };

  const handleForgotPassword = () => {
    const user = users.find((u) => u.email === forgotEmail);
    if (user) {
      alert(`Your password is: ${user.password}`);
    } else {
      setError('Email not found');
    }
  };

  return (
    <Box
      sx={{
        bgcolor: 'black',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Container component="main" maxWidth="xs">
        <Paper
          elevation={3}
          sx={{
            p: 4,
            bgcolor: 'rgba(0,0,0,0.85)',
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '80vh',
            borderRadius: 2,
            transition: 'all 0.3s ease',
          }}
        >
          {/* ===== Netflix Title ===== */}
          <Typography
            component="h1"
            variant="h4"
            align="center"
            gutterBottom
            sx={{ fontWeight: 'bold', letterSpacing: 1 }}
          >
            Netflix
          </Typography>

          {/* ===== Custom Toggle (Login / Sign Up) ===== */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: 2,
              mb: 3,
              mt: 1,
            }}
          >
            <Button
              onClick={() => setTab('login')}
              variant={tab === 'login' ? 'contained' : 'text'}
              sx={{
                bgcolor: tab === 'login' ? '#e50914' : 'transparent',
                color: tab === 'login' ? 'white' : 'rgba(255,255,255,0.6)',
                borderRadius: '20px',
                px: 3,
                textTransform: 'none',
                '&:hover': {
                  bgcolor: tab === 'login' ? '#f40612' : 'rgba(255,255,255,0.1)',
                },
              }}
            >
              Login
            </Button>
            <Button
              onClick={() => setTab('signup')}
              variant={tab === 'signup' ? 'contained' : 'text'}
              sx={{
                bgcolor: tab === 'signup' ? '#e50914' : 'transparent',
                color: tab === 'signup' ? 'white' : 'rgba(255,255,255,0.6)',
                borderRadius: '20px',
                px: 3,
                textTransform: 'none',
                '&:hover': {
                  bgcolor: tab === 'signup' ? '#f40612' : 'rgba(255,255,255,0.1)',
                },
              }}
            >
              Sign Up
            </Button>
          </Box>

          {/* ===== Error Alert ===== */}
          {error && (
            <Alert severity="error" sx={{ mb: 2, width: '100%' }}>
              {error}
            </Alert>
          )}

          {/* ===== LOGIN FORM ===== */}
          {tab === 'login' && (
            <Box sx={{ width: '100%', textAlign: 'center' }}>
              <TextField
                fullWidth
                label="Email or Mobile"
                value={loginData.identifier}
                onChange={(e) =>
                  setLoginData({ ...loginData, identifier: e.target.value })
                }
                margin="normal"
                InputLabelProps={{ style: { color: 'white' } }}
                InputProps={{ style: { color: 'white' } }}
              />
              <TextField
                fullWidth
                label="Password"
                type="password"
                value={loginData.password}
                onChange={(e) =>
                  setLoginData({ ...loginData, password: e.target.value })
                }
                margin="normal"
                InputLabelProps={{ style: { color: 'white' } }}
                InputProps={{ style: { color: 'white' } }}
              />
              <Button
                fullWidth
                variant="contained"
                onClick={handleLogin}
                sx={{
                  mt: 2,
                  bgcolor: '#e50914',
                  '&:hover': { bgcolor: '#f40612' },
                  fontWeight: 'bold',
                }}
              >
                Login
              </Button>
              <Button
                fullWidth
                onClick={() => setTab('forgot')}
                sx={{ mt: 1, color: 'white', textTransform: 'none' }}
              >
                Forgot Password?
              </Button>
            </Box>
          )}

          {/* ===== SIGN UP FORM ===== */}
          {tab === 'signup' && (
            <Box sx={{ width: '100%', textAlign: 'center' }}>
              <TextField
                fullWidth
                label="First Name"
                value={signupData.firstName}
                onChange={(e) =>
                  setSignupData({ ...signupData, firstName: e.target.value })
                }
                margin="normal"
                InputLabelProps={{ style: { color: 'white' } }}
                InputProps={{ style: { color: 'white' } }}
              />
              <TextField
                fullWidth
                label="Last Name"
                value={signupData.lastName}
                onChange={(e) =>
                  setSignupData({ ...signupData, lastName: e.target.value })
                }
                margin="normal"
                InputLabelProps={{ style: { color: 'white' } }}
                InputProps={{ style: { color: 'white' } }}
              />
              <TextField
                fullWidth
                label="Mobile Number"
                value={signupData.mobile}
                onChange={(e) =>
                  setSignupData({ ...signupData, mobile: e.target.value })
                }
                margin="normal"
                InputLabelProps={{ style: { color: 'white' } }}
                InputProps={{ style: { color: 'white' } }}
              />
              <TextField
                fullWidth
                label="Email"
                value={signupData.email}
                onChange={(e) =>
                  setSignupData({ ...signupData, email: e.target.value })
                }
                margin="normal"
                InputLabelProps={{ style: { color: 'white' } }}
                InputProps={{ style: { color: 'white' } }}
              />
              <TextField
                fullWidth
                label="Password"
                type="password"
                value={signupData.password}
                onChange={(e) =>
                  setSignupData({ ...signupData, password: e.target.value })
                }
                margin="normal"
                InputLabelProps={{ style: { color: 'white' } }}
                InputProps={{ style: { color: 'white' } }}
              />
              <TextField
                fullWidth
                label="Confirm Password"
                type="password"
                value={signupData.confirmPassword}
                onChange={(e) =>
                  setSignupData({
                    ...signupData,
                    confirmPassword: e.target.value,
                  })
                }
                margin="normal"
                InputLabelProps={{ style: { color: 'white' } }}
                InputProps={{ style: { color: 'white' } }}
              />
              <Button
                fullWidth
                variant="contained"
                onClick={handleSignup}
                sx={{
                  mt: 2,
                  bgcolor: '#e50914',
                  '&:hover': { bgcolor: '#f40612' },
                  fontWeight: 'bold',
                }}
              >
                Sign Up
              </Button>
            </Box>
          )}

          {/* ===== FORGOT PASSWORD ===== */}
          {tab === 'forgot' && (
            <Box sx={{ width: '100%', textAlign: 'center' }}>
              <TextField
                fullWidth
                label="Email"
                value={forgotEmail}
                onChange={(e) => setForgotEmail(e.target.value)}
                margin="normal"
                InputLabelProps={{ style: { color: 'white' } }}
                InputProps={{ style: { color: 'white' } }}
              />
              <Button
                fullWidth
                variant="contained"
                onClick={handleForgotPassword}
                sx={{
                  mt: 2,
                  bgcolor: '#e50914',
                  '&:hover': { bgcolor: '#f40612' },
                }}
              >
                Reset Password
              </Button>
              <Button
                fullWidth
                onClick={() => setTab('login')}
                sx={{ mt: 1, color: 'white', textTransform: 'none' }}
              >
                Back to Login
              </Button>
            </Box>
          )}
        </Paper>
      </Container>
    </Box>
  );
};

export default LoginPage;
