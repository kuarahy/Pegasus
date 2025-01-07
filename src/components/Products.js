import React from 'react';

function Product({ product }) {
    if (!product) return <p>Loading product...</p>;

    return (
        <div className="product-card">
            {/* 🖼️ Product Image */}
            <img
                src={product.thumbnail_url || '/assets/default-image.png'}
                alt={product.name}
                className="product-image"
            />

            {/* 📝 Product Title */}
            <h3 className="product-title">{product.name}</h3>

            {/* 💲 Product Price */}
            <p className="product-price">
                Price: $
                {product.retail_price ||
                    product.price ||
                    (product.variants?.[0]?.price || 'N/A')}
            </p>

            {/* 🔗 View Product Button */}
            <a
                href={product.url || `https://printful.com/product/${product.external_id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="product-button"
            >
                View Product
            </a>
        </div>
    );
}

export default Product;
