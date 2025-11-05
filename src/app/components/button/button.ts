import { Component ,EventEmitter,input, OnInit, output} from '@angular/core';


@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.css'
})
export class Button implements OnInit{
  text = input();
  color = input();
  btnClicl = output();  // we cant do like video tutorial search on soultion @output() btnClick = new EventEmitter();
  btnClick = new EventEmitter();

  constructor(){}

  ngOnInit(): void {
    
  }
  onClick(){
    this.btnClick.emit()
  }

}
