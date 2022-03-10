import { Component, Inject, ViewChild } from '@angular/core';
import { extend, addClass } from '@syncfusion/ej2-base';
import { KanbanComponent, ColumnsModel, CardSettingsModel, SwimlaneSettingsModel, DialogSettingsModel, CardRenderedEventArgs } from '@syncfusion/ej2-angular-kanban';
import { cardData } from './data';

@Component({
  selector: 'app-pagetwo',
  templateUrl: './pagetwo.component.html',
  styleUrls: ['./pagetwo.component.css']
})
@Inject(
  {providedIn: 'any'}
)
export class PagetwoComponent {

  
  @ViewChild('kanbanObj') kanbanObj: KanbanComponent;
  public kanbanData: Object[] = extend([], cardData, true) as Object[];
  public columns: ColumnsModel[] = [
      { headerText: 'To Do', keyField: 'TO DO', allowToggle: true },
      { headerText: 'Face to Face', keyField: 'Face to Face', allowToggle: true },
      { headerText: 'Technical Test', keyField: 'Technical', allowToggle: true },  
      { headerText: 'Offer Accepted', keyField: 'Offer Accepted', allowToggle: true }
  ];
  public cardSettings: CardSettingsModel = {
      headerField: 'Title',
      template: '#cardTemplate',
      selectionType: 'Multiple'
  };
  public dialogSettings: DialogSettingsModel = {
      fields: [
          { text: 'ID', key: 'Title', type: 'TextBox' }, { key: 'Status', type: 'DropDown' }, { key: 'Assignee', type: 'DropDown' }, { key: 'experience', type: 'TextBox' }, { key: 'Role', type: 'TextArea' }
      ]
  };
  public swimlaneSettings: SwimlaneSettingsModel = { keyField: 'Assignee' };

  public getString(assignee : any) {
      return assignee.match(/\b(\w)/g).join('').toUpperCase();
  }
  cardRendered(args: CardRenderedEventArgs): void {
      const val: string = (<{ [key: string]: Object; }>(args.data))['Priority'] as string;
      addClass([args.element], val);
  }
}
