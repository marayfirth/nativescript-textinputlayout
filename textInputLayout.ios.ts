declare var ios: any;
declare var SkyFloatingLabelTextField: any;
declare var SkyFloatingLabelTextFieldWithIcon: any;

import { Font } from 'ui/styling/font';
import { TextField } from 'ui/text-field';
import { isEnabledProperty } from 'ui/core/view';
import { TextInputLayout as CommonTextInputLayout, Color, Property } from './textInputLayout.common';

export const disabledColorProperty = new Property<TextInputLayout, Color>({
    name: 'disabledColor',
    equalityComparer: Color.equals,
    valueConverter: v => new Color(v)
});

export const hintProperty = new Property<TextInputLayout, string>({
    name: "hint",
    affectsLayout: true
});

// note: this is the floating label value 
export const titleProperty = new Property<TextInputLayout, string>({
    name: "title", affectsLayout: true
});

export const titleFontProperty = new Property<TextInputLayout, UIFont>({
    name: "titleFont",
    affectsLayout: true
});

export const tintColorProperty = new Property<TextInputLayout, Color>({
    name: "tintColor",
    equalityComparer: Color.equals,
    valueConverter: v => new Color(v)
});

export const lineColorProperty = new Property<TextInputLayout, Color>({
    name: "lineColor",
    equalityComparer: Color.equals,
    valueConverter: v => new Color(v)
});

export const selectedTitleColorProperty = new Property<TextInputLayout, Color>({
    name: "selectedTitleColor",
    equalityComparer: Color.equals,
    valueConverter: v => new Color(v)
});

export const selectedLineColorProperty = new Property<TextInputLayout, Color>({
    name: "selectedLineColor",
    equalityComparer: Color.equals,
    valueConverter: v => new Color(v)
});

export const lineHeightProperty = new Property<TextInputLayout, number>({
    name: "lineHeight",
    affectsLayout: true,
    valueConverter: v => parseFloat(v)
});

export const selectedLineHeightProperty = new Property<TextInputLayout, number>({
    name: "selectedLineHeight",
    affectsLayout: true,
    valueConverter: v => parseFloat(v)
});

export const errorProperty = new Property<TextInputLayout, string>({
    name: "error",
    affectsLayout: true
});

export const errorColorProperty = new Property<TextInputLayout, Color>({
    name: "errorColor",
    equalityComparer: Color.equals,
    valueConverter: v => new Color(v)
});

export const iconColorProperty = new Property<TextInputLayout, Color>({
    name: "iconColor",
    equalityComparer: Color.equals,
    valueConverter: v => new Color(v)
});

export const selectedIconColorProperty = new Property<TextInputLayout, Color>({
    name: "selectedIconColor",
    equalityComparer: Color.equals,
    valueConverter: v => new Color(v)
});

export const iconFontProperty = new Property<TextInputLayout, UIFont>({
    name: "iconFont",
    affectsLayout: true
});

export const iconTextProperty = new Property<TextInputLayout, string>({
    name: "iconText",
    affectsLayout: true
});

export const iconMarginBottomProperty = new Property<TextInputLayout, number>({
    name: "iconMarginBottom",
    affectsLayout: true,
    valueConverter: v => parseInt(v)
});

export const iconMarginLeftProperty = new Property<TextInputLayout, number>({
    name: "iconMarginLeft",
    affectsLayout: true,
    valueConverter: v => parseInt(v)
});

export const iconRotationDegreesProperty = new Property<TextInputLayout, number>({
    name: "iconRotationDegrees",
    affectsLayout: true,
    valueConverter: v => parseFloat(v)
});

export class TextInputLayout extends TextField implements CommonTextInputLayout {

    public hint: string;
    public error: string;
    public disabledColor: Color;

    _ios: any;

    createNativeView() {
        // TextField delegate will take care of rending to the appropriate size, just pass in zeros here
        let nativeView = new SkyFloatingLabelTextField(CGRectMake(0, 0, 0, 0));
        this._ios = this.nativeView = nativeView;
        return nativeView;
    }

