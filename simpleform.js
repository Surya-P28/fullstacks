import React, { useState } from 'react';

function SimpleForm() {
  const [data, setData] = useState({ name: '', email: '' });
  const [submitted, setSubmitted] = useState(false);

  return submitted ? (
    <div style={{ textAlign: 'center', padding: 20 }}>
      <h2>Thank you for submitting!</h2>
      <p>We received your details.</p>
      <button onClick={() => setSubmitted(false)}>Submit Again</button>
    </div>
  ) : (
    <form onSubmit={e => { e.preventDefault(); setSubmitted(true); }} style={{ padding: 20 }}>
      <input name="name" value={data.name} onChange={e => setData({ ...data, name: e.target.value })} placeholder="Your Name" required />
      <input name="email" value={data.email} onChange={e => setData({ ...data, email: e.target.value })} placeholder="Your Email" required />
      <button type="submit">Submit</button>
    </form>
  );
}

export default SimpleForm;
