import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from "@angular/material/card";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {FormControl, FormsModule} from "@angular/forms";

@Component({
  selector: 'spin-the-team-paricpant-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatSlideToggleModule, FormsModule],
  templateUrl: './paricpant-card.component.html',
  styleUrls: ['./paricpant-card.component.scss'],
})
export class ParicpantCardComponent {
  @Input() public name! : string
  @Input() public image! : string

  protected isChecked = true;

}
