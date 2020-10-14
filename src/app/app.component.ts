import { Component, ViewEncapsulation, ViewChild } from "@angular/core";
import { ContextMenuSettingsModel, ContextMenuItemModel, Diagram, DiagramContextMenu, NodeModel, DiagramBeforeMenuOpenEventArgs, DiagramComponent, DiagramTools, SnapConstraints, ConnectorModel, IExportOptions, PrintAndExport } from '@syncfusion/ej2-angular-diagrams';
Diagram.Inject(DiagramContextMenu, PrintAndExport);

@Component({
  selector: "app-root",
  // specifies the template string for the diagram component
  templateUrl: 'app.component.html',
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  @ViewChild('diagram')
  public diagram: DiagramComponent;
  public objectFromPalette: string;

  public visbility: boolean = true;

  public offsetX: number = 500;

  public offsetY: number = 100;

  public created(): void {
      
  };

  public addInfo: any = [{text: "OpenTCS"}];

  public Change() {
    debugger
    this.visbility = false;
    this.diagram.dataBind();
  }

   public ChangeVisibility() {
    debugger; 
    this.visbility = true;
    this.diagram.dataBind();
  }

  public ChangeWidth() {
    debugger;
    this.offsetX = 700;
    this.offsetY = 200;
    this.diagram.dataBind();
  }
}