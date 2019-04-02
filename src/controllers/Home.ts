import {RestController, Get, Inject, Res} from 'mvc-ts';
import * as Express from 'express';

import { HomeService } from '../services';

@RestController('/')
export class HomeController {
    @Inject()
    private homeService: HomeService

    @Get('')
    indexAction(@Res() res: Express.Response) {
        res.set('Content-Type', 'text/plain');
        res.send(this.homeService.say());
    }
}