import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-principal-button',
  templateUrl: './principal-button.component.html',
  styleUrls: ['./principal-button.component.css']
})
export class PrincipalButtonComponent implements OnInit {
  @Output() onclick = new EventEmitter<any>();
  @Input() label = '';
  @Input() green = false;
  @Input() pink = false;
  @Input() blue = false;



  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.onclick.emit()
  }
}
