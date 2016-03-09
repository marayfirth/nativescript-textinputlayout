declare var android: any;

import {PropertyChangeData} from "ui/core/dependency-observable";
import {PropertyMetadata} from "ui/core/proxy";
import {TextInputLayout as CommonTextInputLayout} from './textInputLayout.common';
import {TextView} from 'ui/text-view';
import {TextField} from 'ui/text-field';


/* callbacks to update native widget when exposed properties change */

// hintProperty
function onHintPropertyChanged(pcData: PropertyChangeData) {
    let til = <TextInputLayout>pcData.object;
    if (til.android) {
        til.android.setHint(pcData.newValue);
    }
}

(<PropertyMetadata>CommonTextInputLayout.hintProperty.metadata).onSetNativeValue = onHintPropertyChanged;


// errorEnabledProperty
function onErrorEnabledPropertyChanged(pcData: PropertyChangeData) {
    let til = <TextInputLayout>pcData.object,
        enabled: boolean = !!pcData.newValue;
    if (til.android) {
        til.android.setErrorEnabled(enabled);
    }
}
(<PropertyMetadata>CommonTextInputLayout.errorEnabledProperty.metadata).onSetNativeValue = onErrorEnabledPropertyChanged;

// errorProperty
// NOTE: Android natively sets errorEnabled to true if this is not null
function onErrorPropertyChanged(pcData: PropertyChangeData) {
    let til = <TextInputLayout>pcData.object,
        error: string = pcData.newValue || '';
    if (til.android) {
        til.android.setError(error);
        if (error.length > 0) {
            this.errorEnabled = true;
        }
    }
}

(<PropertyMetadata>CommonTextInputLayout.errorProperty.metadata).onSetNativeValue = onErrorPropertyChanged;


export class TextInputLayout extends CommonTextInputLayout {
    _android: any;

    constructor() {
        super();
    }

    _createUI() {
        this._android = new android.support.design.widget.TextInputLayout(this._context);

        if (this.hint && this.hint.length > 0) {
            this.android.setHint(this.hint);
        }
    }

    /**
     * Callback that gets called when a child element is added.
     * The TextInputLayout can only accept TextView or TextField, so do appropriate checking here.
     */
    _registerLayoutChild(child: TextView | TextField) {
        if (!(child instanceof TextView || child instanceof TextField)) {
            throw new Error('TextInputLayout may only have a <TextView> or <TextField> as a child');
        }
    }

    get android() { return this._android; }
    get _nativeView() { return this._android; }
}
