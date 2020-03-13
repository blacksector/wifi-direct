import { WebPlugin } from '@capacitor/core';
import { WifiDirectPlugin } from './definitions';

export class WifiDirectWeb extends WebPlugin implements WifiDirectPlugin {
  constructor() {
    super({
      name: 'WifiDirect',
      platforms: ['web']
    });
  }

  async echo(options: { value: string }): Promise<{value: string}> {
    console.log('ECHO', options);
    return options;
  }
}

const WifiDirect = new WifiDirectWeb();

export { WifiDirect };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(WifiDirect);
