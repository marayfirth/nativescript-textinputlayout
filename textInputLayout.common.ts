import definition = require('textInputLayout');
import {View} from "ui/core/view";
import {Property, PropertyMetadataSettings} from "ui/core/dependency-observable";
// import {CssProperty} from 'ui/core/properties/properties';
import {PropertyMetadata} from "ui/core/proxy";
import {TextView} from 'ui/text-view';
import {TextField} from 'ui/text-field';

const TIL = 'TextInputLayout';

const errorProperty: Property = new Property(
    "error",
    TIL,
    new PropertyMetadata('', PropertyMetadataSettings.None)
);

// NOTE: This is 'placeholder' for ios
const hintProperty: Property = new Property(
    "hint",
    TIL,
    new PropertyMetadata('', PropertyMetadataSettings.None)
);


// android-only properties
const hintAnimationEnabledProperty: Property = new Property(
    "hintAnimationEnabled",
    TIL,
    new PropertyMetadata(true, PropertyMetadataSettings.None)
);
const hintTextAppearanceProperty: Property = new Property(
    "hintTextAppearance",
    TIL,
    new PropertyMetadata(undefined)
);
const counterEnabledProperty: Property = new Property(
    "counterEnabled",
    TIL,
    new PropertyMetadata(false, PropertyMetadataSettings.AffectsLayout)
);
const errorEnabledProperty: Property = new Property(
    "errorEnabled",
    TIL,
    new PropertyMetadata(true, PropertyMetadataSettings.AffectsLayout)
);

// ios-only properties
const titleProperty: Property = new Property(
    "title",
    TIL,
    new PropertyMetadata(false, PropertyMetadataSettings.AffectsLayout)
);
const iconTextProperty: Property = new Property(
    "iconText",
    TIL,
    new PropertyMetadata(true, PropertyMetadataSettings.AffectsLayout)
);


export class TextInputLayout extends View implements definition.TextInputLayout {
    public static errorProperty: Property = errorProperty;
    public static hintProperty: Property = hintProperty;
    
    //android-only
    public static counterEnabledProperty: Property = counterEnabledProperty;
    public static hintAnimationEnabledProperty: Property = hintAnimationEnabledProperty;
    public static hintTextAppearanceProperty: Property = hintTextAppearanceProperty;
    public static errorEnabledProperty: Property = errorEnabledProperty;

    //ios-only
    public static titleProperty: Property = titleProperty;
    public static iconTextProperty: Property = iconTextProperty;

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

    get title() { return this._getValue(titleProperty); }
    set title(value) { this._setValue(titleProperty, value+''); }

    get iconText() { return this._getValue(titleProperty); }
    set iconText(value) { this._setValue(iconTextProperty, value+''); }
}

