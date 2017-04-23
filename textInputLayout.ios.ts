declare var ios: any;
declare var SkyFloatingLabelTextField: any;
declare var SkyFloatingLabelTextFieldWithIcon: any;

import {PropertyChangeData} from 'ui/core/dependency-observable';
import {PropertyMetadata} from 'ui/core/proxy';
import {TextInputLayout as CommonTextInputLayout} from './textInputLayout.common';
import {TextField} from 'ui/text-field';

/* callbacks to update native widget wehn exposed properties cange */
function onTitlePropertyChanged(pcData: PropertyChangeData) {
    let til = <TextInputLayout>pcData.object;
    if (til.ios) {
        til.ios.title = pcData.newValue;
    }
}

// placeholder, title, tintColor, textColor, lineColor, selectedTitleColor, selectedLineColor
// lineHeight, selectedLineHeight, errorColor, errorMessage,
// iconColor, selectedIconColor, iconFont, iconText, iconMarginBottom, iconMarginLeft, iconRotationDegrees


export class TextInputLayout extends CommonTextInputLayout {
    _ios: any;
    _childLoaded: boolean;

    get ios() {return this._ios;}
    get _nativeView() {return this._ios;}

    constructor() {
        super();
        TextField.call(this);
        //this._ios = this.iconText ? SkyFloatingLabelTextField.alloc().init(CGRectMake(0, 0, 100, 50)) : SkyFloatingLabelTextFieldWithIcon.alloc().init(CGRectMake(0, 0, 100, 50));
        this._ios = this.iconText ? (new SkyFloatingLabelTextField(CGRectMake(0, 0, 100, 50))) : (new SkyFloatingLabelTextFieldWithIcon(CGRectMake(0, 0, 100, 50)));

    }
}