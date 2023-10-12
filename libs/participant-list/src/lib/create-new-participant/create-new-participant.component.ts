import { Component, inject, Type, TemplateRef } from '@angular/core';
import { Dialog } from "@angular/cdk/dialog";
import { DialogNewParticipantComponent } from "../dialog-new-participant/dialog-new-participant.component";
import {MatDialog, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {switchMap} from "rxjs";
import {UserService} from "@spin-the-team/firebase-helper";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'spin-the-team-create-new-participant',
  standalone: true,
  templateUrl: './create-new-participant.component.html',
  styleUrls: ['./create-new-participant.component.scss'],
  imports: [
    MatCardModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule
  ]
})
export class CreateNewParticipantComponent {

  constructor(public dialog: MatDialog) {}

  public readonly newParticipantDialog: Type<DialogNewParticipantComponent> = DialogNewParticipantComponent;
  private readonly userService: UserService = inject(UserService)

  public openDialog(): void {
    this.dialog.open(this.newParticipantDialog, {
      width: '30%',
    }).afterClosed().pipe(
      switchMap((data) =>
        this.userService.createUser (data)
      )
    ).subscribe();
  }
}
