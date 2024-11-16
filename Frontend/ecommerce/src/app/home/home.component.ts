import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
    products = [
      {
        "name": "OPPO F21s Pro 5G",
        "price": 245.67,
        "description": "OPPO F21s Pro 5G is a powerful device with a RAM extension feature, that offers brilliant operational speed to users.",
        "ratings": 4.5,
        "images": [
          {
            "image": "/images/products/1.jpg"
          },
          {
            "image": "/images/products/2.jpg"
          }
        ],
        "category": "Mobile Phones",
        "seller": "Amazon",
        "stock": 5
      },
      {
        "name": "WRISTIO HD, Bluetooth Calling Smart Watch",
        "price": 150.32,
        "description": "Minix watches are exclusively designed to fulfill the advanced tech needs of today’s generation.",
        "ratings": 3.5,
        "images": [
          {
            "image": "/images/products/2.jpg"
          }
        ],
        "category": "Accessories",
        "seller": "Flipkart",
        "stock": 9
      }
    ]
}
