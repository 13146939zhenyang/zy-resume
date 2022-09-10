import { Row, Col, message, Form, Input, Button } from "antd";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

const { TextArea } = Input;
const Contact = () => {
  const [userName, setUserName] = useState();
  const [userEmail, setUserEmail] = useState();
  const [userSubject, setUserSubject] = useState();
  const [userMessage, setUserMessage] = useState();
  const onFinish = (value) => {
    console.log(value);
    emailjs
      .sendForm(
        "service_787d8zg",
        "template_qst6o8b",
        "#information-form",
        "dJSQJ9VePguwnk9ua"
      )
      .then(
        (result) => {
          if (result.status === 200) {
            console.log(result.text);
            console.log(result);
            message.success({
              content:
                "Your message has been sent, and we will reponse as soon as possible!",
              className: "custom-class",
              style: {
                marginTop: "20vh",
              },
            });
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <div className="page-title">
        <h2>Contact</h2>
      </div>
      <div>
        <Row className="full-width" justify="space-between">
          <Col xs={24} sm={8}>
            <div className="lm-info-block gray-default">
              <i className="lnr lnr-map-marker"></i>
              <h4>Sydney</h4>
              <span className="lm-info-block-value"></span>
              <span className="lm-info-block-text"></span>
            </div>

            <div className="lm-info-block gray-default">
              <i className="lnr lnr-phone-handset"></i>
              <h4>+61-452-159-381</h4>
              <span className="lm-info-block-value"></span>
              <span className="lm-info-block-text"></span>
            </div>

            <div className="lm-info-block gray-default">
              <i className="lnr lnr-envelope"></i>
              <h4 style={{ wordWrap: "break-word", width: "100%" }}>
                zhen.yang.syd@gmail.com
              </h4>
              <span className="lm-info-block-value"></span>
              <span className="lm-info-block-text"></span>
            </div>

            <div className="lm-info-block gray-default">
              <i className="lnr lnr-checkmark-circle"></i>
              <h4>Freelance Available</h4>
              <span className="lm-info-block-value"></span>
              <span className="lm-info-block-text"></span>
            </div>
          </Col>
          <Col xs={24} sm={14}>
            <div id="map" className="map">
              <div className="lmpixels-map">
                <iframe
                  style={{ width: "100%" }}
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                  src="https://maps.google.com/maps?q=San%20Francisco%2C%20S601%20Townsend%20Street%2C%20California%2C%20USA&amp;amp;t=m&amp;amp;z=16&amp;amp;output=embed&amp;amp;iwloc=near&amp;output=embed"
                ></iframe>
              </div>
            </div>
            <div className="block-title">
              <h3>
                How Can I <span>Help You?</span>
              </h3>
            </div>
            <Form onFinish={onFinish} id="information-form">
              <Row
                className="full-width email-form-wrapper"
                justify="space-between"
              >
                <Col lg={11} sm={24}>
                  <div className="form-item">
                    <Form.Item
                      name="user_name"
                      rules={[
                        {
                          required: true,
                          message: "Name is required!",
                        },
                      ]}
                    >
                      <Input onChange={(e)=>setUserName(e.target.value)}/>
                    </Form.Item>
                    <span className={userName ? "form-item_placeholder-active" : "form-item_placeholder"}>Username</span>
                  </div>
                  <div className="form-item">
                    <Form.Item
                      name="user_email"
                      rules={[
                        {
                          required: true,
                          message: "Email is required!",
                        },
                      ]}
                    >
                      <Input onChange={(e)=>setUserEmail(e.target.value)} />
                    </Form.Item>
                    <span className={userEmail ? "form-item_placeholder-active" : "form-item_placeholder"}>Email</span>
                  </div>
                  <div className="form-item">
                    <Form.Item
                      name="user_subject"
                      rules={[
                        {
                          required: true,
                          message: "Subject is required!",
                        },
                      ]}
                    >
                      <Input onChange={(e)=>setUserSubject(e.target.value)}/>
                    </Form.Item>
                    <span className={userSubject ? "form-item_placeholder-active" : "form-item_placeholder"}>Subject</span>
                  </div>
                </Col>
                <Col lg={12} sm={24}>
                  <div className="form-item">
                    <Form.Item
                      name="user_message"
                      rules={[
                        {
                          required: true,
                          message: "Please leave me a message!",
                        },
                      ]}
                    >
                      <TextArea rows={4} onChange={(e)=>setUserMessage(e.target.value)}/>
                    </Form.Item>
                    <span className={userMessage ? "form-item_placeholder-active" : "form-item_placeholder"}>Message</span>
                  </div>
                </Col>
              </Row>
              <Row className="full-width">
                <ReCAPTCHA
                  sitekey="6Le-ktQhAAAAAHlaFuM85d3h4V99oYPvy2llQG3Q"
                  theme="dark"
                />
              </Row>
              <div className="white-space-10"></div>
              <Row className="full-width" justify="center">
                <Col>
                  <Form.Item>
                    <Button htmlType="submit" className="send-button">
                      Send Message
                    </Button>
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Contact;
