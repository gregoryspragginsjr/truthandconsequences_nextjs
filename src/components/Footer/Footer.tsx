import Link from 'next/link';

interface LinkItem {
  title: string,
  url: string,
}

const phoneDefault = {
  title: '+1 484.540.5288',
  url: '14845405288'
};
const emailDefault = 'Inquiries@welcometruth.com';
const socialDefault = [
  {
    title: 'Instagram',
    url: 'https://www.instagram.com/truth.consequences/'
  },
  {
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/company/truth-consequences'
  },
];
const officesDefault = [
  {
    title: 'Philadelphia, PA',
    url: 'https://www.google.com/maps/place/Truth+%26+Consequences/@39.9372853,-75.1263399,13.43z/data=!4m6!3m5!1s0x89c6c9dbb800d7c3:0x36c6e72f4eb5df3e!8m2!3d39.9547232!4d-75.1431763!16s%2Fg%2F11h_k6xdkj?entry=ttu&g_ep=EgoyMDI2MDMxMS4wIKXMDSoASAFQAw%3D%3D'
  },
  {
    title: 'Wayne, PA',
    url: 'https://www.google.com/maps/place/American+Executive+Centers+-+Office+Space+Radnor/data=!4m2!3m1!1s0x0:0x5e98632ac2c2b2cd?sa=X&ved=1t:2428&ictx=111'
  },
  {
    title: 'Job Opportunities',
    url: '/'
  },
];

