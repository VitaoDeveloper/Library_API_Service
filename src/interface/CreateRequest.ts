import { UUID } from "node:crypto";

interface CreateRequest {
    id?: UUID,
    name: string,
    gender?: string
}

export default CreateRequest;