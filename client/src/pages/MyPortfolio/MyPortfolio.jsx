import { Container, Row, Col } from 'react-bootstrap';
import './portfolio.css';

const MyPortfolio = () => {
  return (
    <section id="portfolio" className="portfolio-component">
      <Container xxl>
        <div className="portfolio">
          <div className="title-section">
            <img src="/images/icons/portfolio.svg" alt="" />
            <h2>Portfolio</h2>
          </div>
          <h5 className="text-center">Check out my projects</h5>

          <div className="button-container d-flex justify-content-center">
            <a
              href="https://www.github.com/AlvaroValle-FS93"
              target="_blank"
              className="my-primary-button"
            >
              See more in GitHub
            </a>
          </div>

          <Row className="d-flex justify-content-center gap-5">
            <Col sm={12} className="project p-0">
              <div className="project">
                <div
                  className="bg-img"
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(0, 0, 0, 0.8)), url("/images/projects/circular-score.png")',
                  }}
                >
                  <p className="new-project">New Project</p>
                </div>
                <div className="project-body">
                  <div className="type">
                    <img src="/images/icons/folder.svg" alt="folder icon" />
                    <p>Web App</p>
                  </div>

                  <h4>Circular Score</h4>

                  <div className="description">
                    <p>
                      This app enables companies to assess their performance
                      across the 17 Sustainable Development Goals (SDGs). It
                      allows businesses to analyze their data, measure their
                      sustainability levels, and compare their results with
                      other companies.
                    </p>
                    <p>
                      The app includes an administrator profile, allowing admins
                      to access data analysis and performance metrics to support
                      data-driven decision-making.
                    </p>
                  </div>

                  <div className="tags">
                    <div className="in-progress">React</div>
                    <div className="in-progress">Node.js</div>
                    <div className="in-progress">MySQL</div>
                    <div className="in-progress">Express</div>
                    <div className="in-progress">JWEBToken</div>
                    <div className="in-progress">Nodemailer</div>
                    <div className="in-progress">Multer</div>
                    <div className="in-progress">BCrypt</div>
                    <div className="in-progress">Axios</div>
                    <div className="in-progress">Recharts</div>
                  </div>

                  <div className="button-container">
                    <a
                      className="my-primary-button"
                      target="_blank"
                      href="https://github.com/AlvaroValle-FS93/CircularScore"
                    >
                      <p>See the code</p>
                      <img src="/images/icons/arrow.svg" alt="" />
                    </a>
                    <a
                      className="my-primary-button"
                      target="_blank"
                      href="https://www.youtube.com/watch?v=qmeBNp-i9XM&t=4s"
                    >
                      <p>Video presentation</p>
                      <img src="/images/icons/youtube.svg" alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </Col>
            <Col sm={12} className="project p-0">
              <div
                className="bg-img"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(0, 0, 0, 0.8)), url("/images/projects/europe.webp")',
                }}
              >
                <p className="in-progress">In progress...</p>
              </div>
              <div className="project-body">
                <div className="type">
                  <img src="/images/icons/folder.svg" alt="folder icon" />
                  <p>Web App - Mobile App</p>
                </div>
                <h4>European Journey</h4>
                <div className="description">
                  <p>
                    I developed an interactive web app for candidates preparing
                    for European Union exams. Users can securely register, take
                    realistic practice tests, track their results, and analyze
                    progress with detailed statistics highlighting strengths and
                    areas for improvement.
                  </p>
                  <p>
                    The platform also includes features to encourage engagement
                    and motivation, such as exam history, performance summaries,
                    and comparative rankings, making it a complete tool for
                    efficient exam preparation.
                  </p>
                </div>
                <div className="tags">
                  <div className="in-progress">React</div>
                  <div className="in-progress">Django</div>
                  <div className="in-progress">MySQL</div>
                  <div className="in-progress">jsonwebtoken</div>
                  <div className="in-progress">Axios</div>
                  <div className="in-progress">Recharts</div>
                </div>
              </div>
            </Col>

            <Col sm={12} className="project p-0">
              <div
                className="bg-img"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(0, 0, 0, 0.8)), url("/images/projects/finanzes.png")',
                }}
              >
                <p className="in-progress">In progress...</p>
              </div>
              <div className="project-body">
                <div className="type">
                  <img src="/images/icons/folder.svg" alt="folder icon" />
                  <p>Web App</p>
                </div>
                <h4>Circular Score</h4>
                <div className="description">
                  <p>
                    I developed a web application designed to help users manage
                    their personal finances efficiently. The platform allows
                    users to track income and expenses, categorize transactions,
                    and visualize their financial data through interactive
                    charts and reports.
                  </p>
                  <p>
                    Additionally, the app includes data analysis features that
                    help users identify spending patterns, optimize budgets, and
                    make informed financial decisions. Its intuitive interface
                    and real-time insights make it a powerful tool for achieving
                    better financial control and planning.
                  </p>
                </div>
                <div className="tags">
                  <div className="in-progress">React</div>
                  <div className="in-progress">Node.js</div>
                  <div className="in-progress">MySQL</div>
                  <div className="in-progress">Django</div>
                  <div className="in-progress">JWEBToken</div>
                  <div className="in-progress">Nodemailer</div>
                  <div className="in-progress">Multer</div>
                  <div className="in-progress">BCrypt</div>
                  <div className="in-progress">Axios</div>
                  <div className="in-progress">Recharts</div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default MyPortfolio;
