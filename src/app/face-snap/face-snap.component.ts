import { Component, Input, OnInit } from "@angular/core";
import { FaceSnap } from "../models/face-snap";
import { UpperCasePipe } from "@angular/common";
import { FaceSnapsService } from "../Services/face-snaps-service";
import { Router } from "@angular/router";

@Component({
	selector: "app-face-snap",
	imports: [UpperCasePipe],
	templateUrl: "./face-snap.component.html",
	styleUrl: "./face-snap.component.scss",
})
export class FaceSnapComponent implements OnInit {
	@Input() facesnap!: FaceSnap;

	constructor(private faceSnapsService: FaceSnapsService,
				private router: Router
	) {}

	onViewFaceSnap() {
		this.router.navigateByUrl(`facesnaps/${this.facesnap.id}`)
	}

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
