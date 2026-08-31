/* @ds-bundle: {"format":4,"namespace":"PrometSourceDesignSystem_b4bce0","components":[{"name":"Icon","sourcePath":"components/brand/Icon.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"StatCard","sourcePath":"components/core/StatCard.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/brand/Icon.jsx":"bb4d8a486c57","components/brand/Logo.jsx":"abaaa2accf23","components/core/Badge.jsx":"c22c27919ab6","components/core/Button.jsx":"bc3e19795a1a","components/core/Card.jsx":"d84796d50e8d","components/core/IconButton.jsx":"ab36e17f6470","components/core/StatCard.jsx":"8be8b9120c4a","components/core/Tag.jsx":"8626081b3596","components/feedback/Dialog.jsx":"1e0b4d2f39bf","components/feedback/Toast.jsx":"c6e50657c4cb","components/feedback/Tooltip.jsx":"c6baf91fd222","components/forms/Checkbox.jsx":"ec1b3d081b49","components/forms/Field.jsx":"9c82f65fa8d5","components/forms/Input.jsx":"15f55f54f0cc","components/forms/Radio.jsx":"a22063da90ca","components/forms/Select.jsx":"42b1794dcae2","components/forms/Switch.jsx":"72789022bd19","components/forms/Textarea.jsx":"ad4126152365","components/navigation/Tabs.jsx":"74fa4f77a58b","ui_kits/collateral/Sheets.jsx":"0b39dbd23706","ui_kits/marketing/CasesScreen.jsx":"9539406fde28","ui_kits/marketing/ContactScreen.jsx":"8b94759d0904","ui_kits/marketing/HomeScreen.jsx":"20700e2799db","ui_kits/marketing/ServicesScreen.jsx":"e4bb9700cdaa","ui_kits/marketing/SiteChrome.jsx":"7456fd8bea89"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.PrometSourceDesignSystem_b4bce0 = window.PrometSourceDesignSystem_b4bce0 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CDN = "https://unpkg.com/lucide-static@0.544.0/icons/";

/* Lucide is a substitution: the brand guidelines ship no icon set. Rendered as a
   currentColor mask so icons inherit text color and never fight the palette. */
