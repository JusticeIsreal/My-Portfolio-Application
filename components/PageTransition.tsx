import { useRef, useEffect, useState } from "react";

type Props = {
  children: React.ReactNode;
};

function PageTransition({ children }: Props) {
  const sectionRef = useRef<any>(null);
  const [isVisible, setVisible] = useState<boolean>(true);

  useEffect(() => {
    if (sectionRef.current) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      });
      observer.observe(sectionRef.current);
      return observer.disconnect();
    }
  }, [sectionRef]);
  return (
    <>
      {isVisible && (
        <div
          style={{
            transition: "opacity 500ms ease-in-out",
            opacity: isVisible ? 1 : 0,
          }}
        >
          <div ref={sectionRef}>{children}</div>
        </div>
      )}
    </>
  );
}

export default PageTransition;
