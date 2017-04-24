import {Observable} from 'data/observable';
import {Device, isIOS} from 'platform';
import {Font} from 'ui/styling/font';

export class HelloWorldModel extends Observable {
    private counter: number;

    constructor() {
        super();

        // Initialize default values.
        this.set('error', '');
        this.set('hint', 'Default Demo Hint');
        this.set('isErrorEnabled', true);
        this.set('isHintAnimationEnabled', true);
        this.set('isCounterEnabled', false);

        if (isIOS) {
            this.set('iconFont', Font.default.withFontFamily("FontAwesome").withFontSize(16).getUIFont(null));
            this.set('iconText', '\uf06a');
        }
    }
}
export var mainViewModel = new HelloWorldModel();