import {render} from '@testing-library/react'
import SkillGroup from './index'

describe('components/SkillGroup', () => {
    test('should render the components without any props', () => {
        const {container} = render(<SkillGroup />)
        expect(container.childNodes.length).toBeGreaterThan(0)
    })
})
