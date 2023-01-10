import { Component, ElementRef, ViewChild } from '@angular/core';
import { GetCitationStateService } from '../get-citation-state.service';
GetCitationStateService
@Component({
  selector: 'app-citation',
  templateUrl: './citation.component.html',
  styleUrls: ['./citation.component.scss']
})
export class CitationComponent  {

  constructor(private GetCitationStateService: GetCitationStateService) { }
  @ViewChild('inputId') inputId: ElementRef;

  dataContainer: any[] = [];
  id: any[] = [];
  state: any[] = [];
  displayState: boolean = false;

  getInput() {
    this.id.push(this.inputId.nativeElement.value);
    this.displayState = false;
  }

  clearInput() {
    this.inputId.nativeElement.value = '';
  }

  getData() {
    this.GetCitationStateService.getCitationStateData().subscribe(
      (data) => {
        this.state=[];
        this.dataContainer = data,
          console.log(this.dataContainer);

        for (let i = 0; i < this.dataContainer.length; i++) {
          for (let j = 0; j < this.id.length; j++) {
            if (this.dataContainer[i].id === Number(this.id[j])) {
              this.state.push(this.dataContainer[i].state);
              console.log(this.dataContainer[i].state);
            }
            this.displayState = true;
          }
        }
        console.log(this.state)
        console.log(this.id);
      
        
      });
  }


}
