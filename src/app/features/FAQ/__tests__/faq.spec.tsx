import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Section } from '~/src/app/shared/components/Section';
import { FAQComponent } from '../index';

jest.mock('react-query', () => ({
  useQuery: jest.fn().mockReturnValue({
    data: [
      {
        id: 1,
        text: 'text1',
        title: 'title1'
      },
      {
        id: 2,
        text: 'text2',
        title: 'title2'
      },
      {
        id: 3,
        text: 'text3',
        title: 'title3'
      },
      {
        id: 4,
        text: 'text4',
        title: 'title4'
      },
      {
        id: 5,
        text: 'text5',
        title: 'title5'
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

    titles.forEach((title) => {
      expect(title).toBeInTheDocument();
    });
  });

  it('should render FAQ description when click on title', async () => {
    const user = userEvent.setup();
    render(
      <Section id="FAQ">
        <FAQComponent.FAQ />
      </Section>
    );

    const firstTitle = screen.getByRole('heading', { level: 3, name: 'title1' });
    const noRenderdescription = screen.queryByText('text1', { selector: 'p' });
    expect(firstTitle).toBeInTheDocument();
    expect(noRenderdescription).not.toBeInTheDocument();

    const [firstFaqItemToggle] = screen.getAllByTestId('faq-item-toggle');

    await user.click(firstFaqItemToggle);

    const description = screen.getByText('text1', { selector: 'p' });

    expect(description).toBeInTheDocument();
  });

  it('should not render FAQ description when click on title', async () => {
    const user = userEvent.setup();
    render(
      <Section id="FAQ">
        <FAQComponent.FAQ />
      </Section>
    );

    const firstTitle = screen.getByRole('heading', { level: 3, name: 'title1' });
    const noRenderdescription = screen.queryByText('text1', { selector: 'p' });
    expect(firstTitle).toBeInTheDocument();
    expect(noRenderdescription).not.toBeInTheDocument();

    const [firstFaqItemToggle] = screen.getAllByTestId('faq-item-toggle');

    await user.click(firstFaqItemToggle);

    const description = screen.getByText('text1', { selector: 'p' });
    expect(description).toBeInTheDocument();

    await user.click(firstFaqItemToggle);

    const noRenderdescriptionAfterClick = screen.queryByText('text1', { selector: 'p' });

    expect(noRenderdescriptionAfterClick).not.toBeInTheDocument();
  });

  it('should render only 5 FAQ items', () => {
    render(
      <Section id="FAQ">
        <FAQComponent.FAQ />
      </Section>
    );

    const titles = screen.getAllByRole('heading', { level: 3 });
    expect(titles).toHaveLength(5);
  });
});
