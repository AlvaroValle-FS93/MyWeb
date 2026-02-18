import {Container, Row} from 'react-bootstrap';
import {Card} from 'react-bootstrap';
import './portfolio.css';

const MyPortfolio = () => {
  return (
    <div className='portfolio-component'>
      <Container xxl>
        <div className="portfolio">
          <div className='portfolio-title'>
            <img src="/images/icons/portfolio.svg" alt="" />
            <h2>Portfolio</h2>
          </div>
          <h5 className='text-center'>Check out my projects</h5>

          <div className='project'>
            <div className='bg-img'>
              <p className='tag'>New Project</p>
            </div>
            <div className='project-body'>
              <div className='type'>
                <img src="/images/icons/folder.svg" alt="folder icon" />
                <p>Web App</p>
              </div>

              <h3>Circular Score</h3>

              <p>This app enables companies to assess their performance across the 17 Sustainable Development Goals (SDGs). It allows businesses to analyze their data, measure their sustainability levels, and compare their results with other companies.</p>

              <p>The app includes an administrator profile, allowing admins to access data analysis and performance metrics to support data-driven decision-making.</p>

              <div className='tags'>
                <div className='technologies'>React</div>
                <div className='technologies'>Node.js</div>
                <div className='technologies'>MySQL</div>
                <div className='technologies'>Express</div>
                <div className='technologies'>JWEBToken</div>
                <div className='technologies'>Nodemailer</div>
                <div className='technologies'>Multer</div>
                <div className='technologies'>BCrypt</div>
                <div className='technologies'>Axios</div>
                <div className='technologies'>Recharts</div>
              </div>

              <div className='button-container'>
                <a target='_blank' href="https://github.com/AlvaroValle-FS93/CircularScore">
                  <p>See the code</p>
                  <img src="/images/icons/arrow.svg" alt="" />
                </a>
                <a target='_blank' href="https://www.youtube.com/watch?v=qmeBNp-i9XM&t=4s">
                  <p>Video presentation</p>
                  <img src="/images/icons/youtube.svg" alt="" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </div>
  )
}

export default MyPortfolio