const VSLS_DEBUG_PROXY_TYPE = "vslsShare";

module.exports = debugSession => {
  if (debugSession.type !== VSLS_DEBUG_PROXY_TYPE) {
    return Promise.resolve(debugSession.type);
  } else {
    return debugSession
      .customRequest("debugSessionInfo")
      .then(({ configurationProperties: { type }}) => type);
  }
};
