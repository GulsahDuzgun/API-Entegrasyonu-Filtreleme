import React from 'react';
import styles from './Card.module.css';

export const Card = ({ children, className = '', variant = 'default', onClick, ...props }) => {
  return (
    <div className={`${styles.card} ${styles[variant]} ${className}`} onClick={onClick} {...props}>
      {children}
    </div>
  );
};

export const CardHeader = ({ children, className = '', ...props }) => {
  return (
    <div className={`${styles.cardHeader} ${className}`} {...props}>
      {children}
    </div>
  );
};

export const CardContent = ({ children, className = '', ...props }) => {
  return (
    <div className={`${styles.cardContent} ${className}`} {...props}>
      {children}
    </div>
  );
};

export const CardFooter = ({ children, className = '', ...props }) => {
  return (
    <div className={`${styles.cardFooter} ${className}`} {...props}>
      {children}
    </div>
  );
};
