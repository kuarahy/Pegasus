import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import axios from 'axios'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// API Route to Fetch Printful Products
app.get('/api/products', async (req, res) => {
    try {
        const response = await axios.get('https://api.printful.com/store/products', {
            headers: {
                'Authorization': `Bearer ${process.env.PRINTFUL_API_TOKEN}`
            }
        });
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching Printful products:', error.message);
        res.status(500).json({ error: 'Failed to fetch products' });
    }
});

// Start Server
app.listen(PORT, () => {
    console.log(`✅ Backend server running on http://localhost:${PORT}`);
    console.log('Printful Token:', process.env.PRINTFUL_API_TOKEN);
});
