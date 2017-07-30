import definition = require('textInputLayout');
import { View, Property } from "tns-core-modules/ui/core/view";
import { Color } from "tns-core-modules/color";
export declare class TextInputLayout extends View implements definition.TextInputLayout {
    constructor();
    hint: string;
    error: string;
}
export declare const errorProperty: Property<TextInputLayout, string>;
export declare const hintProperty: Property<TextInputLayout, string>;
export declare const hintAnimationEnabledProperty: Property<TextInputLayout, boolean>;
export declare const hintTextAppearanceProperty: Property<TextInputLayout, string>;
export declare const counterEnabledProperty: Property<TextInputLayout, boolean>;
export declare const errorEnabledProperty: Property<TextInputLayout, boolean>;
export declare const titleProperty: Property<TextInputLayout, string>;
export declare const tintColorProperty: Property<TextInputLayout, Color>;
export declare const lineColorProperty: Property<TextInputLayout, Color>;
export declare const selectedTitleColorProperty: Property<TextInputLayout, Color>;
export declare const selectedLineColorProperty: Property<TextInputLayout, Color>;
export declare const lineHeightProperty: Property<TextInputLayout, number>;
export declare const selectedLineHeightProperty: Property<TextInputLayout, number>;
export declare const errorColorProperty: Property<TextInputLayout, Color>;
export declare const iconColorProperty: Property<TextInputLayout, Color>;
export declare const selectedIconColorProperty: Property<TextInputLayout, Color>;
export declare const iconFontProperty: Property<TextInputLayout, UIFont>;
export declare const iconTextProperty: Property<TextInputLayout, string>;
export declare const iconMarginBottomProperty: Property<TextInputLayout, number>;
export declare const iconMarginLeftProperty: Property<TextInputLayout, number>;
export declare const iconRotationDegreesProperty: Property<TextInputLayout, number>;
