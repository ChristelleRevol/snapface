import { Component, OnInit, Input } from "@angular/core";
import { FaceSnap } from "../models/face-snap";
import { NgStyle, NgClass, UpperCasePipe, DatePipe } from "@angular/common";
import { FaceSnapsService } from "../Services/face-snaps-service";
import { ActivatedRoute, RouterLink } from "@angular/router";

@Component({
	selector: "app-single-face-snap",
	imports: [NgStyle, NgClass, UpperCasePipe, DatePipe, RouterLink],
	templateUrl: "./single-face-snap.component.html",
	styleUrl: "./single-face-snap.component.scss",
})
export class SingleFaceSnapComponent implements OnInit {
	faceSnap!: FaceSnap;

	constructor(
		private faceSnapsService: FaceSnapsService,
		private route: ActivatedRoute,
	) {}

	snapped!: boolean;
	snapButtonText!: string;

	ngOnInit(): void {
		this.getFaceSnap()
		this.prepareInterface()

	}

	onToggleSnap() {
		if (this.snapped) {
			this.removeSnap();
		} else {
			this.addSnap();
		}
	}

	removeSnap() {
		this.faceSnapsService.snapById(this.faceSnap.id, "unsnap");
		this.snapped = false;
		this.snapButtonText = "Snap?";
	}

	addSnap() {
		this.faceSnapsService.snapById(this.faceSnap.id, "snap");
		this.snapped = true;
		this.snapButtonText = "Nah!";
	}

	private prepareInterface() {
		this.snapped = false;
		this.snapButtonText = "Snap?";
	}

	private getFaceSnap() {
		const faceSnapId = this.route.snapshot.params["id"]
		this.faceSnap = this.faceSnapsService.getFaceSnapById(faceSnapId)
	}
}
