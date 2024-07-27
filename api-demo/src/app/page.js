import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
export default function Home() {
  return (
    <div className={styles.main}>
     <Link href="/addproduct" className="text-3xl underline">Add Products</Link>
     <Link href="/products" className="text-3xl underline">Products</Link>
     <Link href="/uploadimage" className="text-3xl underline">Upload Image</Link>
    </div>
  );
}
