
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: 'Mensagem enviada!',
        description: 'Obrigado por entrar em contato. Responderei em breve.',
        variant: 'default',
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      setIsSubmitting(false);
    }, 1500);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="contact" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Entre em <span className="gradient-text">Contato</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tem um projeto em mente ou quer conversar sobre oportunidades? Entre em contato comigo.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={fadeInUp}
          >
            <h3 className="text-2xl font-bold mb-6">Vamos conversar</h3>
            <p className="text-muted-foreground mb-8">
              Estou sempre aberto a novas oportunidades, projetos interessantes e colaborações. Preencha o formulário ou use os dados de contato abaixo para me encontrar.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/20 p-3 rounded-full">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-muted-foreground">seuemail@exemplo.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/20 p-3 rounded-full">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Telefone</h4>
                  <p className="text-muted-foreground">(00) 12345-6789</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/20 p-3 rounded-full">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Localização</h4>
                  <p className="text-muted-foreground">São Paulo, Brasil</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            variants={fadeInUp}
          >
            <form onSubmit={handleSubmit} className="contact-form space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Assunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                  placeholder="Assunto da mensagem"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                  placeholder="Sua mensagem"
                ></textarea>
              </div>

              <Button
                type="submit"
                className="w-full gradient-border"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Enviando...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="h-4 w-4" />
                    Enviar Mensagem
                  </span>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
