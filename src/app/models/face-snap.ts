export class FaceSnap {

    location?: string

    constructor( public title: string,
                public description: string,
                public createdAt: Date,
                public snaps: number,
                public imageURL: string) {}

    unSnap(): void {
        this.snaps--
    }

    snap(): void {
        this.snaps++
    }

    setLocation(location: string): void {
        this.location = location
    }
    
}