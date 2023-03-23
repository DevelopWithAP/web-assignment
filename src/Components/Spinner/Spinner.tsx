import React from 'react';
import styles from './Spinner.module.css';

const Spinner = () => {
    return (
        <div className={styles.backdrop}>
            <div className={styles.spinnerRing}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default Spinner;
