import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ObjectState } from '../../state-management/object-state/protocols/object';
import { incrementObj1, decrementObj1 } from '../../state-management/object-state/actions/object-1.actions';
import { incrementObj2, decrementObj2 } from '../../state-management/object-state/actions/object-2.actions';

@Component({
  selector: 'app-my-objects',
  templateUrl: './my-objects.component.html',
  styleUrls: ['./my-objects.component.scss']
})
export class MyObjectsComponent {

  myObjects$: Observable<ObjectState>;

  constructor(private readonly store: Store<{ objects: ObjectState }>) {
    this.myObjects$ = this.store.select('objects');
  }

  incrementObj1(): void {
    this.store.dispatch(incrementObj1());
  }

  decrementObj1(): void {
    this.store.dispatch(decrementObj1());
  }

  incrementObj2(): void {
    this.store.dispatch(incrementObj2());
  }

  decrementObj2(): void {
    this.store.dispatch(decrementObj2());
  }
}
