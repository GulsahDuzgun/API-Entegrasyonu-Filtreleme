import React from 'react';
import styles from './Badge.module.css';

export const Badge = ({
  children,
  variant = 'default',
  size = 'medium',
  pill = false,
  dot = false,
  className = '',
  ...props
}) => {
  return (
    <span
      className={`
        ${styles.badge}
        ${styles[variant]}
        ${styles[size]}
        ${pill ? styles.pill : ''}
        ${dot ? styles.dot : ''}
        ${className}
      `}
      {...props}
    >
      {dot ? <span className={styles.dotIndicator} /> : null}
      {children}
    </span>
  );
};
