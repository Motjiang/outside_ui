import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  email: string = 'info@outside.co.za';
  phone: string = '041 123 4567';
  address: string = '123 Marine Drive, Summerstrand, Port Elizabeth, 6001, Eastern Cape, South Africa';
}
