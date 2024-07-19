import React from 'react';
import { useNavigate } from 'react-router';
import * as styles from '../../assets/scss/component/About.scss';

export default function About() {
    const navigate = useNavigate();

    setTimeout(() => {
        // window.location.href='/error'; 함부로 쓰면 안됨 !!
        navigate('/error');
    }, 2000);

    return (
            <div className={styles.About}>
                <h2>JelYPvid 입니다.</h2>
            </div>
    );
}