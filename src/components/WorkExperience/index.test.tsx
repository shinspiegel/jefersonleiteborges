import {render} from '@testing-library/react'
import WorkExperience from './index'

describe('components/WorkExperience', () => {
    test('should render the components without any props', () => {
        const {container} = render(<WorkExperience />)
        expect(container.childNodes.length).toBeGreaterThan(0)
    })
})
