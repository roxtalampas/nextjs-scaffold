import Image from 'next/image'
import Link from 'next/link'




const Footer = () => {
  return (
    <footer className="site-footer">
  <div className="container">
    <div className="footer-content">
      {/* Company Info Column */}
      <div className="footer-column company-info">
        <div className="logo">
          <Link href="/">
            <Image src="/kiun-studio-logo.svg" alt="Footer Logo" width={178} height={178} />
          </Link>
        </div>
        <p>
          We are a team of web developers and designers who are passionate about creating beautiful and functional websites.
        </p>
      </div>

      {/* Quick Links Column */}
      <div className="footer-column pt-4 md:pt-0">
        <h3>Quick Links</h3>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/projects">Projects</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </div>

      {/* Office Address Column */}
      <div className="footer-column pt-4 md:pt-0">
        <h3>Location</h3>
        <p className="address"><b className="text-1">Head Office:</b><br />38 Lowe Street Addington Christchurch 8011</p>
        <p className="address"><b className="text-1">Office:</b><br/>
        Tower 2, Level 3 (RHS), 205 Queen Street, Auckland 1010</p>
        
      </div>

      

      {/* Contact us Column */}
      <div className="footer-column pt-4 md:pt-0">
        <h3>Contact us</h3>
        <p className="contact-item">
          <a href="tel:+64210222222" className="phone">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <g clipPath="url(#clip0_10362_3321)">
                <path d="M5.15312 0.768478C4.9125 0.187228 4.27812 -0.122147 3.67188 0.0434781L0.921875 0.793478C0.378125 0.943478 0 1.43723 0 1.99973C0 9.73098 6.26875 15.9997 14 15.9997C14.5625 15.9997 15.0563 15.6216 15.2063 15.0779L15.9563 12.3279C16.1219 11.7216 15.8125 11.0872 15.2312 10.8466L12.2312 9.5966C11.7219 9.3841 11.1313 9.53098 10.7844 9.9591L9.52188 11.4997C7.32188 10.4591 5.54063 8.67785 4.5 6.47785L6.04063 5.21848C6.46875 4.86848 6.61562 4.28098 6.40312 3.7716L5.15312 0.771603V0.768478Z" fill="currentColor"/>
              </g>
              <defs>
                <clipPath id="clip0_10362_3321">
                  <rect width="16" height="16" fill="white"/>
                </clipPath>
              </defs>
            </svg> +64 21 022 2222
          </a>
        </p>
        <p className="contact-item">
          <a href="mailto:hello@kiunstudio.com" className="email">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M1.5 2C0.671875 2 0 2.67188 0 3.5C0 3.97187 0.221875 4.41562 0.6 4.7L7.4 9.8C7.75625 10.0656 8.24375 10.0656 8.6 9.8L15.4 4.7C15.7781 4.41562 16 3.97187 16 3.5C16 2.67188 15.3281 2 14.5 2H1.5ZM0 5.5V12C0 13.1031 0.896875 14 2 14H14C15.1031 14 16 13.1031 16 12V5.5L9.2 10.6C8.4875 11.1344 7.5125 11.1344 6.8 10.6L0 5.5Z" fill="currentColor"/>
            </svg> hello@kiunstudio.com
          </a>
        </p>

      </div>


    </div>

    <div className="footer-bottom">
      <div className="copyright">
        <span>© Copyright 2026 Kiun Studio. All Right Reserved. Website designed by <span className="kiun">Kiun Studio</span></span>
      </div>
      <div className="social-icons">
        <a href="#" target='_blank' className="social-icon">
        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Facebook</title><path fill="currentColor" d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"/></svg>
        </a>
        <a href="#" target='_blank' className="social-icon">
          <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path fill="currentColor" d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"/></svg>
        </a>
      </div>
    </div>
  </div>
</footer>
  )
}

export default Footer