# nativescript-textinputlayout
### Android Material Design TextInputLayout for NativeScript

##### [Android TextInputLayout Documentation](http://developer.android.com/reference/android/support/design/widget/TextInputLayout.html)

----------

### Usage

Install the plugin by running this command in your project root:
`tns plugin add nativescript-textinputlayout`

Add the android support library to your build.gradle's dependencies (and to that of the demo app if you want to run the included demo app)

```
compile "com.android.support:design:$suppotVer"
```


```xml
<Page xmlns="http://schemas.nativescript.org/tns.xsd" xmlns:TIL="nativescript-textinputlayout">
    <StackLayout>
        <!--TIL with all possible attrs via bindings-->
        <TIL:TextInputLayout class="demo-text-input-layout"
            hint="{{ hint }}"
            error="{{ error }}"
            errorEnabled="{{ isErrorEnabled }}"
            hintAnimationEnabled="{{ isHintAnimationEnabled }}"
            counterEnabled="{{ isCounterEnabled }}">

            <!--ONE child element can be added, MUST be either TextField or TextView-->
            <TextField text="{{ demoText }}" />
        </TIL:TextInputLayout>

        <!--TIL with just a static hint-->
        <TIL:TextInputLayout hint="Hint Text">
            <TextField text="" />
        </TIL:TextInputLayout>
    </StackLayout>
</Page>
```

#### Attributes

Name | Description | Value Type | Default
-----|-------------|------------|---------
hint | Text that shows up in the hint, and floating label | String | ""
error | Text that will display as error message and make the widget look invalid | String | ""
errorEnabled | Whether or not an error is enabled for the widget.  If no error, it won't pad the bottom so much.  However, if you set the error attr, it auto-sets this property under the hood to true | Boolean | false
hintAnimationEnabled | Whether or not the 'float' action of the label should be animated | Boolean | true
counterEnabled | Whether or not a char counter should display in bottom-right of widget | Boolean | false

#### Demo

To run the demo locally, run the following commands from the root folder after pulling down this repo:
`npm run setup` and `npm run demo.android`

<p align="center">
    <img height="750" src="https://raw.githubusercontent.com/bradleygore/nativescript-textinputlayout/master/demo.gif" alt="NativeScript Text Input Layout demo"/>
</p>

------------------

### Attributions

[Nathanael Anderson](https://github.com/NathanaelA) - He helped me with what (LayoutBase, ContentView, View, ...) to subclass off of and helped me understand more of the nuances of each.

[Brad Martin](https://github.com/bradmartin) - I used his {N} plugins as guides for this one, and pestered him when I had questions.

[Nathan Walker](https://github.com/NathanWalker) - I followed his [tutorial](http://developer.telerik.com/featured/creating-nativescript-plugins-in-typescript/) in setting up this plugin.
