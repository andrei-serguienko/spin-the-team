import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { State, Store } from '@ngxs/store';
import { CreateUser } from '../../../../libs/store/src/lib/actions/user.action';


@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'spin-the-team-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private readonly store = inject(Store);

  public test(): void {
    this.store.dispatch(new CreateUser({
      name: 'toto',
      img_url: 'toto.png'
    }));

  }
}
