import definition = require('textInputLayout');
import { View } from "ui/core/view";
import { Property } from "ui/core/dependency-observable";
export declare class TextInputLayout extends View implements definition.TextInputLayout {
    static errorProperty: Property;
    static hintProperty: Property;
    static counterEnabledProperty: Property;
    static hintAnimationEnabledProperty: Property;
    static hintTextAppearanceProperty: Property;
    static errorEnabledProperty: Property;
    static titleProperty: Property;
    static iconTextProperty: Property;
    constructor();
    counterEnabled: any;
    errorEnabled: any;
    error: any;
    hintAnimationEnabled: any;
    hintTextAppearance: any;
    hint: any;
    title: any;
    iconText: any;
}
