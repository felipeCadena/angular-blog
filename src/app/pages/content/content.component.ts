import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { mock } from '../../../data/mock'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  @Input()
  photoCover: string = "https://topcinema.com.br/wp-content/uploads/2023/10/cats-133.jpg"
  contentTitle: string = 'Minha notícia';
  contentDescription: string = 'Hello, news!'
  private id: string | null = '0'

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id = value.get('id')
    )

    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id: string | null) {
    const result = mock.filter(article => article.id === id)[0]

    if (result) {
      this.contentTitle = result.title
      this.contentDescription = result.description
      this.photoCover = result.photo
    }
  }
}
