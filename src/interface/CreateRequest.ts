import { UUID } from "node:crypto";

export default interface CreateRequest {
    id?: UUID,
    name: string,
    genre_id?: UUID
}