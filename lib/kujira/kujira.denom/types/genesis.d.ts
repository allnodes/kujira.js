import { Params } from "./params";
import { DenomAuthorityMetadata } from "./authorityMetadata";
import { Writer, Reader } from "protobufjs/minimal";
import { DeepPartial } from "../../../types";
export declare const protobufPackage = "kujira.denom";
/** GenesisState defines the denom module's genesis state. */
export interface GenesisState {
    /** params defines the paramaters of the module. */
    params: Params | undefined;
    factory_denoms: GenesisDenom[];
}
export interface GenesisDenom {
    denom: string;
    authority_metadata: DenomAuthorityMetadata | undefined;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
export declare const GenesisDenom: {
    encode(message: GenesisDenom, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): GenesisDenom;
    fromJSON(object: any): GenesisDenom;
    toJSON(message: GenesisDenom): unknown;
    fromPartial(object: DeepPartial<GenesisDenom>): GenesisDenom;
};
