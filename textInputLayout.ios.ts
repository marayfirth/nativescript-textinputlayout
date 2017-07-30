declare var ios: any;
declare var SkyFloatingLabelTextField: any;
declare var SkyFloatingLabelTextFieldWithIcon: any;

import {PropertyChangeData} from 'tns-core-modules/ui/core/dependency-observable';
import {
    TextInputLayout as CommonTextInputLayout,
    hintProperty,
    errorProperty,
    errorColorProperty,
    titleProperty,
    selectedTitleColorProperty,
    tintColorProperty,
    lineColorProperty,
    selectedLineColorProperty,
    lineHeightProperty,
    selectedLineHeightProperty,
    iconColorProperty,
    selectedIconColorProperty,
    iconFontProperty,
    iconTextProperty,
    iconMarginBottomProperty,
    iconMarginLeftProperty,
    iconRotationDegreesProperty
} from './textInputLayout.common';
import {TextField} from 'tns-core-modules/ui/text-field';
import {Color} from 'tns-core-modules/color';

export class TextInputLayout extends TextField implements CommonTextInputLayout {
    _ios: any;
    _childLoaded: boolean;

    public error: string;
    public title : string;
    public tintColor : Color;
    public lineColor : Color;
    public selectedTintColor : Color;
    public selectedLineColor : Color;
    public selectedTitleColor : Color;
    public lineHeight : number;
    public selectedLineHeight : number;
    public errorColor : Color;
    public iconColor : Color;
    public selectedIconColor : Color;
    public iconFont : string;
    public iconText : string;
    public iconMarginBottom : number;
    public iconMarginLeft : number;
    public iconRotationDegrees : number;

    get ios() {return this._ios;}
    get _nativeView() {return this._ios;}

    [hintProperty.setNative](value: string) {
        if (this.ios) {
            this.ios.placeholder = value;
        }
    }

    [errorProperty.setNative](value: string) {
        if (this.ios) {
            this.ios.errorMessage = value;
        }
    }

    [errorColorProperty.setNative](value: Color) {
        if (this.ios && value.ios) {
            this.ios.errorColor = value.ios;
        }
    }

    [titleProperty.setNative](value: string) {
        if (this.ios) {
            this.ios.title = value;
        }
    }

    [selectedTitleColorProperty.setNative](value: Color) {
        if (this.ios && value.ios) {
            this.ios.tintColor = value.ios;
        }
    }

    [lineColorProperty.setNative](value: Color) {
        if (this.ios && value.ios) {
            this.ios.lineColor = value.ios;
        }
    }

    [selectedLineColorProperty.setNative](value: Color) {
        if (this.ios && value.ios) {
            this.ios.selectedLineColor = value.ios;
        }
    }

    [lineHeightProperty.setNative](value: number) {
        if (this.ios && !isNaN(value)) {
            this.ios.lineHeight = value;
        }
    }

    [selectedLineHeightProperty.setNative](value: number) {
        if (this.ios && !isNaN(value)) {
            this.ios.selectedLineHeight = value;
        }
    }

    [iconColorProperty.setNative](value: Color) {
        if (this.ios && value.ios) {
            this.ios.iconColor = value.ios;
        }
    }

    [selectedIconColorProperty.setNative](value: Color) {
        if (this.ios && value.ios) {
            this.ios.selectedIconColor = value.ios;
        }
    }

    [iconFontProperty.setNative](value: UIFont) {
        if (this.ios) {
            if (value instanceof UIFont) { 
                this.ios.iconFont = value;
            } else {
                console.warn('TIL:iconFont can only be set to an instance of UIFont');
            }
        }
    }

    [iconTextProperty.setNative](value: string) {
        if (this.ios) {
            this.ios.iconText = value;
        }
    }

    [iconMarginBottomProperty.setNative](value: number) {
        if (this.ios && !isNaN(value)) {
            this.ios.iconMarginBottom = value;
        }
    }

    [iconMarginLeftProperty.setNative](value: number) {
        if (this.ios && !isNaN(value)) {
            this.ios.iconMarginLeft = value;
        }
    }

    [iconRotationDegreesProperty.setNative](value: number) {
        if (this.ios && !isNaN(value)) {
            this.ios.iconRotationDegrees = value;
        }
    }
    
    constructor() {
        super();

        // TextField delegate will take care of rending to the appropriate size, just pass in zeros here
        this._ios = new SkyFloatingLabelTextField(CGRectMake(0, 0, 0, 0));
    }
}

export class TextInputLayoutWithIcon extends TextInputLayout {
    constructor() {
        super();

        // TextField delegate will take care of rending to the appropriate size, just pass in zeros here
        this._ios = new SkyFloatingLabelTextFieldWithIcon(CGRectMake(0,0,0,0));
    }
}
