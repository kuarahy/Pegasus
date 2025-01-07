import React, { useEffect, useState } from 'react';
import Product from './Product.js';
import './Products.css';


function ProductList() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Use dynamic environment variable
    const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000';

    // 🐞 Debug Line
    console.log('🛠️ API Base URL:', API_BASE_URL);

    useEffect(() => {
        async function fetchProducts() {
            try {
                const response = await fetch(`${API_BASE_URL}/api/products`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                console.log('✅ Products fetched:', data.result);
                setProducts(data.result || []);
            } catch (error) {
                console.error('❌ Error fetching products:', error.message);
                setError('Failed to load products.');
            } finally {
                setLoading(false);
            }
        }

        fetchProducts();
    }, [API_BASE_URL]);


    if (loading) return <p>Loading products...</p>;
    if (error) return <p className="error-message">{error}</p>;
    if (!products.length) return <p>No products found.</p>;

    return (
        <div className="product-list">
            <h2>🛍️ Our Merch Store</h2>
            <div className="product-grid">
                {products.map((product) => (
                    <Product key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}

export default ProductList;
