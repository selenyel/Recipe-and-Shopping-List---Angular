import { Directive, ElementRef, HostBinding, HostListener, Input } from "@angular/core";

@Directive({
    selector:'[appDropdown]'
})
export class DropdownDirective{


//THIS ALSO CLOSES THE MODAL IF YOU CLICK ANYWHERE ELSE INCLUDING DROPDOWN ITSELF AND ITS CONTENT

    @HostBinding('class.open') isOpen = false;
    @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
      this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
    }
    constructor(private elRef: ElementRef) {}



// DELETE OTHER CODES AND ACTIVATE THIS ONE IF YOU WANT TO ONLY TOGGLE MENU BY CLICKING THE SAME DIV
    // @HostBinding('class.open') isOpen = false;

    // @HostListener('click') toggleOpen(){
    //     this.isOpen = !this.isOpen;
    // }
} 