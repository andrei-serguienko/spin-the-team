import {Component, Inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";

export interface DialogData {
  name: string;
  img_url: string
}

@Component({
  selector: 'spin-the-team-dialog-new-participant',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatInputModule, FormsModule, MatButtonModule],
  templateUrl: './dialog-new-participant.component.html',
  styleUrls: ['./dialog-new-participant.component.scss'],
})
export class DialogNewParticipantComponent {
  public form = new FormGroup({
    name: new FormControl(null, Validators.required),
    img_url: new FormControl(null, Validators.required),
  })

  public get name(): FormControl {
    return this.form.get('name') as FormControl
  }

  public get img_url(): FormControl {
    return this.form.get('img_url') as FormControl
  }
}
