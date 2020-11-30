import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-show-dialog',
  templateUrl: './show-dialog.component.html',
  styleUrls: ['./show-dialog.component.scss']
})
export class ShowDialogComponent implements OnInit {

  @Input() dialogInput;
  @Output() dialogOutput = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  /**
   * @description Function for handling the secondary button action
   */
  public cancelAction(): void {
    this.dialogOutput.emit(false);
  }
  /**
   * @description Function for handling the primary button action
   */
  public confirmAction(): void {
    this.dialogOutput.emit(true);
  }

}
