import { useEffect, useRef } from "react";

/**
 * useScrollReveal — attaches an IntersectionObserver to a container ref.
 * Any child element with the class "reveal" will get "visible" added
 * when it enters the viewport.
 */
export function useScrollReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12 }
    );

    const elements = ref.current?.querySelectorAll(".reveal");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return ref;
}
