import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-conformation',
  templateUrl: './delete-conformation.component.html',
  styleUrls: ['./delete-conformation.component.css']
})
export class DeleteConformationComponent implements OnInit {

  @Input() item:string| undefined

  constructor() { }

  ngOnInit(): void {
  }

}
