import "./FeatureSection.scss";
import Feature from "../../assets/data/Feature.json";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FeatureSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = sectionRef.current.querySelectorAll(
        ".feature-card-item"
      );

      cards.forEach((card) => {
        const img = card.querySelector("img");
        const text = card.querySelector(".feature-item");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
          },
        });

        tl.from(img, {
          x: -100,
          opacity: 0,
          duration: 1,
          ease: "expo.out",
        }).from(
          text,
          {
            x: 100,
            opacity: 0,
            duration: 1,
            ease: "expo.out",
          },
          "-=0.8"
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="feature" ref={sectionRef}>
      <div className="feature-card-zip">
        <ul className="feature-card">
          {Feature.map((item) => (
            <li key={item.id} className="feature-card-item">
              <div className="feature-sec">
                <img
                  src={require(`../../assets/images/${item.image}`)}
                  alt={item.title}
                />
                <div className="feature-item">
                  <div className="feature-txt">
                    <div className={`feature-btn feature-btn-${item.id}`}>
                      <p>{item.buttontxt}</p>
                    </div>
                    <div className="feature-title">
                      <h2>{item.title}</h2>
                    </div>
                    <div className="feature-sub">
                      <p>{item.txt}</p>
                    </div>
                  </div>
                  <ul className="feature-sublist">
                    {item.list.map((text) => (
                      <li key={text}>
                        <img
                          src={require(
                            `../../assets/images/icons/${item.icon}`
                          )}
                          alt="check"
                        />
                        {text}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FeatureSection;