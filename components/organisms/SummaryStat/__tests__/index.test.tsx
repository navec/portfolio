import { renderTestingWrapper } from '@/test/test-utils';
import { screen } from '@testing-library/react';
import SummaryStat from '..';

describe(`${SummaryStat.name} organisms`, () => {
  test('Should display statistics', () => {
    const stats = [
      { value: 'value_1', description: 'description_1' },
      { value: 'value_2', description: 'description_2' },
    ];
    renderTestingWrapper(<SummaryStat stats={stats} />);

    expect(screen.getByText('value_1')).toBeInTheDocument();
    expect(screen.getByText('description_1')).toBeInTheDocument();
    expect(screen.getByText('value_2')).toBeInTheDocument();
    expect(screen.getByText('description_2')).toBeInTheDocument();
  });
});
