import Collection from "@/components/Collection";
import Cta from "@/components/Cta";
import Hero from "@/components/Hero";
import Placement from "@/components/Placement";
import Pricing from "@/components/Pricing";
import Process from "@/components/Process";
import Value from "@/components/Value";
import Variants from "@/components/Variants";
import WhatsAppButton from "@/components/WhatsAppButton";
import styles from "./page.module.css";

export default function Page() {
  return (
    <main className={styles.wrap}>
      <Hero />
      <WhatsAppButton sticky />
      <Value />
      <Collection />
      <Placement />
      <Variants />
      <Pricing />
      <Process />
      <Cta />
    </main>
  );
}
