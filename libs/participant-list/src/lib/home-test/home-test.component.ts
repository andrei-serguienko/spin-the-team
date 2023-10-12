import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ParticipantListContainerComponent} from "../participant-list-container/participant-list-container.component";
import {MatDialog} from "@angular/material/dialog";
import { SpinnerComponent } from '../../../../tools/src/lib/spinner/spinner.component';
import { ActiveListService } from '../services/active-list.service';

@Component({
  selector: 'spin-the-team-home-test',
  standalone: true,
  imports: [CommonModule, ParticipantListContainerComponent, SpinnerComponent],
  templateUrl: './home-test.component.html',
  styleUrls: ['./home-test.component.scss'],
})
export class HomeTestComponent {
  public readonly activeListService = inject(ActiveListService);
}
