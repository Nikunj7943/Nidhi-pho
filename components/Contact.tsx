import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { CONTACT_EMAIL } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Wedding',
    message: ''
  });
  
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      // Using FormSubmit.co for backend-less email handling
      // NOTE: The first time this runs, the owner (nikunj7943@gmail.com) will receive an activation email.
      // They must confirm it to start receiving messages.
      const response = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            ...formData,
            _subject: `New Inquiry: ${formData.service} - ${formData.name}`,
            _template: 'table'
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', service: 'Wedding', message: '' });
        // Reset success message after 5 seconds
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12">
          
          {/* Contact Info */}
          <div className="w-full md:w-1/3">
            <h2 className="text-4xl font-serif font-bold mb-6">Get in <span className="text-brand-red">Touch</span></h2>
            <p className="text-gray-400 mb-8">
              Ready to capture your memories? Fill out the form to send us a message directly, or reach out via phone.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center text-brand-gold">
                  <Mail />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold">Email</p>
                  {/* <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-brand-red transition-colors">{CONTACT_EMAIL}</a> */}
                <a href="mailto:nidhistudio@gmail.com" className="hover:text-brand-red transition-colors">
  nidhistudio@gmail.com
</a>

                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center text-brand-gold">
                  <Phone />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold">Phone</p>
                  <p className="hover:text-brand-red transition-colors">+919328518239</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center text-brand-gold">
                  <MapPin />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold">Studio</p>
                  <p>Near Vrundavan Primary School,Navli-388355 Anand</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="w-full md:w-2/3 bg-brand-dark p-8 rounded-xl border border-gray-800 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-black border border-gray-700 rounded-lg p-3 text-white focus:border-brand-red focus:ring-1 focus:ring-brand-red outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-black border border-gray-700 rounded-lg p-3 text-white focus:border-brand-red focus:ring-1 focus:ring-brand-red outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Service Type</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full bg-black border border-gray-700 rounded-lg p-3 text-white focus:border-brand-red focus:ring-1 focus:ring-brand-red outline-none transition-all"
                >
                  <option value="Wedding">Wedding Photography</option>
                  <option value="Portrait">Portrait Session</option>
                  <option value="Event">Event Coverage</option>
                  <option value="Commercial">Commercial / Product</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-black border border-gray-700 rounded-lg p-3 text-white focus:border-brand-red focus:ring-1 focus:ring-brand-red outline-none transition-all"
                  placeholder="Tell us about your event date, venue, and requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === 'submitting' || status === 'success'}
                className={`w-full font-bold py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group ${
                    status === 'success' 
                        ? 'bg-green-600 cursor-default' 
                        : 'bg-brand-red hover:bg-red-700 text-white'
                }`}
              >
                {status === 'submitting' ? (
                    <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Sending...</span>
                    </>
                ) : status === 'success' ? (
                    <>
                        <CheckCircle className="w-5 h-5" />
                        <span>Message Sent!</span>
                    </>
                ) : (
                    <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                )}
              </button>

              {status === 'error' && (
                  <div className="flex items-center justify-center gap-2 text-red-400 text-sm mt-2">
                      <AlertCircle size={16} />
                      <span>Something went wrong. Please try again or email directly.</span>
                  </div>
              )}
              
              <p className="text-center text-xs text-gray-500 mt-2">
                We will reply to the email address provided.
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;