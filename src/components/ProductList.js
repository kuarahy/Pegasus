import React, { useEffect, useState } from 'react';

function ProductList() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchProducts() {
            try {
                const response = await fetch('http://localhost:5000/api/products');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                console.log('Products fetched:', data.result);
                setProducts(data.result || []);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching products:', error.message);
                setLoading(false);
            }
        }

        fetchProducts();
    }, []);

    if (loading) {
        return <p>Loading products...</p>;
    }

    if (!products.length) {
        return <p>No products found.</p>;
    }

    return (
        <div className="product-list">
            {products.map((product) => (
                <div key={product.id} className="product-card">
                    <img
                        src={product.thumbnail_url || '/assets/default-image.png'}
                        alt={product.name}
                        style={{
                            width: '100%',
                            height: '200px',
                            objectFit: 'contain',
                            backgroundColor: '#f9f9f9'
                        }}
                    />
                    <h3>{product.name}</h3>
                    <p>
                        Price: $
                        {product.retail_price ||
                            product.price ||
                            (product.variants?.[0]?.price || 'N/A')}
                    </p>
                    <a
                        href={product.url || `https://printful.com/product/${product.external_id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            textDecoration: 'none',
                            background: '#7429A6',
                            color: 'white',
                            padding: '8px 12px',
                            borderRadius: '5px',
                            display: 'inline-block',
                            marginTop: '10px'
                        }}
                    >
                        View Product
                    </a>
                </div>
            ))}
        </div>
    );
}

export default ProductList;
