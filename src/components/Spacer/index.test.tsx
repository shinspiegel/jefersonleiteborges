import {render} from '@testing-library/react'
import Spacer from './index'

describe('components/Spacer', () => {
    test('should render the components without any props', () => {
        const {container} = render(<Spacer />)
        expect(container.childNodes.length).toBeGreaterThan(0)
    })
})
