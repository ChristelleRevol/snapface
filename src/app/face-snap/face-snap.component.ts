import { Component, Input, OnInit } from '@angular/core';
import {FaceSnap} from "../models/face-snap"

@Component({
  selector: 'app-face-snap',
  imports: [],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit {
  @Input() facesnap!: FaceSnap;

  snapped!: boolean
  snapButtonText!: string;

  ngOnInit(): void {
    this.snapped = false
    this.snapButtonText = 'Snap?';
  }

  onToggleSnap() {
    if (this.snapped) {
      this.removeSnap()
    } else {
      this.addSnap()
    }
  }

  removeSnap() {
    this.facesnap.unSnap()
    this.snapped = false
    this.snapButtonText = 'Snap?'
  }

  addSnap() {
    this.facesnap.snap()
    this.snapped = true
    this.snapButtonText = 'Nah!'
  }
}
