import * as React from 'react';

const ContactForm = () => {
  return (
    <form name="portfolio-contact" method="POST" data-netlify-recaptcha="true" data-netlify="true">
      <input type="hidden" name="form-name" value="portfolio-contact" />
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
      <div data-netlify-recaptcha="true"></div>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  );
};

export default ContactForm;
