import Header from "../components/Header";
import Footer from "../components/Footer";
import MobileNavigation from "../components/MobileNavigation";
import BlurWrapper from "../components/BlurWrapper";
import BlobAnimatedBackground from "../components/BlobAnimatedBackground";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <>
      <BlurWrapper>
        <div
          className="bg-contact-content"
          style={{
            backgroundImage: "url(../assets/images/burgas.png)",
            backgroundSize: "cover",
          }}
        >
          <Header />
          <div className="relative isolate px-6 pt-14 lg:px-8">
            <BlobAnimatedBackground />
            <div className="container mx-auto px-4">
              <div className="flex flex-col lg:flex-row py-20 sm:py-28 lg:py-36">
                <div className="lg:w-2/5 md:px-4 px-0">
                  <h1 className="text-4xl pb-4 md:pb-0 relative font-black tracking-tight text-white sm:text-6xl z-10">
                    Don`t be shy come say hi 👋
                  </h1>
                  <p className="md:mt-12  mt-4 md:text-2xl text-lg">
                    If you think I`m the wizard you`ve been searching for to
                    bring your project to life, then send me a message ✉️ with a
                    cheerful &quot;hello&quot; and let`s make some digital magic
                    together!
                  </p>
                  <p className="md:mt-12 mt-4">
                    📌 <span className="opacity-60">Burgas, Bulgaria</span>
                  </p>
                </div>
                <div className="lg:w-3/5 md:px-24 lg:mt-0 mt-20 px-0">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </BlurWrapper>
      <MobileNavigation />
    </>
  );
}
