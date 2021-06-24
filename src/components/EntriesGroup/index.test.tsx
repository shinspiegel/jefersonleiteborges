import { render, fireEvent, act } from '@testing-library/react';
import { Entry } from '../../context/initialState';
import EntriesGroup from './index';

describe('components/WorkExperience', () => {
  const entries: Entry[] = Array(8);

  beforeAll(() => {
    for (let i = 0; i < entries.length; i++) {
      entries[i] = {
        company: `Company ${i}`,
        title: `Title ${i}`,
        description: `Description ${i}`,
        entryYear: `Entry Year ${i}`,
        quitYear: `Quit Year ${i}`,
        markdownText: `Markdown text ${i}`,
        isHidden: i % 2 === 0,
      };
    }
  });

  test('should render the components without any props', () => {
    const { container } = render(<EntriesGroup />);
    expect(container.childNodes.length).toBeGreaterThan(0);
  });

  test('should render a title', () => {
    const { getByText } = render(<EntriesGroup title='Sample Title' />);
    const title = getByText('Sample Title');
    expect(title).toBeInTheDocument();
  });

  test('should render only four itens from the list', () => {
    const { getAllByRole } = render(<EntriesGroup list={entries} />);
    const listItems = getAllByRole('listitem');

    expect(listItems.length).toBe(4);
  });

  test('should add new class after clicked, and remove if clicked again', () => {
    const { getAllByRole } = render(<EntriesGroup list={entries} />);
    const listItems = getAllByRole('listitem');

    const first = listItems[0];

    expect(first.className).toBe('undefined ');
    fireEvent.click(first.firstChild);
    expect(first.className).toBe('undefined undefined');
    fireEvent.click(first.firstChild);
    expect(first.className).toBe('undefined ');
  });
});
