import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Donation {
    donorName: string;
    message: string;
    amount: bigint;
}
export interface backendInterface {
    getDonations(): Promise<Array<Donation>>;
    recordDonation(donorName: string, amount: bigint, message: string): Promise<boolean>;
}
