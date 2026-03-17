import { useForm, ValidationError } from '@formspree/react';
import { Mail, Phone, MapPin, Send, Check, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { LuxurySection } from '@/components/layout/LuxurySection';

const Contact = () => {
  // Hook do Formspree (Substitua pelo seu ID real se ainda não tiver feito)
  const [state, handleSubmit] = useForm("xvzglgjj");

  const inputBase = "w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent focus:bg-background focus:ring-1 focus:ring-accent/50 transition-all";
  const labelBase = "block text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2";

  return (
    <div className="min-h-screen bg-background pt-20">
      
      {/* HERO SECTION 
          CORREÇÃO AQUI: Removida a classe "border-b border-white/5".
          Agora o LuxurySection usará apenas suas próprias linhas padronizadas.
      */}
      <LuxurySection>
        <div className="text-center fade-in-up max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-6">
            Get in Touch
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Have questions? We're here to help. Reach out to our dedicated team for personalized
            assistance with your luxury wig needs.
          </p>
        </div>
      </LuxurySection>

      {/* FORM & INFO SECTION */}
      <LuxurySection>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* ESQUERDA: Formulário */}
          <div className="bg-card border border-border p-8 md:p-10 rounded-2xl shadow-lg fade-in-up">
            
            {state.succeeded ? (
              // TELA DE SUCESSO
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }}
                className="flex flex-col items-center justify-center text-center h-full min-h-[400px]"
              >
                <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                  <Check className="w-10 h-10 text-accent" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-foreground mb-4">Message Sent</h3>
                <p className="text-muted-foreground max-w-sm">
                  Thank you for reaching out. Our team will review your message and get back to you shortly via email.
                </p>
              </motion.div>
            ) : (
              // FORMULÁRIO DE ENVIO
              <>
                <h2 className="font-serif text-3xl font-bold text-foreground mb-2">
                  Send Us a Message
                </h2>
                <p className="text-muted-foreground mb-8 text-sm">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className={labelBase}>First Name</label>
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        required
                        className={inputBase}
                        placeholder="Jane"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className={labelBase}>Last Name</label>
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        required
                        className={inputBase}
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className={labelBase}>Email Address</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className={inputBase}
                      placeholder="name@example.com"
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-xs mt-1"/>
                  </div>

                  <div>
                    <label htmlFor="phone" className={labelBase}>Phone (Optional)</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className={inputBase}
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className={labelBase}>Message</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className={`${inputBase} resize-none`}
                      placeholder="How can we help you today?"
                    />
                    <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-xs mt-1"/>
                  </div>

                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="w-full bg-accent text-accent-foreground font-bold uppercase tracking-wider py-4 rounded-lg hover:opacity-90 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 shadow-lg shadow-accent/5 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {state.submitting ? (
                      <>
                        <Loader2 className="animate-spin w-5 h-5" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>

          {/* DIREITA: Info & Horários */}
          <div className="space-y-8 lg:pt-10 fade-in-up" style={{ animationDelay: '100ms' }}>
            <div>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
                Contact Information
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
                Our dedicated team is ready to assist you with any questions about our products,
                orders, or services. We typically respond within 24 hours.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: Mail,
                  title: 'Email',
                  content: 'support@jcandy.com',
                  link: 'mailto:support@jcandy.com',
                },
                {
                  icon: Phone,
                  title: 'Phone',
                  content: '+1 (555) 123-4567',
                  link: 'tel:+15551234567',
                },
                {
                  icon: MapPin,
                  title: 'Showroom',
                  content: '123 Luxury Boulevard, Fashion District, NY 10001',
                  link: null,
                },
              ].map((item) => (
                <div key={item.title} className="flex items-start space-x-5 p-6 bg-card/50 border border-border/50 rounded-xl hover:border-accent/30 transition-colors group">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent group-hover:text-black transition-all duration-300">
                    <item.icon className="w-6 h-6 text-accent group-hover:text-black transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                    {item.link ? (
                      <a
                        href={item.link}
                        className="text-muted-foreground hover:text-accent transition-colors"
                      >
                        {item.content}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">{item.content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Business Hours */}
            <div className="bg-card/50 border border-border/50 p-8 rounded-xl">
              <h3 className="font-bold text-foreground mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                Business Hours (EST)
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between py-2 border-b border-white/5">
                  <span className="text-muted-foreground">Monday - Friday</span>
                  <span className="text-foreground font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/5">
                  <span className="text-muted-foreground">Saturday</span>
                  <span className="text-foreground font-medium">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-muted-foreground">Sunday</span>
                  <span className="text-foreground font-medium text-red-400">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LuxurySection>
    </div>
  );
};

export default Contact;