import { Writer, Reader } from "protobufjs/minimal";
import { DeepPartial } from "../..";
export declare const protobufPackage = "tendermint.crypto";
export interface Proof {
    total: number;
    index: number;
    leaf_hash: Uint8Array;
    aunts: Uint8Array[];
}
export interface ValueOp {
    /** Encoded in ProofOp.Key. */
    key: Uint8Array;
    /** To encode in ProofOp.Data */
    proof: Proof | undefined;
}
export interface DominoOp {
    key: string;
    input: string;
    output: string;
}
/**
 * ProofOp defines an operation used for calculating Merkle root
 * The data could be arbitrary format, providing nessecary data
 * for example neighbouring node hash
 */
export interface ProofOp {
    type: string;
    key: Uint8Array;
    data: Uint8Array;
}
/** ProofOps is Merkle proof defined by the list of ProofOps */
export interface ProofOps {
    ops: ProofOp[];
}
export declare const Proof: {
    encode(message: Proof, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): Proof;
    fromJSON(object: any): Proof;
    toJSON(message: Proof): unknown;
    fromPartial(object: DeepPartial<Proof>): Proof;
};
export declare const ValueOp: {
    encode(message: ValueOp, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): ValueOp;
    fromJSON(object: any): ValueOp;
    toJSON(message: ValueOp): unknown;
    fromPartial(object: DeepPartial<ValueOp>): ValueOp;
};
export declare const DominoOp: {
    encode(message: DominoOp, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): DominoOp;
    fromJSON(object: any): DominoOp;
    toJSON(message: DominoOp): unknown;
    fromPartial(object: DeepPartial<DominoOp>): DominoOp;
};
export declare const ProofOp: {
    encode(message: ProofOp, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): ProofOp;
    fromJSON(object: any): ProofOp;
    toJSON(message: ProofOp): unknown;
    fromPartial(object: DeepPartial<ProofOp>): ProofOp;
};
export declare const ProofOps: {
    encode(message: ProofOps, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): ProofOps;
    fromJSON(object: any): ProofOps;
    toJSON(message: ProofOps): unknown;
    fromPartial(object: DeepPartial<ProofOps>): ProofOps;
};
