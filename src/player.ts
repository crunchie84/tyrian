/**
 * Plane in tyrian
 */
class Player {
    
    public Coordinate: ICoordinate;
    public Health: number;

    public Player() {
        this.Health = 100;
    }
}

interface ICoordinate {
    X: number;
    Y: number;
}