import { TextInputLayout as CommonTextInputLayout } from './textInputLayout.common';
import { View } from "tns-core-modules/ui/core/view";
import { TextView } from 'tns-core-modules/ui/text-view';
import { TextField } from 'tns-core-modules/ui/text-field';
export declare class TextInputLayout extends CommonTextInputLayout {
    _android: any;
    _childLoaded: boolean;
    hintAnimationEnabled?: boolean;
    hintTextAppearance?: string;
    counterEnabled?: boolean;
    errorEnabled?: boolean;
    childLoaded: boolean;
    readonly android: any;
    readonly _nativeView: any;
    private _textField;
    textField: TextField | TextView;
    readonly _childrenCount: number;
    constructor();
    _createUI(): void;
    _addChildFromBuilder(name: string, child: TextField | TextView): void;
    _eachChildView(callback: (child: View) => boolean): void;
    _onTextFieldChanged(oldChild: View, newChild: TextView | TextField): void;
}
