import { Router } from 'express'

const router = new Router()

router.get('/', (req, res) => res.render('index', {title: 'First website with Node.js and Express.js'}))
router.get('/about', (req, res) => res.render('about', {title: 'About Me'}))
router.get('/contact', (req, res) => res.render('contact', {title: 'Contact Me'}))

export default router