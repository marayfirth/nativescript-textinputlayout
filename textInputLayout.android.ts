declare var android: any;

import {PropertyChangeData} from "ui/core/dependency-observable";
import {PropertyMetadata} from "ui/core/proxy";
import {TextInputLayout as CommonTextInputLayout} from './textInputLayout.common';
import {View} from "ui/core/view";
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

// hintAnimationEnabledProperty
function onHintAnimationEnabledPropertyChanged(pcData: PropertyChangeData) {
    let til = <TextInputLayout>pcData.object,
        enabled: boolean = !!pcData.newValue;
    if (til.android) {
        til.android.setHintAnimationEnabled(pcData.newValue);
    }
}

(<PropertyMetadata>CommonTextInputLayout.hintAnimationEnabledProperty.metadata).onSetNativeValue = onHintAnimationEnabledPropertyChanged;

// errorEnabledProperty
function onErrorEnabledPropertyChanged(pcData: PropertyChangeData) {
    let til = <TextInputLayout>pcData.object,
        enabled: boolean = !!pcData.newValue;
    if (til.android) {
        til.android.setErrorEnabled(enabled);
        if (!enabled && (til.error || '').length > 0) {
            til.error = '';
        }
    }
}
(<PropertyMetadata>CommonTextInputLayout.errorEnabledProperty.metadata).onSetNativeValue = onErrorEnabledPropertyChanged;

// errorProperty
// NOTE: Android natively sets errorEnabled to true if this is not null
function onErrorPropertyChanged(pcData: PropertyChangeData) {
    let til = <TextInputLayout>pcData.object,
        error: string = pcData.newValue || '';
    if (til.android && til.childLoaded) {
        til.android.setError(error);
    }
}
(<PropertyMetadata>CommonTextInputLayout.errorProperty.metadata).onSetNativeValue = onErrorPropertyChanged;

// counterEnabledProperty
function onCounterEnabledPropertyChanged(pcData: PropertyChangeData) {
    let til = <TextInputLayout>pcData.object,
        enabled: boolean = !!pcData.newValue;
    if (til.android) {
        til.android.setCounterEnabled(pcData.newValue);
    }
}

(<PropertyMetadata>CommonTextInputLayout.counterEnabledProperty.metadata).onSetNativeValue = onCounterEnabledPropertyChanged;

export class TextInputLayout extends CommonTextInputLayout {
    _android: any;
    _childLoaded: boolean;

    constructor() {
        super();
    }

    _createUI() {
        this._android = new android.support.design.widget.TextInputLayout(this._context);

        // if (this.hint && this.hint.length > 0) {
        //     this.android.setHint(this.hint);
        // }
    }

    /**
     * Callback that gets called when a child element is added.
     * The TextInputLayout can only accept TextView or TextField, so do appropriate checking here.
     */
    _registerLayoutChild(child: TextView | TextField) {
        if (!(child instanceof TextView || child instanceof TextField)) {
            throw new Error('TextInputLayout may only have a <TextView> or <TextField> as a child');
        }

        this.childLoaded = false;

        //some properties cannot be added until after the child text element has loaded
        function onChildLoaded() {
            this.childLoaded = true;
            if (this.error && this.error.length > 0) {
                console.log(`setting error to ${this.error}`);
                this.android.setError(this.error);
            }
            child.off(View.loadedEvent, onChildLoaded);
        }

        child.on(View.loadedEvent, onChildLoaded, this);

        function onChildUnloaded() {
            this.childLoaded = false;
            child.on(View.loadedEvent, onChildLoaded);
        }

        child.on(View.unloadedEvent, onChildUnloaded, this);
    }

    get childLoaded() { return this._childLoaded; }
    set childLoaded(val: boolean) { this._childLoaded = val; }

    get android() { return this._android; }
    get _nativeView() { return this._android; }
}
