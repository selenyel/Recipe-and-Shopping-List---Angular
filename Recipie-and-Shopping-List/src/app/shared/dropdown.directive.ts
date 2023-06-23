import { Directive, HostListener, Input } from "@angular/core";

@Directive({
    selector:'[appDropdown]'
})
export class DropdownDirective{
    isOpen = false;
    
    @HostListener('click') toggleOpen(){
        this.isOpen = !this.isOpen;
    }
}