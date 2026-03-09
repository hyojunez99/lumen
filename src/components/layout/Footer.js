import "./Footer.scss";
import FooterData from "../../assets/data/Footer.json";
import LogoImg from "../../assets/images/lumen-logo.png";

import iconImg1 from "../../assets/images/icons/footer-icon-1.png";
import iconImg2 from "../../assets/images/icons/footer-icon-2.png";
import iconImg3 from "../../assets/images/icons/footer-icon-3.png";
import iconImg4 from "../../assets/images/icons/footer-icon-4.png";

import iconHover1 from "../../assets/images/icons/footer-icon-1-hover.png";
import iconHover2 from "../../assets/images/icons/footer-icon-2-hover.png";
import iconHover3 from "../../assets/images/icons/footer-icon-3-hover.png";
import iconHover4 from "../../assets/images/icons/footer-icon-4-hover.png";

const icons = [
  { default: iconImg1, hover: iconHover1, alt: "icon-1" },
  { default: iconImg2, hover: iconHover2, alt: "icon-2" },
  { default: iconImg3, hover: iconHover3, alt: "icon-3" },
  { default: iconImg4, hover: iconHover4, alt: "icon-4" },
];

const Footer = () => {
  return (
    <footer>
      <div className="footer-bg">
        <div className="footer-left">
          <a href="hero" className="logo">
            <img src={LogoImg} alt="로고 이미지" />
          </a>
          <p>
            한계 없이 현대적인 웹사이트를 구축하는
            <br /> 크리에이티브 플랫폼.
          </p>

          <div className="footer-icon">
            {icons.map((icon, index) => (
              <div className="icon" key={index}>
                <img src={icon.default} alt={icon.alt} className="default" />
                <img src={icon.hover} alt={icon.alt} className="hover" />
              </div>
            ))}
          </div>
        </div>

        <div className="footer-right">
          {FooterData.map((item) => (
            <div key={item.id} className="footer-list">
              <h4>{item.title}</h4>
              <ul>
                {item.list.map((subItem, index) => (
                  <li key={index}>{subItem}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 LUMEN. All rights reserved.</p>
        <div className="footer-bottom-right">
          <p>개인정보 처리방침</p>
          <p>이용 약관</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
