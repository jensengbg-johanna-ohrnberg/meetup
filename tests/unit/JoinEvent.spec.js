import { shallowMount, mount } from '@vue/test-utils'
import JoinEvent from '@/components/JoinEvent.vue'

describe('JoinEvent', () => {
    it('should submit event when button is clicked', async () => {
        let expected = true

        const wrapper = shallowMount(JoinEvent)

        let submitBtn = wrapper.find('[type=\'submit\']')
        await submitBtn.trigger('click')

        let emitted = submitBtn.exists(wrapper.emitted('joined-submitted'))

        expect(emitted).toBe(expected)
    })

    it('should show event when selected', async () => {
        const wrapper = mount(JoinEvent)
        const options = wrapper.find('select').findAll('option')

        await options.at(1).setSelected()

        expect(wrapper.find('option:checked').element.value).toBe('Ice Hockey for Fun')
    })

    it('should show the users name on input', async () => {
        const wrapper = shallowMount(JoinEvent)

        const input = wrapper.find('#name')

        const newValue = 'Updated value'

        input.element.value = newValue

        await input.trigger('change')

        expect(newValue).toBe('Updated value')
    })

    it('should show the users age on input', async () => {
        const wrapper = shallowMount(JoinEvent)

        const input = wrapper.find('#age')

        const newValue = 'Updated value'

        input.element.value = newValue

        await input.trigger('change')

        expect(newValue).toBe('Updated value')
    })
})