import {
  Component,
  OnInit,
  ElementRef,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  @Output() close = new EventEmitter();

  constructor(private el: ElementRef) {
    // console.log(this.el.nativeElement);
  }

  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement);
  }
  ngOnDestroy(): void {
    // console.log(`LEAVING MODAL!!`);
    // this lifecyckle hook is activated when you leave this component,
    // this mean, you navigate somewhere else
    this.el.nativeElement.remove();
  }
  onCloseClick() {
    this.close.emit();
  }
}
