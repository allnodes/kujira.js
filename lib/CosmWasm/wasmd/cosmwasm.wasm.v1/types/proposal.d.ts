import { Writer, Reader } from "protobufjs/minimal";
import { DeepPartial } from "../../../../types";
import { Coin } from "../../../../types/cosmos/base/coin";
import { AccessConfig } from "./types";
export declare const protobufPackage = "cosmwasm.wasm.v1";
/** StoreCodeProposal gov proposal content type to submit WASM code to the system */
export interface StoreCodeProposal {
    /** Title is a short summary */
    title: string;
    /** Description is a human readable text */
    description: string;
    /** RunAs is the address that is passed to the contract's environment as sender */
    run_as: string;
    /** WASMByteCode can be raw or gzip compressed */
    wasm_byte_code: Uint8Array;
    /** InstantiatePermission to apply on contract creation, optional */
    instantiate_permission: AccessConfig | undefined;
}
/**
 * InstantiateContractProposal gov proposal content type to instantiate a
 * contract.
 */
export interface InstantiateContractProposal {
    /** Title is a short summary */
    title: string;
    /** Description is a human readable text */
    description: string;
    /** RunAs is the address that is passed to the contract's environment as sender */
    run_as: string;
    /** Admin is an optional address that can execute migrations */
    admin: string;
    /** CodeID is the reference to the stored WASM code */
    code_id: number;
    /** Label is optional metadata to be stored with a constract instance. */
    label: string;
    /** Msg json encoded message to be passed to the contract on instantiation */
    msg: Uint8Array;
    /** Funds coins that are transferred to the contract on instantiation */
    funds: Coin[];
}
/** MigrateContractProposal gov proposal content type to migrate a contract. */
export interface MigrateContractProposal {
    /** Title is a short summary */
    title: string;
    /** Description is a human readable text */
    description: string;
    /** Contract is the address of the smart contract */
    contract: string;
    /** CodeID references the new WASM code */
    code_id: number;
    /** Msg json encoded message to be passed to the contract on migration */
    msg: Uint8Array;
}
/** SudoContractProposal gov proposal content type to call sudo on a contract. */
export interface SudoContractProposal {
    /** Title is a short summary */
    title: string;
    /** Description is a human readable text */
    description: string;
    /** Contract is the address of the smart contract */
    contract: string;
    /** Msg json encoded message to be passed to the contract as sudo */
    msg: Uint8Array;
}
/**
 * ExecuteContractProposal gov proposal content type to call execute on a
 * contract.
 */
export interface ExecuteContractProposal {
    /** Title is a short summary */
    title: string;
    /** Description is a human readable text */
    description: string;
    /** RunAs is the address that is passed to the contract's environment as sender */
    run_as: string;
    /** Contract is the address of the smart contract */
    contract: string;
    /** Msg json encoded message to be passed to the contract as execute */
    msg: Uint8Array;
    /** Funds coins that are transferred to the contract on instantiation */
    funds: Coin[];
}
/** UpdateAdminProposal gov proposal content type to set an admin for a contract. */
export interface UpdateAdminProposal {
    /** Title is a short summary */
    title: string;
    /** Description is a human readable text */
    description: string;
    /** NewAdmin address to be set */
    new_admin: string;
    /** Contract is the address of the smart contract */
    contract: string;
}
/**
 * ClearAdminProposal gov proposal content type to clear the admin of a
 * contract.
 */
export interface ClearAdminProposal {
    /** Title is a short summary */
    title: string;
    /** Description is a human readable text */
    description: string;
    /** Contract is the address of the smart contract */
    contract: string;
}
/**
 * PinCodesProposal gov proposal content type to pin a set of code ids in the
 * wasmvm cache.
 */
export interface PinCodesProposal {
    /** Title is a short summary */
    title: string;
    /** Description is a human readable text */
    description: string;
    /** CodeIDs references the new WASM codes */
    code_ids: number[];
}
/**
 * UnpinCodesProposal gov proposal content type to unpin a set of code ids in
 * the wasmvm cache.
 */
export interface UnpinCodesProposal {
    /** Title is a short summary */
    title: string;
    /** Description is a human readable text */
    description: string;
    /** CodeIDs references the WASM codes */
    code_ids: number[];
}
/**
 * AccessConfigUpdate contains the code id and the access config to be
 * applied.
 */
