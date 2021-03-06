import { shallowMount } from '@vue/test-utils'
import Nav from '@/components/navigation/Nav.vue'

describe('Nav', () => {
    it('should go to another route when clicked on', () => {
        const $route = {
            path: '/',
            pathAbout: '/about',
            pathParticipants: '/participants',
            pathReviews: '/seeReviews'
        }
        const wrapper = shallowMount(Nav, {
            stubs: ['router-link', 'router-view'],
            mocks: {
                $route
            }
        })

        wrapper.trigger('click')

        wrapper.vm.$route.path
        wrapper.vm.$route.pathAbout
        wrapper.vm.$route.pathParticipants
        wrapper.vm.$route.pathReviews
    })
})