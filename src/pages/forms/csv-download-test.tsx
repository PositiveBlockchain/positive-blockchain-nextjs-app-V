import GoogleFormIframe from "../../components/GoogleFormIframe";
import Footer from "@/templates/partials/Footer";
import Header from "@/templates/partials/Header";
import { useRouter } from "next/router";

export default function TestCSVDownloadPage() {
  // const router = useRouter();

  return (
    <div
      className="flex flex-col h-full"
      style={{
        height: "100vh",
      }}
    >
      <Header />
      <div className="h-full">
        <GoogleFormIframe
          iframeSrc="https://docs.google.com/forms/d/e/1FAIpQLSfvtpox9rUMEaodUGVzBYUxu--un-1JF_HuH-mVnC8PkLhIzQ/viewform?embedded=true"
          onSubmit={() => {
            // setTimeout(() => {
            // router.push("/download-csv");
            // }, 1000);
          }}
        />
      </div>
      <Footer />
    </div>
  );
}