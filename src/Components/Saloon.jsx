import React ,{useState} from 'react';
import './Saloon.css';
import img5 from './Image/img5.jpg';
import img6 from './Image/img6.jpg';
import img8 from './Image/img8.jpg';
import Ashish from './Image/img7.jpg';


function Saloon() {
    const services = [
        { title: 'Haircuts', description: 'Precision cuts for men, women, and children.' },
        { title: 'Coloring', description: 'Professional coloring services, including highlights and balayage.' },
        { title: 'Styling', description: 'Expert styling for any occasion.' },
        { title: 'Treatments', description: 'Revitalizing hair treatments for healthy, shiny hair.' }
      ];
      const images = [
        img6,
        Ashish,
        img5,
        img6,
        img8,
        img5,
      ];
      const testimonials = [
        {
          name: 'Ashish',
          text: 'This salon is amazing! The stylists are very professional and the atmosphere is so relaxing.',
          image: img5,
        },
        {
          name: 'Ashish',
          text: 'I always leave this salon feeling refreshed and beautiful. Highly recommended!',
          image: img6,
        },
        {
          name: 'Ashish',
          text: 'Fantastic service and friendly staff. I wouldn\'t go anywhere else for my haircuts.',
          image: img8,
        }
      ];

      const blogPosts = [
        {
          title: 'Top Hair Trends of 2024',
          summary: 'Explore the latest hair trends and styles for 2024.',
          date: 'July 1, 2024',
          image: img5,
          link: '#'
        },
        {
          title: 'How to Maintain Healthy Hair',
          summary: 'Tips and tricks for keeping your hair healthy and strong.',
          date: 'June 25, 2024',
          image: img6,
          link: '#'
        },
        {
          title: 'The Benefits of Regular Hair Treatments',
          summary: 'Learn why regular hair treatments are essential for hair health.',
          date: 'June 15, 2024',
          image: img8,
          link: '#'
        }
      ];

      const [form, setForm] = useState({
        name: '',
        email: '',
        date: '',
        time: '',
        service: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', form);
      };
      const [form1, setForm1] = useState({
        name: '',
        email: '',
        message: ''
      });
    
      const handleChange2 = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
      };
    
      const handleSubmit2 = (e) => {
        e.preventDefault();
        // Handle form submission (e.g., send data to backend)
        console.log('Form submitted:', form);
        // Reset form fields after submission
        setForm({ name: '', email: '', message: '' });
      };
      


  return (
    
    <div>
       <div className="hero-container">
      <div className="hero-content">
        <h1 className="hero-title">Transform Your Look at Our Premier Salon</h1>
        <p className="hero-subtitle">Expert stylists, luxury treatments, and a relaxing atmosphere</p>
        <button className="hero-btn">Book Your Appointment</button>
      </div>
    </div>


    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/Saloon">Apna  Saloon </a>
      </div>
      <ul className="navbar-menu">
        <li className="navbar-item"><a href="#home">Home</a></li>
        <li className="navbar-item"><a href="#about">About Us</a></li>
        <li className="navbar-item"><a href="#services">Services</a></li>
        <li className="navbar-item"><a href="#gallery">Gallery</a></li>
        <li className="navbar-item"><a href="#testimonials">Testimonials</a></li>
        <li className="navbar-item"><a href="#blog">Blog</a></li>
        <li className="navbar-item"><a href="#contact">Contact</a></li>
        <li className="navbar-item"><a href="#book" className="navbar-btn">Book Now</a></li>
      </ul>
    </nav>


    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="about-title">About Us</h2>
        <p className="about-description">
          Welcome to our salon! We have been providing top-notch beauty services for over a decade. Our team of experienced stylists and beauticians is dedicated to helping you look and feel your best. We use only the highest quality products and the latest techniques to ensure you leave our salon feeling refreshed and rejuvenated.
        </p>
        <div className="team">
          <div className="team-member">
            <img src={img5} alt="Team Member 1" className="team-photo" />
            <h3 className="team-name">Ashish</h3>
            <p className="team-role">Founder</p>
          </div>
          <div className="team-member">
            <img src={img5} alt="Team Member 2" className="team-photo" />
            <h3 className="team-name">Ashish</h3>
            <p className="team-role">Co-Founder</p>
          </div>
          {/* <!-- Add more team members as needed --> */}
        </div>
      </div>
    </section>

    <section id="services" className="services-section">
      <div className="services-container">
        <h2 className="services-title">Our Services</h2>
        <div className="services-list">
          {services.map((service, index) => (
            <div key={index} className="service-item">
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section id="gallery" className="gallery-section">
      <div className="gallery-container">
        <h2 className="gallery-title">Gallery</h2>
        <div className="gallery-grid">
          {images.map((image, index) => (
            <div key={index} className="gallery-item">
              <img src={image} alt={`Gallery ${index + 1}`} className="gallery-image" />
            </div>
          ))}
        </div>
      </div>
    </section>
    <section id="testimonials" className="testimonials-section">
      <div className="testimonials-container">
        <h2 className="testimonials-title">Testimonials</h2>
        <div className="testimonials-list">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-item">
              <img src={testimonial.image} alt={`${testimonial.name}`} className="testimonial-image" />
              <p className="testimonial-text">"{testimonial.text}"</p>
              <h3 className="testimonial-name">{testimonial.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>





    <section id="blog" className="blog-section">
      <div className="blog-container">
        <h2 className="blog-title">From Our Blog</h2>
        <div className="blog-list">
          {blogPosts.map((post, index) => (
            <div key={index} className="blog-item">
              <img src={post.image} alt={post.title} className="blog-image" />
              <div className="blog-content">
                <h3 className="blog-post-title">{post.title}</h3>
                <p className="blog-date">{post.date}</p>
                <p className="blog-summary">{post.summary}</p>
                <a href={post.link} className="blog-link">Read More</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>






    <section id="appointment" className="appointment-section">
      <div className="appointment-container">
        <h2 className="appointment-title">Book an Appointment</h2>
        <form className="appointment-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="appointment-input"
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="appointment-input"
          />
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            required
            className="appointment-input"
          />
          <input
            type="time"
            name="time"
            value={form.time}
            onChange={handleChange}
            required
            className="appointment-input"
          />
          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            required
            className="appointment-input"
          >
            <option value="">Select a Service</option>
            <option value="Haircut">Haircut</option>
            <option value="Coloring">Coloring</option>
            <option value="Styling">Styling</option>
            <option value="Treatment">Treatment</option>
          </select>
          <button type="submit" className="appointment-button">Book Now</button>
        </form>
      </div>
    </section>

    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">Contact Us</h2>
        <form className="contact-form" onSubmit={handleSubmit2}>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange2}
            placeholder="Your Name"
            required
            className="contact-input"
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange2}
            placeholder="Your Email"
            required
            className="contact-input"
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange2}
            placeholder="Your Message"
            required
            rows="5"
            className="contact-input"
          ></textarea>
          <button type="submit" className="contact-button">Send Message</button>
        </form>
      </div>
    </section>


    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-left">
          <h2 className="footer-logo"> Apna Saloon</h2>
          <p className="footer-description">Transform Your Look at Our Premier Salon</p>
          <div className="footer-social-icons">
            <a href="#facebook" className="social-icon">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#twitter" className="social-icon">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#instagram" className="social-icon">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className="footer-right">
          <h3 className="footer-contact">Contact Us</h3>
          <p className="footer-contact-info">
            Address: Sansanati Gali Godoun Ke Peeche Jang khaila Tabela <br />
            Phone: 9871532106 <br />
            Email: Ashish.2024csit1134@kiet.edu
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-text">© 2024 Apna Saloon. All rights reserved.</p>
      </div>
    </footer>


    </div>
    
  )
}


export default Saloon
