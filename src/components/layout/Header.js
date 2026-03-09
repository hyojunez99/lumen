import { useState } from "react";
import LogoImg from "../../assets/images/lumen-logo.png";
import Button from "../common/Button";
import "./Header.scss";

const Header = () => {
  const [active, setActive] = useState("hero");

  const handleScroll = (id) => {
    setActive(id);
    const element = document.getElementById(id);
    const headerOffset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };
  return (
    <header>
      <div className="header-bar">
        <a
          href="#hero"
          className="logo"
          onClick={(e) => {
            e.preventDefault();
            handleScroll("hero");
          }}
        >
          <img src={LogoImg} alt="로고 이미지" />
        </a>
        <ul className="menu">
          <li>
            <a
              href="#function"
              className={active === "function" ? "active" : ""}
              onClick={(e) => {
                e.preventDefault();
                handleScroll("function");
              }}
            >
              주요기능
            </a>
          </li>
          <li>
            <a
              href="#feature"
              className={active === "feature" ? "active" : ""}
              onClick={(e) => {
                e.preventDefault();
                handleScroll("feature");
              }}
            >
              제품
            </a>
          </li>
          <li>
            <a
              href="#pricing"
              className={active === "pricing" ? "active" : ""}
              onClick={(e) => {
                e.preventDefault();
                handleScroll("pricing");
              }}
            >
              요금제
            </a>
          </li>
          <li>
            <a
              href="#faq"
              className={active === "faq" ? "active" : ""}
              onClick={(e) => {
                e.preventDefault();
                handleScroll("faq");
              }}
            >
              FAQ
            </a>
          </li>
        </ul>
        <ul className="login">
          <li>로그인</li>
          <Button>무료 체험</Button>
        </ul>
      </div>
    </header>
  );
};

export default Header;