export default function Footer({ phone = phoneDefault, email = emailDefault, social = socialDefault, offices = officesDefault}: { phone?: LinkItem, email?: string, social?: LinkItem[], offices?: LinkItem[] } ) {

  return (
    <footer className="footer">
      <div className="footer__inner grid">
        <div className="footer__faux-border"/>
      </div>
      <div className="footer__inner grid">
        <div className="footer__primary">
          <ul>
            <li>
              <a
                className="footer__contact"
                href={`tel:${phone.url}`}
                target="_blank"
              >
                {phone.title}
              </a>
            </li>
            <li>
              <a
                className="footer__contact"
                href={`mailto:${email}`}
                target="_blank"
              >
                {email}
              </a>
            </li>
          </ul>
          <div className="footer__mode-options">
            <h2 className="footer__subheading">Theme:</h2>
            <div
              className="footer__mode-option input-group"
              // onClick={() => { setMode(false) }}
            >
              <input
                type="radio"
                id="dark-mode-btn"
                name="theme-mode-options"
                value="dark" 
                // checked={ userInterface.lightMode === false }
              />
              <label htmlFor="dark-mode-btn">Dark</label>
            </div>
            <div
              className="footer__mode-option input-group"
              // onClick={() => { setMode(true) }}
            >
              <input
                type="radio"
                id="light-mode-btn"
                name="theme-mode-options"
                value="light" 
                // checked={userInterface.lightMode === true}
              />
              <label htmlFor="light-mode-btn">Light</label>
            </div>
          </div>
        </div>
        <div className="footer__secondary">
          <div className="footer__navigation-group">
            <h2 className="footer__heading">Social</h2>
            <ul className="footer__menu">
              {/* <li>
                <ModalBtn>Newsletter</ModalBtn>
                <Modal class="footer__mailchimp-modal">
                  <MailchimpSignup />
                </Modal>
              </li> */}
              {social?.map((item, i) => (
                <li key={i}>
                  <a
                    href={item.url}
                    target="_blank"
                  >{item.title}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer__navigation-group">
            <h2 className="footer__heading">Offices</h2>
              <ul className="footer__menu">
                {offices?.map((item, i) => (
                  <li key={i}>
                    <a
                      href={item.url}
                      target="_blank"
                    >{item.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="footer__inner grid">
          <div className="footer__bottom">
            <Link
              className="header__item"
              href="/work"
            >
              Work
            </Link>
            <Link
              className="header__item"
              href="/with-us"
            >
              With Us
            </Link>
          </div>
        </div>
        <Link href="/">
          <svg viewBox="0 0 301.3 26" className="footer__logo">
            <path d="M10.2 20.4H5.9V4.1H0V.3h16v3.8h-5.9v16.3ZM20.5 20.4h-3.8V5.9h3.8v2c1-1.3 2.8-2.3 4.6-2.3v3.7H24c-1.3 0-3 .7-3.6 1.6v9.6ZM41.2 20.4h-3.8v-1.8c-1 1.1-2.7 2.2-5.1 2.2s-4.7-1.7-4.7-4.6V5.9h3.8v8.8c0 2 1.1 2.7 2.7 2.7s2.7-.8 3.3-1.7V5.9h3.8v14.6ZM49.9 20.8c-2.7 0-4.1-1.4-4.1-4V9.2h-2.4V5.9h2.4v-4h3.9v4h3v3.3h-3v6.6c0 .9.5 1.6 1.3 1.6s1.1-.2 1.3-.4l.8 2.9c-.6.5-1.6.9-3.2.9M68.8 20.4H65v-8.9c0-2-1.1-2.7-2.7-2.7s-2.7.8-3.3 1.7v9.8h-3.8V.3H59v7.4c.9-1.1 2.7-2.3 5.1-2.3s4.7 1.7 4.7 4.6v10.3ZM91.2 16.4c1.2 1.3 2.5 2.6 3.9 4h-4.9l-1.5-1.5c-1.5 1.1-3.3 1.9-5.5 1.9-3.7 0-6.7-1.9-6.7-5.8s2.1-4.6 4.3-5.8c-.8-1.5-1.3-3-1.3-4.3 0-2.7 2.4-4.8 5.7-4.8s5.3 1.6 5.3 4.3-2.5 4.4-4.9 5.5c.6.8 1.2 1.6 1.7 2.2.6.7 1.1 1.4 1.7 2.1.8-1.3 1.5-2.7 1.8-3.9l3.1 1.4c-.7 1.6-1.7 3.3-2.8 4.9ZM83.4 4.9c0 .8.4 1.7.9 2.7 1.7-.8 3-1.7 3-3.1s-.8-1.7-1.7-1.7-2.1.9-2.1 2.1Zm.4 12.9c1.1 0 2-.4 2.9-1.1-.9-1-1.7-1.9-2.2-2.5-.7-.8-1.4-1.7-2-2.7-1 .8-1.7 1.7-1.7 3.1s1.4 3.2 3.1 3.2ZM111.9 20.8c-5.9 0-10.6-4.2-10.6-10.4S106.1 0 111.9 0s7.1 2.4 8.6 4.9l-3.7 1.8c-.8-1.6-2.7-2.9-4.9-2.9-3.5 0-6.2 2.8-6.2 6.6s2.7 6.6 6.2 6.6 4-1.3 4.9-2.9l3.7 1.8c-1.4 2.5-4 4.9-8.6 4.9M129.7 20.8c-4.8 0-7.7-3.5-7.7-7.7s2.9-7.6 7.7-7.6 7.7 3.5 7.7 7.6-2.9 7.7-7.7 7.7m0-3.4c2.4 0 3.7-2 3.7-4.3s-1.4-4.2-3.7-4.2-3.7 2-3.7 4.2 1.3 4.3 3.7 4.3M153.9 20.4h-3.8v-8.8c0-2-1.1-2.7-2.7-2.7s-2.7.8-3.3 1.7v9.8h-3.8V5.9h3.8v1.9c.9-1.1 2.7-2.3 5.1-2.3s4.7 1.8 4.7 4.6zM156.5 18.5l1.7-2.7c1.1 1 3.2 2 5 2s2.4-.6 2.4-1.5-1.3-1.4-2.9-1.7c-2.5-.5-5.7-1.1-5.7-4.6s2.1-4.6 6-4.6 4.4.8 5.8 2l-1.5 2.6c-.9-.9-2.5-1.7-4.3-1.7s-2.3.5-2.3 1.4 1.1 1.2 2.8 1.6c2.5.5 5.8 1.1 5.8 4.8s-2.3 4.7-6.3 4.7-5-.8-6.5-2.3M171.2 13.1c0-4.2 3.1-7.6 7.5-7.6s7.3 3.3 7.3 8v.8h-10.8c.2 1.8 1.7 3.4 4.2 3.4s3-.5 3.9-1.4l1.7 2.5c-1.5 1.4-3.7 2-6 2-4.4 0-7.8-3-7.8-7.7m7.5-4.5c-2.4 0-3.4 1.8-3.6 3.2h7.2c0-1.4-1.1-3.2-3.6-3.2M202.6 5.9V26h-3.9v-7.4c-1.2 1.5-2.7 2.2-4.5 2.2-3.7 0-6.4-2.8-6.4-7.7s2.7-7.6 6.4-7.6 3.4.8 4.5 2.2V5.9zm-3.8 9.8v-5.2c-.6-.9-2-1.7-3.3-1.7-2.2 0-3.7 1.7-3.7 4.2s1.5 4.3 3.7 4.3 2.7-.8 3.3-1.7ZM220.1 20.4h-3.8v-1.8c-1 1.1-2.7 2.2-5.1 2.2s-4.7-1.7-4.7-4.6V5.9h3.8v8.8c0 2 1.1 2.7 2.7 2.7s2.7-.8 3.3-1.7V5.9h3.8v14.6ZM222.9 13.1c0-4.2 3.1-7.6 7.5-7.6s7.3 3.3 7.3 8v.8h-10.8c.2 1.8 1.7 3.4 4.2 3.4s3-.5 3.9-1.4l1.7 2.5c-1.5 1.4-3.7 2-6 2-4.4 0-7.8-3-7.8-7.7m7.6-4.5c-2.4 0-3.4 1.8-3.6 3.2h7.2c0-1.4-1.1-3.2-3.6-3.2M254.2 20.4h-3.8v-8.8c0-2-1.1-2.7-2.7-2.7s-2.7.8-3.3 1.7v9.8h-3.8V5.9h3.8v1.9c.9-1.1 2.7-2.3 5.1-2.3s4.7 1.8 4.7 4.6zM257.1 13.1c0-4.5 3.2-7.6 7.7-7.6s4.8 1.3 5.8 2.7l-2.5 2.3c-.7-1-1.7-1.6-3.1-1.6-2.3 0-4 1.7-4 4.2s1.6 4.3 4 4.3 2.4-.6 3.1-1.6l2.5 2.3c-1 1.4-2.8 2.7-5.8 2.7-4.5 0-7.7-3.2-7.7-7.7M272.1 13.1c0-4.2 3.1-7.6 7.5-7.6s7.3 3.3 7.3 8v.8h-10.8c.2 1.8 1.7 3.4 4.2 3.4s3-.5 3.9-1.4l1.7 2.5c-1.5 1.4-3.7 2-6 2-4.4 0-7.8-3-7.8-7.7m7.6-4.5c-2.4 0-3.4 1.8-3.6 3.2h7.2c0-1.4-1.1-3.2-3.6-3.2M288.5 18.5l1.7-2.7c1.1 1 3.2 2 5 2s2.4-.6 2.4-1.5-1.3-1.4-2.9-1.7c-2.5-.5-5.7-1.1-5.7-4.6s2.1-4.6 6-4.6 4.4.8 5.9 2l-1.5 2.6c-.9-.9-2.5-1.7-4.3-1.7s-2.3.5-2.3 1.4 1.1 1.2 2.8 1.6c2.5.5 5.9 1.1 5.9 4.8s-2.3 4.7-6.3 4.7-5-.8-6.5-2.3Z" />
          </svg>
        </Link>
    </footer>
  );
}