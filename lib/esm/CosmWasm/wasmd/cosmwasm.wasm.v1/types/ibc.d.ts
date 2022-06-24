import { Writer, Reader } from "protobufjs/minimal";
import { DeepPartial } from "../../../../types";
export declare const protobufPackage = "cosmwasm.wasm.v1";
/** MsgIBCSend */
export interface MsgIBCSend {
    /** the channel by which the packet will be sent */
    channel: string;
    /**
     * Timeout height relative to the current block height.
     * The timeout is disabled when set to 0.
     */
    timeout_height: number;
    /**
     * Timeout timestamp (in nanoseconds) relative to the current block timestamp.
     * The timeout is disabled when set to 0.
     */
    timeout_timestamp: number;
    /**
     * Data is the payload to transfer. We must not make assumption what format or
     * content is in here.
     */
    data: Uint8Array;
}
/** MsgIBCCloseChannel port and channel need to be owned by the contract */
export interface MsgIBCCloseChannel {
    channel: string;
}
export declare const MsgIBCSend: {
    encode(message: MsgIBCSend, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): MsgIBCSend;
    fromJSON(object: any): MsgIBCSend;
    toJSON(message: MsgIBCSend): unknown;
    fromPartial(object: DeepPartial<MsgIBCSend>): MsgIBCSend;
};
export declare const MsgIBCCloseChannel: {
    encode(message: MsgIBCCloseChannel, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number | undefined): MsgIBCCloseChannel;
    fromJSON(object: any): MsgIBCCloseChannel;
    toJSON(message: MsgIBCCloseChannel): unknown;
    fromPartial(object: DeepPartial<MsgIBCCloseChannel>): MsgIBCCloseChannel;
};