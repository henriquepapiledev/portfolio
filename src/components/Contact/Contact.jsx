import Input from '../Form/Input';
import TextArea from '../Form/TextArea';
import Button from '../Form/Button';
import useForm from '../../hooks/useForm';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const name = useForm();
  const email = useForm('email');
  const message = useForm();
  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const sendEmail = async (event) => {
    event.preventDefault();
    setLoading(true);

    const fields = [name.value, email.value, message.value];

    if ([name, email, message].every((field) => field.validate())) {
      name.value, email.value, message.value;
    }

    if (fields.every((field) => field.length > 0)) {
      try {
        const templateParams = {
          from_name: name.value,
          email: email.value,
          message: message.value,
        };

        await emailjs.send(
          'service_5rw7a3p',
          'template_0bibkoe',
          templateParams,
          'Knr-gXd1pJLtiFfDI',
        );

        name.setValue('');
        email.setValue('');
        message.setValue('');

        setSuccessMessage('E-mail enviado com sucesso!');

        setTimeout(() => {
          setSuccessMessage('');
        }, 3000);
      } catch (err) {
        console.log('ERRO: ', err);
      }
    }

    setLoading(false);
  };

  return (
    <>
      <div className="w-full lg:w-[50%] m-auto">
        <form onSubmit={sendEmail} className="flex flex-col w-full gap-4 mt-16">
          <motion.div
            initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
            whileInView={{ filter: 'blur(0)', opacity: 1, y: 0 }}
            transition={{
              delay: 0.4,
              duration: 0.5,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            viewport={{ once: true }}
          >
            <Input
              label="Nome"
              type="text"
              name="name"
              placeholder="Digite seu nome"
              {...name}
            />
          </motion.div>
          <motion.div
            initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
            whileInView={{ filter: 'blur(0)', opacity: 1, y: 0 }}
            transition={{
              delay: 0.5,
              duration: 0.5,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            viewport={{ once: true }}
          >
            <Input
              label="E-mail"
              type="text"
              name="email"
              placeholder="Digite seu e-mail"
              {...email}
            />
          </motion.div>
          <motion.div
            initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
            whileInView={{ filter: 'blur(0)', opacity: 1, y: 0 }}
            transition={{
              delay: 0.6,
              duration: 0.5,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            viewport={{ once: true }}
          >
            <TextArea
              label="Mensagem"
              type="text"
              name="mensagem"
              placeholder="Digite sua mensagem..."
              {...message}
            />
          </motion.div>

          <motion.div
            initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
            whileInView={{ filter: 'blur(0)', opacity: 1, y: 0 }}
            transition={{
              delay: 0.7,
              duration: 0.5,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            viewport={{ once: true }}
          >
            {loading ? (
              <Button disabled>Carregando...</Button>
            ) : (
              <Button>Enviar</Button>
            )}
          </motion.div>

          {successMessage && (
            <p className="font-light text-base text-green-600 text-center mt-4">
              {successMessage}
            </p>
          )}
        </form>
      </div>
    </>
  );
};

export default Contact;
