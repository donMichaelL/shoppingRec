import { Component, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    @Output('featureSelected') featureSelected = new EventEmitter<string>();

    onSelectMenu(feature: string) {
        this.featureSelected.emit(feature);
    }
}