class RoomModel {

    private roomName: string;
    private roomStatusCode: string;
    private adminUniqueNum: string;
    private roomStatusName: string;

    constructor(roomName: string, roomStatusCode: string, adminUniqueNum: string, roomStatusName: string) {
        this.roomName = roomName;
        this.roomStatusCode = roomStatusCode;
        this.adminUniqueNum = adminUniqueNum;
        this.roomStatusName = roomStatusName;
    }

    public getRoomName(): string {
        return this.roomName;
    }

    public getRoomStatusCode(): string {
        return this.roomStatusCode;
    }

    public setAdminUniqueNum(adminUniqueNum: string): void {
        this.adminUniqueNum = adminUniqueNum;
    }

    public getAdminUniqueNum(): string {
        return this.adminUniqueNum;
    }

    public setRoomStatusName(roomStatusName: string): void {
        this.roomStatusName = roomStatusName;
    }

    public getRoomStatusName(): string {
        return this.roomStatusName;
    }

    public setRoomName(roomName: string): void {
        this.roomName = roomName;
    }

  public setRoomStatusCode(roomStatusCode: string): void {
        this.roomStatusCode = roomStatusCode;
    }
}

export default RoomModel;