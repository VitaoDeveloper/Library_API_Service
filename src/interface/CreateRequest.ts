import { UUID } from "node:crypto";

interface CreateRequest {
    id?: UUID,
    name: string,
    genre?: string
}

export default CreateRequest;