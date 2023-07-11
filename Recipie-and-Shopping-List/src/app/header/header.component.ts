import { Component, Output, EventEmitter } from "@angular/core";

@Component({
    selector:'app-header',
    templateUrl:'header.component.html',
    styleUrls:['header.component.sass']
})
export class HeaderComponent {
    collapsed = true;
    
    @Output() featureSelected = new EventEmitter<string>();

    // onSelect(feature: string){
    //     this.featureSelected.emit(feature);
    // }
}