"use client";
import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import NextAppDirEmotionCacheProvider from "./EmotionCache";
import theme from "./theme";

export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {

    //change ref theme from theme.tsx
    // const theme = createTheme({
    //     //spacing: 16 // margin 1:16
    //     spacing : 1   // margin 1:1
    // });
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}