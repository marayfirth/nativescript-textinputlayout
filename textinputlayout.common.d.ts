import definition = require('textInputLayout');
import { View } from "ui/core/view";
import { Property } from "ui/core/dependency-observable";
import { TextView } from 'ui/text-view';
import { TextField } from 'ui/text-field';
export declare class TextInputLayout extends View implements definition.TextInputLayout {
    static counterEnabledProperty: Property;
    static errorEnabledProperty: Property;
    static errorProperty: Property;
    static hintAnimationEnabledProperty: Property;
    static hintTextAppearanceProperty: Property;
    static hintProperty: Property;
    private _textField;
    textField: View;
    constructor();
    counterEnabled: any;
    errorEnabled: any;
    error: any;
    hintAnimationEnabled: any;
    hintTextAppearance: any;
    hint: any;
    _childrenCount: number;
    _addChildFromBuilder(name: string, child: TextField | TextView): void;
    _eachChildView(callback: (child: View) => boolean): void;
    _onTextFieldChanged(oldTextField: View, newTextField: View): void;
}
