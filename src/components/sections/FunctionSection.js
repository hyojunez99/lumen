import "./FunctionSection.scss";
import Function from "../../assets/data/Function.json";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FunctionSection = () => {
  const functionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".fade-item", {
        scrollTrigger: {
          trigger: functionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "expo.out",
        stagger: 0.2,
      });
    }, functionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="function" ref={functionRef}>
      <div className="function-bg">
        <div className="function-txt fade-item">
          <div className="function-title fade-item">
            <h1>당신을 위한 핵심 기능</h1>
          </div>
          <div className="function-title-sub fade-item">
            <p>빠르고 강력하게, 당신의 아이디어를 현실로 만드는 기능들.</p>
          </div>
        </div>

        <div className="function-card-zip fade-item">
          <ul className="function-card fade-item">
            {Function.map((item) => (
              <li key={item.id} className="function-card-item ">
                <img
                  src={require(`../../assets/images/icons/${item.image}`)}
                  alt={item.title}
                />
                <h2>{item.title}</h2>
                <p>{item.txt}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FunctionSection;
