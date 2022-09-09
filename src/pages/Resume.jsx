import { Row, Col } from "antd";
const Resume = () => {
  return (
    <>
      <div className="page-title">
        <h2>Resume</h2>
      </div>
      <div>
        <Row className="full-width" justify="space-between">
          <Col xs={24} sm={14}>
            <div className="block-title">
              <h3>Education</h3>
            </div>
            <div className="timeline timeline-second-style clearfix">
              <div className="timeline-item clearfix">
                <div className="left-part">
                  <h5 className="item-period">2020</h5>
                  <span className="item-company">
                    University of Technology Sydney
                  </span>
                </div>
                <div className="divider"></div>
                <div className="right-part">
                  <h4 className="item-title">Master of Internetworking</h4>
                  {/* <p>
                    Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac
                    dolor aliquam sodales. Phasellus sed mauris hendrerit,
                    laoreet sem in, lobortis ante.
                  </p> */}
                </div>
              </div>

              <div className="timeline-item clearfix">
                <div className="left-part">
                  <h5 className="item-period">2017</h5>
                  <span className="item-company">
                    University of Macau Polytechnic
                  </span>
                </div>
                <div className="divider"></div>
                <div className="right-part">
                  <h4 className="item-title">Bachalor of Computer Science</h4>
                  {/* <p>
                    Aliquam tincidunt malesuada tortor vitae iaculis. In eu
                    turpis iaculis, feugiat risus quis, aliquet urna. Quisque
                    fringilla mollis risus, eu pulvinar dolor.
                  </p> */}
                </div>
              </div>
            </div>
            <div className="white-space-50"></div>
            <div className="block-title">
              <h3>Experience</h3>
            </div>
            <div className="timeline timeline-second-style clearfix">
              <div className="timeline-item clearfix">
                <div className="left-part">
                  <h5 className="item-period">2021 - Current</h5>
                  <span className="item-company">DOTech</span>
                </div>
                <div className="divider"></div>
                <div className="right-part">
                  <h4 className="item-title">Front-end Developer</h4>
                  <p>
                    Praesent dignissim sollicitudin justo, sed elementum quam
                    lacinia quis. Phasellus eleifend tristique posuere. Sed
                    vitae dui nec magna.
                  </p>
                </div>
              </div>

              <div className="timeline-item clearfix">
                <div className="left-part">
                  <h5 className="item-period">2020 - 2021</h5>
                  <span className="item-company">JR Academy</span>
                </div>
                <div className="divider"></div>
                <div className="right-part">
                  <h4 className="item-title">Full-stack Developer Intern</h4>
                  <p>
                    Maecenas tempus faucibus rutrum. Duis eu aliquam urna. Proin
                    vitae nulla tristique, ornare felis id, congue libero. Nam
                    volutpat euismod quam.
                  </p>
                </div>
              </div>

              <div className="timeline-item clearfix">
                <div className="left-part">
                  <h5 className="item-period">2020</h5>
                  <span className="item-company">Millfx</span>
                </div>
                <div className="divider"></div>
                <div className="right-part">
                  <h4 className="item-title">Front-end Developer Intern</h4>
                  <p>
                    Duis mollis nunc quis quam viverra venenatis. Nulla nulla
                    arcu, congue vitae nunc ac, sodales ultricies diam. Nullam
                    justo leo, tincidunt sit amet.
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={24} sm={10}>
            <div className="block-title">
              <h3>
                UI Design <span>Tools</span>
              </h3>
            </div>
            <ul className="knowledges">
              <li>Adobe XD</li>
              <li>Figma</li>
              <li>Sketch</li>
              <li>Zeplin</li>
            </ul>
            <div className="white-space-10"></div>
            <div className="block-title">
              <h3>
                Development <span>Tools</span>
              </h3>
            </div>
            <ul className="knowledges">
              <li>VS Code</li>
              <li>Terminal</li>
              <li>Jira</li>
              <li>Confluence</li>
              <li>Slack</li>
              <li>Trello</li>
              <li>GitHub</li>
              <li>GitLab</li>
              <li>Bitbucket</li>
			  <li>Postman</li>
			  <li>Google Chrome Inspector</li>
            </ul>
            <div className="white-space-10"></div>
            <div className="block-title">
              <h3>
                Front-end <span>Technology</span>
              </h3>
            </div>
            <ul className="knowledges">
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript</li>
              <li>Typescript</li>
              <li>ES6/7/8</li>
              <li>CSS Pre-processor</li>
              <li>JQuery</li>
              <li>Liver-server</li>
              <li>Brew</li>
			  <li>Npm/Yarn</li>
			  <li>Git</li>
			  <li>Sass/Less</li>
			  <li>React.js</li>
			  <li>Vue.js</li>
			  <li>Next.js</li>
			  <li>Moment.js</li>
			  <li>Day.js</li>
			  <li>Webpack</li>
			  <li>Babel</li>
			  <li>ESlint</li>
			  <li>BootStrap</li>
			  <li>Antd</li>
			  <li>Material UI</li>
			  <li>Pug</li>
			  <li>craco</li>
			  <li>Redux</li>
			  <li>React Hook</li>
			  <li>React useLocation</li>
			  <li>React useParams</li>
			  <li>React History</li>
			  <li>i18next</li>
			  <li>react-dom</li>
			  <li>react-router-dom</li>
			  <li>react-loadable</li>
			  <li>react router</li>
			  <li>react image crop</li>
			  <li>react script</li>
			  <li>redux-thunk</li>
			  <li>redux-saga</li>
			  <li>redux-logger</li>
			  <li>tailwindCss</li>
			  <li>Styled component</li>
			  <li>axios</li>
			  <li>Echart.js</li>
			  <li>lodash.js</li>
			  <li>Umi.js</li>
			  <li>dva.js</li>
			  <li>Web component</li>
			  <li>Semantic UI</li>
			  <li>React query</li>
			  <li>React responsive</li>
			  <li>anime.js</li>
			  <li>letterize.js</li>
			  <li>typed.js</li>
			  <li>mo.js</li>
			  <li>Responsive Design</li>
			  <li>Google Material Design</li>
			  <li>media queries</li>
			  <li>Material Design Icons</li>
			  <li>Google Map API</li>
			  <li>SPA</li>
			  <li>localStorage</li>
			  <li>sessionStorage</li>
			  <li>Cookies</li>
			  <li>SEO-Canonical/301</li>
			  <li>webhook</li>
			  <li>websocket</li>
			  <li>Swiper.js</li>
			  <li>JSON</li>
			  <li>Trulioo</li>
            </ul>
			<div className="block-title">
              <h3>
                Database <span>Skills</span>
              </h3>
            </div>
            <ul className="knowledges">
              <li>MongoDB</li>
              <li>Mongoose</li>
              <li>GraphQL</li>
			  <li>MySQL</li>
            </ul>
			<div className="block-title">
              <h3>
                Back-end <span>Skills</span>
              </h3>
            </div>
            <ul className="knowledges">
              <li>Node.js</li>
              <li>Koa.js</li>
              <li>Express.js</li>
              <li>KeyStone.js</li>
              <li>Swagger</li>
              <li>OAuth</li>
              <li>JWT</li>
              <li>Stripe.js</li>
              <li>Braintree.js</li>
            </ul>
			<div className="block-title">
              <h3>
                Testing <span>Skills</span>
              </h3>
            </div>
            <ul className="knowledges">
              <li>Unit test</li>
              <li>e2e test</li>
              <li>TDD</li>
            </ul>
			<div className="block-title">
              <h3>
                Cloud <span>Skills</span>
              </h3>
            </div>
            <ul className="knowledges">
              <li>AWS cloud9</li>
              <li>AWS Amplify</li>
              <li>AWS S3</li>
              <li>AWS EC2</li>
              <li>AWS Rout53</li>
              <li>AWS CloudFront</li>
              <li>AWS Lambda</li>
              <li>Google App Engine</li>
            </ul>
			<div className="block-title">
              <h3>
                Architectures <span>Skills</span>
              </h3>
            </div>
            <ul className="knowledges">
              <li>RESTful API</li>
            </ul>
			<div className="block-title">
              <h3>
                DevOps <span>Skills</span>
              </h3>
            </div>
            <ul className="knowledges">
              <li>Jenkins</li>
              <li>Docker</li>
            </ul>
			<div className="block-title">
              <h3>
                Methodologies
              </h3>
            </div>
            <ul className="knowledges">
              <li>Agile</li>
              <li>Scrum</li>
              <li>Kanban</li>
              <li>Test Driven Development</li>
              <li>Behaviour Driven Development</li>
              <li>Page Speed Development</li>
              <li>Responsive Design</li>
              <li>SOLID/TAB</li>
			  <li>MVC</li>
            </ul>
          </Col>
        </Row>
        <div className="white-space-50"></div>
        <Row></Row>
        <Row></Row>
      </div>
    </>
  );
};

export default Resume;