function Icon({
  name,
  size = 20,
  strokeWidth,
  color = "currentColor",
  style,
  ...rest
}) {
  const url = `${CDN}${name}.svg`;
  return /*#__PURE__*/React.createElement("span", _extends({
    role: "img",
    "aria-label": name,
    "data-icon": name,
    style: {
      display: "inline-block",
      width: size,
      height: size,
      flex: "0 0 auto",
      background: color,
      WebkitMaskImage: `url(${url})`,
      maskImage: `url(${url})`,
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat",
      WebkitMaskPosition: "center",
      maskPosition: "center",
      WebkitMaskSize: "contain",
      maskSize: "contain",
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Icon.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SRC = {
  onDark: "/assets/logo/logo.svg",
  onLight: "/assets/logo/logo-inverse.svg"
};

/* The shipped lockups are 191x45. Height drives the size; width follows the ratio. */
function Logo({
  variant = "onDark",
  height = 45,
  base = "",
  style,
  ...rest
}) {
  const src = (base ? base.replace(/\/$/, "") : "") + SRC[variant];
  return /*#__PURE__*/React.createElement("img", _extends({
    src: src,
    alt: "Promet Source",
    height: height,
    style: {
      height,
      width: 191 / 45 * height,
      display: "block",
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  neutral: {
    background: "var(--deep-space-10)",
    color: "var(--deep-space-900)"
  },
  accent: {
    background: "var(--orange-20)",
    color: "#7A3E00"
  },
  inverse: {
    background: "var(--deep-space-900)",
    color: "var(--white)"
  },
  info: {
    background: "var(--status-info-bg)",
    color: "var(--status-info-fg)"
  },
  success: {
    background: "var(--status-success-bg)",
    color: "var(--status-success-fg)"
  },
  warning: {
    background: "var(--status-warning-bg)",
    color: "var(--status-warning-fg)"
  },
  danger: {
    background: "var(--status-danger-bg)",
    color: "var(--status-danger-fg)"
  }
};
function Badge({
  tone = "neutral",
  size = "md",
  dot = false,
  children,
  style,
  ...rest
}) {
  const t = TONES[tone] || TONES.neutral;
  const small = size === "sm";
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
      padding: small ? "2px 8px" : "4px 12px",
      borderRadius: "var(--radius-pill)",
      fontFamily: "var(--font-body)",
      fontWeight: "var(--weight-bold)",
      fontSize: small ? "var(--size-micro)" : "var(--size-caption)",
      lineHeight: 1.4,
      background: t.background,
      color: t.color,
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: "currentColor"
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    padding: "8px 16px",
    fontSize: "var(--size-body-sm)",
    gap: "6px"
  },
  md: {
    padding: "12px 24px",
    fontSize: "var(--size-body)",
    gap: "8px"
  },
  lg: {
    padding: "16px 32px",
    fontSize: "var(--size-body-lg)",
    gap: "10px"
  }
};
const VARIANTS = {
  primary: {
    background: "var(--button-primary-bg)",
    color: "var(--button-primary-fg)",
    border: "1px solid transparent",
    hover: "var(--button-primary-bg-hover)",
    active: "var(--button-primary-bg-active)"
  },
  secondary: {
    background: "var(--button-secondary-bg)",
    color: "var(--button-secondary-fg)",
    border: "1px solid transparent",
    hover: "var(--button-secondary-bg-hover)",
    active: "#0F0838"
  },
  outline: {
    background: "transparent",
    color: "var(--text-heading)",
    border: "1px solid var(--deep-space-900)",
    hover: "var(--deep-space-10)",
    active: "var(--deep-space-20)"
  },
  ghost: {
    background: "transparent",
    color: "var(--button-ghost-fg)",
    border: "1px solid transparent",
    hover: "var(--button-ghost-bg-hover)",
    active: "var(--deep-space-20)"
  },
  inverse: {
    background: "var(--white)",
    color: "var(--deep-space-900)",
    border: "1px solid transparent",
    hover: "var(--lavendar-200)",
    active: "var(--deep-space-20)"
  }
};
function Button({
  variant = "primary",
  size = "md",
  disabled = false,
  fullWidth = false,
  iconLeft,
  iconRight,
  type = "button",
  children,
  style,
  ...rest
}) {
  const v = VARIANTS[variant] || VARIANTS.primary;
  const s = SIZES[size] || SIZES.md;
  const [state, setState] = React.useState("rest");
  const bg = disabled ? "var(--control-disabled-bg)" : state === "active" ? v.active : state === "hover" ? v.hover : v.background;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onMouseEnter: () => setState("hover"),
    onMouseLeave: () => setState("rest"),
    onMouseDown: () => setState("active"),
    onMouseUp: () => setState("hover"),
    style: {
      display: fullWidth ? "flex" : "inline-flex",
      width: fullWidth ? "100%" : undefined,
      alignItems: "center",
      justifyContent: "center",
      gap: s.gap,
      padding: s.padding,
      fontFamily: "var(--font-body)",
      fontWeight: "var(--weight-bold)",
      fontSize: s.fontSize,
      lineHeight: 1.2,
      letterSpacing: "var(--tracking-normal)",
      borderRadius: "var(--radius-button)",
      border: disabled ? "1px solid transparent" : v.border,
      background: bg,
      color: disabled ? "var(--control-disabled-fg)" : v.color,
      cursor: disabled ? "not-allowed" : "pointer",
      transition: "background var(--duration-fast) var(--ease-standard), color var(--duration-fast) var(--ease-standard)",
      ...style
    }
  }, rest), iconLeft, /*#__PURE__*/React.createElement("span", null, children), iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  tone = "light",
  interactive = false,
  padding = "var(--space-6)",
  eyebrow,
  title,
  children,
  footer,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const tones = {
    light: {
      background: "var(--surface-card)",
      border: "1px solid var(--border-default)",
      heading: "var(--text-heading)",
      body: "var(--text-body)",
      eyebrow: "var(--text-muted)"
    },
    warm: {
      background: "var(--surface-page-warm)",
      border: "1px solid var(--neutral-line)",
      heading: "var(--text-heading)",
      body: "var(--text-body)",
      eyebrow: "var(--text-muted)"
    },
    tint: {
      background: "var(--surface-card-tint)",
      border: "1px solid var(--orange-20)",
      heading: "var(--text-heading)",
      body: "var(--charcoal-700)",
      eyebrow: "#7A3E00"
    },
    inverse: {
      background: "var(--surface-inverse)",
      border: "var(--border-on-dark)",
      heading: "var(--text-on-inverse)",
      body: "var(--text-on-inverse-muted)",
      eyebrow: "var(--orange-500)"
    }
  };
  const t = tones[tone] || tones.light;
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: t.background,
      border: t.border,
      borderRadius: "var(--radius-card)",
      padding,
      fontFamily: "var(--font-body)",
      color: t.body,
      boxShadow: interactive && hover ? "var(--shadow-md)" : "var(--shadow-none)",
      transform: interactive && hover ? "translateY(-2px)" : "none",
      transition: "box-shadow var(--duration-base) var(--ease-standard), transform var(--duration-base) var(--ease-standard)",
      cursor: interactive ? "pointer" : "default",
      ...style
    }
  }, rest), eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--size-caption)",
      fontWeight: "var(--weight-bold)",
      color: t.eyebrow,
      marginBottom: "var(--space-2)"
    }
  }, eyebrow), title && /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: "0 0 var(--space-3)",
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-bold)",
      fontSize: "var(--size-h4)",
      lineHeight: "var(--leading-snug)",
      letterSpacing: "var(--tracking-heading)",
      color: t.heading
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--size-body)",
      lineHeight: "var(--leading-relaxed)"
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-5)"
    }
  }, footer));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const BOX = {
  sm: 32,
  md: 40,
  lg: 48
};
function IconButton({
  icon,
  label,
  variant = "ghost",
  size = "md",
  disabled = false,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const box = BOX[size] || BOX.md;
  const skin = {
    primary: {
      bg: "var(--orange-500)",
      fg: "var(--deep-space-900)",
      hover: "var(--button-primary-bg-hover)",
      border: "transparent"
    },
    secondary: {
      bg: "var(--deep-space-900)",
      fg: "var(--white)",
      hover: "var(--button-secondary-bg-hover)",
      border: "transparent"
    },
    outline: {
      bg: "transparent",
      fg: "var(--text-heading)",
      hover: "var(--deep-space-10)",
      border: "var(--neutral-line-strong)"
    },
    ghost: {
      bg: "transparent",
      fg: "var(--text-heading)",
      hover: "var(--deep-space-10)",
      border: "transparent"
    },
    inverse: {
      bg: "rgba(255,255,255,.10)",
      fg: "var(--white)",
      hover: "rgba(255,255,255,.20)",
      border: "rgba(215,224,255,.22)"
    }
  }[variant];
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: box,
      height: box,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "var(--radius-pill)",
      border: `1px solid ${skin.border}`,
      background: disabled ? "var(--control-disabled-bg)" : hover ? skin.hover : skin.bg,
      color: disabled ? "var(--control-disabled-fg)" : skin.fg,
      cursor: disabled ? "not-allowed" : "pointer",
      transition: "background var(--duration-fast) var(--ease-standard)",
      ...style
    }
  }, rest), icon);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/StatCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function StatCard({
  value,
  label,
  caption,
  tone = "inverse",
  align = "left",
  style,
  ...rest
}) {
  const tones = {
    inverse: {
      background: "var(--surface-inverse)",
      border: "var(--border-on-dark)",
      value: "var(--orange-500)",
      label: "var(--lavendar-200)",
      caption: "rgba(215,224,255,.7)"
    },
    light: {
      background: "var(--surface-card)",
      border: "1px solid var(--border-default)",
      value: "var(--deep-space-900)",
      label: "var(--text-body)",
      caption: "var(--text-muted)"
    },
    accent: {
      background: "var(--surface-accent)",
      border: "1px solid transparent",
      value: "var(--deep-space-900)",
      label: "var(--deep-space-900)",
      caption: "rgba(21,11,79,.72)"
    }
  };
  const t = tones[tone] || tones.inverse;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: t.background,
      border: t.border,
      borderRadius: "var(--radius-card)",
      padding: "var(--space-6)",
      textAlign: align,
      fontFamily: "var(--font-body)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-bold)",
      fontSize: "var(--size-display-2)",
      lineHeight: "var(--leading-tight)",
      letterSpacing: "var(--tracking-display)",
      color: t.value
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-2)",
      fontSize: "var(--size-body)",
      fontWeight: "var(--weight-bold)",
      color: t.label
    }
  }, label), caption && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-1)",
      fontSize: "var(--size-caption)",
      lineHeight: "var(--leading-normal)",
      color: t.caption
    }
  }, caption));
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tag({
  children,
  selected = false,
  onRemove,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const clickable = Boolean(onClick);
  return /*#__PURE__*/React.createElement("span", _extends({
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      padding: "6px 12px",
      borderRadius: "var(--radius-pill)",
      border: `1px solid ${selected ? "var(--deep-space-900)" : "var(--neutral-line-strong)"}`,
      background: selected ? "var(--deep-space-900)" : hover && clickable ? "var(--deep-space-10)" : "var(--white)",
      color: selected ? "var(--white)" : "var(--text-body)",
      fontFamily: "var(--font-body)",
      fontSize: "var(--size-body-sm)",
      fontWeight: "var(--weight-bold)",
      lineHeight: 1.3,
      cursor: clickable ? "pointer" : "default",
      transition: "background var(--duration-fast) var(--ease-standard), border-color var(--duration-fast) var(--ease-standard)",
      ...style
    }
  }, rest), children, onRemove && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": `Remove ${typeof children === "string" ? children : "tag"}`,
    onClick: e => {
      e.stopPropagation();
      onRemove(e);
    },
    style: {
      all: "unset",
      cursor: "pointer",
      lineHeight: 0,
      fontSize: "14px",
      color: "inherit",
      opacity: 0.7
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Dialog({
  open = true,
  title,
  description,
  onClose,
  footer,
  width = 520,
  children,
  style,
  ...rest
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "rgba(21,11,79,.55)",
      backdropFilter: "blur(2px)",
      padding: "var(--space-6)",
      zIndex: 50
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", _extends({
    role: "dialog",
    "aria-modal": "true",
    "aria-label": typeof title === "string" ? title : undefined,
    onClick: e => e.stopPropagation(),
    style: {
      width,
      maxWidth: "100%",
      background: "var(--surface-card)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-lg)",
      padding: "var(--space-8)",
      fontFamily: "var(--font-body)",
      boxSizing: "border-box",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-bold)",
      fontSize: "var(--size-h3)",
      lineHeight: "var(--leading-snug)",
      letterSpacing: "var(--tracking-heading)",
      color: "var(--text-heading)"
    }
  }, title), onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Close",
    onClick: onClose,
    style: {
      all: "unset",
      cursor: "pointer",
      fontSize: 20,
      lineHeight: 1,
      color: "var(--text-muted)"
    }
  }, "\xD7")), description && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "var(--space-3) 0 0",
      fontSize: "var(--size-body)",
      lineHeight: "var(--leading-relaxed)",
      color: "var(--text-body)"
    }
  }, description), children && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-6)"
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-8)",
      display: "flex",
      gap: "var(--space-3)",
      justifyContent: "flex-end"
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  info: {
    bg: "var(--status-info-bg)",
    fg: "var(--status-info-fg)",
    icon: "info"
  },
  success: {
    bg: "var(--status-success-bg)",
    fg: "var(--status-success-fg)",
    icon: "check-circle"
  },
  warning: {
    bg: "var(--status-warning-bg)",
    fg: "var(--status-warning-fg)",
    icon: "alert-triangle"
  },
  danger: {
    bg: "var(--status-danger-bg)",
    fg: "var(--status-danger-fg)",
    icon: "alert-circle"
  }
};
function Toast({
  tone = "info",
  title,
  message,
  onDismiss,
  action,
  style,
  ...rest
}) {
  const t = TONES[tone] || TONES.info;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: "var(--space-3)",
      padding: "var(--space-4) var(--space-5)",
      borderRadius: "var(--radius-md)",
      background: t.bg,
      color: t.fg,
      border: "1px solid rgba(21,11,79,.08)",
      boxShadow: "var(--shadow-sm)",
      fontFamily: "var(--font-body)",
      maxWidth: 460,
      boxSizing: "border-box",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 18,
      height: 18,
      marginTop: 2,
      flex: "0 0 auto",
      background: "currentColor",
      WebkitMaskImage: `url(https://unpkg.com/lucide-static@0.544.0/icons/${t.icon}.svg)`,
      maskImage: `url(https://unpkg.com/lucide-static@0.544.0/icons/${t.icon}.svg)`,
      WebkitMaskSize: "contain",
      maskSize: "contain",
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: "var(--weight-bold)",
      fontSize: "var(--size-body-sm)"
    }
  }, title), message && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--size-body-sm)",
      lineHeight: "var(--leading-normal)",
      opacity: 0.9
    }
  }, message), action && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-3)"
    }
  }, action)), onDismiss && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Dismiss",
    onClick: onDismiss,
    style: {
      all: "unset",
      cursor: "pointer",
      color: "inherit",
      opacity: 0.6,
      fontSize: 16,
      lineHeight: 1
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tooltip({
  label,
  placement = "top",
  children,
  style,
  ...rest
}) {
  const [open, setOpen] = React.useState(false);
  const pos = {
    top: {
      bottom: "calc(100% + 8px)",
      left: "50%",
      transform: "translateX(-50%)"
    },
    bottom: {
      top: "calc(100% + 8px)",
      left: "50%",
      transform: "translateX(-50%)"
    },
    left: {
      right: "calc(100% + 8px)",
      top: "50%",
      transform: "translateY(-50%)"
    },
    right: {
      left: "calc(100% + 8px)",
      top: "50%",
      transform: "translateY(-50%)"
    }
  }[placement];
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      position: "relative",
      display: "inline-flex",
      ...style
    },
    onMouseEnter: () => setOpen(true),
    onMouseLeave: () => setOpen(false),
    onFocus: () => setOpen(true),
    onBlur: () => setOpen(false)
  }, rest), children, /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: "absolute",
      ...pos,
      zIndex: 40,
      padding: "6px 10px",
      borderRadius: "var(--radius-sm)",
      background: "var(--deep-space-900)",
      color: "var(--white)",
      fontFamily: "var(--font-body)",
      fontSize: "var(--size-micro)",
      lineHeight: 1.4,
      whiteSpace: "nowrap",
      pointerEvents: "none",
      opacity: open ? 1 : 0,
      transition: "opacity var(--duration-fast) var(--ease-standard)"
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  label,
  checked,
  defaultChecked,
  disabled = false,
  onChange,
  description,
  style,
  ...rest
}) {
  const [inner, setInner] = React.useState(Boolean(defaultChecked));
  const isControlled = checked !== undefined;
  const on = isControlled ? checked : inner;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      gap: "var(--space-3)",
      alignItems: "flex-start",
      fontFamily: "var(--font-body)",
      cursor: disabled ? "not-allowed" : "pointer",
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: on,
    disabled: disabled,
    onChange: e => {
      if (!isControlled) setInner(e.target.checked);
      onChange && onChange(e);
    },
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 20,
      height: 20,
      flex: "0 0 auto",
      marginTop: 2,
      borderRadius: "var(--radius-sm)",
      border: `1px solid ${on ? "var(--deep-space-900)" : "var(--control-border)"}`,
      background: disabled ? "var(--control-disabled-bg)" : on ? "var(--deep-space-900)" : "var(--control-bg)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--orange-500)",
      fontSize: 13,
      fontWeight: 700,
      lineHeight: 1,
      transition: "background var(--duration-fast) var(--ease-standard), border-color var(--duration-fast) var(--ease-standard)"
    }
  }, on ? "✓" : ""), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--size-body-sm)",
      color: disabled ? "var(--control-disabled-fg)" : "var(--text-body)",
      lineHeight: "var(--leading-normal)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: description ? "var(--weight-bold)" : "var(--weight-regular)",
      color: description ? "var(--text-heading)" : "inherit"
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      color: "var(--text-muted)",
      fontSize: "var(--size-caption)"
    }
  }, description)));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Shared label + help + error wrapper for every form control. */
