import { Device } from "./device";
import { HistKey } from "./hist-key";
import { RtCo2 } from "./rt-co2";

export class HistoryCo2 {
    hk:HistKey;
    dateHistory:Date;
    device:Device;
    rt_co2:RtCo2;
}
