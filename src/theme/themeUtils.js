const DEFAULT_VERTICAL_KEY = '5xl';
const DEFAULT_HORIZONTAL_KEY = 'xl';

const parsePaddingPair = (value) => {
  if (!value) return [null, null];
  if (typeof value === 'string') {
    const parts = value.trim().split(/\s+/);
    if (parts.length === 1) {
      return [parts[0], parts[0]];
    }
    return [parts[0], parts[1]];
  }
  return [value, value];
};

export const resolveSpacingToken = (theme, token) => {
  if (token === 'none' || token === 0) {
    return '0';
  }

  if (typeof token === 'number') {
    return `${token}rem`;
  }

  if (typeof token === 'string') {
    const trimmed = token.trim();
    if (theme.spacing?.[trimmed]) {
      return theme.spacing[trimmed];
    }
    return trimmed;
  }

  return token;
};

export const resolvePadding = (theme, {
  padding,
  paddingX,
  paddingY,
  defaultPadding,
  defaultVertical,
  defaultHorizontal,
} = {}) => {
  const [baseVerticalRaw, baseHorizontalRaw] = parsePaddingPair(defaultPadding);

  const baseVertical = baseVerticalRaw ?? defaultVertical ?? theme.spacing?.[DEFAULT_VERTICAL_KEY] ?? '5rem';
  const baseHorizontal = baseHorizontalRaw ?? defaultHorizontal ?? theme.spacing?.[DEFAULT_HORIZONTAL_KEY] ?? '2rem';

  let vertical = resolveSpacingToken(theme, baseVertical);
  let horizontal = resolveSpacingToken(theme, baseHorizontal);

  if (padding != null) {
    if (Array.isArray(padding)) {
      const [verticalToken, horizontalToken] = padding;
      vertical = resolveSpacingToken(theme, verticalToken ?? vertical);
      horizontal = resolveSpacingToken(theme, horizontalToken ?? verticalToken ?? horizontal);
    } else {
      const resolved = resolveSpacingToken(theme, padding);
      vertical = resolved;
      horizontal = resolved;
    }
  }

  if (paddingY != null) {
    vertical = resolveSpacingToken(theme, paddingY);
  }

  if (paddingX != null) {
    horizontal = resolveSpacingToken(theme, paddingX);
  }

  return `${vertical} ${horizontal}`;
};
