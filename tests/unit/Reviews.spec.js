import { shallowMount } from '@vue/test-utils'
import Reviews from '@/views/Reviews.vue'

describe('Reviews', () => {
    it('should delete review when clicked on button', () => {
        const wrapper = shallowMount(Reviews);

        const ul = wrapper.find('ul');

        ul.trigger('click');
    })
})