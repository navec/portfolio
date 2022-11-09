import WithPageLayout from '@/components/HOC/WithPageLayout';
import ResumeTemplate from '@/components/templates/Resume';

const item = {
  title: 'Title',
  tag: 'Tag',
  description:
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas alias dicta quod repellat voluptates dolores tempora quam nisi, totam, deleniti illo soluta facere ratione fugiat vel blanditiis, voluptatum sint. Officiis!',
};

const { title, sections } = {
  title: 'Resume',
  sections: [
    {
      title: 'Education',
      items: [item, item, item, { ...item, description: 'toto' }],
    },
    {
      title: 'Experience',
      items: [item, item, item],
    },
  ],
};

const Resume = () => {
  return <ResumeTemplate title={title} sections={sections} />;
};

export default WithPageLayout(Resume, 'Resume');
