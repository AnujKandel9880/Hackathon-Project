import React, { useState } from 'react';
import axios from 'axios';
import './Login.css'

const ForgotPassword = () => {
const [email, setEmail] = useState('');

const handleSubmit = async (e) => {
e.preventDefault();
try {
await axios.post('/api/auth/forgot-password', { email });
alert('Password reset link sent to your email');
} catch (error) {
console.log(error);
alert('Error resetting password');
}
};

return (
<div className="forgot-password-container">
  <h2 className="text-center mb-4">Forgot Password</h2>
  <form onSubmit={handleSubmit}>
    <div className="form-group">
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        className="form-control"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </div>
<button type="submit" className="reset-password-button">
  <span>Reset Password</span>
</button>
</form>
</div>
);
};

export default ForgotPassword; 