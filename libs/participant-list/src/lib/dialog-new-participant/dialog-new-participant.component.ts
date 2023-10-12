import {Component, inject, Inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule, MatDialogRef} from "@angular/material/dialog";

export interface DialogData {
  name: string;
  img_url: string
}

@Component({
  selector: 'spin-the-team-dialog-new-participant',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatInputModule, FormsModule, MatButtonModule, MatDialogModule],
  templateUrl: './dialog-new-participant.component.html',
  styleUrls: ['./dialog-new-participant.component.scss'],
})
export class DialogNewParticipantComponent {

  private readonly dialogRef = inject(MatDialogRef)

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

  public submit(): void {
    const formValue = this.form.value;
    return this.dialogRef.close(formValue);
  }
}
