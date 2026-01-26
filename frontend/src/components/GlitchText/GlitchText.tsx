'use client';

import { useState, useEffect } from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
  intervalMs?: number;
}

export const GlitchText = ({ text, className = '', intervalMs = 4000 }: GlitchTextProps) => {
  const [displayText, setDisplayText] = useState(text);

  useEffect(() => {
    const chars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    let interval: NodeJS.Timeout;

    const glitch = () => {
      const iterations = 5;
      let i = 0;

      interval = setInterval(() => {
        setDisplayText(
          text.split('').map((char, index) => {
            if (char === ' ') return ' ';
            if (index < i) return text[index];
            return chars[Math.floor(Math.random() * chars.length)];
          }).join('')
        );

        if (i >= text.length) {
          clearInterval(interval);
          setDisplayText(text);
        }
        i += 1 / iterations;
      }, 50);
    };

    const mainInterval = setInterval(glitch, intervalMs);
    glitch();

    return () => {
      clearInterval(interval);
      clearInterval(mainInterval);
    };
  }, [text, intervalMs]);

  return <span className={className}>{displayText}</span>;
};
