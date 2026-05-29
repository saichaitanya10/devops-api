const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Health check route
app.get('/', (req, res) => {
  res.json({ 
    status: 'OK',
    message: 'DevOps API is running!',
    version: '1.0.0'
  });
});

// Sample routes
app.get('/health', (req, res) => {
  res.json({ 
    status: 'healthy',
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

app.get('/api/items', (req, res) => {
  res.json({ 
    items: ['item1', 'item2', 'item3'],
    count: 3
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});