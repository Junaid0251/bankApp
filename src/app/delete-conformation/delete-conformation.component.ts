import { outputAst } from '@angular/compiler';
import { Component, Input, OnInit,EventEmitter, Output } from '@angular/core';



@Component({
  selector: 'app-delete-conformation',
  templateUrl: './delete-conformation.component.html',
  styleUrls: ['./delete-conformation.component.css']
})
export class DeleteConformationComponent implements OnInit {

  @Input() item:string| undefined
  @Output() onCancel =new EventEmitter()
  @Output() onDelete =new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  cancel(){
    this.onCancel.emit();
  }

  delete(){
    this.onDelete.emit(this.item);
  }

}
