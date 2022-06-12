import React from "react";
import styles from "./ProductCard.module.css";
function ProductCard({ item }) {
  return (
    <div className={styles.product__main__container}>
      
      <div className={styles.product_card}>
        
        <div className={styles.product_tumb}>
          <img src={item.productImage} alt="" style={{width:"200px",height:"200px",objectFit:"contain"}}/>
        </div>
        <div className={styles.product_details}>
          <a href={item.productBuyingLink}><span className={styles.product_name}>{item.name}</span></a>
          
          <p className={styles.product_description}>
            {item.productDescription}
          </p>
          <div className="product-bottom-details">
            
            <div className="product-links">
              <a href={item.productBuyingLink}><button className={styles.buying__link}>Buy Now</button></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
