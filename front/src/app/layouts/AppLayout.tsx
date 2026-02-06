import type { ReactNode } from "react";
import Header from "../components/header";
import { Box } from "@mui/material";

interface AppLayoutProps {
  children: ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <>
      <Box maxWidth="xl" mx="auto">
        <Header />
      </Box>
      <Box maxWidth="xl" mx="auto" >
        {children}
      </Box>
    </>
  );
}
