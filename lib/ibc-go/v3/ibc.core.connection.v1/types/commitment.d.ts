import { CommitmentProof } from "./proofs";
import { Writer, Reader } from "protobufjs/minimal";
import { DeepPartial } from "../../../../types";
export declare const protobufPackage = "ibc.core.commitment.v1";
/**
 * MerkleRoot defines a merkle root hash.
 * In the Cosmos SDK, the AppHash of a block header becomes the root.
 */
export interface MerkleRoot {
    hash: Uint8Array;
}
/**
 * MerklePrefix is merkle path prefixed to the key.
 * The constructed key from the Path and the key will be append(Path.KeyPath,
 * append(Path.KeyPrefix, key...))
 */
export interface MerklePrefix {
    key_prefix: Uint8Array;
}
/**
 * MerklePath is the path used to verify commitment proofs, which can be an
 * arbitrary structured object (defined by a commitment type).
 * MerklePath is represented from root-to-leaf
 */
export interface MerklePath {
    key_path: string[];
}
/**
 * MerkleProof is a wrapper type over a chain of CommitmentProofs.
 * It demonstrates membership or non-membership for an element or set of
 * elements, verifiable in conjunction with a known commitment root. Proofs
 * should be succinct.
 * MerkleProofs are ordered from leaf-to-root
 */
export interface MerkleProof {
    proofs: CommitmentProof[];
}
export declare const MerkleRoot: {
    encode(message: MerkleRoot, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): MerkleRoot;
    fromJSON(object: any): MerkleRoot;
    toJSON(message: MerkleRoot): unknown;
    fromPartial(object: DeepPartial<MerkleRoot>): MerkleRoot;
};
export declare const MerklePrefix: {
    encode(message: MerklePrefix, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): MerklePrefix;
    fromJSON(object: any): MerklePrefix;
    toJSON(message: MerklePrefix): unknown;
    fromPartial(object: DeepPartial<MerklePrefix>): MerklePrefix;
};
export declare const MerklePath: {
    encode(message: MerklePath, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): MerklePath;
    fromJSON(object: any): MerklePath;
    toJSON(message: MerklePath): unknown;
    fromPartial(object: DeepPartial<MerklePath>): MerklePath;
};
export declare const MerkleProof: {
    encode(message: MerkleProof, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): MerkleProof;
    fromJSON(object: any): MerkleProof;
    toJSON(message: MerkleProof): unknown;
    fromPartial(object: DeepPartial<MerkleProof>): MerkleProof;
};
