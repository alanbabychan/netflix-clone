import React from 'react';
import { Box, Typography, Button, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store';
import { MAIN_PATH } from 'src/constant';

const AdBanner: React.FC = () => {
  const navigate = useNavigate();
  const { isSubscribed } = useSelector((state: RootState) => state.subscription);

  if (isSubscribed) return null;

  return (
    <Paper 
      sx={{ 
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        p: 2, 
        bgcolor: '#e50914', 
        textAlign: 'center',
        zIndex: 1000,
        borderRadius: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2
      }}
    >
      <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold' }}>
        🎬 Enjoying Netflix? Upgrade to Premium for Ad-Free Experience!
      </Typography>
      <Button 
        variant="contained" 
        onClick={() => navigate(`/${MAIN_PATH.subscription}`)}
        sx={{
          backgroundColor: 'white',
          color: '#e50914',
          fontWeight: 'bold',
          '&:hover': {
            backgroundColor: '#f5f5f5'
          }
        }}
      >
        Get Premium 👑
      </Button>
    </Paper>
  );
};

export default AdBanner;