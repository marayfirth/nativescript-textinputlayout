import { TextInputLayout as TextInputLayoutDefinition } from './textInputLayout';
import { Color } from "tns-core-modules/color";
import { View, Property } from "tns-core-modules/ui/core/view";

export { Property, Color };

export class TextInputLayout extends View implements TextInputLayoutDefinition {

    // common
    public hint: string;
    public error: string;

    //ANDROID ONLY
    public hintAnimationEnabled?: boolean;
    public hintTextAppearance?: string;
    public counterEnabled?: boolean;
    public errorEnabled?: boolean;

    //IOS Only
    public title?: string;
    public tintColor?: Color;
    public lineColor?: Color;
    public selectedTintColor?: Color;
    public selectedLineColor?: Color;
    public selectedTitleColor?: Color;
    public lineHeight?: number;
    public selectedLineHeight?: number;
    public errorColor?: Color;
    public iconColor?: Color;
    public selectedIconColor?: Color;
    public iconFont?: string;
    public iconText?: string;
    public iconMarginBottom?: number;
    public iconMarginLeft?: number;
    public iconRotationDegrees?: number;

    /* GETTERS/SETTERS for other property accessors implemented individually in ios/android components as they're so different */
}

/****** PROPERTIES ******/

export const errorProperty = new Property<TextInputLayout, string>({
    name: "error",
    affectsLayout: true
});
errorProperty.register(TextInputLayout);

// NOTE: This is 'placeholder' for ios
export const hintProperty = new Property<TextInputLayout, string>({
    name: "hint",
    affectsLayout: true
});
hintProperty.register(TextInputLayout);