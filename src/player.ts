/**
 * Plane in tyrian
 */
export class Player {
    
    public Coordinate: ICoordinate;
    public Health: number;

    public Player() {
        this.Health = 100;
    }
}

export interface ICoordinate {
    X: number;
    Y: number;
}