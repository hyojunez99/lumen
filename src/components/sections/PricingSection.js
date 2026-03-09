import { useState, useEffect, useRef } from "react";
import "./PricingSection.scss";
import Pricing from "../../assets/data/Pricing.json";
import Button from "../common/Button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PricingSection = () => {
  const [selectedPlan, setSelectedPlan] = useState("2");
  const pricingRef = useRef(null);

  const formatPrice = (price) => {
    if (price === null) return "문의";
    if (price === "무료") return "무료";
    return `₩ ${price.toLocaleString()}`;
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".fade-item", {
        scrollTrigger: {
          trigger: pricingRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "expo.out",
        stagger: 0.2,
      });
    }, pricingRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="pricing" ref={pricingRef}>
      <div className="pricing-title fade-item">
        <h1>성장 단계에 맞춘 유연한 요금제</h1>
        <p>지금 시작하고, 필요할 때 언제든 확장하세요.</p>
      </div>

      <div className="pricing-card-zip fade-item">
        <ul className="pricing-card fade-item">
          {Pricing.map((item) => {
            const isSelected = selectedPlan === item.id;
            return (
              <li
                key={item.id}
                className={`pricing-card-item  ${isSelected ? "active" : ""}`}
                onClick={() => setSelectedPlan(item.id)}
              >
                {item.id === "2" && <span className="badge">인기</span>}
                <div className="pricing-txt">
                  <h3>{item.title}</h3>
                  <p>{item.sub}</p>
                </div>
                <div className="pricing-price">
                  <h2>{formatPrice(item.price)}</h2>
                  {typeof item.price === "number" && <span>/월</span>}
                </div>
                <Button
                  variant={isSelected ? "primary" : "outline-blue"}
                  className="pricing-btn"
                >
                  {item.price === null ? "문의하기" : "시작하기"}
                </Button>
                <ul className="pricing-list">
                  {item.list.map((text) => (
                    <li key={text} className="pricing-desc">
                      <img
                        src={require(`../../assets/images/icons/${item.icon}`)}
                        alt="check"
                      />
                      {text}
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="pricing-bottom-txt fade-item">
        <p>
          모든 유료 플랜은 14일 무료 체험이 제공됩니다. 언제든지 해지할 수
          있습니다.
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
