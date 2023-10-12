import { Component, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from "@angular/material/card";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: 'spin-the-team-paricpant-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatSlideToggleModule, FormsModule, ReactiveFormsModule],
  templateUrl: './paricpant-card.component.html',
  styleUrls: ['./paricpant-card.component.scss'],
})
export class ParicpantCardComponent {
  @Input() public name! : string;
  @Input() public image! : string;

  protected formControl = new FormControl(true);
  @Output() isCheck = this.formControl.valueChanges;
}
