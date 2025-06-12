import { withHashLocation } from "@angular/router";
import { SnapType } from "./snaptype-type";

export class FaceSnap {
	location?: string;
	id: string;

	constructor(
		public title: string,
		public description: string,
		public createdAt: Date,
		public snaps: number,
		public imageURL: string,
	) {
		this.id = crypto.randomUUID().substring(0, 8);
	}

	unSnap(): void {
		this.snaps--;
	}

	snap(): void {
		this.snaps++;
	}

	isSnap(snapType: SnapType) {
		if (snapType === "snap") {
			this.snap();
		} else if (snapType === "unsnap") {
			this.unSnap();
		}
	}

	setLocation(location: string): void {
		this.location = location;
	}

	withLocation(location: string): FaceSnap {
		this.setLocation(location);
		return this;
	}
}
