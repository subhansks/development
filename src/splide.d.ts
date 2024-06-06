declare module "@splidejs/react-splide" {
  import * as React from "react";

  export class Splide extends React.Component<{
    options?: Record<string, unknown>;
    children?: React.ReactNode;
    hasTrack?: boolean;
    tag?: string;
    id?: string;
    className?: string;
    style?: React.CSSProperties;
    [key: string]: any;
  }> {}

  export class SplideSlide extends React.Component<{
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    [key: string]: any;
  }> {}
}
