import Mock from 'mockjs'
import getIndexData from './first-page.js'

Mock.setup({
    timeout: '200-600'
})

Mock.mock('\/mock\/index','get',getIndexData)