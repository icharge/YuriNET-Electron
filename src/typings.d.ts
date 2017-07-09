/* SystemJS module definition */
// declare module '*';

declare var nodeModule: NodeModule;
interface NodeModule {
  id: string;
}

declare var window: Window;
interface Window {
  process: NodeJS.Process;
  require: NodeRequire;
}
