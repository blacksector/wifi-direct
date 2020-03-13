import { WebPlugin } from '@capacitor/core';
import { WifiDirectPlugin } from './definitions';
export declare class WifiDirectWeb extends WebPlugin implements WifiDirectPlugin {
    constructor();
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}
declare const WifiDirect: WifiDirectWeb;
export { WifiDirect };
