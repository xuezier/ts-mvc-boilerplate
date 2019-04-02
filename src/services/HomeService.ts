import {Service} from 'mvc-ts';

@Service()
export class HomeService {
    say() {
        return 'hi, server running good!';
    }
}
