import {render} from '@testing-library/react'
import SkillItem from './index'

describe('components/SkillItem', () => {
    test('should render the components without any props', () => {
        const {container} = render(<SkillItem />)
        expect(container.childNodes.length).toBeGreaterThan(0)
    })
})
