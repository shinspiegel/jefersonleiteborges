import { fireEvent, render } from '@testing-library/react';
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

  test('should be able to click even without a function', () => {
    const { getByRole } = render(<EntryItem entry={entry} />);

    expect(() => {
      const button = getByRole('button');
      fireEvent.click(button);
    }).not.toThrow();
  });

  test('should run the click function', () => {
    const clickFunction = jest.fn();

    const { getByRole } = render(
      <EntryItem entry={entry} onClick={clickFunction} />,
    );

    const button = getByRole('button');
    fireEvent.click(button);
    expect(clickFunction).toBeCalledWith('Company');
  });

  test('should run the keydown when "enter" is pressed function', () => {
    const clickFunction = jest.fn();

    const { getByRole } = render(
      <EntryItem entry={entry} onClick={clickFunction} />,
    );

    const button = getByRole('button');
    fireEvent.keyDown(button, { key: 'Enter', code: 'Enter' });
    expect(clickFunction).toBeCalledWith('Company');
  });
});
