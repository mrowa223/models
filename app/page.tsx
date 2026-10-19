import Cta from "@/components/Cta";
import Hero from "@/components/Hero";
import Idea from "@/components/Idea";
import Placement from "@/components/Placement";
import Pricing from "@/components/Pricing";
import Steps from "@/components/Steps";
import Variants from "@/components/Variants";
import styles from "./page.module.css";

export default function Page() {
  return (
    <main className={styles.wrap}>
      <Hero />
      <Idea />
      <Placement />
      <Variants />
      <Steps />
      <Pricing />
      <Cta />
    </main>
  );
}