function Field({
  label,
  htmlFor,
  hint,
  error,
  required = false,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)",
      fontFamily: "var(--font-body)",
      ...style
    }
  }, rest), label && /*#__PURE__*/React.createElement("label", {
    htmlFor: htmlFor,
    style: {
      fontSize: "var(--size-body-sm)",
      fontWeight: "var(--weight-bold)",
      color: "var(--text-heading)"
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--status-danger-fg)",
      marginLeft: 4
    }
  }, "*")), children, error ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--size-caption)",
      color: "var(--status-danger-fg)"
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--size-caption)",
      color: "var(--text-muted)"
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  invalid = false,
  disabled = false,
  iconLeft,
  size = "md",
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const pad = size === "sm" ? "8px 12px" : "12px 14px";
  const border = invalid ? "var(--status-danger-fg)" : focus ? "var(--border-focus)" : "var(--control-border)";
  const input = /*#__PURE__*/React.createElement("input", _extends({
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    "aria-invalid": invalid || undefined,
    style: {
      width: "100%",
      boxSizing: "border-box",
      padding: iconLeft ? "12px 14px 12px 40px" : pad,
      fontFamily: "var(--font-body)",
      fontSize: size === "sm" ? "var(--size-body-sm)" : "var(--size-body)",
      color: disabled ? "var(--control-disabled-fg)" : "var(--control-fg)",
      background: disabled ? "var(--control-disabled-bg)" : "var(--control-bg)",
      border: `1px solid ${border}`,
      borderRadius: "var(--radius-input)",
      outline: "none",
      boxShadow: focus ? "var(--focus-ring)" : "none",
      transition: "border-color var(--duration-fast) var(--ease-standard), box-shadow var(--duration-fast) var(--ease-standard)",
      ...style
    }
  }, rest));
  if (!iconLeft) return input;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "block"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 14,
      top: "50%",
      transform: "translateY(-50%)",
      color: "var(--text-muted)",
      display: "flex"
    }
  }, iconLeft), input);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Radio({
  label,
  description,
  checked,
  disabled = false,
  onChange,
  name,
  value,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      gap: "var(--space-3)",
      alignItems: "flex-start",
      fontFamily: "var(--font-body)",
      cursor: disabled ? "not-allowed" : "pointer",
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    disabled: disabled,
    onChange: onChange,
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 20,
      height: 20,
      flex: "0 0 auto",
      marginTop: 2,
      borderRadius: "50%",
      border: `1px solid ${checked ? "var(--deep-space-900)" : "var(--control-border)"}`,
      background: disabled ? "var(--control-disabled-bg)" : "var(--control-bg)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "border-color var(--duration-fast) var(--ease-standard)"
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: "50%",
      background: "var(--orange-500)"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--size-body-sm)",
      lineHeight: "var(--leading-normal)",
      color: disabled ? "var(--control-disabled-fg)" : "var(--text-body)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: description ? "var(--weight-bold)" : "var(--weight-regular)",
      color: description ? "var(--text-heading)" : "inherit"
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      color: "var(--text-muted)",
      fontSize: "var(--size-caption)"
    }
  }, description)));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  options = [],
  invalid = false,
  disabled = false,
  placeholder,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const border = invalid ? "var(--status-danger-fg)" : focus ? "var(--border-focus)" : "var(--control-border)";
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "block"
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: "100%",
      boxSizing: "border-box",
      appearance: "none",
      padding: "12px 40px 12px 14px",
      fontFamily: "var(--font-body)",
      fontSize: "var(--size-body)",
      color: disabled ? "var(--control-disabled-fg)" : "var(--control-fg)",
      background: disabled ? "var(--control-disabled-bg)" : "var(--control-bg)",
      border: `1px solid ${border}`,
      borderRadius: "var(--radius-input)",
      outline: "none",
      boxShadow: focus ? "var(--focus-ring)" : "none",
      cursor: disabled ? "not-allowed" : "pointer",
      ...style
    }
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder), options.map(o => {
    const value = typeof o === "string" ? o : o.value;
    const label = typeof o === "string" ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: value,
      value: value
    }, label);
  })), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      right: 16,
      top: "50%",
      transform: "translateY(-50%)",
      pointerEvents: "none",
      color: "var(--text-muted)",
      fontSize: 11
    }
  }, "\u25BC"));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Switch({
  label,
  checked,
  defaultChecked,
  disabled = false,
  onChange,
  style,
  ...rest
}) {
  const [inner, setInner] = React.useState(Boolean(defaultChecked));
  const isControlled = checked !== undefined;
  const on = isControlled ? checked : inner;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      gap: "var(--space-3)",
      alignItems: "center",
      fontFamily: "var(--font-body)",
      cursor: disabled ? "not-allowed" : "pointer",
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    role: "switch",
    checked: on,
    disabled: disabled,
    onChange: e => {
      if (!isControlled) setInner(e.target.checked);
      onChange && onChange(e);
    },
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 44,
      height: 24,
      borderRadius: "var(--radius-pill)",
      padding: 2,
      boxSizing: "border-box",
      background: disabled ? "var(--control-disabled-bg)" : on ? "var(--deep-space-900)" : "var(--neutral-line-strong)",
      display: "flex",
      alignItems: "center",
      transition: "background var(--duration-base) var(--ease-standard)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      borderRadius: "50%",
      background: on ? "var(--orange-500)" : "var(--white)",
      transform: on ? "translateX(20px)" : "translateX(0)",
      transition: "transform var(--duration-base) var(--ease-standard), background var(--duration-base) var(--ease-standard)",
      boxShadow: "var(--shadow-xs)"
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--size-body-sm)",
      color: disabled ? "var(--control-disabled-fg)" : "var(--text-body)"
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Textarea({
  invalid = false,
  disabled = false,
  rows = 4,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const border = invalid ? "var(--status-danger-fg)" : focus ? "var(--border-focus)" : "var(--control-border)";
  return /*#__PURE__*/React.createElement("textarea", _extends({
    rows: rows,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    "aria-invalid": invalid || undefined,
    style: {
      width: "100%",
      boxSizing: "border-box",
      padding: "12px 14px",
      fontFamily: "var(--font-body)",
      fontSize: "var(--size-body)",
      lineHeight: "var(--leading-normal)",
      color: disabled ? "var(--control-disabled-fg)" : "var(--control-fg)",
      background: disabled ? "var(--control-disabled-bg)" : "var(--control-bg)",
      border: `1px solid ${border}`,
      borderRadius: "var(--radius-input)",
      outline: "none",
      resize: "vertical",
      boxShadow: focus ? "var(--focus-ring)" : "none",
      transition: "border-color var(--duration-fast) var(--ease-standard), box-shadow var(--duration-fast) var(--ease-standard)",
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tabs({
  tabs = [],
  value,
  defaultValue,
  onChange,
  tone = "light",
  style,
  ...rest
}) {
  const first = tabs.length ? typeof tabs[0] === "string" ? tabs[0] : tabs[0].value : "";
  const [inner, setInner] = React.useState(defaultValue ?? first);
  const active = value !== undefined ? value : inner;
  const dark = tone === "inverse";
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: "flex",
      gap: "var(--space-6)",
      borderBottom: `1px solid ${dark ? "var(--divider-on-inverse)" : "var(--border-default)"}`,
      fontFamily: "var(--font-body)",
      ...style
    }
  }, rest), tabs.map(t => {
    const val = typeof t === "string" ? t : t.value;
    const label = typeof t === "string" ? t : t.label;
    const count = typeof t === "string" ? undefined : t.count;
    const on = val === active;
    return /*#__PURE__*/React.createElement("button", {
      key: val,
      role: "tab",
      "aria-selected": on,
      onClick: () => {
        if (value === undefined) setInner(val);
        onChange && onChange(val);
      },
      style: {
        all: "unset",
        cursor: "pointer",
        padding: "0 0 12px",
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        fontSize: "var(--size-body)",
        fontWeight: on ? "var(--weight-bold)" : "var(--weight-regular)",
        color: on ? dark ? "var(--white)" : "var(--text-heading)" : dark ? "var(--text-on-inverse-muted)" : "var(--text-muted)",
        boxShadow: on ? "inset 0 -3px 0 0 var(--orange-500)" : "none",
        transition: "color var(--duration-fast) var(--ease-standard)"
      }
    }, label, count !== undefined && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "var(--size-micro)",
        fontWeight: "var(--weight-bold)",
        color: dark ? "var(--lavendar-200)" : "var(--text-muted)"
      }
    }, count));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/collateral/Sheets.jsx
try { (() => {
const {
  Logo,
  Icon,
  Badge,
  StatCard,
  Card
} = window.PrometSourceDesignSystem_b4bce0;
const PAGE = {
  width: 816,
  height: 1056,
  background: "var(--white)",
  boxShadow: "var(--shadow-md)",
  position: "relative",
  overflow: "hidden",
  fontFamily: "var(--font-body)",
  color: "var(--text-body)",
  boxSizing: "border-box"
};
function ProposalCover() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...PAGE,
      background: "var(--deep-space-900)",
      padding: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "56px 56px 0"
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "onDark",
    height: 38,
    base: "../.."
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 56px",
      marginTop: 220
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--size-body-sm)",
      fontWeight: "var(--weight-bold)",
      color: "var(--orange-500)",
      marginBottom: 16
    }
  }, "Response to RFP 2026-0142"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-bold)",
      fontSize: 56,
      lineHeight: 1.08,
      letterSpacing: "var(--tracking-display)",
      color: "var(--white)"
    }
  }, "Accessible web platform", /*#__PURE__*/React.createElement("br", null), "modernization"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "28px 0 0",
      fontSize: "var(--size-body-lg)",
      lineHeight: "var(--leading-relaxed)",
      color: "var(--lavendar-200)",
      maxWidth: "44ch"
    }
  }, "Prepared for the Department of Consumer Services \xB7 Submitted 14 March 2026")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 56,
      right: 56,
      bottom: 56,
      borderTop: "1px solid var(--divider-on-inverse)",
      paddingTop: 24,
      display: "flex",
      justifyContent: "space-between",
      fontSize: "var(--size-caption)",
      color: "rgba(215,224,255,.75)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "Promet Source \xB7 Chicago, Illinois"), /*#__PURE__*/React.createElement("span", null, "WCAG 2.1 AA \xB7 Section 508 \xB7 VPAT on request")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: -120,
      top: 300,
      width: 420,
      height: 420,
      borderRadius: "50%",
      border: "1px solid rgba(255,133,0,.35)"
    }
  }));
}
function CapabilityStatement() {
  const rows = [["UEI", "Placeholder — supply from SAM.gov"], ["CAGE", "Placeholder"], ["NAICS", "541511, 541512, 541430, 541613"], ["Vehicles", "GSA MAS, state master contracts, cooperative purchasing"]];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...PAGE
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--deep-space-900)",
      padding: "36px 48px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "onDark",
    height: 32,
    base: "../.."
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-bold)",
      fontSize: "var(--size-body)",
      color: "var(--white)"
    }
  }, "Capability statement")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "40px 48px 48px"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-bold)",
      fontSize: 40,
      lineHeight: 1.15,
      letterSpacing: "var(--tracking-heading)",
      color: "var(--text-heading)",
      maxWidth: "26ch"
    }
  }, "Accessible digital services for the public sector"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "20px 0 32px",
      fontSize: "var(--size-body)",
      lineHeight: "var(--leading-relaxed)",
      maxWidth: "72ch"
    }
  }, "Promet Source designs, builds and supports websites and applications for federal, state and local government, higher education, and water and waste agencies. Every engagement targets WCAG 2.1 AA, and we hand your team the checks that keep it there."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 16,
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement(StatCard, {
    value: "20+",
    label: "Years in the public sector",
    caption: "Promet Source, 2026"
  }), /*#__PURE__*/React.createElement(StatCard, {
    value: "300+",
    label: "Government sites delivered",
    caption: "Internal project records"
  }), /*#__PURE__*/React.createElement(StatCard, {
    value: "AA",
    label: "Conformance target",
    caption: "WCAG 2.1, every build"
  })), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "0 0 16px",
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-bold)",
      fontSize: "var(--size-h3)",
      color: "var(--text-heading)"
    }
  }, "Core competencies"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 12,
      marginBottom: 32
    }
  }, [["code-2", "Drupal 10 and 11 development and migration"], ["accessibility", "WCAG 2.1 AA audits and remediation"], ["layout-dashboard", "Research, content strategy and UX"], ["life-buoy", "Managed hosting, patching and support"], ["users", "Editor and developer training"], ["shield-check", "Security and compliance reviews"]].map(([icon, label]) => /*#__PURE__*/React.createElement("div", {
    key: label,
    style: {
      display: "flex",
      gap: 12,
      alignItems: "center",
      background: "var(--surface-page-warm)",
      border: "1px solid var(--border-default)",
      borderRadius: "var(--radius-md)",
      padding: "12px 14px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 32,
      height: 32,
      borderRadius: "var(--radius-pill)",
      background: "var(--orange-500)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flex: "0 0 auto"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 16,
    color: "var(--deep-space-900)"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--size-body-sm)",
      lineHeight: 1.4
    }
  }, label)))), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "0 0 16px",
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-bold)",
      fontSize: "var(--size-h3)",
      color: "var(--text-heading)"
    }
  }, "Contracting details"), /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse",
      fontSize: "var(--size-body-sm)"
    }
  }, /*#__PURE__*/React.createElement("tbody", null, rows.map(([k, v]) => /*#__PURE__*/React.createElement("tr", {
    key: k,
    style: {
      borderBottom: "1px solid var(--border-default)"
    }
  }, /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: "left",
      padding: "10px 0",
      width: 140,
      color: "var(--text-heading)",
      fontWeight: "var(--weight-bold)"
    }
  }, k), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "10px 0"
    }
  }, v)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      background: "var(--orange-500)",
      padding: "16px 48px",
      display: "flex",
      justifyContent: "space-between",
      fontSize: "var(--size-caption)",
      fontWeight: "var(--weight-bold)",
      color: "var(--deep-space-900)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "prometsource.com"), /*#__PURE__*/React.createElement("span", null, "Contact details placeholder \u2014 supply before distribution")));
}
function CaseStudySheet() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...PAGE
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "40px 48px 0",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "onLight",
    height: 30,
    base: "../.."
  }), /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral"
  }, "State and local")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "28px 48px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--size-caption)",
      fontWeight: "var(--weight-bold)",
      color: "var(--text-muted)",
      marginBottom: 12
    }
  }, "Case study"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-bold)",
      fontSize: 40,
      lineHeight: 1.14,
      letterSpacing: "var(--tracking-heading)",
      color: "var(--text-heading)",
      maxWidth: "24ch"
    }
  }, "Accessible permitting for a state agency"), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 240,
      marginTop: 28,
      borderRadius: "var(--radius-lg)",
      background: "var(--deep-space-10)",
      border: "1px solid var(--neutral-line)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "var(--size-caption)",
      color: "var(--deep-space-40)"
    }
  }, "Image placeholder \u2014 no brand photography supplied"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.2fr .8fr",
      gap: 32,
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "0 0 12px",
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-bold)",
      fontSize: "var(--size-h4)",
      color: "var(--text-heading)"
    }
  }, "The problem"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 20px",
      fontSize: "var(--size-body-sm)",
      lineHeight: "var(--leading-relaxed)"
    }
  }, "A 12-year-old permitting portal failed keyboard navigation at nearly every step, and staff were re-keying applications that arrived by fax because residents could not finish the online form."), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "0 0 12px",
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-bold)",
      fontSize: "var(--size-h4)",
      color: "var(--text-heading)"
    }
  }, "What we did"), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      paddingLeft: 18,
      fontSize: "var(--size-body-sm)",
      lineHeight: "var(--leading-relaxed)"
    }
  }, /*#__PURE__*/React.createElement("li", null, "Rebuilt the application flow on Drupal 10 with an accessible component library"), /*#__PURE__*/React.createElement("li", null, "Ran remediation sprints alongside the agency's two in-house developers"), /*#__PURE__*/React.createElement("li", null, "Added automated accessibility checks to the deployment pipeline"), /*#__PURE__*/React.createElement("li", null, "Trained 40 content editors on plain-language, accessible publishing"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(StatCard, {
    value: "38%",
    label: "Faster permit processing",
    caption: "Agency program data, 2024"
  }), /*#__PURE__*/React.createElement(StatCard, {
    tone: "light",
    value: "0",
    label: "Critical defects at launch",
    caption: "Axe plus manual audit"
  }), /*#__PURE__*/React.createElement(Card, {
    tone: "tint",
    padding: "var(--space-5)",
    title: "Timeline"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--size-body-sm)"
    }
  }, "Nine months, discovery to launch."))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 48,
      right: 48,
      bottom: 40,
      borderTop: "1px solid var(--border-default)",
      paddingTop: 16,
      fontSize: "var(--size-caption)",
      color: "var(--text-muted)",
      display: "flex",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", null, "Promet Source case study"), /*#__PURE__*/React.createElement("span", null, "Figures published with client approval")));
}
Object.assign(window, {
  ProposalCover,
  CapabilityStatement,
  CaseStudySheet
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/collateral/Sheets.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/CasesScreen.jsx
try { (() => {
const {
  Card,
  Tag,
  Badge,
  Button,
  Icon,
  Input,
  Select
} = window.PrometSourceDesignSystem_b4bce0;
const CASES = [{
  t: "Accessible permitting for a state agency",
  s: "State and local",
  b: "A WCAG 2.1 AA rebuild of a 12-year-old permitting portal.",
  stat: "38% faster processing"
}, {
  t: "Course catalog rebuild for a public university",
  s: "Higher education",
  b: "One catalog, three campuses, a single content model.",
  stat: "1.2M annual sessions"
}, {
  t: "Water utility service portal",
  s: "Water and waste",
  b: "Bill pay, outage reporting and plain-language service requests.",
  stat: "62% self-service rate"
}, {
  t: "Federal program microsite program",
  s: "Federal",
  b: "A shared component library across nine program sites.",
  stat: "9 sites, one codebase"
}, {
  t: "Statewide accessibility remediation",
  s: "State and local",
  b: "Remediation sprints across 40 agency sites with in-house teams.",
  stat: "0 critical defects"
}, {
  t: "Alumni engagement platform",
  s: "Higher education",
  b: "Personalized content on Drupal with a decoupled front end.",
  stat: "3.1x email CTR"
}];
function CasesScreen({
  onNavigate
}) {
  const [sector, setSector] = React.useState("All");
  const [q, setQ] = React.useState("");
  const sectors = ["All", "Federal", "State and local", "Higher education", "Water and waste"];
  const shown = CASES.filter(c => (sector === "All" || c.s === sector) && (q === "" || (c.t + c.b).toLowerCase().includes(q.toLowerCase())));
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-inverse)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "var(--space-16) var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-bold)",
      fontSize: "var(--size-display-2)",
      lineHeight: "var(--leading-tight)",
      letterSpacing: "var(--tracking-display)",
      color: "var(--white)"
    }
  }, "Case studies"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "var(--space-5) 0 0",
      fontFamily: "var(--font-body)",
      fontSize: "var(--size-body-lg)",
      color: "var(--lavendar-200)",
      maxWidth: "56ch"
    }
  }, "Work we can talk about, with numbers the client agreed to publish."))), /*#__PURE__*/React.createElement(Section, {
    tone: "page"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-4)",
      alignItems: "center",
      marginBottom: "var(--space-8)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 280
    }
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "Search case studies",
    value: q,
    onChange: e => setQ(e.target.value),
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "search",
      size: 16
    })
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-2)",
      flexWrap: "wrap"
    }
  }, sectors.map(s => /*#__PURE__*/React.createElement(Tag, {
    key: s,
    selected: sector === s,
    onClick: () => setSector(s)
  }, s))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto",
      width: 200
    }
  }, /*#__PURE__*/React.createElement(Select, {
    options: ["Most recent", "A–Z"]
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: "var(--space-6)"
    }
  }, shown.map(c => /*#__PURE__*/React.createElement(Card, {
    key: c.t,
    interactive: true,
    padding: "0",
    style: {
      overflow: "hidden",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement(Placeholder, {
    height: 160,
    label: "Image placeholder"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-6)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)",
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral",
    size: "sm"
  }, c.s), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-bold)",
      fontSize: "var(--size-h4)",
      lineHeight: "var(--leading-snug)",
      color: "var(--text-heading)"
    }
  }, c.t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--size-body-sm)",
      lineHeight: "var(--leading-relaxed)",
      color: "var(--text-body)"
    }
  }, c.b), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      paddingTop: "var(--space-4)",
      borderTop: "1px solid var(--border-default)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--size-caption)",
      fontWeight: "var(--weight-bold)",
      color: "var(--text-heading)"
    }
  }, c.stat), /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 16,
    color: "var(--deep-space-900)"
  })))))), shown.length === 0 && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      color: "var(--text-muted)"
    }
  }, "No case studies match that filter."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-12)",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: () => onNavigate("contact")
  }, "Ask about work we can't publish"))));
}
Object.assign(window, {
  CasesScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/CasesScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/ContactScreen.jsx
try { (() => {
const {
  Card,
  Button,
  Field,
  Input,
  Textarea,
  Select,
  Checkbox,
  Toast,
  Icon,
  Dialog,
  StatCard
} = window.PrometSourceDesignSystem_b4bce0;
function ContactScreen() {
  const [sent, setSent] = React.useState(false);
  const [dialog, setDialog] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const invalid = email !== "" && !email.includes("@");
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(Section, {
    tone: "page"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.1fr .9fr",
      gap: "var(--space-16)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Contact",
    title: "Start a conversation",
    body: "Tell us what you are trying to deliver and who it has to serve. We reply within one business day."
  }), sent && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(Toast, {
    tone: "success",
    title: "Message sent",
    message: "We reply within one business day.",
    onDismiss: () => setSent(false)
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Name",
    htmlFor: "n",
    required: true
  }, /*#__PURE__*/React.createElement(Input, {
    id: "n",
    placeholder: "Your name"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Work email",
    htmlFor: "e",
    required: true,
    error: invalid ? "Enter a valid email address" : undefined
  }, /*#__PURE__*/React.createElement(Input, {
    id: "e",
    type: "email",
    placeholder: "name@agency.gov",
    value: email,
    invalid: invalid,
    onChange: ev => setEmail(ev.target.value)
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Organization",
    htmlFor: "o"
  }, /*#__PURE__*/React.createElement(Input, {
    id: "o",
    placeholder: "Agency or institution"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Organization type",
    htmlFor: "ot"
  }, /*#__PURE__*/React.createElement(Select, {
    id: "ot",
    placeholder: "Select one",
    options: ["Federal", "State and local", "Higher education", "Water and waste", "Other"]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: "1 / -1"
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Tell us about the project",
    htmlFor: "p",
    hint: "Scope, timeline, and the procurement vehicle if you know it"
  }, /*#__PURE__*/React.createElement(Textarea, {
    id: "p",
    rows: 5
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: "1 / -1",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    label: "Send me accessibility updates",
    description: "About one email a month. No sales sequences."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-4)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => setSent(true),
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 16
    })
  }, "Send the request"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => setDialog(true)
  }, "Download the capability statement"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    tone: "inverse",
    title: "Already have an RFP?",
    padding: "var(--space-8)"
  }, "Send the solicitation number and the due date. We will tell you plainly whether we are the right fit before either of us spends a week on it."), /*#__PURE__*/React.createElement(StatCard, {
    value: "1 day",
    label: "Typical first reply",
    caption: "Business days, US Central"
  }), /*#__PURE__*/React.createElement(Card, {
    tone: "warm",
    title: "Offices"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)",
      fontSize: "var(--size-body-sm)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      gap: 10,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    size: 16,
    color: "var(--deep-space-900)"
  }), " Chicago, Illinois"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      gap: 10,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 16,
    color: "var(--deep-space-900)"
  }), " Contact number placeholder"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      gap: 10,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "mail",
    size: 16,
    color: "var(--deep-space-900)"
  }), " Contact address placeholder")))))), /*#__PURE__*/React.createElement(Dialog, {
    open: dialog,
    title: "Download the capability statement",
    description: "We'll email a copy as well, so you have it on file.",
    onClose: () => setDialog(false),
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => setDialog(false)
    }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
      onClick: () => {
        setDialog(false);
        setSent(true);
      }
    }, "Send it"))
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Work email",
    htmlFor: "dl"
  }, /*#__PURE__*/React.createElement(Input, {
    id: "dl",
    type: "email",
    placeholder: "name@agency.gov"
  }))));
}
Object.assign(window, {
  ContactScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/ContactScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/HomeScreen.jsx
try { (() => {
const {
  Button,
  Card,
  StatCard,
  Badge,
  Icon
} = window.PrometSourceDesignSystem_b4bce0;
function HomeScreen({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-inverse)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "var(--space-20) var(--space-8)",
      display: "grid",
      gridTemplateColumns: "1.1fr .9fr",
      gap: "var(--space-16)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
    tone: "inverse",
    style: {
      background: "rgba(255,255,255,.10)",
      color: "var(--lavendar-200)"
    }
  }, "WCAG 2.1 AA and Section 508"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: "var(--space-5) 0 0",
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-bold)",
      fontSize: "var(--size-display-1)",
      lineHeight: "var(--leading-tight)",
      letterSpacing: "var(--tracking-display)",
      color: "var(--white)"
    }
  }, "Digital that serves ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--orange-500)"
    }
  }, "everyone")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "var(--space-6) 0 0",
      fontFamily: "var(--font-body)",
      fontSize: "var(--size-body-lg)",
      lineHeight: "var(--leading-relaxed)",
      color: "var(--lavendar-200)",
      maxWidth: "48ch"
    }
  }, "We design, build and support accessible websites and applications for agencies that answer to the public."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-4)",
      marginTop: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 18
    }),
    onClick: () => onNavigate("contact")
  }, "Start a conversation"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "inverse",
    onClick: () => onNavigate("cases")
  }, "See our work"))), /*#__PURE__*/React.createElement(Placeholder, {
    height: 380,
    tone: "dark",
    label: "Hero image placeholder \u2014 no brand imagery was supplied"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--divider-on-inverse)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "var(--space-10) var(--space-8)",
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(StatCard, {
    value: "20+",
    label: "Years in the public sector",
    caption: "Promet Source, 2026",
    style: {
      background: "transparent",
      border: "none",
      padding: 0
    }
  }), /*#__PURE__*/React.createElement(StatCard, {
    value: "300+",
    label: "Government sites delivered",
    caption: "Internal project records",
    style: {
      background: "transparent",
      border: "none",
      padding: 0
    }
  }), /*#__PURE__*/React.createElement(StatCard, {
    value: "AA",
    label: "Conformance target on every build",
    caption: "WCAG 2.1",
    style: {
      background: "transparent",
      border: "none",
      padding: 0
    }
  }), /*#__PURE__*/React.createElement(StatCard, {
    value: "24/7",
    label: "Support and monitoring",
    caption: "Managed services SLA",
    style: {
      background: "transparent",
      border: "none",
      padding: 0
    }
  })))), /*#__PURE__*/React.createElement(Section, {
    tone: "page"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "What we do",
    title: "Four practices, one accountable team",
    body: "Most engagements start with an audit or a migration and end with a team that can run the platform themselves."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: "var(--space-6)"
    }
  }, [{
    icon: "code-2",
    t: "Drupal development",
    b: "Migrations, custom modules and design systems on Drupal 10 and 11."
  }, {
    icon: "accessibility",
    t: "Accessibility",
    b: "Audits, remediation and the training that keeps conformance from slipping."
  }, {
    icon: "layout-dashboard",
    t: "Design and UX",
    b: "Research, content strategy and interfaces built for plain-language readers."
  }, {
    icon: "life-buoy",
    t: "Support and hosting",
    b: "Monitoring, patching and a named team that knows your codebase."
  }].map(s => /*#__PURE__*/React.createElement(Card, {
    key: s.t,
    interactive: true,
    title: s.t,
    footer: /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        fontSize: "var(--size-body-sm)",
        fontWeight: "var(--weight-bold)",
        color: "var(--text-heading)"
      }
    }, "Explore ", /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 16
    }))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: "var(--radius-pill)",
      background: "var(--orange-500)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s.icon,
    size: 22,
    color: "var(--deep-space-900)"
  })), s.b)))), /*#__PURE__*/React.createElement(Section, {
    tone: "warm"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: ".9fr 1.1fr",
      gap: "var(--space-16)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Placeholder, {
    height: 340,
    label: "Case study image placeholder"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Case study",
    title: "Accessible permitting for a state agency",
    body: "A WCAG 2.1 AA rebuild of a 12-year-old permitting portal, delivered in nine months with the agency's own developers on the team."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-4)",
      marginBottom: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement(StatCard, {
    tone: "light",
    value: "38%",
    label: "Faster permit processing",
    caption: "Agency program data, 2024",
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(StatCard, {
    tone: "light",
    value: "0",
    label: "Critical a11y defects at launch",
    caption: "Axe and manual audit",
    style: {
      flex: 1
    }
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => onNavigate("cases")
  }, "Read the case study")))), /*#__PURE__*/React.createElement(Section, {
    tone: "inverse"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "var(--space-10)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-bold)",
      fontSize: "var(--size-h1)",
      lineHeight: "var(--leading-snug)",
      color: "var(--white)"
    }
  }, "Have an RFP in flight?"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "var(--space-4) 0 0",
      fontFamily: "var(--font-body)",
      fontSize: "var(--size-body-lg)",
      color: "var(--lavendar-200)"
    }
  }, "Send it over. We will tell you plainly whether we are the right fit.")), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 18
    }),
    onClick: () => onNavigate("contact")
  }, "Start a conversation"))));
}
Object.assign(window, {
  HomeScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/ServicesScreen.jsx
try { (() => {
const {
  Button,
  Card,
  Tabs,
  Badge,
  Icon,
  Tooltip
} = window.PrometSourceDesignSystem_b4bce0;
function ServicesScreen({
  onNavigate
}) {
  const [tab, setTab] = React.useState("drupal");
  const content = {
    drupal: {
      title: "Drupal development",
      body: "Migrations off unsupported versions, custom modules, and component libraries your content team can actually assemble pages with.",
      bullets: ["Drupal 10 and 11 migrations", "Design system and paragraph library", "Decoupled front ends where they earn their keep", "Knowledge transfer to in-house developers"]
    },
    a11y: {
      title: "Accessibility",
      body: "An audit tells you what is broken. We fix the pattern that produced it, then hand your team the checks that keep it fixed.",
      bullets: ["WCAG 2.1 AA and Section 508 audits", "Remediation sprints with your developers", "Automated checks in CI", "Editor training for accessible content"]
    },
    design: {
      title: "Design and UX",
      body: "Research with the residents who actually use the service, then interfaces built for plain-language readers on old devices.",
      bullets: ["Discovery and stakeholder interviews", "Content strategy and plain-language rewrites", "Interaction design and prototyping", "Usability testing with assistive technology"]
    },
    support: {
      title: "Support and hosting",
      body: "Monitoring, patching and a named team that knows your codebase — not a queue.",
      bullets: ["Security patching within SLA", "Uptime and performance monitoring", "Quarterly accessibility regression checks", "Roadmap and budget planning"]
    }
  }[tab];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-inverse)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "var(--space-16) var(--space-8) var(--space-10)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--size-caption)",
      color: "var(--lavendar-200)",
      marginBottom: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate("home");
    },
    style: {
      color: "var(--lavendar-200)",
      textDecoration: "none"
    }
  }, "Home"), /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: .5,
      margin: "0 8px"
    }
  }, "/"), "Services"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-bold)",
      fontSize: "var(--size-display-2)",
      lineHeight: "var(--leading-tight)",
      letterSpacing: "var(--tracking-display)",
      color: "var(--white)",
      maxWidth: "24ch"
    }
  }, "Services"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "var(--space-5) 0 var(--space-10)",
      fontFamily: "var(--font-body)",
      fontSize: "var(--size-body-lg)",
      color: "var(--lavendar-200)",
      maxWidth: "58ch"
    }
  }, "Four practices that ship together. Pick the one you need; you get the others when the work calls for them."), /*#__PURE__*/React.createElement(Tabs, {
    tone: "inverse",
    value: tab,
    onChange: setTab,
    tabs: [{
      value: "drupal",
      label: "Drupal development"
    }, {
      value: "a11y",
      label: "Accessibility"
    }, {
      value: "design",
      label: "Design and UX"
    }, {
      value: "support",
      label: "Support and hosting"
    }]
  }))), /*#__PURE__*/React.createElement(Section, {
    tone: "page"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.1fr .9fr",
      gap: "var(--space-16)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-bold)",
      fontSize: "var(--size-h1)",
      letterSpacing: "var(--tracking-heading)",
      color: "var(--text-heading)"
    }
  }, content.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "var(--space-4) 0 var(--space-8)",
      fontFamily: "var(--font-body)",
      fontSize: "var(--size-body-lg)",
      lineHeight: "var(--leading-relaxed)",
      color: "var(--text-body)"
    }
  }, content.body), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      padding: 0,
      margin: "0 0 var(--space-10)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)"
    }
  }, content.bullets.map(b => /*#__PURE__*/React.createElement("li", {
    key: b,
    style: {
      display: "flex",
      gap: "var(--space-3)",
      alignItems: "flex-start",
      fontFamily: "var(--font-body)",
      fontSize: "var(--size-body)",
      lineHeight: "var(--leading-relaxed)",
      color: "var(--text-body)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 20,
    color: "var(--deep-space-900)"
  }), b))), /*#__PURE__*/React.createElement(Button, {
    onClick: () => onNavigate("contact"),
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 16
    })
  }, "Talk to this team")), /*#__PURE__*/React.createElement(Card, {
    tone: "warm",
    title: "Procurement details",
    padding: "var(--space-8)"
  }, /*#__PURE__*/React.createElement("dl", {
    style: {
      margin: 0,
      display: "grid",
      gridTemplateColumns: "auto 1fr",
      gap: "var(--space-3) var(--space-6)",
      fontSize: "var(--size-body-sm)"
    }
  }, /*#__PURE__*/React.createElement("dt", {
    style: {
      fontWeight: "var(--weight-bold)",
      color: "var(--text-heading)"
    }
  }, "Vehicles"), /*#__PURE__*/React.createElement("dd", {
    style: {
      margin: 0
    }
  }, "GSA MAS, state master contracts, cooperative purchasing"), /*#__PURE__*/React.createElement("dt", {
    style: {
      fontWeight: "var(--weight-bold)",
      color: "var(--text-heading)"
    }
  }, "NAICS"), /*#__PURE__*/React.createElement("dd", {
    style: {
      margin: 0
    }
  }, "541511, 541512, 541430"), /*#__PURE__*/React.createElement("dt", {
    style: {
      fontWeight: "var(--weight-bold)",
      color: "var(--text-heading)"
    }
  }, "Conformance"), /*#__PURE__*/React.createElement("dd", {
    style: {
      margin: 0
    }
  }, "WCAG 2.1 AA, Section 508, VPAT on request")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-2)",
      marginTop: "var(--space-6)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "success",
    dot: true
  }, "Section 508"), /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral"
  }, "VPAT available"), /*#__PURE__*/React.createElement(Tooltip, {
    label: "Voluntary Product Accessibility Template"
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "info"
  }, "What is a VPAT?")))))));
}
Object.assign(window, {
  ServicesScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/ServicesScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/SiteChrome.jsx
try { (() => {
const {
  Logo,
  Icon,
  Button,
  IconButton
} = window.PrometSourceDesignSystem_b4bce0;
const NAV = ["Services", "Industries", "Case studies", "Resources", "About"];
function SiteHeader({
  route,
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 30,
      background: "var(--deep-space-900)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "0 var(--space-8)",
      height: 76,
      display: "flex",
      alignItems: "center",
      gap: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate("home");
    },
    style: {
      display: "flex"
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "onDark",
    height: 30,
    base: "../.."
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: "var(--space-6)",
      marginLeft: "var(--space-4)"
    }
  }, NAV.map(n => {
    const key = n.toLowerCase().replace(/ /g, "-");
    const target = key === "services" ? "services" : key === "case-studies" ? "cases" : "home";
    const active = route === target && target !== "home";
    return /*#__PURE__*/React.createElement("a", {
      key: n,
      href: "#",
      onClick: e => {
        e.preventDefault();
        onNavigate(target);
      },
      style: {
        fontFamily: "var(--font-body)",
        fontSize: "var(--size-body-sm)",
        fontWeight: active ? "var(--weight-bold)" : "var(--weight-regular)",
        color: active ? "var(--white)" : "var(--lavendar-200)",
        textDecoration: "none",
        paddingBottom: 3,
        boxShadow: active ? "inset 0 -3px 0 0 var(--orange-500)" : "none"
      }
    }, n);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto",
      display: "flex",
      alignItems: "center",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "search",
      size: 18
    }),
    label: "Search the site",
    variant: "inverse",
    size: "sm"
  }), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    onClick: () => onNavigate("contact")
  }, "Start a conversation"))));
}
function SiteFooter({
  onNavigate
}) {
  const cols = [{
    h: "Services",
    items: ["Drupal development", "Accessibility", "Design and UX", "Support and hosting"]
  }, {
    h: "Industries",
    items: ["Federal", "State and local", "Higher education", "Water and waste"]
  }, {
    h: "Company",
    items: ["About", "Careers", "Newsroom", "Contact"]
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--deep-space-900)",
      color: "var(--lavendar-200)",
      fontFamily: "var(--font-body)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "var(--space-16) var(--space-8) var(--space-10)",
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
      gap: "var(--space-10)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Logo, {
    variant: "onDark",
    height: 34,
    base: "../.."
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "var(--space-5)",
      fontSize: "var(--size-body-sm)",
      lineHeight: "var(--leading-relaxed)",
      maxWidth: "34ch"
    }
  }, "Accessible digital experiences for government, higher education, and water and waste agencies.")), cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-bold)",
      fontSize: "var(--size-body-sm)",
      color: "var(--white)",
      marginBottom: "var(--space-4)"
    }
  }, c.h), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)"
    }
  }, c.items.map(i => /*#__PURE__*/React.createElement("li", {
    key: i
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate("contact");
    },
    style: {
      color: "var(--lavendar-200)",
      textDecoration: "none",
      fontSize: "var(--size-body-sm)"
    }
  }, i))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--divider-on-inverse)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "var(--space-5) var(--space-8)",
      display: "flex",
      justifyContent: "space-between",
      fontSize: "var(--size-caption)",
      color: "rgba(215,224,255,.7)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Promet Source"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: "inherit",
      textDecoration: "none"
    }
  }, "Accessibility statement"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: "inherit",
      textDecoration: "none"
    }
  }, "Privacy")))));
}
function Placeholder({
  height = 320,
  label = "Image placeholder",
  tone = "light"
}) {
  const dark = tone === "dark";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height,
      borderRadius: "var(--radius-lg)",
      background: dark ? "var(--surface-inverse-raised)" : "var(--deep-space-10)",
      border: dark ? "var(--border-on-dark)" : "1px solid var(--neutral-line)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "var(--font-body)",
      fontSize: "var(--size-caption)",
      color: dark ? "rgba(215,224,255,.6)" : "var(--deep-space-40)"
    }
  }, label);
}
function Section({
  tone = "page",
  children,
  style
}) {
  const bg = {
    page: "var(--surface-page)",
    warm: "var(--surface-page-warm)",
    inverse: "var(--surface-inverse)"
  }[tone];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: bg,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "var(--section-y) var(--space-8)"
    }
  }, children));
}
function SectionHead({
  eyebrow,
  title,
  body,
  tone = "light",
  align = "left"
}) {
  const dark = tone === "inverse";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: align === "center" ? 720 : 760,
      margin: align === "center" ? "0 auto var(--space-12)" : "0 0 var(--space-12)",
      textAlign: align
    }
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--size-caption)",
      fontWeight: "var(--weight-bold)",
      color: dark ? "var(--orange-500)" : "var(--text-muted)",
      marginBottom: "var(--space-3)"
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-bold)",
      fontSize: "var(--size-h1)",
      lineHeight: "var(--leading-snug)",
      letterSpacing: "var(--tracking-heading)",
      color: dark ? "var(--white)" : "var(--text-heading)"
    }
  }, title), body && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "var(--space-4) 0 0",
      fontFamily: "var(--font-body)",
      fontSize: "var(--size-body-lg)",
      lineHeight: "var(--leading-relaxed)",
      color: dark ? "var(--lavendar-200)" : "var(--text-body)"
    }
  }, body));
}
Object.assign(window, {
  SiteHeader,
  SiteFooter,
  Placeholder,
  Section,
  SectionHead
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/SiteChrome.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
