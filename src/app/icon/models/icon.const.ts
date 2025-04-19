export const ICONS = {
  dialogue: 'icon-dialogue',
  list: 'icon-list',
  arrowPath:'icon-arrow-path',
  operation:'icon-operation'
};

export type IconsType = (typeof ICONS)[keyof typeof ICONS];
