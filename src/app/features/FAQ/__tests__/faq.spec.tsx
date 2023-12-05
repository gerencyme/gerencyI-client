import { render, screen } from '@testing-library/react';
import { Section } from '~/src/app/shared/components/Section';
import { FAQComponent } from '../index';

jest.mock('react-query', () => ({
  useQuery: jest.fn().mockReturnValue({
    data: [
      {
        id: 1,
        title: 'title1',
        description: 'description1'
      },
      {
        id: 2,
        title: 'title2',
        description: 'description2'
      },
      {
        id: 3,
        title: 'title3',
        description: 'description3'
      },
      {
        id: 4,
        title: 'title4',
        description: 'description4'
      },
      {
        id: 5,
        title: 'title5',
        description: 'description5'
      }
    ]
  })
}));

describe('<FAQComponent>', () => {
  it('should render FAQ titles', () => {
    render(
      <Section id="FAQ">
        <FAQComponent.FAQ />
      </Section>
    );

    const titles = screen.getAllByRole('heading', { level: 3 });
    expect(titles).toHaveLength(5);
  });
  test.todo('should render FAQ description when click on title');
  test.todo('should not render FAQ description when click on title');
  test.todo('should render only 5 FAQ items');
});
