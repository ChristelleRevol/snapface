import { Component, OnInit } from "@angular/core";
import { FaceSnap } from "../models/face-snap";
import { NgStyle, NgClass, UpperCasePipe, DatePipe } from "@angular/common";
import { FaceSnapsService } from "../Services/face-snaps-service";
import { ActivatedRoute } from "@angular/router";

@Component({
	selector: "app-single-face-snap",
	imports: [NgStyle, NgClass, UpperCasePipe, DatePipe],
	templateUrl: "./single-face-snap.component.html",
	styleUrl: "./single-face-snap.component.scss",
})
export class SingleFaceSnapComponent implements OnInit {
	constructor(
		private faceSnapsService: FaceSnapsService,
		private route: ActivatedRoute,
	) {}

	snapped!: boolean;
	snapButtonText!: string;

	ngOnInit(): void {
		this.snapped = false;
		this.snapButtonText = "Snap?";
	}

	onToggleSnap() {
		if (this.snapped) {
			this.removeSnap();
		} else {
			this.addSnap();
		}
	}

	removeSnap() {
		this.faceSnapsService.snapById(this.facesnap.id, "unsnap");
		this.snapped = false;
		this.snapButtonText = "Snap?";
	}

	addSnap() {
		this.faceSnapsService.snapById(this.facesnap.id, "snap");
		this.snapped = true;
		this.snapButtonText = "Nah!";
	}
}
