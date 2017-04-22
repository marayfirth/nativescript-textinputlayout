import { TextInputLayout as CommonTextInputLayout } from './textInputLayout.common';
import { View } from "ui/core/view";
import { TextView } from 'ui/text-view';
import { TextField } from 'ui/text-field';
export declare class TextInputLayout extends CommonTextInputLayout {
    _android: any;
    _childLoaded: boolean;
    childLoaded: boolean;
    android: any;
    _nativeView: any;
    constructor();
    _createUI(): void;
    _onTextFieldChanged(oldChild: View, newChild: TextView | TextField): void;
}
