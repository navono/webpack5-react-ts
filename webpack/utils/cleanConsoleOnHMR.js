/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-extraneous-dependencies */
/**
 * Reconfigure default HMR behavior, now it clears your console on every
 * codebase update
 */
// eslint-disable-next-line no-undef
if (IS_DEV_SERVER) {
  if (module.hot) {
    module.hot.accept();
    module.hot.addStatusHandler((status) => {
      if (status === 'prepare') console.clear();
    });
  }
}
