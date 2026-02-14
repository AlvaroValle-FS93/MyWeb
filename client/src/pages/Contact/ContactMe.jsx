import './contact.css';

const ContactMe = () => {
  return (
    <div className='contact-component'>
      <form>
        <legend>Contact me</legend>
        <div className='group-input'>
          <label htmlFor="">Your name</label>
          <input type="text" placeholder='Enter your name'/>
        </div>
        <div className='group-input'>
          <label htmlFor="">Your email</label>
          <input type="text" placeholder='Enter your email'/>
        </div>
        <div className='group-input'>
          <label htmlFor="">Your Phone number</label>
          <input type="text" placeholder='Enter your phone number'/>
        </div>
        <div className='group-input'>
          <label htmlFor="">Let me a message</label>
          <textarea name="" id="" cols='30' rows='5'></textarea>
        </div>

        <button type='button'>Send</button>
      </form>
    </div>
  )
}

export default ContactMe