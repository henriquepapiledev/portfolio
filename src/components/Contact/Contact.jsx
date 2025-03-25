import LinkedIn from '../../assets/icon-linkedin.svg?react';
import GitHub from '../../assets/icon-github.svg?react';
import Email from '../../assets/icon-email.svg?react';
import Whatsapp from '../../assets/icon-whatsapp.svg?react';
import ContactSocialMedia from './ContactSocialMedia';
import { useEffect, useState } from 'react';

const Contact = () => {
  const dataMedia = [
    {
      id: 1,
      logo: <LinkedIn />,
      url: 'https://www.linkedin.com/in/henriquepapile/',
    },
    { id: 2, logo: <GitHub />, url: 'https://github.com/henriquepapiledev' },
    { id: 3, logo: <Email />, url: 'mailto:contatohenriquepapile@gmail.com' },
    {
      id: 4,
      logo: <Whatsapp />,
      url: 'https://web.whatsapp.com/send/?phone=5511953553054&text=Ol%C3%A1%20Henrique,%20vim%20pela%20sua%20pagina%20henrique.papile.',
    },
  ];

  const [data, setData] = useState(null);

  useEffect(() => {
    setData(dataMedia);
  }, []);

  if (data)
    return (
      <>
        <div className="flex justify-center items-center gap-14 lg:gap-20 mt-16">
          {data.map(({ id, logo, url }) => (
            <ContactSocialMedia
              href={url}
              img={logo}
              target="_blank"
              key={id}
            />
          ))}
        </div>
      </>
    );
  else return null;
};

export default Contact;
