import { render } from '@testing-library/react';
import { Skill } from '../../context/initialState';
import SkillItem from './index';

describe('components/SkillItem', () => {
  const skillItem: Skill = {
    title: 'MOCK ITEM',
    listNames: ['Mock 1', 'Mock 2', 'Mock 3'],
  };

  test('should render the components without any props', () => {
    const { container } = render(<SkillItem />);
    expect(container.childNodes.length).toBe(0);
  });

  test('should render all the properties from a skill correctly', () => {
    const { getByText, getByRole } = render(<SkillItem skill={skillItem} />);
    const title = getByText('MOCK ITEM');
    const list = getByRole('list');

    expect(title).toBeInTheDocument();
    expect(list.children.length).toBe(3);
  });
});
