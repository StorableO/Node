import {Router} from 'express'
import { TwitService } from './twit.service.js'
// import { authMiddleWare } from '../authMiddleWare.js'

const router = Router()

const twistService = new TwitService()

router.post('/',(req, res)=>{
    // console.log(req.query)

    if(req.body?.text?.length < 1) {
        return res.status(400).json({message: "Message is required"})
    }

    const twit = twistService.createTwit(req.body)
    res.status(201).json(twit)
})


export const twitRouter = router