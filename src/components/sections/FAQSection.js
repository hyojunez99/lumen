import { useState, useEffect, useRef } from "react";
import "./FAQSection.scss";
import FAQ from "../../assets/data/FAQ.json";
import Button from "../common/Button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FAQSection = () => {
  const [activeId, setActiveId] = useState(null);
  const faqRef = useRef(null);

  const toggleFAQ = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".fade-item", {
        scrollTrigger: {
          trigger: faqRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "expo.out",
        stagger: 0.2,
      });
    }, faqRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="faq" ref={faqRef}>
      <div className="faq-title fade-item">
        <h1>자주 묻는 질문</h1>
        <p>
          LUMEN에 대해 가장 많이 궁금해하시는 내용을 정리했습니다. 추가 문의는
          언제든 환영합니다.
        </p>
      </div>

      <ul className="faq-card fade-item">
        {FAQ.map((item) => (
          <li
            key={item.id}
            className={`faq-card-item ${activeId === item.id ? "active" : ""}`}
            onClick={() => toggleFAQ(item.id)}
          >
            <div className="faq-question">
              <span>{item.question}</span>
              <span className="arrow">{activeId === item.id ? "−" : "+"}</span>
            </div>

            <div className={`faq-answer ${activeId === item.id ? "show" : ""}`}>
              {item.answer}
            </div>
          </li>
        ))}
      </ul>

      <div className="faq-bottom-txt fade-item">
        <p>더 궁금한 점이 있으신가요?</p>
        <Button>문의하기</Button>
      </div>
    </section>
  );
};

export default FAQSection;