    [isEnabledProperty.setNative](value: Boolean) {
        TextField.prototype[isEnabledProperty.setNative].call(this, value);
        this.nativeView.isEnabled = value;
    }

    [disabledColorProperty.setNative](value: Color) {
        this.nativeView.disabledColor = value instanceof Color ? value.ios : value;
    }

    [hintProperty.setNative](value: string) {
        this.nativeView.placeholder = value;
    }

    [errorProperty.setNative](value: string) {
        this.nativeView.errorMessage = value;
    }

    [errorColorProperty.setNative](value: Color) {
        this.nativeView.errorColor = value instanceof Color ? value.ios : value;
    }

    [titleProperty.setNative](value: string) {
        this.nativeView.title = value;
    }

    [titleFontProperty.setNative](value: UIFont) {
        this.nativeView.titleFont = value;
    }

    [selectedTitleColorProperty.setNative](value: Color) {
        this.nativeView.tintColor = value instanceof Color ? value.ios : value;
    }

    [lineColorProperty.setNative](value: Color) {
        this.nativeView.lineColor = value instanceof Color ? value.ios : value;
    }

    [selectedLineColorProperty.setNative](value: Color) {
        this.nativeView.selectedLineColor = value instanceof Color ? value.ios : value;
    }

    [lineHeightProperty.setNative](value: number) {
        if (!isNaN(value)) {
            this.nativeView.lineHeight = value;
        }
    }

    [selectedLineHeightProperty.setNative](value: number) {
        if (!isNaN(value)) {
            this.nativeView.selectedLineHeight = value;
        }
    }

    [iconColorProperty.setNative](value: Color) {
        this.nativeView.iconColor = value instanceof Color ? value.ios : value;
    }

    [selectedIconColorProperty.setNative](value: Color) {
        this.nativeView.selectedIconColor = value instanceof Color ? value.ios : value;;
    }

    [iconFontProperty.setNative](value: UIFont) {
        this.nativeView.iconFont = value;
    }

    [iconTextProperty.setNative](value: string) {
        this.nativeView.iconText = value;
    }

    [iconMarginBottomProperty.setNative](value: number) {
        if (!isNaN(value)) {
            this.nativeView.iconMarginBottom = value;
        }
    }

    [iconMarginLeftProperty.setNative](value: number) {
        if (!isNaN(value)) {
            this.nativeView.iconMarginLeft = value;
        }
    }

    [iconRotationDegreesProperty.setNative](value: number) {
        if (!isNaN(value)) {
            this.nativeView.iconRotationDegrees = value;
        }
    }
}

export class TextInputLayoutWithIcon extends TextInputLayout {
    createNativeView() {
        // TextField delegate will take care of rending to the appropriate size, just pass in zeros here
        let nativeView = new SkyFloatingLabelTextFieldWithIcon(CGRectMake(0, 0, 0, 0));
        this._ios = this.nativeView = nativeView;
        return nativeView;
    }
}

disabledColorProperty.register(TextInputLayout);
hintProperty.register(TextInputLayout);
errorProperty.register(TextInputLayout);
errorColorProperty.register(TextInputLayout);
titleProperty.register(TextInputLayout);
tintColorProperty.register(TextInputLayout);
lineColorProperty.register(TextInputLayout);
selectedTitleColorProperty.register(TextInputLayout);
selectedLineColorProperty.register(TextInputLayout);
lineHeightProperty.register(TextInputLayout);
selectedLineHeightProperty.register(TextInputLayout);
iconColorProperty.register(TextInputLayout);
selectedIconColorProperty.register(TextInputLayout);
iconFontProperty.register(TextInputLayout);
iconTextProperty.register(TextInputLayout);
iconMarginBottomProperty.register(TextInputLayout);
iconMarginLeftProperty.register(TextInputLayout);
iconRotationDegreesProperty.register(TextInputLayout);