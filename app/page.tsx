'use client';

import { useState } from 'react';
import styles from './Envelope.module.css'; // ตรวจสอบการนำเข้า

const Envelope = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPopped, setIsPopped] = useState(false);

  const handleOpenEnvelope = () => {
    if (isOpen) {
      // ถ้าซองเปิดอยู่แล้วให้ปิด
      setIsOpen(false);
      setIsPopped(false);
    } else {
      // ถ้าซองยังไม่เปิด ให้เปิดและพุ่ง
      setIsPopped(true);
      setTimeout(() => setIsOpen(true), 300); // เปิดซองหลังจากพุ่ง
    }
  };

  const handleCloseEnvelope = (e: React.MouseEvent) => {
    if (!e.target.closest(`.${styles.envelope}`)) {
      // ปิดซองเมื่อคลิกที่พื้นที่ว่าง
      setIsOpen(false);
      setIsPopped(false);
    }
  };

  return (
    <div className={styles.container} onClick={handleCloseEnvelope}>
      <div
        className={`${styles.envelope} ${isOpen ? styles.open : ''}`}
        onClick={handleOpenEnvelope}
      >
        <div className={styles.flap}></div>
        <div className={styles.body}></div>
      </div>

      {/* กระดาษข้อความ */}
      <div className={`${styles.paper} ${isOpen ? styles.show : ''}`}>
        <p>ยินดีด้วยนะ! 🎉</p>
        <br />
        <p>คุณจบการศึกษาแล้ว!</p>
      </div>

      {/* สี่เหลี่ยมหลายสีที่กระจายออกไป */}
      {isPopped && (
        <div className={styles.particles}>
          {Array.from({ length: 20 }).map((_, index) => (
            <div
              key={index}
              className={styles.particle}
              style={{
                top: `${Math.random() * 80}%`, // สุ่มตำแหน่งบน-ล่าง
                left: `${Math.random() * 80}%`, // สุ่มตำแหน่งซ้าย-ขวา
                animationDelay: `${Math.random() * 0.5}s`, // สุ่มเวลาเริ่มแอนิเมชัน
                backgroundColor: `hsl(${Math.random() * 360}, 100%, 50%)`, // สีสุ่ม
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Envelope;
