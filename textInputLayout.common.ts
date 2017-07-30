import definition = require('textInputLayout');
import {View, Property} from "tns-core-modules/ui/core/view";
import {PropertyMetadataSettings} from "tns-core-modules/ui/core/dependency-observable";
import {TextView} from 'tns-core-modules/ui/text-view';
import {TextField} from 'tns-core-modules/ui/text-field';
import { Color } from "tns-core-modules/color";

const TIL = 'TextInputLayout';


export class TextInputLayout extends View implements definition.TextInputLayout {

    constructor() {
        super();
    }

    // common
    public hint: string;
    public error: string;

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

/*** android-only properties ***/
export const hintAnimationEnabledProperty = new Property<TextInputLayout, boolean>({
    name: "hintAnimationEnabled"
});
hintAnimationEnabledProperty.register(TextInputLayout);

export const hintTextAppearanceProperty = new Property<TextInputLayout, string>({
    name: "hintTextAppearance"
});
hintTextAppearanceProperty.register(TextInputLayout);

export const counterEnabledProperty = new Property<TextInputLayout, boolean>({
    name: "counterEnabled",
    affectsLayout: true
});
counterEnabledProperty.register(TextInputLayout);

export const errorEnabledProperty = new Property<TextInputLayout, boolean>({
    name: "errorEnabled",
    affectsLayout: true
});
errorEnabledProperty.register(TextInputLayout);

/*** ios-only properties ***/

// note: this is the floating label value 
export const titleProperty = new Property<TextInputLayout, string>({
    name: "title",
    affectsLayout: true
});
titleProperty.register(TextInputLayout);

export const tintColorProperty = new Property<TextInputLayout, Color>({
    name: "tintColor",
    equalityComparer: Color.equals,
    valueConverter: (v) => new Color(v)
});
tintColorProperty.register(TextInputLayout);

export const lineColorProperty = new Property<TextInputLayout, Color>({
    name: "lineColor",
    equalityComparer: Color.equals,
    valueConverter: (v) => new Color(v)
});
lineColorProperty.register(TextInputLayout);

export const selectedTitleColorProperty = new Property<TextInputLayout, Color>({
    name: "selectedTitleColor",
    equalityComparer: Color.equals,
    valueConverter: (v) => new Color(v)
});
selectedTitleColorProperty.register(TextInputLayout);

export const selectedLineColorProperty = new Property<TextInputLayout, Color>({
    name: "selectedLineColor",
    equalityComparer: Color.equals,
    valueConverter: (v) => new Color(v)
});
selectedLineColorProperty.register(TextInputLayout);

export const lineHeightProperty = new Property<TextInputLayout, number>({
    name: "lineHeight",
    affectsLayout: true,
    valueConverter: (v) => Number(v)
});
lineHeightProperty.register(TextInputLayout);

export const selectedLineHeightProperty = new Property<TextInputLayout, number>({
    name: "selectedLineHeight",
    affectsLayout: true,
    valueConverter: (v) => Number(v)
});
selectedLineHeightProperty.register(TextInputLayout);

export const errorColorProperty = new Property<TextInputLayout, Color>({
    name: "errorColor",
    equalityComparer: Color.equals,
    valueConverter: (v) => new Color(v)
});
errorColorProperty.register(TextInputLayout);

export const iconColorProperty = new Property<TextInputLayout, Color>({
    name: "iconColor",
    equalityComparer: Color.equals,
    valueConverter: (v) => new Color(v)
});
iconColorProperty.register(TextInputLayout);

export const selectedIconColorProperty = new Property<TextInputLayout, Color>({
    name: "selectedIconColor",
    equalityComparer: Color.equals,
    valueConverter: (v) => new Color(v)
});
selectedIconColorProperty.register(TextInputLayout);

export const iconFontProperty = new Property<TextInputLayout, UIFont>({
    name: "iconFont",
    affectsLayout: true
});
iconFontProperty.register(TextInputLayout);

export const iconTextProperty = new Property<TextInputLayout, string>({
    name: "iconText",
    affectsLayout: true
});
iconTextProperty.register(TextInputLayout);

export const iconMarginBottomProperty = new Property<TextInputLayout, number>({
    name: "iconMarginBottom",
    affectsLayout: true,
    valueConverter: (v) => Number(v)
});
iconMarginBottomProperty.register(TextInputLayout);

export const iconMarginLeftProperty = new Property<TextInputLayout, number>({
    name: "iconMarginLeft",
    affectsLayout: true,
    valueConverter: (v) => Number(v)
});
iconMarginLeftProperty.register(TextInputLayout);

export const iconRotationDegreesProperty = new Property<TextInputLayout, number>({
    name: "iconRotationDegrees",
    affectsLayout: true,
    valueConverter: (v) => Number(v)
});
iconRotationDegreesProperty.register(TextInputLayout);
