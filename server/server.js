import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import axios from 'axios';

// 🌍 Load Environment Variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// 🛡️ Middleware
app.use(cors());
app.use(express.json());

// 🐞 Debug: Print Environment Variables (For Development Only)
if (process.env.NODE_ENV !== 'production') {
    console.log('🛠️ Environment Variables Loaded:');
    console.log('- PORT:', PORT);
    console.log('- PRINTFUL_API_TOKEN:', process.env.PRINTFUL_API_TOKEN ? 'Token Loaded ✅' : 'Token Missing ❌');
}

// 🛍️ API Route: Fetch Printful Products
app.get('/api/products', async (req, res) => {
    try {
        const response = await axios.get('https://api.printful.com/store/products', {
            headers: {
                'Authorization': `Bearer ${process.env.PRINTFUL_API_TOKEN}`
            }
        });

        if (!response.data || !response.data.result) {
            throw new Error('No products returned from Printful API');
        }

        console.log('✅ Products Fetched Successfully:', response.data.result.length);
        res.json({ result: response.data.result });
    } catch (error) {
        console.error('❌ Error fetching Printful products:', error.message);

        res.status(500).json({
            error: 'Failed to fetch products from Printful API',
            details: error.message
        });
    }
});

// 🩺 Another back end check
app.get('/', (req, res) => {
    res.send("I didn't peg you to be one to check back-ends! 😉");
});

// 🩺 Health Check Route
app.get('/api/health', (req, res) => {
    res.json({ status: '✅ Backend is running!' });
});

// 🚀 Start Server
app.listen(PORT, () => {
    console.log(`✅ Backend server running on http://localhost:${PORT}`);
});
