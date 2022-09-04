import { Row, Col } from "antd";
import { useRef, useEffect } from "react";
import Typed from "typed.js";

const Home = () => {
  const el = useRef(null);
  const typed = useRef(null);
  useEffect(() => {
    const options = {
      strings: ["Frontend Developer", "Fullstack Developer", "Web Developer"],
      typeSpeed: 50,
      backSpeed: 80,
      smartBackspace: true,
      loop: true,
      loopCount: Infinity,
    };

    typed.current = new Typed(el.current, options);

    return () => {
      typed.current.destroy();
    };
  }, []);

  return (
    <div className="section-content">
      <Row className="full-width" justify="center">
        <Col sm={12} md={12} lg={12}>
          <div className="section-content--title">
            <h2>Zhen Yang</h2>
            <div className="section-content--title_typed">
              <span ref={el} />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default Home;
