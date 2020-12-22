module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  theme: {
    fontFamily: 'Proxima Nova',
    container: {
      center: true
    },
    extend: {
      colors: {
        'primary-color': '#673ab7',
        'primary-dark': '#d4dfe8',
        'surface-color': '#eff4f7',
        'on-surface-color': '#000000',
        'hovered-surface-color': `linear-gradient(
          135deg,
          rgba(0, 0, 0, 0.09),
          rgba(255, 255, 255, 0)
        )`,
        'elevated-surface-color': '#dfe8ef',
        'gray-color': '#999999',
      },
      textColor: {
        gray_color: '#999999',
        primary_dark: '#d4dfe8',
        on_surface_color: '#000000'
      },
      boxShadow: {
        normal_shadow: '-9px -9px 16px #f8fafe, 9px 9px 16px #ced2db',
        inner_shadow: 'inset -9px -9px 16px #f0f3f9, inset 9px 9px 16px #ced2db',
        small_shadow: '-4px -4px 8px #f8fafe, 4px 4px 8px #ced2db',
        small_inner_shadow: 'inset -4px -4px 8px #f0f3f9, inset 4px 4px 8px #ced2db, inset -1px -1px 4px #8e8e8e'
      },
      spacing: {
        // '144': '36rem',
        'ls5-': '5 * -0.0125rem',
        'ls4-': '4 * -0.0125rem',
        'ls3-': '3 * -0.0125rem',
        'ls2-': '2 * -0.0125rem',
        'ls1-': '-0.0125rem',
        'ls1': '0.0125rem',
        'ls2': '2 * 0.0125rem',
        'ls3': '3 * 0.0125rem',
        'ls4': '4 * 0.0125rem',
        'ls5': '5 * 0.0125rem',
      },
    }
  }
}