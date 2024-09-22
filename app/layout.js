import Header from "../components/header"
import "./globals.css";
export const metadata = {
  title: "GenAI Hackathon",
  description:
    "Google GEN AI Exchange Hackathon IITM BS Team G Project on Challenge 9",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <Header/>
        {children}</body>
    </html>
  );
}
