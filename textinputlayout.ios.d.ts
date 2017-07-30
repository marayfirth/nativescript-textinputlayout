import { TextInputLayout as CommonTextInputLayout } from './textInputLayout.common';
import { TextField } from 'tns-core-modules/ui/text-field';
import { Color } from 'tns-core-modules/color';
export declare class TextInputLayout extends TextField implements CommonTextInputLayout {
    _ios: any;
    _childLoaded: boolean;
    error: string;
    title: string;
    tintColor: Color;
    lineColor: Color;
    selectedTintColor: Color;
    selectedLineColor: Color;
    selectedTitleColor: Color;
    lineHeight: number;
    selectedLineHeight: number;
    errorColor: Color;
    iconColor: Color;
    selectedIconColor: Color;
    iconFont: string;
    iconText: string;
    iconMarginBottom: number;
    iconMarginLeft: number;
    iconRotationDegrees: number;
    readonly ios: any;
    readonly _nativeView: any;
    constructor();
}
export declare class TextInputLayoutWithIcon extends TextInputLayout {
    constructor();
}
