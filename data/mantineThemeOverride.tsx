import { MantineThemeOverride } from "@mantine/core";

const theme: MantineThemeOverride = {
  breakpoints: {
    xs: 500,
    sm: 800,
    md: 1000,
    lg: 1200,
    xl: 1400,
  },
  colors: {
    white: ['#ffffff'],
    cqred: ['#880d1e', '#9a0f22', '#ac1026', '#d0142e', '#e21632', '#ea213d', '#eb334c', '#ed455c', '#ef576c', '#f1697b'],
    cqorange: ['#a02f00', '#b43500', '#c83b00', '#db4100', '#ef4600', '#ff4e04', '#ff5c17', '#ff692b', '#ff773e', '#ff8552'],
    cqyellow: ['#aca800', '#bfbc00', '#d3cf00', '#e6e200', '#faf500', '#fffa0f', '#fffb22', '#fffb36', '#fffb4a', '#fffc5d'],
    cqblue: ['#38726c', '#3e7f78', '#458c85', '#4b9991', '#52a79e', '#5dafa7', '#6ab6ae', '#77bcb5', '#84c3bc', '#91c9c3'],
    cqgreen: ['#4a5e43', '#53694c', '#5c7454', '#65805c', '#6e8b64', '#77966d', '#829e78', '#8ca684', '#97af8f', '#a2b79b'],
  },
};

export default theme;