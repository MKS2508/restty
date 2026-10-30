// restty public API - high-level integration first.

export { RESTTY_PLUGIN_API_VERSION, Restty, ResttyPaneHandle, createRestty } from "./app/restty";
export type {
  ResttyOptions,
  ResttyPaneApi,
  ResttyPluginApiRange,
  ResttyPlugin,
  ResttyPluginCleanup,
  ResttyPluginContext,
  ResttyPluginDisposable,
  ResttyPluginEvents,
  ResttyPluginInfo,
  ResttyPluginRequires,
  ResttyInputInterceptor,
  ResttyInputInterceptorPayload,
  ResttyInterceptorOptions,
  ResttyLifecycleHook,
  ResttyLifecycleHookPayload,
  ResttyPluginLoadResult,
  ResttyPluginLoadStatus,
  ResttyPluginManifestEntry,
  ResttyPluginRegistry,
  ResttyPluginRegistryEntry,
  ResttyRenderHook,
  ResttyRenderHookPayload,
  ResttyOutputInterceptor,
  ResttyOutputInterceptorPayload,
} from "./app/restty";

export {
  getBuiltinTheme,
  getBuiltinThemeSource,
  isBuiltinThemeName,
  listBuiltinThemeNames,
  parseGhosttyTheme,
} from "./theme";
export type { GhosttyTheme, ResttyBuiltinThemeName } from "./theme";

export type {
  ResttyFontSource,
  ResttyUrlFontSource,
  ResttyBufferFontSource,
  ResttyLocalFontSource,
  ResttyFontPreset,
  ResttyAppSession,
  ResttyAppCallbacks,
  ResttyAppOptions,
  ResttyAppInputPayload,
} from "./app/types";

// Session sharing — allows N terminal instances to share 1 WASM module + 1 WebGPU core.
export { createResttyAppSession, getDefaultResttyAppSession } from "./app/session";

// Pane types needed by React integrations.
export type { ResttyPaneSplitDirection } from "./app/panes-types";

// PTY transport types for custom protocol bridging.
export type { PtyTransport, PtyCallbacks, PtyConnectOptions } from "./pty/types";
