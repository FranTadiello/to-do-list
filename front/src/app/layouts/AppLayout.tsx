import type { ReactNode } from "react";
import Header from "../components/header";
import { Box } from "@mui/material";

interface AppLayoutProps {
  children: ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <>
      <Header />
      <Box maxWidth="md" mx="auto">
        {children}
      </Box>
    </>
  );
}
