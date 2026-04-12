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
            observer.unobserve(entry.target); // важно: отключаем после появления
          }
        });
      },
      { threshold: 0.12 }
    );

    const observeAll = () => {
      const elements = ref.current?.querySelectorAll(".reveal");
      elements?.forEach((el) => {
        if (!el.classList.contains("visible")) {
          observer.observe(el);
        }
      });
    };

    // первичный запуск
    observeAll();

    // 🔥 следим за появлением новых элементов в DOM
    const mutationObserver = new MutationObserver(() => {
      observeAll();
    });

    if (ref.current) {
      mutationObserver.observe(ref.current, {
        childList: true,
        subtree: true,
      });
    }

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return ref;
}