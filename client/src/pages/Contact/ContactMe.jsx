import {Row, Col} from 'react-bootstrap';
import './contact.css';

const ContactMe = () => {
  return (
    <div className='contact-component'>

      <Row>

        <Col>
          <div className='contact'>
            <h3>Get in touch and let’s create amazing projects together!</h3>

            <div className='contact-details'>

              <div className='details'>
                <img src="/images/icons/location.svg" alt="location logo" />
                <div className='details-text'>
                  <h4>Location</h4>
                  <h5>Valencia, Spain</h5>
                </div>
              </div>

              <div className='details'>
                <img src="/images/icons/email.svg" alt="email logo" />
                <div className='details-text'>
                  <h4>Email</h4>
                  <h5>alvaro.valle.melga@hotmail.com</h5>
                </div>
              </div>

              <div className='details'>
                <img src="/images/icons/phone.svg" alt="email logo" />
                <div className='details-text'>
                  <h4>Phone</h4>
                  <h5>+34 697 819 510</h5>
                </div>
              </div>

            </div>

            <h5>You can also contact me on:</h5>
            <div className='also-contact'>
                <a href="https://wa.me/+34697819510?text=Hola, Álvaro!" target="_blank" rel="noopener noreferrer">
                  <div className='whatsapp'>
                    {/* <img src="/images/icons/whatsapp.svg" alt="whatsapp icon" /> */}
                    <p>WhatsApp</p>
                  </div>
                </a>

                <a href="https://t.me/+34697819510?text=Hola, Álvaro!" target="_blank" rel="noopener noreferrer">
                  <div className='telegram'>
                    {/* <img src="/images/icons/whatsapp.svg" alt="whatsapp icon" /> */}
                    <p>Telegram</p>
                  </div>
                </a>

              
            </div>
          </div>
        </Col>

        <Col>
          <form>
            <div className='group-input'>
              <label htmlFor="">Full Name</label>
              <input type="text" placeholder='Ex: John Smith'/>
            </div>
            <div className='group-input'>
              <label htmlFor="">Email</label>
              <input type="text" placeholder='myemail@example.com'/>
            </div>
            <div className='group-input'>
              <label htmlFor="">Phone Number</label>
              <input type="text" placeholder='+34 678 678 456'/>
            </div>
            <div className='group-input'>
              <label htmlFor="">Let me your message</label>
              <textarea placeholder="Hello Álvaro, I'm writing you for..." name="" id="" cols='30' rows='6'></textarea>
            </div>
            <div className='button-class'>
              <button type='button'>
                <img src="/images/icons/send.svg" alt="" />
              Send
              </button>
            </div>
          </form>
        </Col>
      </Row>
    </div>
  )
}

export default ContactMe