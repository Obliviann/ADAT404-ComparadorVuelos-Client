//0.The Component SYMBOL from the AN core lib is allways imported
import { Component, OnInit } from '@angular/core';

//0. decorator func that specifies the AN metadata for the C
@Component({
  selector: 'app-my-form',  //the name of the HTML element that identifies
                            //this C within a parent component's template
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
//0. ALLWAYS EXPORT your C's class so you can import it elsewere (i.e in AppModule)
export class MyFormComponent implements OnInit {
  //0. here we add the PROPERTIES:

  constructor(
  ) { }

  ngOnInit() {
  }

}
