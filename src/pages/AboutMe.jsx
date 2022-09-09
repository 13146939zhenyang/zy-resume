import { Row, Col, Button } from "antd";
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react';
import { Navigation } from "swiper";
const AboutMe = () => {
	const swiper = useSwiper();
  return (
    <>
      <div className="page-title">
        <h2>
          About <span>Me</span>
        </h2>
      </div>
      <div>
        <Row className="full-width" justify="space-between">
          <Col xs={24} sm={13}>
            <p>
              3+ years’ hands-on experience in programming with HTML, CSS,
              JavaScript/ES6, jQuery, and modern CSS/JavaScript libraries. 2+
              years’ professional experience in programming with React.js and
              Node.js, and 1+ year experience in building website using Shopify
              with liquid and React.js. <br />I am passionate on technologies
              and enjoy learning new technologies. Pursue continuous improvement
              of code quality and build project code in a strictly standardized
              format. Optimism and can face challenges at work positively. Likes
              teamwork and enjoys independent problem-solving time.
            </p>
          </Col>
          <Col xs={24} sm={9}>
            <div className="info-list">
              <ul>
                <li>
                  <span className="title">Age</span>
                  <span className="value">28</span>
                </li>
                <li>
                  <span className="title">Location</span>
                  <span className="value">Australia</span>
                </li>
                <li>
                  <span className="title">Address</span>
                  <span className="value">
                    20 Chisholm Street, Wolli Creek, 2205
                  </span>
                </li>
                <li>
                  <span className="title">E-mail</span>
                  <span className="value">zhen.yang.syd@gmail.com</span>
                </li>
                <li>
                  <span className="title">Phone</span>
                  <span className="value">+610452159381</span>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        <div className="white-space-50"></div>
        <Row>
          <Col xs={24} sm={24}>
            <div className="block-title">
              <h3>
                What <span>I Do</span>
              </h3>
            </div>
          </Col>
        </Row>
        <Row className="full-width" justify="space-between">
          <Col xs={24} sm={12}>
            <div className="col-inner">
              {/* 1 */}
              <div className="info-list-w-icon">
                <div className="info-block-w-icon">
                  <div className="ci-icon">
                    <i className="lnr lnr-pencil"></i>
                  </div>
                  <div className="ci-text">
                    <h4>Ecommerce</h4>
                    <p>
                      Pellentesque pellentesque, ipsum sit amet auctor accumsan,
                      odio tortor bibendum massa, sit amet ultricies ex lectus
                      scelerisque nibh. Ut non sodales.
                    </p>
                  </div>
                </div>
                <div className="info-block-w-icon"></div>
              </div>
              {/* 2 */}
              <div className="info-list-w-icon">
                <div className="info-block-w-icon">
                  <div className="ci-icon">
                    <i className="lnr lnr-keyboard"></i>
                  </div>
                  <div className="ci-text">
                    <h4>Ecommerce</h4>
                    <p>
                      Pellentesque pellentesque, ipsum sit amet auctor accumsan,
                      odio tortor bibendum massa, sit amet ultricies ex lectus
                      scelerisque nibh. Ut non sodales.
                    </p>
                  </div>
                </div>
                <div className="info-block-w-icon"></div>
              </div>
            </div>
          </Col>
          <Col xs={24} sm={12}>
            <div className="col-inner">
              {/* 3 */}
              <div className="info-list-w-icon">
                <div className="info-block-w-icon">
                  <div className="ci-icon">
                    <i className="lnr lnr-laptop-phone"></i>
                  </div>
                  <div className="ci-text">
                    <h4>Ecommerce</h4>
                    <p>
                      Pellentesque pellentesque, ipsum sit amet auctor accumsan,
                      odio tortor bibendum massa, sit amet ultricies ex lectus
                      scelerisque nibh. Ut non sodales.
                    </p>
                  </div>
                </div>
                <div className="info-block-w-icon"></div>
              </div>
              {/* 4 */}
              <div className="info-list-w-icon">
                <div className="info-block-w-icon">
                  <div className="ci-icon">
                    <i className="lnr lnr-cloud-sync"></i>
                  </div>
                  <div className="ci-text">
                    <h4>Ecommerce</h4>
                    <p>
                      Pellentesque pellentesque, ipsum sit amet auctor accumsan,
                      odio tortor bibendum massa, sit amet ultricies ex lectus
                      scelerisque nibh. Ut non sodales.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <div className="white-space-30"></div>
        <Row className="full-width">
          <Col span={24}>
            <div className="block-title">
              <h3>Tesimonials</h3>
            </div>
          </Col>
        </Row>
        {/* swiper */}
        <Row className="full-width">
          <Col span={24}>
            <Swiper
              // install Swiper modules
              modules={[Navigation]}
              spaceBetween={50}
              slidesPerView={2}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
              autoplay={{ delay: 500, disableOnInteraction: false }}
            >
              <SwiperSlide>Slide 1</SwiperSlide>
              <SwiperSlide>Slide 2</SwiperSlide>
              <SwiperSlide>Slide 3</SwiperSlide>
              <SwiperSlide>Slide 4</SwiperSlide>
            </Swiper>
          </Col>
        </Row>
        <div className="white-space-50"></div>
        <Row className="full-width">
          <Col xs={24} sm={24}>
            <div className="block-title">
              <h3>Cilents</h3>
            </div>
          </Col>
        </Row>
        <Row className="full-width">
          <Col xs={24} sm={24}>
            <Swiper
              // install Swiper modules
              modules={[Navigation]}
              spaceBetween={50}
              slidesPerView={5}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
              autoplay={{ delay: 500, disableOnInteraction: false }}
            >
              <SwiperSlide>Slide 1</SwiperSlide>
              <SwiperSlide>Slide 2</SwiperSlide>
              <SwiperSlide>Slide 3</SwiperSlide>
              <SwiperSlide>Slide 4</SwiperSlide>
              <SwiperSlide>Slide 5</SwiperSlide>
              <SwiperSlide>Slide 6</SwiperSlide>
              <SwiperSlide>Slide 7</SwiperSlide>
              <SwiperSlide>Slide 8</SwiperSlide>
            </Swiper>
          </Col>
        </Row>
        <div className="white-space-50"></div>
        <Row className="full-width">
          <Col xs={24} sm={24}>
            <div className="block-title">
              <h3>
                Fun <span>Facts</span>
              </h3>
            </div>
          </Col>
        </Row>
        <Row className="full-width" justify="space-between">
          <Col xs={24} sm={7}>
            <div className="fun-fact gray-default">
              <i className="lnr lnr-heart"></i>
              <h4>Happy Clients</h4>
              <span className="fun-fact-block-value">578</span>
              <span className="fun-fact-block-text"></span>
            </div>
          </Col>
          <Col xs={24} sm={7}>
            <div className="fun-fact gray-default">
              <i className="lnr lnr-clock"></i>
              <h4>Working Hours</h4>
              <span className="fun-fact-block-value">4,780</span>
              <span className="fun-fact-block-text"></span>
            </div>
          </Col>
          <Col xs={24} sm={7}>
            <div className="fun-fact gray-default">
              <i className="lnr lnr-star"></i>
              <h4>Awards Won</h4>
              <span className="fun-fact-block-value">15</span>
              <span className="fun-fact-block-text"></span>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};
export default AboutMe;
