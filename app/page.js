import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <div style={{
          display: 'flex',
          alignItems: 'end',
        }}>
          <Image
            src="/profile.jpg"
            width={100}
            height={100}
            alt="Picture of myself"
          />
          <div style={{ paddingLeft: 10 }}>
            <h1>Jack G</h1>
            <h3>software engineer</h3>
          </div>
        </div>
        <div style={{ marginTop: '1rem' }}>
          <h2>about me</h2>
          <ul>
            <li>
              <b>working @</b>
              <ul style={{ marginLeft: 10 }}>
                <li>
                  <a href="https://www.ridgelineapps.com/">Ridgeline</a>
                </li>
              </ul>
            </li>
            <li>
              <b>previously built</b>
              <ul style={{ marginLeft: 10 }}>
                <li>
                  <a href="https://brandwise.ai/">Brandwise</a>
                </li>
                <li>
                  <a href="https://www.behance.net/gallery/112751903/Nexus-Web-Site-Mobile-App">Nexus</a>
                </li>
              </ul>
            </li>
            <li>
              <b>previously worked @</b>
              <ul style={{ marginLeft: 10 }}>
                <li>
                  <a href="https://tryascend.com/">Ascend Finance</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div style={{ marginTop: '1rem' }}>
          <h2>find me</h2>
          <ul>
            <li>
              <a href="https://blog.jackgisel.com">blog</a>
            </li>
            <li>
              <a href="mailto:j@ckgisel.com">j@ckgisel.com</a>
            </li>
            <li>
              <a href="https://x.com/jackgisel">X</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/jackgisel/">linkedin</a>
            </li>
          </ul>
        </div>
      </div>
    </main >
  );
}
