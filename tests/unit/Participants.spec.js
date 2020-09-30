import { shallowMount } from '@vue/test-utils'
import Participants from '@/views/Participants.vue'

describe('Participants', () => {
    it('should unJoin event when clicked on button', () => {
        const wrapper = shallowMount(Participants);

        const ul = wrapper.find('ul');

        ul.trigger('click');
    })

    it('should go to reviews when clicked on button', () => {
        const $route = {
            path: '/reviews'
        }
        const wrapper = shallowMount(Participants, {
            stubs: ['router-link', 'router-view'],
            mocks: {
                $route
            }
        })

        wrapper.trigger('click')

        wrapper.vm.$route.path
    })
})