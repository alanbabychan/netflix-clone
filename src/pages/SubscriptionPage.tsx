import React, { useState } from 'react';
import { Box, Container, Typography, Card, CardContent, Button, Grid, Chip, Dialog, DialogTitle, DialogContent, TextField, DialogActions, CircularProgress } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/store';
import { subscribeToPlan, setPaymentProcessing } from 'src/store/slices/subscriptionSlice';
import { SubscriptionPlan, PaymentDetails } from 'src/types/Subscription';

const subscriptionPlans: SubscriptionPlan[] = [
  {
    id: 'basic',
    name: 'BASIC',
    price: 899,
    features: ['720p HD quality', '1 screen at a time', 'Unlimited movies & TV shows', 'Watch on phone, tablet, computer, TV', 'Download on 2 devices', 'Ad-free experience']
  },
  {
    id: 'standard',
    name: 'STANDARD',
    price: 1399,
    features: ['1080p Full HD quality', '2 screens at a time', 'Unlimited movies & TV shows', 'Watch on phone, tablet, computer, TV', 'Download on 2 devices', 'Ad-free experience'],
    isPopular: true
  },
  {
    id: 'premium',
    name: 'PREMIUM',
    price: 1799,
    features: ['4K Ultra HD quality', '4 screens at a time', 'Unlimited movies & TV shows', 'Watch on phone, tablet, computer, TV', 'Download on 4 devices', 'Ad-free experience']
  }
];

const SubscriptionPage: React.FC = () => {
  const dispatch = useDispatch();
  const { currentPlan, isSubscribed, paymentProcessing } = useSelector((state: RootState) => state.subscription);
  const [selectedPlan, setSelectedPlan] = useState<SubscriptionPlan | null>(null);
  const [paymentDialog, setPaymentDialog] = useState(false);
  const [paymentDetails, setPaymentDetails] = useState<PaymentDetails>({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardholderName: ''
  });

  const handleSelectPlan = (plan: SubscriptionPlan) => {
    setSelectedPlan(plan);
    setPaymentDialog(true);
  };

  const handlePayment = async () => {
    if (!selectedPlan) return;
    
    dispatch(setPaymentProcessing(true));
    
    // Simulate payment processing
    setTimeout(() => {
      dispatch(subscribeToPlan(selectedPlan));
      setPaymentDialog(false);
      setPaymentDetails({ cardNumber: '', expiryDate: '', cvv: '', cardholderName: '' });
    }, 2000);
  };

  if (isSubscribed && currentPlan) {
    return (
      <Container maxWidth="md" sx={{ py: 8 }}>
        <Box textAlign="center">
          <Typography variant="h3" gutterBottom sx={{ color: 'white', fontWeight: 'bold' }}>
            👑 Subscribed to {currentPlan.name}
          </Typography>
          <Typography variant="h6" color="text.secondary" gutterBottom>
            Enjoy ad-free streaming!
          </Typography>
          <Card sx={{ mt: 4, p: 3, bgcolor: '#e50914' }}>
            <CardContent>
              <Typography variant="h5" gutterBottom sx={{ color: 'white', fontWeight: 'bold' }}>
                Current Plan: {currentPlan.name} 👑
              </Typography>
              <Typography variant="h6" gutterBottom sx={{ color: 'white', fontWeight: 'bold' }}>
                ₹{currentPlan.price}/month
              </Typography>
              {currentPlan.features.map((feature, index) => (
                <Typography key={index} variant="body1" sx={{ mt: 1, color: 'white', fontWeight: 'bold' }}>
                  ✓ {feature}
                </Typography>
              ))}
            </CardContent>
          </Card>
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box textAlign="center" mb={6}>
        <Typography variant="h3" gutterBottom>
          Choose Your Plan
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Upgrade to Premium for an ad-free experience
        </Typography>
      </Box>

      <Grid container spacing={4} justifyContent="center">
        {subscriptionPlans.map((plan) => (
          <Grid item xs={12} md={4} key={plan.id}>
            <Card 
              sx={{ 
                height: '100%', 
                position: 'relative',
                border: plan.isPopular ? '2px solid #e50914' : '1px solid #333',
                '&:hover': { transform: 'scale(1.05)', transition: 'transform 0.2s' }
              }}
            >
              {plan.isPopular && (
                <Chip 
                  label="Most Popular" 
                  color="error" 
                  sx={{ position: 'absolute', top: -10, left: '50%', transform: 'translateX(-50%)' }}
                />
              )}
              <CardContent sx={{ p: 3, textAlign: 'center' }}>
                <Typography variant="h4" gutterBottom>
                  {plan.name}
                </Typography>
                <Typography variant="h3" color="error" gutterBottom>
                  ₹{plan.price}
                  <Typography component="span" variant="h6" color="text.secondary">
                    /month
                  </Typography>
                </Typography>
                <Box sx={{ mt: 3, mb: 3 }}>
                  {plan.features.map((feature, index) => (
                    <Typography key={index} variant="body1" sx={{ mt: 1, textAlign: 'left' }}>
                      ✓ {feature}
                    </Typography>
                  ))}
                </Box>
                <Button 
                  variant="contained" 
                  color="error" 
                  fullWidth 
                  size="large"
                  onClick={() => handleSelectPlan(plan)}
                  sx={{ mt: 2 }}
                >
                  Choose {plan.name}
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Dialog open={paymentDialog} onClose={() => setPaymentDialog(false)} maxWidth="sm" fullWidth>
        <DialogTitle>Complete Your Payment</DialogTitle>
        <DialogContent>
          <Typography variant="h6" gutterBottom>
            {selectedPlan?.name} Plan - ₹{selectedPlan?.price}/month
          </Typography>
          <TextField
            fullWidth
            label="Cardholder Name"
            margin="normal"
            value={paymentDetails.cardholderName}
            onChange={(e) => setPaymentDetails({...paymentDetails, cardholderName: e.target.value})}
          />
          <TextField
            fullWidth
            label="Card Number"
            margin="normal"
            placeholder="1234 5678 9012 3456"
            value={paymentDetails.cardNumber}
            onChange={(e) => setPaymentDetails({...paymentDetails, cardNumber: e.target.value})}
          />
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Expiry Date"
                margin="normal"
                placeholder="MM/YY"
                value={paymentDetails.expiryDate}
                onChange={(e) => setPaymentDetails({...paymentDetails, expiryDate: e.target.value})}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="CVV"
                margin="normal"
                placeholder="123"
                value={paymentDetails.cvv}
                onChange={(e) => setPaymentDetails({...paymentDetails, cvv: e.target.value})}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setPaymentDialog(false)}>Cancel</Button>
          <Button 
            variant="contained" 
            color="error" 
            onClick={handlePayment}
            disabled={paymentProcessing}
          >
            {paymentProcessing ? <CircularProgress size={24} /> : `Pay ₹₹{selectedPlan?.price}`}
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default SubscriptionPage;