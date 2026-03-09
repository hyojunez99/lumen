import "./HeroSection.scss";
import Button from "../common/Button";
import BgImg from "../../assets/images/bg-img.png";
import CountUp from "../common/CountUp";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const HeroSection = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".fade-item", {
        y: 40,
        opacity: 0,
        duration: 1.2,
        ease: "expo.out",
        stagger: 0.2,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="hero" ref={heroRef}>
      <div className="hero-bg">
        <img src={BgImg} alt="배경 이미지" />
      </div>
      <div className="hero-main fade-item">
        <div className="hero-txt fade-item">
          <div className="hero-title fade-item">
            <h1>
              코딩 없이, <br />
              <span>프로 수준의 웹사이트</span>를 완성하세요
            </h1>
          </div>
          <div className="hero-title-sub fade-item">
            <p>
              드래그 앤 드롭만으로 누구나 쉽게 웹사이트를 제작할 수 있습니다.
            </p>
          </div>
        </div>

        <div className="hero-btn fade-item">
          <Button>무료 체험 시작</Button>
          <Button variant="outline">자세히 보기</Button>
        </div>

        <div className="hero-info fade-item">
          <div className="info">
            <CountUp end={50} suffix="K+" />
            <p>활성 사용자</p>
          </div>

          <div className="info">
            <CountUp end={100} suffix="K+" />
            <p>제작된 웹사이트</p>
          </div>

          <div className="info">
            <CountUp end={4.9} duration={1500} suffix="/5+" />
            <p>평균 평점</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
