import { Component, ElementRef, ViewChild } from '@angular/core';
import { GetCitationStateService } from '../get-citation-state.service';
GetCitationStateService
@Component({
  selector: 'app-citation',
  templateUrl: './citation.component.html',
  styleUrls: ['./citation.component.scss']
})
export class CitationComponent {

  constructor(private GetCitationStateService: GetCitationStateService) { }
  @ViewChild('inputId') inputId: ElementRef;
  dataContainer: any[] = [];
  id: any[] = [];
  state: string;

  getInput() {
    this.id.push(this.inputId.nativeElement.value)
    console.log(this.id)
  }
  clearInput() {
    this.inputId.nativeElement.value = '';
  }

  getData(customId) {
    this.GetCitationStateService.getCitationStateData().subscribe(
      (data) => {
        this.dataContainer = data,
          console.log(this.dataContainer)

        for (let i = 0; i < this.dataContainer.length; i++) {
          if (this.dataContainer[i].id === customId) this.state=this.dataContainer[i].state
        }
      });
  }



}
