import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CookieService, CookieText } from './cookie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  fortuneForm:FormGroup;
  title = 'frontend';
  array:CookieText[] = [];
  constructor (private fb:FormBuilder, private cookieSvc:CookieService) {}

  ngOnInit () {
    this.createForm()
  }

  async onSubmit () {
    const c = this.fortuneForm.get('select').value;
    this.array = await this.cookieSvc.getCookies(c);
  }

  private createForm () {
    this.fortuneForm = this.fb.group({
      select: this.fb.control('1', [Validators.required])
    })
  }
}