export interface AccessConfigUpdate {
    /** CodeID is the reference to the stored WASM code to be updated */
    code_id: number;
    /** InstantiatePermission to apply to the set of code ids */
    instantiate_permission: AccessConfig | undefined;
}
/**
 * UpdateInstantiateConfigProposal gov proposal content type to update
 * instantiate config to a  set of code ids.
 */
export interface UpdateInstantiateConfigProposal {
    /** Title is a short summary */
    title: string;
    /** Description is a human readable text */
    description: string;
    /**
     * AccessConfigUpdate contains the list of code ids and the access config
     * to be applied.
     */
    access_config_updates: AccessConfigUpdate[];
}
export declare const StoreCodeProposal: {
    encode(message: StoreCodeProposal, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): StoreCodeProposal;
    fromJSON(object: any): StoreCodeProposal;
    toJSON(message: StoreCodeProposal): unknown;
    fromPartial(object: DeepPartial<StoreCodeProposal>): StoreCodeProposal;
};
export declare const InstantiateContractProposal: {
    encode(message: InstantiateContractProposal, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): InstantiateContractProposal;
    fromJSON(object: any): InstantiateContractProposal;
    toJSON(message: InstantiateContractProposal): unknown;
    fromPartial(object: DeepPartial<InstantiateContractProposal>): InstantiateContractProposal;
};
export declare const MigrateContractProposal: {
    encode(message: MigrateContractProposal, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): MigrateContractProposal;
    fromJSON(object: any): MigrateContractProposal;
    toJSON(message: MigrateContractProposal): unknown;
    fromPartial(object: DeepPartial<MigrateContractProposal>): MigrateContractProposal;
};
export declare const SudoContractProposal: {
    encode(message: SudoContractProposal, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): SudoContractProposal;
    fromJSON(object: any): SudoContractProposal;
    toJSON(message: SudoContractProposal): unknown;
    fromPartial(object: DeepPartial<SudoContractProposal>): SudoContractProposal;
};
export declare const ExecuteContractProposal: {
    encode(message: ExecuteContractProposal, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): ExecuteContractProposal;
    fromJSON(object: any): ExecuteContractProposal;
    toJSON(message: ExecuteContractProposal): unknown;
    fromPartial(object: DeepPartial<ExecuteContractProposal>): ExecuteContractProposal;
};
export declare const UpdateAdminProposal: {
    encode(message: UpdateAdminProposal, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): UpdateAdminProposal;
    fromJSON(object: any): UpdateAdminProposal;
    toJSON(message: UpdateAdminProposal): unknown;
    fromPartial(object: DeepPartial<UpdateAdminProposal>): UpdateAdminProposal;
};
export declare const ClearAdminProposal: {
    encode(message: ClearAdminProposal, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): ClearAdminProposal;
    fromJSON(object: any): ClearAdminProposal;
    toJSON(message: ClearAdminProposal): unknown;
    fromPartial(object: DeepPartial<ClearAdminProposal>): ClearAdminProposal;
};
export declare const PinCodesProposal: {
    encode(message: PinCodesProposal, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): PinCodesProposal;
    fromJSON(object: any): PinCodesProposal;
    toJSON(message: PinCodesProposal): unknown;
    fromPartial(object: DeepPartial<PinCodesProposal>): PinCodesProposal;
};
export declare const UnpinCodesProposal: {
    encode(message: UnpinCodesProposal, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): UnpinCodesProposal;
    fromJSON(object: any): UnpinCodesProposal;
    toJSON(message: UnpinCodesProposal): unknown;
    fromPartial(object: DeepPartial<UnpinCodesProposal>): UnpinCodesProposal;
};
export declare const AccessConfigUpdate: {
    encode(message: AccessConfigUpdate, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): AccessConfigUpdate;
    fromJSON(object: any): AccessConfigUpdate;
    toJSON(message: AccessConfigUpdate): unknown;
    fromPartial(object: DeepPartial<AccessConfigUpdate>): AccessConfigUpdate;
};
export declare const UpdateInstantiateConfigProposal: {
    encode(message: UpdateInstantiateConfigProposal, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): UpdateInstantiateConfigProposal;
    fromJSON(object: any): UpdateInstantiateConfigProposal;
    toJSON(message: UpdateInstantiateConfigProposal): unknown;
    fromPartial(object: DeepPartial<UpdateInstantiateConfigProposal>): UpdateInstantiateConfigProposal;
};
