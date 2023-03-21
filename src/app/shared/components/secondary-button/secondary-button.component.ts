import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';


@Component({
  selector: 'app-secondary-button',
  templateUrl: './secondary-button.component.html',
  styleUrls: ['./secondary-button.component.css']
})
export class SecondaryButtonComponent implements OnInit {
  @Output() onclick = new EventEmitter<any>();
  @Input() label = '';
  @Input() green = false;
  @Input() pink = false;


  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.onclick.emit()
  }

}
