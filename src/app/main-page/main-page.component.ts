import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  public facts =
  [
    "Pineapples are a tropical fruit that is native to South America, specifically Brazil and Paraguay. They were later introduced to other parts of the world, including Hawaii, where they are now widely cultivated.",
    "Pineapples are composed of multiple berries that have fused together around a central core. This makes them a multiple fruit, rather than a single fruit like an apple or peach.",
    "Pineapples are a good source of vitamin C, fiber, and bromelain, a digestive enzyme that helps break down protein. Bromelain is also used as a meat tenderizer.",
    "Pineapples are often used in cooking, especially in sweet and savory dishes. They can be eaten fresh, grilled, roasted, or baked, and are a common ingredient in tropical drinks and desserts.",
    "Pineapples have a tough, spiky exterior that can be challenging to cut. To prepare a pineapple, it's best to cut off the top and bottom, stand it upright, and slice off the skin in a downward motion."
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
