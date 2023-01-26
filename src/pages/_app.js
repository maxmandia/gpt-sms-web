import "@/styles/globals.css";
import Layout from "@/components/Layout";
import localFont from "@next/font/local";
const SF_Rounded = localFont({
  src: [
    {
      path: "../assets/fonts/SF-Pro-Rounded-Bold.otf",
      weight: "700",
    },
    {
      path: "../assets/fonts/SF-Pro-Rounded-Medium.otf",
      weight: "500",
    },
    {
      path: "../assets/fonts/SF-Pro-Rounded-Regular.otf",
      weight: "400",
    },
    {
      path: "../assets/fonts/SF-Pro-Rounded-Semibold.otf",
      weight: "600",
    },
  ],
});
export default function App({ Component, pageProps }) {
  return (
    <main className={SF_Rounded.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}
