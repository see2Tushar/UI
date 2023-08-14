import { Component } from '@angular/core';
import { GridOptions } from 'ag-grid-community';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UI';

  public rowData: any[] = [
    { id: 1, name: 'John', age: 24 },
    { id: 2, name: 'Doe', age: 26 }
    // Make sure your data has unique 'id' for each entry
  ];
  public editedRows: any[] = [];

  public columnDefs: any[] = [
    { headerName: 'Name', field: 'name', editable: true },
    { headerName: 'Age', field: 'age', editable: true }
  ];

  onCellValueChanged(event: any) {
    if (event.newValue !== event.oldValue) {
      const existingRow = this.editedRows.find(row => row.id === event.data.id);

      if (existingRow) {
        // Update the existing row data with new data
        Object.assign(existingRow, event.data);
      } else {
        // Push a copy of the new data (so they don't reference the same object)
        this.editedRows.push({ ...event.data });
      }

      // Trigger change detection
      this.editedRows = [...this.editedRows];
    }
  }
}
