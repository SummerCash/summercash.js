const protobuf = require("protobufjs"); // Import protobuf
import { load } from "protobufjs"; // Import protobuf loader

let provider: string; // Init provider buffer

// SourceAPI - init API with given node provider
export const SourceAPI = (provider: string) => {
    provider = provider; // Set provider
};

// loadProtobuf - load protobuf file
const loadProtobuf = (file: string|string[]) => {
    load(file, (err: Error|null, root?: protobuf.Root) => { // Load protobuf file
        if (err) { // Check for error
            throw err; // Throw error
        }

        console.log(root); // Log root
    });
};