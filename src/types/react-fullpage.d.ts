declare module "@ap.cx/react-fullpage" {
  import * as React from "react";

  interface FullpageProps {
    children: React.ReactNode;
  }

  export function Fullpage(props: FullpageProps): JSX.Element;

  export function FullPageSections(props: { children: React.ReactNode }): JSX.Element;

  export function FullpageSection(props: { children: React.ReactNode }): JSX.Element;

  export function FullpageNavigation(): JSX.Element;

  interface FullpageContext {
    scrollToSlide: (index: number) => void;
    getCurrentSlideIndex: () => number;
  }

  export function useFullpage(): FullpageContext;
}
