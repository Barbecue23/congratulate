'use client';

import { useState } from 'react';
import styles from './Envelope.module.css';

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

  return (
    <div className={styles.container}>
      <div
        className={`${styles.envelope} ${isOpen ? styles.open : ''} ${isPopped ? styles.popEffect : ''}`}
        onClick={handleOpenEnvelope}
      >
        <div className={styles.flap}></div>
        <div className={styles.body}></div>
      </div>

      {/* กระดาษข้อความ */}
      <div className={`${styles.paper} ${isOpen ? styles.show : ''}`}>
        ยินดีด้วยนะ! 🎉 คุณจบการศึกษาแล้ว!
      </div>
    </div>
  );
};

export default Envelope;
