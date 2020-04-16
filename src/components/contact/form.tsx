import * as React from 'react';

const ContactForm = () => {
  return (
    <form name="portfolio-contact" method="POST" data-netlify="true">
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
      <div data-netlify-recaptcha="true"></div>
    </form>
  );
};

export default ContactForm;
