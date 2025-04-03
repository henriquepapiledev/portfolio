import Input from '../Form/Input';
import TextArea from '../Form/TextArea';
import Button from '../Form/Button';
import useForm from '../../hooks/useForm';
import emailjs from '@emailjs/browser';
import { useState } from 'react';

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
      <div className="w-full lg:w-[50%]">
        <form onSubmit={sendEmail} className="flex flex-col w-full gap-4 mt-16">
          <Input
            label="Nome"
            type="text"
            name="name"
            placeholder="Digite seu nome"
            {...name}
          />
          <Input
            label="E-mail"
            type="text"
            name="email"
            placeholder="Digite seu e-mail"
            {...email}
          />
          <TextArea
            label="Mensagem"
            type="text"
            name="mensagem"
            placeholder="Digite sua mensagem..."
            {...message}
          />

          {loading ? (
            <Button disabled>Carregando...</Button>
          ) : (
            <Button>Enviar</Button>
          )}

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
