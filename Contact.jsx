const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white text-center">
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
      <form action="https://formspree.io/f/yourformid" method="POST" className="max-w-md mx-auto flex flex-col gap-4">
        <input type="text" name="name" placeholder="Your Name" className="p-3 border rounded" required />
        <input type="email" name="email" placeholder="Your Email" className="p-3 border rounded" required />
        <textarea name="message" placeholder="Your Message" className="p-3 border rounded" required />
        <button className="bg-blue-500 text-white py-3 rounded hover:bg-blue-600">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;