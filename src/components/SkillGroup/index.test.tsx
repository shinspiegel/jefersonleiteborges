import { render } from '@testing-library/react';
import { Skill } from '../../context/initialState';
import SkillGroup from './index';

describe('components/SkillGroup', () => {
  const list: Skill[] = Array(5)
    .fill({
      title: 'MOCK NAME',
      listNames: ['MOCK 1', 'MOCK 2', 'MOCK 3'],
    })
    .map((s, i) => ({ ...s, title: `${s.title}_${i}` }));

  test('should render the components without any props', () => {
    const { container } = render(<SkillGroup />);
    expect(container.childNodes.length).toBeGreaterThanOrEqual(0);
  });

  test('should render a title', () => {
    const { getByText } = render(<SkillGroup title='MOCK TITLE' />);
    const title = getByText('MOCK TITLE');
    expect(title).toBeInTheDocument();
  });

  test('should render a simple skill list', () => {
    const { getAllByRole } = render(<SkillGroup list={list} />);
    const listNode = getAllByRole('list')[0];
    expect(listNode.children.length).toBe(5);
  });
});
