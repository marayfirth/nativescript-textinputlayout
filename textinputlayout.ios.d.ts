import { TextInputLayout as CommonTextInputLayout } from './textInputLayout.common';
import { View } from "ui/core/view";
import { TextView } from 'ui/text-view';
import { TextField } from 'ui/text-field';
export declare class TextInputLayout extends CommonTextInputLayout {
    _ios: any;
    _childLoaded: boolean;
    childLoaded: boolean;
    readonly ios: any;
    readonly _nativeView: any;
    constructor();
    _createUI(): void;
}
