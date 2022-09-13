import tw, { styled } from "twin.macro";
import { useCallback, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { useStytch } from "@stytch/stytch-react";

import { CustomInput, Checkbox, Button, SocialButton } from "../../components";

import ArrowCircleRight from "./../../assets/icons/arrow-circle-right.svg";
import LogoSVG from "./../../assets/img/Logo.svg";
import LineSVG from "./../../assets/icons/line.svg";
import LaptopPhoneImg from "./../../assets/img/laptop-phone.png";
import { PwdStrength } from "components/password-form/pwd-strength-indicator";
import LogoFull from "../../assets/icons/logo-full.svg";

const AuthPage = () => {
  const router = useRouter();
  const { type: authType } = router.query;
  const [newPwd, setNewPwd] = useState("");

  const onClickLogin = useCallback(() => {
    router.push("/dashboard");
  }, [router]);

  if (authType === "sign-in" || authType === "sign-up")
    return <AuthSignPage type={authType} />;
  else
    return (
      <AuthWrapper>
        {/* Start Bubbles  */}
        <>
          <FirstBubble animate={{ x: authType === "signup" ? 10 : 300 }} />
          <SecondBubble animate={{ x: authType === "signup" ? -300 : 450 }} />
          <ThirdBubble
            animate={{ x: authType === "signup" ? 272 : "calc(50vw + 100px)" }}
          />
          <FourthBubble />
          <Bubble5 />
          <Bubble6 />
          <Bubble7 />
          <CrossLines />
          <CrossLine2 />
          <CrossLine3 />
        </>
        {/* End Bubbles */}

        <AuthForm
          animate={{ x: authType === "signup" ? "calc(100vw - 100%)" : 0 }}
        >
          <div>
            <Link href="/" passHref>
              <a>
                <LogoSVG tw="cursor-pointer" />
              </a>
            </Link>
          </div>
          {authType === "login" && (
            <div tw="mt-24">
              <AuthTitle>Log in</AuthTitle>
              <p tw="mt-5">
                Learn about all the things to do with debt and other things in
                this live event
              </p>
              <div tw="mt-16">
                <CustomInput
                  label="Your Email"
                  placeholder="name@example.com"
                  isIcon={true}
                  tw="mb-3"
                />

                <CustomInput
                  label="Your Password"
                  placeholder="Type your password"
                  isIcon={true}
                  type="password"
                />
                <div tw="flex justify-between items-center mt-6">
                  <Checkbox
                    variant="squared"
                    label="Remember Me"
                    name="remember"
                  />
                  <AuthLink href="/auth/forgot">Forgot Password?</AuthLink>
                </div>
                <Button
                  variant="primary"
                  color="brand"
                  title="Log in"
                  fullWidth={true}
                  tw="mt-6"
                  icon={<ArrowCircleRight />}
                  onClick={onClickLogin}
                />
                <Link href="/auth/signup" tw="relative" passHref>
                  <div tw="flex items-center cursor-pointer text-center w-full justify-center mt-6 relative">
                    <span tw="text-sm leading-[150%] font-medium">
                      Don&lsquo;t have an account?
                    </span>
                    <AuthLink>
                      Sign up <LineSVG tw="absolute top-5 -right-10" />
                    </AuthLink>
                  </div>
                </Link>
              </div>
            </div>
          )}
          {authType === "signup" && (
            <div tw="mt-24">
              <AuthTitle>Sign Up</AuthTitle>
              <p tw="mt-5">
                Learn about all the things to do with debt and other things in
                this live event
              </p>
              <div tw="mt-16">
                <CustomInput
                  label="Email Address"
                  placeholder="Enter email address"
                  isIcon={true}
                  tw="mb-3"
                />

                <CustomInput
                  label="Password"
                  placeholder="Create a password"
                  isIcon={true}
                  type="password"
                  onChange={(e) => setNewPwd(e.target.value)}
                />
                <PwdStrength password={newPwd} />

                <Button
                  variant="primary"
                  color="brand"
                  title="Create My Account"
                  fullWidth={true}
                  tw="mt-6"
                  icon={<ArrowCircleRight />}
                />
                <Link href="/auth/login" tw="relative" passHref>
                  <div tw="flex items-center cursor-pointer text-center w-full justify-center mt-6 relative">
                    <span tw="text-sm leading-[150%] font-medium">
                      Already have an account?
                    </span>
                    <AuthLink>
                      Log in <LineSVG tw="absolute top-5 -right-10" />
                    </AuthLink>
                  </div>
                </Link>
              </div>
            </div>
          )}
        </AuthForm>
        <BannerSection
          animate={{
            x: authType === "signup" ? "-100%" : 0,
          }}
        >
          {authType === "login" && (
            <>
              <Image src={LaptopPhoneImg} width={380} height={280} />
              <h1>Welcome back</h1>
              <p>
                Learn about our community and the cool things it does. It is
                also a place for us to go and do things that are even cooler
                than this message.
              </p>
            </>
          )}
          {authType === "signup" && (
            <>
              <h1 tw="text-left">Welcome to the family</h1>
              <p tw="text-left">
                Learn about our community and the cool things it does. It is
                also a place for us to go and do things that are even cooler
                than this message.
              </p>
              <div tw="flex items-center mt-[30px]">
                <div tw="flex items-center">
                  <AvatarWrapper>
                    <img src="/img/karen.png" />
                  </AvatarWrapper>
                  <AvatarWrapper>
                    <img src="/img/karen.png" />
                  </AvatarWrapper>
                  <AvatarWrapper>
                    <img src="/img/karen.png" />
                  </AvatarWrapper>
                  <AvatarWrapper>
                    <img src="/img/karen.png" />
                  </AvatarWrapper>
                </div>
                <span tw="font-semibold text-sm leading-[21px] text-white ml-3.5">
                  80k members are fixing their credit. Now it&lsquo;s your turn.
                </span>
              </div>
            </>
          )}
        </BannerSection>
      </AuthWrapper>
    );
};

type AuthSignPageProps = {
  type: string;
};

const AuthSignPage = ({ type: authType }: AuthSignPageProps) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const [sentEmail, setSentEmail] = useState(false);

  const stytchClient = useStytch();

  const sendEmailMagicLink = useCallback(async () => {
    try {
      await stytchClient.magicLinks.email.loginOrCreate(email, {
        login_magic_link_url:
          process.env.NEXT_PUBLIC_REDIRECT_URL + "/auth/email",
        login_expiration_minutes: 60,
        signup_magic_link_url:
          process.env.NEXT_PUBLIC_REDIRECT_URL + "/auth/email",
        signup_expiration_minutes: 60,
      });

      setSentEmail(true);
      setError("");
    } catch (e) {
      setError(e.error_message);
    }
  }, [stytchClient, email]);

  const onSignInWithGoogle = useCallback(async () => {
    const url = stytchClient.oauth.google.getUrl({
      login_redirect_url: process.env.NEXT_PUBLIC_REDIRECT_URL + "/auth/oauth",
      signup_redirect_url: process.env.NEXT_PUBLIC_REDIRECT_URL + "/auth/oauth",
    });

    window.location.href = url;
  }, [stytchClient]);

  return (
    <AuthSignPageWrapper>
      <>
        <FirstBubble
          animate={{
            x: authType === "sign-in" ? "10px" : "50px",
          }}
          transition={{
            x: { type: "spring", stiffness: 100 },
            duration: 0.8,
            delay: 0.2,
          }}
        />
        <SecondBubble
          animate={{
            x: authType === "sign-in" ? "10px" : "60px",
          }}
          transition={{
            x: { type: "spring", stiffness: 100 },
            duration: 0.8,
            delay: 0.2,
          }}
        />
        <ThirdBubble
          animate={{
            x: authType === "sign-in" ? "10px" : "60px",
          }}
          transition={{
            x: { type: "spring", stiffness: 100 },
            duration: 0.8,
            delay: 0.2,
          }}
        />
        <FourthBubble
          animate={{
            x: authType === "sign-in" ? "10px" : "150px",
          }}
          transition={{
            x: { type: "spring", stiffness: 100 },
            duration: 0.8,
            delay: 0.2,
          }}
        />
        <Bubble5
          animate={{
            x: authType === "sign-in" ? "10px" : "70px",
          }}
          transition={{
            x: { type: "spring", stiffness: 100 },
            duration: 0.8,
            delay: 0.2,
          }}
        />
        <Bubble6
          animate={{
            x: authType === "sign-in" ? "10px" : "150px",
          }}
          transition={{
            x: { type: "spring", stiffness: 100 },
            duration: 0.8,
            delay: 0.2,
          }}
        />
        <Bubble7
          animate={{
            x: authType === "sign-in" ? "10px" : "50px",
          }}
          transition={{
            x: { type: "spring", stiffness: 100 },
            duration: 0.8,
            delay: 0.2,
          }}
        />
      </>

      <SignContentWrapper
        animate={{
          x: authType === "sign-in" ? "-100vw" : "-50%",
          opacity: authType === "sign-in" ? 0 : 1,
          y: "-50%",
        }}
        transition={{
          type: "spring",
          duration: 0.8,
          delay: 0.1,
          restDelta: 0.04,
        }}
      >
        <div tw="mb-4 flex justify-center">
          <LogoFull />
        </div>
        <h1 tw="text-center font-semibold text-[#2C2836] text-4xl mb-12">
          Sign Up
        </h1>

        <div tw="mb-4">
          <SocialButton type="facebook" variant="outline" size="xl" />
        </div>
        <div tw="mb-6">
          <SocialButton type="google" variant="outline" size="xl" />
        </div>

        <div tw="mb-6 flex items-center">
          <hr tw="border-[#71717A] w-[30%]" />
          <p tw="text-[#71717A] font-medium text-sm text-center flex-grow px-4">
            or sign up with email
          </p>
          <hr tw="border-[#71717A] w-[30%]" />
        </div>
        {!sentEmail && (
          <CustomInput
            label="Your email"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            isIcon={true}
            tw="mb-3"
            size="lg"
          />
        )}

        {sentEmail && (
          <div tw="flex flex-col items-center py-2">
            <div tw="text-gogreen-500 text-base ">
              We&apos;ve sent an email to you. Please check your email.
            </div>
            <button
              type="button"
              tw="underline text-sm"
              onClick={() => setSentEmail(false)}
            >
              Didn&apos;t receive the email? Try again
            </button>
          </div>
        )}

        {error && !sentEmail && (
          <div tw="text-fireopal-500 py-2 text-sm">{error}</div>
        )}

        {!sentEmail && (
          <div tw="mb-4">
            <Button
              variant="primary"
              color="brand"
              title="Sign Up"
              onClick={sendEmailMagicLink}
              fullWidth={true}
              icon={<ArrowCircleRight />}
            />
          </div>
        )}
        <p tw="relative text-center pb-2 text-[#2C2836] text-sm font-medium">
          Already have an account?{"  "}
          <span tw="text-brand-900 font-bold hover:text-brand-700 duration-300 transform">
            <Link href="/auth/sign-in" passHref>
              Sign In
            </Link>
          </span>
          <LineSVG tw="absolute bottom-[-2px] md:right-[64px] right-0" />
        </p>
      </SignContentWrapper>

      <SignContentWrapper
        animate={{
          x: authType === "sign-up" ? "100vw" : "-50%",
          y: "-50%",
          opacity: authType === "sign-up" ? 0 : 1,
        }}
        transition={{
          type: "spring",
          duration: 0.8,
          delay: 0.1,
          restDelta: 0.04,
        }}
      >
        <div tw="mb-4 flex justify-center">
          <LogoFull />
        </div>
        <h1 tw="text-center font-semibold text-[#2C2836] text-4xl mb-12">
          Sign In
        </h1>

        <div tw="mb-4">
          <SocialButton type="facebook" variant="outline" size="xl" />
        </div>
        <div tw="mb-6">
          <SocialButton
            type="google"
            variant="outline"
            size="xl"
            onClick={onSignInWithGoogle}
          />
        </div>

        <div tw="mb-6 flex items-center">
          <hr tw="border-[#71717A] w-[30%]" />
          <p tw="text-[#71717A] font-medium text-sm text-center flex-grow px-4">
            or sign in with email
          </p>
          <hr tw="border-[#71717A] w-[30%]" />
        </div>

        {!sentEmail && (
          <CustomInput
            label="Your email"
            placeholder="name@example.com"
            isIcon={true}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            tw="mb-3"
            size="lg"
          />
        )}

        <div tw="flex justify-between items-center mb-4">
          <Checkbox variant="squared" label="Remember Me" name="remember" />
          <AuthLink href="/auth/forgot">Need Help?</AuthLink>
        </div>

        {sentEmail && (
          <div tw="flex flex-col items-center py-2">
            <div tw="text-gogreen-500 text-base ">
              We&apos;ve sent an email to you. Please check your email.
            </div>
            <button
              type="button"
              tw="underline text-sm"
              onClick={() => setSentEmail(false)}
            >
              Didn&apos;t receive the email? Try again
            </button>
          </div>
        )}

        {error && !sentEmail && (
          <div tw="text-fireopal-500 py-2 text-sm">{error}</div>
        )}

        {!sentEmail && (
          <div tw="mb-4">
            <Button
              variant="primary"
              color="brand"
              title="Sign In"
              fullWidth={true}
              onClick={sendEmailMagicLink}
              icon={<ArrowCircleRight />}
            />
          </div>
        )}

        <p tw="relative text-center pb-2 text-[#2C2836] text-sm font-medium">
          Already have an account?{"  "}
          <span tw="text-brand-900 font-bold hover:text-brand-700 duration-300 transform">
            <Link href="/auth/sign-up" passHref>
              Sign Up
            </Link>
          </span>
          <LineSVG tw="absolute bottom-[-2px] md:right-[64px] right-0" />
        </p>
      </SignContentWrapper>
    </AuthSignPageWrapper>
  );
};

