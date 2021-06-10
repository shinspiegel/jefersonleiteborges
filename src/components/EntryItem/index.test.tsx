import { render } from '@testing-library/react';
import { Entry } from '../../context/initialState';
import EntryItem from './index';

describe('components/EntryItem', () => {
  const entry: Entry = {
    company: `Company`,
    title: `Title`,
    description: `Description`,
    entryYear: `Entry Year`,
    quitYear: `Quit Year`,
    markdownText: `Markdown text`,
    isHidden: true,
  };

  test('should render the components without any props', () => {
    const { container } = render(<EntryItem />);
    expect(container.childNodes.length).toBeGreaterThan(0);
  });

  test('should render and show all the data when selected', () => {
    const { getByText, getByTestId } = render(
      <EntryItem entry={entry} isSelected={true} />,
    );
    const title = getByText('Title');
    const description = getByText('Description');
    const markdownText = getByText('Markdown text');
    const company = getByTestId('company-name');

    expect(company).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(markdownText).toBeInTheDocument();
  });
});
