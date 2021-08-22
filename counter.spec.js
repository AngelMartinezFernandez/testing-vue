import { shallowMount, mount} from "@vue/test-utils";
import Counter from "@/components/Counter";


describe('Counter Component', () => {
    let wrapper

    beforeEach(()=>{
        wrapper = shallowMount(Counter)
    })
    // test('need to match with snapshot', () => {
    //     const wrapper = shallowMount(Counter)
    //
    //     expect(wrapper.html()).toMatchSnapshot()
    // })
    test('<h2> tag should have default value "Counter"', ()=>{

        expect(wrapper.find('h2').exists()).toBeTruthy()

        const h2Value = wrapper.find('h2').text()

        expect(h2Value).toBe('Counter')
    })

    test('<p> default value should be 100', () => {

        const value = wrapper.find('[data-testid="counter"]').text()
        // const pTags = wrapper.findAll('p')

        // expect(pTags[1].exists())

        expect(value).toBe('100')
        // expect(pTags[1].text()).toBe('100')
    })

    test('value should increase by 1', async()=> {

        const increaseBtn = wrapper.find('button')

        await increaseBtn.trigger('click')

        const value = wrapper.find('[data-testid="counter"]').text()

        expect(value).toBe('101')
    })

    test('value should decrease 2 times 1 by 1', async ()=> {

        const [increaseBtn, decreaseBtn] = wrapper.findAll('button')

        await decreaseBtn.trigger('click')
        await decreaseBtn.trigger('click')

        const value = wrapper.find('[data-testid="counter"]').text()

        expect(value).toBe('98')

    })

    test('prop should to be default value', () => {
        // const start = wrapper.props('start')
        const {start} = wrapper.props()

        const value = wrapper.find('[data-testid="counter"]').text()

        expect(Number(value)).toBe(start)
    })

    test('should render title s prop', () =>{

        const title = 'Hello World'

        const wrapper = shallowMount( Counter, {
            props: {
                title: title
            }
        })

        expect(wrapper.find('h2').text()).toBe(title)

    })
})