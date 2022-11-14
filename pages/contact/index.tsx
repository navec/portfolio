import WithPageLayout from '@/components/HOC/WithPageLayout';
import { SocialContactProps } from '@/components/organisms/SocialContact';
import ContactTemplate from '@/components/templates/Contact';
import { API_URL } from '@/pages/api/constant';

type ContactProps = {
  title: string;
  subtitle: string;
  description: string;
  endWord: string;
  socials: SocialContactProps['socials'];
};

const Contact = (props: ContactProps) => {
  const { title, subtitle, description, socials, endWord } = props;

  return (
    <ContactTemplate
      title={title}
      subtitle={subtitle}
      description={description}
      socials={socials}
      endWord={endWord}
    />
  );
};

export async function getStaticProps() {
  const data = await fetch(`${API_URL}/api/contact`).then((res) => res.json());
  return { props: { ...data } };
}

export default WithPageLayout(Contact, 'Contact');
