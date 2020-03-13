declare module "@capacitor/core" {
    interface PluginRegistry {
        WifiDirect: WifiDirectPlugin;
    }
}
export interface WifiDirectPlugin {
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}
