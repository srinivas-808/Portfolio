import React, { useState } from 'react';
import Button from '../ui/Button';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

type ContactProps = {
  isDarkMode: boolean;
};

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const Contact: React.FC<ContactProps> = ({ isDarkMode }) => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      value: 'srinivaskola808@gmail.com',
      link: 'srinivaskola808@gmail.com',
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      value: '+91 7674959549',
      link: '+91 7674959549',
    },
    {
      icon: <MapPin size={24} />,
      title: 'Location',
      value: 'Visakhapatnam, AP',
      link: 'https://www.google.com/maps/place/Visakhapatnam',
    },
  ];
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error for this field if it exists
    if (errors[name as keyof FormState]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };
  
  const validateForm = (): boolean => {
    const newErrors: Partial<FormState> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        
        // Reset form after 3 seconds
        setTimeout(() => {
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
          });
          setSubmitSuccess(false);
        }, 3000);
      }, 1500);
    }
  };

  return (
    <section id="contact" className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-6 relative inline-block">
            <span className={isDarkMode ? 'text-white' : 'text-gray-900'}>Get In Touch</span>
            <div className="h-1 w-1/2 bg-blue-600 absolute -bottom-2 left-1/4 rounded-full"></div>
          </h2>
          <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            I'm always open to new opportunities and collaborations.
            Don't hesitate to reach out if you have a question or just want to say hello!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact information */}
          <div className="lg:col-span-1">
            <div className={`p-6 rounded-lg h-full ${isDarkMode ? 'bg-gray-700' : 'bg-white'}`}>
              <h3 className={`text-xl font-semibold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className={`p-3 rounded-full ${
                      isDarkMode ? 'bg-gray-600 text-blue-400' : 'bg-blue-100 text-blue-600'
                    }`}>
                      {info.icon}
                    </div>
                    <div>
                      <h4 className={`font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        {info.title}
                      </h4>
                      <a 
                        href={info.link} 
                        className={`text-blue-600 hover:underline ${isDarkMode ? 'text-blue-400' : ''}`}
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-600">
                <h4 className={`font-medium mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  Follow Me
                </h4>
                <div className="flex space-x-4">
                  {['github', 'twitter', 'linkedin', 'dribbble'].map(platform => (
                    <a 
                      key={platform}
                      href={`https://${platform}.com`} 
                      className={`p-2 rounded-full transition-all duration-300 ${
                        isDarkMode 
                          ? 'bg-gray-600 text-gray-300 hover:bg-gray-500' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Follow on ${platform}`}
                    >
                      <svg 
                        className="w-5 h-5" 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="24" 
                        height="24" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      >
                        {platform === 'github' && (
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                        )}
                        {platform === 'twitter' && (
                          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                        )}
                        {platform === 'linkedin' && (
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                        )}
                        {platform === 'dribbble' && (
                          <circle cx="12" cy="12" r="10" />
                        )}
                        {platform === 'dribbble' && (
                          <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32" />
                        )}
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact form */}
          <div className="lg:col-span-2">
            <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-white'}`}>
              <h3 className={`text-xl font-semibold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Send Me a Message
              </h3>
              
              {submitSuccess ? (
                <div className="bg-green-100 dark:bg-green-900/30 border border-green-400 dark:border-green-700 text-green-700 dark:text-green-300 px-4 py-3 rounded mb-4">
                  <p>Your message has been sent successfully! I'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label 
                        htmlFor="name" 
                        className={`block text-sm font-medium mb-1 ${
                          isDarkMode ? 'text-gray-300' : 'text-gray-700'
                        }`}
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-3 py-2 rounded-md border ${
                          errors.name
                            ? 'border-red-500 dark:border-red-400'
                            : isDarkMode
                              ? 'border-gray-600 bg-gray-800 text-white'
                              : 'border-gray-300 bg-white text-gray-900'
                        } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        placeholder="John Doe"
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name}</p>
                      )}
                    </div>
                    <div>
                      <label 
                        htmlFor="email" 
                        className={`block text-sm font-medium mb-1 ${
                          isDarkMode ? 'text-gray-300' : 'text-gray-700'
                        }`}
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-3 py-2 rounded-md border ${
                          errors.email
                            ? 'border-red-500 dark:border-red-400'
                            : isDarkMode
                              ? 'border-gray-600 bg-gray-800 text-white'
                              : 'border-gray-300 bg-white text-gray-900'
                        } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        placeholder="john@example.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email}</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label 
                      htmlFor="subject" 
                      className={`block text-sm font-medium mb-1 ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 rounded-md border ${
                        errors.subject
                          ? 'border-red-500 dark:border-red-400'
                          : isDarkMode
                            ? 'border-gray-600 bg-gray-800 text-white'
                            : 'border-gray-300 bg-white text-gray-900'
                      } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      placeholder="Project Inquiry"
                    />
                    {errors.subject && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.subject}</p>
                    )}
                  </div>
                  
                  <div className="mb-6">
                    <label 
                      htmlFor="message" 
                      className={`block text-sm font-medium mb-1 ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 rounded-md border ${
                        errors.message
                          ? 'border-red-500 dark:border-red-400'
                          : isDarkMode
                            ? 'border-gray-600 bg-gray-800 text-white'
                            : 'border-gray-300 bg-white text-gray-900'
                      } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      placeholder="I'd like to discuss a project with you..."
                    ></textarea>
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.message}</p>
                    )}
                  </div>
                  
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full sm:w-auto flex items-center justify-center gap-2"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} /> Send Message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;