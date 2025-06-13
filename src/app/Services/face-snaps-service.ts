import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap";
import { SnapType } from "../models/snaptype-type";

@Injectable({
	providedIn: "root",
})
export class FaceSnapsService {
	private faceSnaps: FaceSnap[] = [
		new FaceSnap(
			"Something something",
			"We Win",
			new Date(),
			0,
			"https://occ-0-8407-92.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABZD22PcM9yBT804IzKtqSC9rti4v_rKw0Ge9FTiSlkiplGFGl4VwR7boTWZKz7g9hnRJCxyrC966Ve_X-RSWguD9E7vAFXeGsdx7.jpg?r=40f",
		),
		new FaceSnap(
			"Maledictus",
			"rip",
			new Date(),
			100,
			"https://www.metalorgie.com/media/cache/band_hero/images/band/picture/Ultra-Vomit.jpg",
		).withLocation("no location duh"),
	];

	getFaceSnaps(): FaceSnap[] {
		return [...this.faceSnaps];
	}

	getFaceSnapById(faceSnapId: string): FaceSnap {
		const foundFaceSnap = this.faceSnaps.find(
			(faceSnap) => faceSnap.id === faceSnapId,
		);
		if (!foundFaceSnap) {
			throw new Error("FaceSnap not found!");
		}
		return foundFaceSnap
	}

	snapById(faceSnapId: string, snapType: SnapType): void {
		const FaceSnap = this.getFaceSnapById(faceSnapId)
		if (!FaceSnap) {
			throw new Error("FaceSnap not found!");
		}
		FaceSnap.snap();
	}
}
