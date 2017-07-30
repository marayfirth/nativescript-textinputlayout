/**
 * TextInputLayout Class
 *      Acts as a wrapper around <TextField> or <TextView> components
 *      Implements functionality outline in android's TextInputLayout component
 */


declare module 'textInputLayout' {
    import { Color } from "tns-core-modules/color";
    import View = require("tns-core-modules/ui/core/view");
    import {Property} from "tns-core-modules/ui/core/dependency-observable";

    export class TextInputLayout extends View.View {
         /**
         * Native [android TextInputLayout](http://developer.android.com/reference/android/support/design/widget/TextInputLayout.html)
         */
        android: any;

        ios: any;

        /**PROPS**/
        public hint: string;
        public error: string;

        //ANDROID ONLY
        public hintAnimationEnabled ?: boolean;
        public hintTextAppearance ?: string;
        public counterEnabled ?: boolean;
        public errorEnabled ?: boolean;

        //IOS Only
        public title ?: string;
        public tintColor ?: Color;
        public lineColor ?: Color;
        public selectedTintColor ?: Color;
        public selectedLineColor ?: Color;
        public selectedTitleColor ?: Color;
        public lineHeight ?: number;
        public selectedLineHeight ?: number;
        public errorColor ?: Color;
        public iconColor ?: Color;
        public selectedIconColor ?: Color;
        public iconFont ?: string;
        public iconText ?: string;
        public iconMarginBottom ?: number;
        public iconMarginLeft ?: number;
        public iconRotationDegrees ?: number;
    }
}