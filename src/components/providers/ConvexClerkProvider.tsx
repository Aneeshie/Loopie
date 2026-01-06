"use client";

import {
  Authenticated,
  AuthLoading,
  ConvexReactClient,
  Unauthenticated,
} from "convex/react";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  useAuth,
} from "@clerk/nextjs";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { ThemeProvider } from "next-themes";
import LoopieLanding from "@/features/auth/components/unauthenticated-page";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!!);

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider>
      <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
        <ThemeProvider
          attribute={"class"}
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Authenticated>{children}</Authenticated>
          <Unauthenticated>
            <LoopieLanding />
          </Unauthenticated>
          <AuthLoading>Auth Loading...</AuthLoading>
        </ThemeProvider>
      </ConvexProviderWithClerk>
    </ClerkProvider>
  );
};
