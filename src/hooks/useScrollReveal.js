import { useEffect, useRef, useState } from 'react';

function useScrollReveal() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // fires after first paint — guarantees opacity:0 is rendered first
  useEffect(() => {
    const mountTimer = setTimeout(() => setIsMounted(true), 10)
    return () => clearTimeout(mountTimer)
  }, []);

  // only starts watching AFTER isMounted is true
  useEffect(() => {
    if (!isMounted) return
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    observer.observe(element)
    return () => observer.disconnect()
  }, [isMounted])  // ← only runs when isMounted flips to true

  return [ref, isVisible, isMounted]
}

export default useScrollReveal;