import { shallowMount, mount } from '@vue/test-utils'
import AddReview from '@/components/AddReview.vue'

describe('AddReview', () => {
    it('should submit review when button is clicked', async () => {
        let expected = true

        const wrapper = shallowMount(AddReview)

        let submitBtn = wrapper.find('[type=\'submit\']')
        await submitBtn.trigger('click')

        let emitted = submitBtn.exists(wrapper.emitted('review-submitted'))

        expect(emitted).toBe(expected)
    })

    it('should show rating when selected', async () => {
        const wrapper = mount(AddReview)
        const options = wrapper.find('select').findAll('option')

        await options.at(2).setSelected()

        expect(wrapper.find('option:checked').element.value).toBe('Game Night')
    })

    it('should show the users name on input', async () => {
        const wrapper = shallowMount(AddReview)

        const input = wrapper.find('input')

        const newValue = 'Updated value'

        input.element.value = newValue

        await input.trigger('change')
    })

    it('should show the users review in textarea', async () => {
        const wrapper = shallowMount(AddReview)

        const input = wrapper.find('textarea')

        const newValue = 'Updated value'

        input.element.value = newValue

        await input.trigger('change')
    })
})