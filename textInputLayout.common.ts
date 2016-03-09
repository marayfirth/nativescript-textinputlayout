import definition = require('textInputLayout');
import {LayoutBase} from "ui/layouts/layout-base";
import {Property, PropertyMetadataSettings} from "ui/core/dependency-observable";
import {PropertyMetadata} from "ui/core/proxy";

const counterEnabledProperty: Property = new Property(
    "counterEnabled",
    "TextInputLayout",
    new PropertyMetadata(false, PropertyMetadataSettings.AffectsLayout)
);
const errorEnabledProperty: Property = new Property(
    "errorEnabled",
    "TextInputLayout",
    new PropertyMetadata(true, PropertyMetadataSettings.AffectsLayout)
);
const errorProperty: Property = new Property(
    "error",
    "TextInputLayout",
    new PropertyMetadata('', PropertyMetadataSettings.None)
);
const hintAnimationEnabledProperty: Property = new Property(
    "hintAnimationEnabled",
    "TextInputLayout",
    new PropertyMetadata(true, PropertyMetadataSettings.None)
);
const hintTextAppearanceProperty: Property = new Property(
    "hintTextAppearance",
    "TextInputLayout",
    new PropertyMetadata(undefined)
);
const hintProperty: Property = new Property(
    "hint",
    "TextInputLayout",
    new PropertyMetadata('', PropertyMetadataSettings.None)
);

export class TextInputLayout extends LayoutBase implements definition.TextInputLayout {
    public static counterEnabledProperty: Property = counterEnabledProperty;
    public static errorEnabledProperty: Property = errorEnabledProperty;
    public static errorProperty: Property = errorProperty;
    public static hintAnimationEnabledProperty: Property = hintAnimationEnabledProperty;
    public static hintTextAppearanceProperty: Property = hintTextAppearanceProperty;
    public static hintProperty: Property = hintProperty;

    constructor() {
        super();
    }

    get counterEnabled() { return this._getValue(counterEnabledProperty); }
    set counterEnabled(value) { this._setValue(counterEnabledProperty, value); }

    get errorEnabled() { return this._getValue(errorEnabledProperty); }
    set errorEnabled(value) { this._setValue(errorEnabledProperty, value); }

    get error() { return this._getValue(errorProperty) }
    set error(val) { this._setValue(errorProperty, val + ''); }

    get hintAnimationEnabled() { return this._getValue(hintAnimationEnabledProperty); }
    set hintAnimationEnabled(value) { this._setValue(hintAnimationEnabledProperty, value); }

    get hintTextAppearance() { return this._getValue(hintTextAppearanceProperty); }
    set hintTextAppearance(value) { this._setValue(hintTextAppearanceProperty, value); }

    get hint() { return this._getValue(hintProperty); }
    set hint(value) { this._setValue(hintProperty, value + ''); }
}

