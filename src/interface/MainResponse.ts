import { UUID } from "node:crypto";

export default interface MainResponse {
    id: UUID,
    name: string,
    genre?: string,
    created_at: string
}