import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Check, Copy } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { EASE, Magnetic, RevealWords, RollText, SectionHeader } from '@/components/ui/motion';

const EMAIL = 'caiofrancoramineli3@gmail.com';

const fields = [
  { name: 'name', label: 'Seu nome', type: 'text', placeholder: 'Como posso te chamar?', autoComplete: 'name' },
  { name: 'email', label: 'Seu email', type: 'email', placeholder: 'voce@empresa.com', autoComplete: 'email' },
  { name: 'subject', label: 'Assunto', type: 'text', placeholder: 'Site, sistema, automação...' },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const apiUrl = 'https://main-n8n-webhook.horizonflow.space/webhook/send-email-for-me';

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!response.ok) throw new Error(`Erro: ${response.status}`);

      toast({
        title: 'Mensagem enviada!',
        description: 'Obrigado por entrar em contato. Responderei em breve.',
        variant: 'default',
      });

    } catch (error) {
      toast({
        title: 'Erro no envio da mensagem!',
        description: 'Por favor tente novamente',
        variant: 'destructive',
      });
    }

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });

    setIsSubmitting(false);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <section id="contact" className="py-24 md:py-40">
      <div className="container">
        <SectionHeader index="04" label="Contato" />

        <h2 className="text-[clamp(3rem,10vw,9rem)] font-medium leading-[0.95] tracking-[-0.055em]">
          <RevealWords text="Tem um projeto" className="block" />
          <RevealWords
            text="em mente?"
            delay={0.15}
            className="block font-serif font-normal italic tracking-[-0.03em] text-primary"
          />
        </h2>

        <div className="mt-16 grid gap-16 md:mt-24 md:grid-cols-12">
          <motion.div
            className="md:col-span-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: EASE }}
          >
            <p className="max-w-sm text-lg leading-relaxed text-muted-foreground">
              Estou aberto a novas oportunidades, projetos e colaborações. Mande uma mensagem pelo formulário ou fale
              comigo direto por um dos canais abaixo.
            </p>

            <div className="mt-10">
              <p className="eyebrow mb-2">Email</p>
              <div className="flex items-center gap-3">
                <a href={`mailto:${EMAIL}`} className="link-underline min-w-0 break-words text-lg font-medium tracking-tight sm:text-xl md:text-2xl">
                  {EMAIL}
                </a>
                <button
                  type="button"
                  onClick={copyEmail}
                  aria-label={copied ? 'Email copiado' : 'Copiar email'}
                  className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
                >
                  {copied ? <Check size={15} className="text-primary" /> : <Copy size={15} />}
                </button>
              </div>
            </div>

            <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-border pt-8">
              <div>
                <dt className="eyebrow mb-2">Telefone</dt>
                <dd>
                  <a href="https://wa.me/5518996661215" target="_blank" rel="noopener noreferrer" className="link-underline">
                    (18) 99666-1215
                  </a>
                </dd>
              </div>
              <div>
                <dt className="eyebrow mb-2">Localização</dt>
                <dd>Presidente Prudente — SP, Brasil</dd>
              </div>
            </dl>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="space-y-10 md:col-span-6 md:col-start-7"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.08 }}
          >
            {fields.map((field, index) => (
              <motion.div
                key={field.name}
                variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.8, ease: EASE }}
              >
                <label htmlFor={field.name} className="eyebrow flex gap-3">
                  <span className="text-primary">0{index + 1}</span>
                  {field.label}
                </label>
                <input
                  id={field.name}
                  name={field.name}
                  type={field.type}
                  value={formData[field.name]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  autoComplete={field.autoComplete}
                  required
                  className="field"
                />
              </motion.div>
            ))}

            <motion.div
              variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.8, ease: EASE }}
            >
              <label htmlFor="message" className="eyebrow flex gap-3">
                <span className="text-primary">04</span>
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                placeholder="Conte um pouco sobre a ideia, prazos e o que você precisa."
                className="field resize-none"
              />
            </motion.div>

            <motion.div
              variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.8, ease: EASE }}
            >
              <Magnetic strength={0.2}>
                <button type="submit" className="btn btn-primary group !px-8 !py-4 text-base" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-r-transparent" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <RollText>Enviar mensagem</RollText>
                      <ArrowUpRight size={18} className="transition-transform duration-500 group-hover:rotate-45" />
                    </>
                  )}
                </button>
              </Magnetic>
            </motion.div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
