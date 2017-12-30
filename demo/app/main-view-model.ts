import {fromObject} from 'tns-core-modules/data/observable';
import {isIOS} from 'platform';
import {Font} from 'ui/styling/font';

const model = fromObject({
    isDisabled: false,
    title: '',
    demoText: '',
    errorMsg: null,
    hint: 'Default Demo Hint',
    isErrorEnabled: true,
    isHintAnimationEnabled: true,
    isCounterEnabled: true,
    iconFont: Font.default.withFontFamily("FontAwesome").withFontSize(16).getUIFont(null),
    iconText: '\uf06a'
});
export default model;