const AuthSignPageWrapper = styled.div`
  ${tw`relative flex min-h-screen overflow-hidden`}
  background: linear-gradient(104.32deg, #6246ea 0%, #392c83 100%);
  box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.1),
    0px 2px 4px -2px rgba(0, 0, 0, 0.05);
`;

const SignContentWrapper = styled(motion.div)`
  ${tw`bg-[#fafafe] border-[3px] fixed left-1/2 top-1/2 border-white/25 w-[340px] md:w-[528px] rounded-lg p-8 m-auto z-10`}
  box-shadow: 0px 1px 3px rgba(129, 126, 251, 0.13),
    0px 9px 21px -16px rgba(98, 70, 234, 0.07);
`;

const AuthWrapper = styled.section`
  ${tw`relative flex min-h-screen overflow-hidden bg-gradient-to-r from-brand-600 to-brand-800`}

  p {
    ${tw`text-base font-normal leading-loose`}
  }
`;

const AuthForm = styled(motion.div)`
  ${tw`w-1/2 px-[112px] pt-16 bg-white min-h-full z-50`}
  box-shadow: 0 0 30px 0 rgba(0, 0, 0, 25%);
`;

const BannerSection = styled(motion.div)`
  ${tw`flex flex-col items-center justify-center w-1/2 bg-transparent px-[112px] text-center min-h-full`}
  h1 {
    ${tw`text-white leading-[48px] text-5xl font-bold mb-10`}
  }

  p {
    ${tw`text-base font-medium leading-8 text-white`}
  }
`;

const AuthTitle = styled.h1`
  ${tw`text-4xl font-semibold leading-9 text-[#3C3754]`}
`;

const AuthLink = styled.a`
  ${tw`text-brand-600 text-sm leading-[21px] font-semibold cursor-pointer relative`}
`;

const AvatarWrapper = styled.div`
  ${tw`flex items-center justify-center rounded-full -ml-7 w-14 h-14 bg-brand`}
  &:first-child {
    ${tw`ml-0`}
  }

  img {
    ${tw`w-12 h-12 rounded-full`}
  }
`;

const FirstBubble = styled(motion.div)`
  opacity: 0.25;
  ${tw`bg-gradient-to-r from-brand to-brand-900 absolute -top-10 left-[100px] w-[400px] h-[400px] rounded-full`}
`;

const SecondBubble = styled(motion.div)`
  background: linear-gradient(
    90deg,
    #aeffff 0%,
    #aafff1 14.29%,
    #aefee0 28.57%,
    #b7fccd 42.86%,
    #c5f8b9 57.14%,
    #d7f3a7 71.43%,
    #ebec98 85.71%,
    #ffe48d 100%
  );
  opacity: 0.05;

  ${tw`absolute rounded-full top-[200px] w-[570px] h-[570px]`}
`;

const ThirdBubble = styled(motion.div)`
  ${tw`w-20 h-20 border border-[#F8F0E4]rounded-full absolute top-[260px]`}
`;

const FourthBubble = styled(motion.div)`
  background: linear-gradient(
    90deg,
    #aeffff 0%,
    #aafff1 14.29%,
    #aefee0 28.57%,
    #b7fccd 42.86%,
    #c5f8b9 57.14%,
    #d7f3a7 71.43%,
    #ebec98 85.71%,
    #ffe48d 100%
  );

  opacity: 0.25;

  ${tw`w-[570px] h-[570px] rounded-full top-[-250px] right-[-250px] absolute`}
`;

const Bubble5 = styled(motion.div)`
  position: absolute;
  left: 86.66%;
  right: -26.2%;
  top: 62.41%;
  bottom: -9.42%;

  background: linear-gradient(271.15deg, #7fdac0 0%, #17b5b5 100%);
  opacity: 0.15;

  ${tw`w-[570px] h-[570px] rounded-full absolute`}
`;

const Bubble6 = styled(motion.div)`
  position: absolute;
  left: 46.24%;
  right: 14.22%;
  top: 92.15%;
  bottom: -39.17%;

  opacity: 0.5;
  border: 1px solid #f8f0e4;
  ${tw`w-[570px] h-[570px] rounded-full absolute`}
`;

const Bubble7 = styled(motion.div)`
  position: absolute;
  left: 87.91%;
  right: -27.44%;
  top: 30.32%;
  bottom: 22.67%;

  opacity: 0.15;
  border: 1px solid #f8f0e4;
  ${tw`w-[570px] h-[570px] rounded-full absolute`}
`;

const CrossLines = styled.div`
  position: absolute;
  left: 96.47%;
  right: 0.46%;
  top: 56.96%;
  bottom: 39.39%;

  &::before {
    content: "";
    ${tw`absolute h-0.5 bg-gray-600 w-[50px] rotate-45`}
  }
  &::after {
    content: "";
    ${tw`absolute h-0.5 bg-gray-600 w-[50px] -rotate-45`}
  }
`;

const CrossLine2 = styled(CrossLines)`
  top: 52%;
  bottom: 44.35%;
`;

const CrossLine3 = styled(CrossLines)`
  top: 47.04%;
  bottom: 49.31%;
`;

export default AuthPage;
