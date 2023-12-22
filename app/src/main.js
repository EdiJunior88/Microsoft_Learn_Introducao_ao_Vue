import { createApp } from 'vue'
import HostComponent from './components/HostComponent.vue'

const host = createApp(HostComponent)

host.mount('#host')
