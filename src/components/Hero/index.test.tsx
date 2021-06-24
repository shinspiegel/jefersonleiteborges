import {render} from '@testing-library/react'
import Hero from './index'

describe('components/Hero', () => {
    test('should render the components without any props', () => {
        const {container} = render(<Hero />)
        expect(container.childNodes.length).toBeGreaterThan(0)
    })
})
