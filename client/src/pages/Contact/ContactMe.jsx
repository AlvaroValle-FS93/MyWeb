import { useState } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import axios from 'axios';
import {ZodError} from 'zod';
import './contact.css';
import contactSchema from '../../schemas/contactShema';

const initialValues = {
  name: '',
  email: '',
  phone: '',
  message: ''
}

const ContactMe = () => {

  const [data, setData] = useState(initialValues);
  const [valErrors, setValErrors] = useState();
  console.log(valErrors);
  const [fetchError, setFetchError] = useState();
  console.log(fetchError);
  const [messageOk, setMessageOk] = useState();

  const handleChange = (e) => {
    const {name, value} = e.target;
    setData({...data, [name]: value});
  }

  const submit = async () => {

    try {

      // Data validation in front
      contactSchema.parse(data);

      /* http://localhost:4000 */
      const result = await axios.post('https://myweb-alvarovalle-backend-production.up.railway.app/api/users/contact', data);
      console.log(result);
      setData(initialValues);
      setMessageOk('Your data has been submitted successfully.');
      setValErrors();
      
    } catch (error) {
      
      if (error instanceof ZodError) {
        const fieldErrors = {}
          error.issues.forEach((elem) => {
            fieldErrors[elem.path[0]] = elem.message;
          })
          setValErrors(fieldErrors)
      }
      else {
        setValErrors({})
          if (error.response.data.errno === 1062){
            setFetchError('Email repetido');
          } else {
            console.log(error)
            setFetchError('Uppsss error chungo')
          }
      }
    }

  }



  return (
    <section id='contact' className='contact-component'>
     
      <Container xxl>
        <Row className='title'>
          <Col className='text-center'>
            <div className='title-section'>
              <img src="/images/icons/contact.svg" alt="" />
              <h2>Contact me</h2>
            </div>
            <h5>Check out my contact options, and if you have any questions or would like to discuss a project, don’t hesitate to get in touch with me. I’ll be happy to talk with you.</h5>
          </Col>
        </Row>
        <Row className='d-flex gap-3'>
          <Col>
            <div className='contact'>
              <h4>Get in touch and let’s create amazing projects together!</h4>
              <div className='contact-details'>
                <div className='details'>
                  <img src="/images/icons/location.svg" alt="location logo" />
                  <div className='details-text'>
                    <h5>Location</h5>
                    <h6>Valencia, Spain</h6>
                  </div>
                </div>
                <div className='details'>
                  <img src="/images/icons/email.svg" alt="email logo" />
                  <div className='details-text'>
                    <h5>Email</h5>
                    <p>alvaro.valle.melga@hotmail.com</p>
                  </div>
                </div>
                <div className='details'>
                  <img src="/images/icons/phone.svg" alt="email logo" />
                  <div className='details-text'>
                    <h5>Phone</h5>
                    <h6>+34 697 819 510</h6>
                  </div>
                </div>
              </div>
              <h5>You can also contact me on:</h5>
              <div className='also-contact'>
                  <a href="https://wa.me/+34697819510?text=Hola, Álvaro!" target="_blank" rel="noopener noreferrer">
                    <div className='whatsapp'>
                      <img src="/images/icons/whatsapp.svg" alt="whatsapp icon" />
                      <p>WhatsApp</p>
                    </div>
                  </a>
                  <a href="https://t.me/+34697819510?text=Hola, Álvaro!" target="_blank" rel="noopener noreferrer">
                    <div className='telegram'>
                      <img src="/images/icons/telegram.svg" alt="whatsapp icon" />
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
                <input
                  type="text"
                  placeholder='Ex: John Smith'
                  onChange={handleChange}
                  value={data.name}
                  name='name'
                />
                {valErrors?.name && <p className='alert-error'>{valErrors.name} x</p>}
              </div>
              <div className='group-input'>
                <label htmlFor="">Email</label>
                <input
                  type="text"
                  placeholder='myemail@example.com'
                  onChange={handleChange}
                  value={data.email}
                  name='email'
                />
                {valErrors?.email && <p className='alert-error'>{valErrors.email} x</p>}
              </div>
              <div className='group-input'>
                <label htmlFor="">Phone Number (not mandatory)</label>
                <input
                  type="text"
                  placeholder='+34 678 678 456'
                  onChange={handleChange}
                  value={data.phone}
                  name='phone'
                />
                {valErrors?.phone && <p className='alert-error'>{valErrors.phone} x</p>}
              </div>
              <div className='group-input'>
                <label htmlFor="">Let me your message</label>
                <textarea
                  placeholder="Hello Álvaro, I'm writing you for..."
                  id=""
                  cols='30'
                  rows='6'
                  onChange={handleChange}
                  value={data.message}
                  name='message'
                ></textarea>
                {valErrors?.message && <p className='alert-error'>{valErrors.message} x</p>}
              </div>
                {messageOk && <p className='alert-success'>{messageOk}</p>}
                <div className="button-container">
                  <button className='my-primary-button' onClick={submit} type='button'>
                    <img src="/images/icons/send.svg" alt="" />
                  Send
                  </button>
                </div>
                <p className='text-center fst-italic'>* By submitting this form, you agree to the Privacy Policy.</p>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default ContactMe