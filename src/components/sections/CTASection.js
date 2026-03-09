import "./CTASection.scss";
import Button from "../common/Button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const CTASection = () => {
  const CTASectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".fade-item", {
        scrollTrigger: {
          trigger: CTASectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "expo.out",
        stagger: 0.2,
      });
    }, CTASectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="cta" ref={CTASectionRef}>
      <div className="cta-bg fade-item">
        <div className="cta-title">
          <h1>당신의 프로젝트에 더 많은 가능성을.</h1>
          <p>LUMEN은 아이디어를 구조화하고, 완성도 높은 결과물로 연결합니다.</p>
        </div>

        <div className="cta-btn">
          <Button variant="outline-blue">무료 체험 시작</Button>
          <Button variant="ghost">자세히 보기</Button>
        </div>

        <div className="cta-bottom-txt">
          <p>14일 무료 체험 · 카드 정보 없이 시작</p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
