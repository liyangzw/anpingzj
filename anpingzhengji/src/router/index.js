import Vue from 'vue'
import Router from 'vue-router'
import IndexComponent from '@/pages/Index/Index'
import HelloWorld from '@/components/HelloWorld'
import QyjjComponent from '@//pages/qyjj/Index'
import CpzxComponent from '@//pages/cpzx/Index'
import XwzxComponent from '@//pages/xwzx/Index'
import CjcmComponent from '@//pages/cjcm/Index'
import LxwmComponent from '@//pages/lxwm/Index'
import SpztsComponent from '@//pages/xwzx/spzte'
import LqtspzComponent from '@//pages/xwzx/lqtspz'
import TlspzComponent from '@//pages/xwzx/tlspz'
import GtlspzComponent from '@//pages/xwzx/gtlspz'
import SpzjzComponent from '@//pages/xwzx/spzjz'
import OneComponent from '@//pages/jszc/1'
import TwoComponent from '@//pages/jszc/2'
import ThreeComponent from '@//pages/jszc/3'
import FourComponent from '@//pages/jszc/4'
import FiveComponent from '@//pages/jszc/5'
import SixComponent from '@//pages/jszc/6'
import SevenComponent from '@//pages/jszc/7'
import EightComponent from '@//pages/jszc/8'




Vue.use(Router)

export default new Router({
    mode: "history",
    routes: [{
            path: '/',
            name: 'Index',
            component: IndexComponent
        },
        {
            path: '/hello',
            name: 'Hello',
            component: HelloWorld
        },
        {
            path: '/qyjj',
            name: 'Qyjj',
            component: QyjjComponent
        },
        {
            path: '/cpzx',
            name: 'Cpzx',
            component: CpzxComponent
        },
        {
            path: '/xwzx',
            name: 'Xwzx',
            component: XwzxComponent
        },
        {
            path: '/cjcm',
            name: 'Cjcm',
            component: CjcmComponent
        },
        {
            path: '/lxwm',
            name: 'Lxwm',
            component: LxwmComponent
        },
        {
            path: '/xwzx/spzts',
            name: 'Spzts',
            component: SpztsComponent
        },
        {
            path: '/xwzx/lqtspz',
            name: 'Lqtspz',
            component: LqtspzComponent
        },
        {
            path: '/xwzx/tlspz',
            name: 'Tlspz',
            component: TlspzComponent
        },
        {
            path: '/xwzx/gtlspz',
            name: 'Gtlspz',
            component: GtlspzComponent
        },
        {
            path: '/xwzx/spzjz',
            name: 'Spzjz',
            component: SpzjzComponent
        },
        {
            path: '/jszc/1',
            name: 'one',
            component: OneComponent
        },
        {
            path: '/jszc/2',
            name: 'two',
            component: TwoComponent
        },
        {
            path: '/jszc/3',
            name: 'three',
            component: ThreeComponent
        },
        {
            path: '/jszc/4',
            name: 'four',
            component: FourComponent
        },
        {
            path: '/jszc/5',
            name: 'five',
            component: FiveComponent
        },
        {
            path: '/jszc/6',
            name: 'six',
            component: SixComponent
        },
        {
            path: '/jszc/7',
            name: 'seven',
            component: SevenComponent
        },
        {
            path: '/jszc/8',
            name: 'eight',
            component: EightComponent
        }

    ]
})