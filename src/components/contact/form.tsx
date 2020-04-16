import * as React from 'react';

const ContactForm = () => {
  return (
    <form name="portfolio-contact" method="POST" netlify-honeypot="bot-field" data-netlify="true">
      <input type="hidden" name="form-name" value="portfolio-contact" />
      <input type="hidden" name="bot-field" />
      <p>
        <label>
          Name: <input type="text" name="name" />
        </label>
      </p>
      <p>
        <label>
          Email: <input type="email" name="email" />
        </label>
      </p>
      <p>
        <label>
          Message: <textarea name="message"></textarea>
        </label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  );
};

export default ContactForm;
