
  Pod::Spec.new do |s|
    s.name = 'WifiDirect'
    s.version = '0.0.1'
    s.summary = 'A plugin that allows you to use the WiFi Direct protocol on both android and ios'
    s.license = 'MIT'
    s.homepage = 'https://githb.com/blacksector/wifi-direct'
    s.author = 'Omar Quazi'
    s.source = { :git => 'https://githb.com/blacksector/wifi-direct', :tag => s.version.to_s }
    s.source_files = 'ios/Plugin/**/*.{swift,h,m,c,cc,mm,cpp}'
    s.ios.deployment_target  = '11.0'
    s.dependency 'Capacitor'
  end