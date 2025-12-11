import {useEffect} from "react";

export const ChatRoom = ({roomId}: {roomId: number}) => {
    useEffect(() => {
        const connection = createConnection(roomId);
        connection.connect();

        return () => connection.disconnect();
    }, [roomId]);

    return <>
        Chat № {roomId}
    </>
};












const createConnection = (id: number) => {
    return {
        id,
        connect() {
            console.log(`Chat ${this.id} connected`);
        },
        disconnect() {
            console.log(`Chat ${this.id} disconnected`);
        }
    }
}
