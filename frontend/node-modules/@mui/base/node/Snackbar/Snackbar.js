"use strict";
'use client';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Snackbar = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));
var React = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _ClickAwayListener = require("../ClickAwayListener");
var _composeClasses = require("../composeClasses");
var _snackbarClasses = require("./snackbarClasses");
var _useSnackbar = require("../useSnackbar");
var _utils = require("../utils");
var _ClassNameConfigurator = require("../utils/ClassNameConfigurator");
var _jsxRuntime = require("react/jsx-runtime");
const _excluded = ["autoHideDuration", "children", "disableWindowBlurListener", "exited", "onBlur", "onClose", "onFocus", "onMouseEnter", "onMouseLeave", "open", "resumeHideDuration", "slotProps", "slots"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const useUtilityClasses = () => {
  const slots = {
    root: ['root']
  };
  return (0, _composeClasses.unstable_composeClasses)(slots, (0, _ClassNameConfigurator.useClassNamesOverride)(_snackbarClasses.getSnackbarUtilityClass));
};
/**
 *
 * Demos:
 *
 * - [Snackbar](https://mui.com/base-ui/react-snackbar/)
 * - [Snackbar](https://mui.com/material-ui/react-snackbar/)
 *
 * API:
 *
 * - [Snackbar API](https://mui.com/base-ui/react-snackbar/components-api/#snackbar)
 */
const Snackbar = /*#__PURE__*/React.forwardRef(function Snackbar(props, forwardedRef) {
  const {
      autoHideDuration = null,
      children,
      disableWindowBlurListener = false,
      exited = true,
      onClose,
      open,
      resumeHideDuration,
      slotProps = {},
      slots = {}
    } = props,
    other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  const classes = useUtilityClasses();
  const {
    getRootProps,
    onClickAway
  } = (0, _useSnackbar.useSnackbar)((0, _extends2.default)({}, props, {
    autoHideDuration,
    disableWindowBlurListener,
    onClose,
    open,
    resumeHideDuration
  }));
  const ownerState = props;
  const Root = slots.root || 'div';
  const rootProps = (0, _utils.useSlotProps)({
    elementType: Root,
    getSlotProps: getRootProps,
    externalForwardedProps: other,
    externalSlotProps: slotProps.root,
    additionalProps: {
      ref: forwardedRef
    },
    ownerState,
    className: classes.root
  });
  const clickAwayListenerProps = (0, _utils.useSlotProps)({
    elementType: _ClickAwayListener.ClickAwayListener,
    externalSlotProps: slotProps.clickAwayListener,
    additionalProps: {
      onClickAway
    },
    ownerState
  });

  // ClickAwayListener doesn't support ownerState
  delete clickAwayListenerProps.ownerState;

  // So that we only render active snackbars.
  if (!open && exited) {
    return null;
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_ClickAwayListener.ClickAwayListener, (0, _extends2.default)({}, clickAwayListenerProps, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(Root, (0, _extends2.default)({}, rootProps, {
      children: children
    }))
  }));
});
exports.Snackbar = Snackbar;
process.env.NODE_ENV !== "production" ? Snackbar.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * The number of milliseconds to wait before automatically calling the
   * `onClose` function. `onClose` should then set the state of the `open`
   * prop to hide the Snackbar. This behavior is disabled by default with
   * the `null` value.
   * @default null
   */
  autoHideDuration: _propTypes.default.number,
  /**
   * @ignore
   */
  children: _propTypes.default.node,
  /**
   * If `true`, the `autoHideDuration` timer will expire even if the window is not focused.
   * @default false
   */
  disableWindowBlurListener: _propTypes.default.bool,
  /**
   * The prop used to handle exited transition and unmount the component.
   * @default true
   */
  exited: _propTypes.default.bool,
  /**
   * Callback fired when the component requests to be closed.
   * Typically `onClose` is used to set state in the parent component,
   * which is used to control the `Snackbar` `open` prop.
   * The `reason` parameter can optionally be used to control the response to `onClose`,
   * for example ignoring `clickaway`.
   *
   * @param {React.SyntheticEvent<any> | Event} event The event source of the callback.
   * @param {string} reason Can be: `"timeout"` (`autoHideDuration` expired), `"clickaway"`, or `"escapeKeyDown"`.
   */
  onClose: _propTypes.default.func,
  /**
   * If `true`, the component is shown.
   */
  open: _propTypes.default.bool,
  /**
   * The number of milliseconds to wait before dismissing after user interaction.
   * If `autoHideDuration` prop isn't specified, it does nothing.
   * If `autoHideDuration` prop is specified but `resumeHideDuration` isn't,
   * we default to `autoHideDuration / 2` ms.
   */
  resumeHideDuration: _propTypes.default.number,
  /**
   * The props used for each slot inside the Snackbar.
   * @default {}
   */
  slotProps: _propTypes.default.shape({
    clickAwayListener: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.shape({
      children: _propTypes.default.element.isRequired,
      disableReactTree: _propTypes.default.bool,
      mouseEvent: _propTypes.default.oneOf(['onClick', 'onMouseDown', 'onMouseUp', 'onPointerDown', 'onPointerUp', false]),
      onClickAway: _propTypes.default.func,
      touchEvent: _propTypes.default.oneOf(['onTouchEnd', 'onTouchStart', false])
    })]),
    root: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object])
  }),
  /**
   * The components used for each slot inside the Snackbar.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: _propTypes.default.shape({
    root: _propTypes.default.elementType
  })
} : void 0;