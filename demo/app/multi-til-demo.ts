import * as frame from 'ui/frame';

export function goBack() {
    frame.topmost().goBack();
}