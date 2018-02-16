import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

info ={nom: "med",
	email:"med@gmail.com",
	tel:"6546654684"
	} ;

comments=[
{date:new Date(), message :'A'},
{date:new Date(), message :'B'},
{date:new Date(), message :'C'}
];


commentaires={date:null,message:" "};

 onAddCommentaire(c){
   console.log(c);
   c.date=new Date();
   this.comments.push(c);

   this.commentaires=""


  }


  constructor() { }

  ngOnInit() {}






}
