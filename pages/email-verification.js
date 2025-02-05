import { useEffect } from "react";
import { useRouter } from "next/router";
import Fade from "react-reveal/Fade";
import { useAuth } from "../components/AuthContext";
import { LoadingPage } from "../components/loading-page";

export default function EmailVerificationRes() {
  const router = useRouter();

  const { verifyEmail } = useAuth();

  useEffect(() => {
    if (router.query.uid && router.query.verifyToken) {
      verifyEmail.execute(router.query.uid, router.query.verifyToken);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.query.uid, router.query.verifyToken]);

  return (
    <>
      {verifyEmail.status === "loading" && (
        <Fade top>
          <p className="font-body font-semibold md:text-20px text-[18px]  text-white text-center bg-[#4CB050] mx-auto mb-3 w-screen">
            Verifying your email...
          </p>
        </Fade>
      )}
      {verifyEmail.status === "success" && (
        <Fade top>
          <p className="font-body font-semibold md:text-20px text-[18px]  text-white text-center bg-[#4CB050] mx-auto mb-3 w-screen">
            Email verified! Redirecting to app...
          </p>
        </Fade>
      )}
      {verifyEmail.status === "error" && (
        <Fade top>
          <p className="font-body font-semibold md:text-20px text-[18px]  text-white text-center bg-[#D0342C] mx-auto mb-3 w-screen">
            {verifyEmail.error?.response.data.message}
          </p>
        </Fade>
      )}
      <LoadingPage />
    </>
  );
}
