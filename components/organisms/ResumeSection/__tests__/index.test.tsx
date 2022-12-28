import { renderTestingWrapper } from '@/test/test-utils';
import { screen } from '@testing-library/react';
import ResumeSection from '..';

describe(`${ResumeSection.name} organisms`, () => {
  test('Should display resume section', () => {
    const items = [
      { title: 'resume_title_item_1', tag: 'resume_tag_item_1', description: 'resume_description_item_1' },
      { title: 'resume_title_item_2', tag: 'resume_tag_item_2', description: 'resume_description_item_2' },
    ];
    renderTestingWrapper(<ResumeSection title="resume_title" items={items} />);

    expect(screen.getByRole('heading', { level: 2, name: 'resume_title' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: 'resume_title_item_1' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: 'resume_title_item_2' })).toBeInTheDocument();

    expect(screen.getByText('resume_tag_item_1')).toBeInTheDocument();
    expect(screen.getByText('resume_tag_item_2')).toBeInTheDocument();
    expect(screen.getByText('resume_description_item_1')).toBeInTheDocument();
    expect(screen.getByText('resume_description_item_2')).toBeInTheDocument();
  });
});
