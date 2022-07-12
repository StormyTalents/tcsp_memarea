import { useRouter } from "next/router";
import { useEffect } from "react";
import { useStytchLazy, useStytchSession } from "@stytch/stytch-react";

const AuthIndexPage = () => {
  const router = useRouter();
  const stytchClient = useStytchLazy();
  const session = useStytchSession();

  useEffect(() => {
    const token = router.query?.token?.toString();

    if (session) {
      router.push("/checkout");
      return;
    } else {
      if (token) {
        stytchClient.oauth.authenticate(token, {
          session_duration_minutes: 10,
        });
      }
    }
  }, [router, session]);

  return (
    <div tw="min-h-screen text-white bg-brand-400 flex items-center justify-center">
      <span tw="animate-bounce">Authenticating...</span>
    </div>
  );
};

export default AuthIndexPage;
