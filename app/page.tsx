import Collection from "@/components/Collection";
import Cta from "@/components/Cta";
import Hero from "@/components/Hero";
import Idea from "@/components/Idea";
import Placement from "@/components/Placement";
import Pricing from "@/components/Pricing";
import Process from "@/components/Process";
import Steps from "@/components/Steps";
import Value from "@/components/Value";
import Variants from "@/components/Variants";
import styles from "./page.module.css";

export default function Page() {
  return (
    <main className={styles.wrap}>
      <Hero />
      <Collection />
      <Idea />
      <Placement />
      <Variants />
      <Value />
      <Steps />
      <Pricing />
      <Process />
      <Cta />
    </main>
  );
}
