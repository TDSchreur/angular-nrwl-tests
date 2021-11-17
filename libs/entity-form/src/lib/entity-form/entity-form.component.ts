import { Component, Input, OnInit } from '@angular/core';

import { Todo } from '@tdschreur/data';

@Component({
  selector: 'tdschreur-entity-form',
  templateUrl: './entity-form.component.html',
  styleUrls: ['./entity-form.component.scss'],
})
export class EntityFormComponent implements OnInit {
  @Input() todos: Todo[] = [];

  constructor() {}

  ngOnInit(): void {}
}
