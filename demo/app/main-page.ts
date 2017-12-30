import {EventData} from "tns-core-modules/data/observable";
import {Page} from "ui/page";
import viewModel from "./main-view-model";
import {topmost as topMostFrame} from 'ui/frame';
import {Font} from 'ui/styling/font';

// Event handler for Page "loaded" event attached in main-page.xml
export function pageLoaded(args: EventData) {
    // Get the event sender
    var page = <Page>args.object;
    page.bindingContext = viewModel;
}

export function seeMore() {
    topMostFrame().navigate('multi-til-demo');
}