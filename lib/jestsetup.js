import Enzyme, { mount, render } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() })
// Make Enzyme functions available in all test files without importing
global.mount = mount
global.render = render
global.mount = mount
