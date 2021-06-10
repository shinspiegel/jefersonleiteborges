import {render} from '@testing-library/react'
import GridContainer from './index'

describe('components/GridContainer', () => {
    test('should render the components without any props', () => {
        const {container} = render(<GridContainer />)
        expect(container.childNodes.length).toBeGreaterThan(0)
    })
})
