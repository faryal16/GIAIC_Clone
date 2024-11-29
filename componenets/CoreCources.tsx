import Image from "next/image";
import Link from "next/link";
import "@/styles/CoreCources.css";

export default function CoreCourses() {
  return (
    <div className="core-container">
      <h1 className="core-heading">Core Courses Sequence</h1>
      <div className="core-grid">
        <Link href="/images/12.png" className="core-card hover-effect">
          <div className="core-card-content">
            <Image
              alt="programming fundamentals"
              src="/images/12.png"
              width={450}
              height={300}
              className="core-image"
            />
            <div className="core-card-title">
              <p>Programming Fundamentals</p>
            </div>
          </div>
        </Link>
        <Link href="/compulsory/2" className="core-card hover-effect">
          <div className="core-card-content">
            <Image
              alt="nextjs"
              src="/images/13.png"
              width={450}
              height={300}
              className="core-image"
            />
            <div className="core-card-title">
              <p>Web2 Using NextJS</p>
            </div>
          </div>
        </Link>
        <Link href="/compulsory/3" className="core-card hover-effect">
          <div className="core-card-content">
            <Image
              alt="earn as you learn"
              src="/images/14.png"
              width={450}
              height={300}
              className="core-image"
            />
            <div className="core-card-title">
              <p>Earn as You Learn</p>
            </div>
          </div>
        </Link>
      </div>

{/* Advances Courses */}
      <div className="core-container">
      <h1 className="core-heading">Advanced Courses</h1>
      <div className="core-grid">
        <Link href="/images/15.png" className="core-card hover-effect">
          <div className="core-card-content">
            <Image
              alt="Artifical Intelligence"
              src="/images/15.png"
              width={450}
              height={300}
              className="core-image"
            />
            <div className="core-card-title">
              <p>Artifical Intelligence</p>
            </div>
          </div>
        </Link>
        <Link href="/compulsory/2" className="core-card hover-effect">
          <div className="core-card-content">
            <Image
              alt="Web 3 and Metaverse"
              src="/images/16.png"
              width={450}
              height={300}
              className="core-image"
            />
            <div className="core-card-title">
              <p>Web 3 and Metaverse</p>
            </div>
          </div>
        </Link>
        <Link href="/compulsory/3" className="core-card hover-effect">
          <div className="core-card-content">
            <Image
              alt="Cloud-Native Computing"
              src="/images/17.png"
              width={450}
              height={300}
              className="core-image"
            />
            <div className="core-card-title">
              <p>Cloud-Native Computing</p>
            </div>
          </div>
        </Link>
        <Link href="/compulsory/3" className="core-card hover-effect">
          <div className="core-card-content">
            <Image
              alt="Ambient Computing and IoT"
              src="/images/18.png"
              width={450}
              height={300}
              className="core-image"
            />
            <div className="core-card-title">
              <p>Ambient Computing and IoT</p>
            </div>
          </div>
        </Link>
        <Link href="/compulsory/3" className="core-card hover-effect">
          <div className="core-card-content">
            <Image
              alt="Genomics and Bioinformatics"
              src="/images/19.png"
              width={450}
              height={300}
              className="core-image"
            />
            <div className="core-card-title">
              <p>Genomics and Bioinformatics</p>
            </div>
          </div>
        </Link>
        <Link href="/compulsory/3" className="core-card hover-effect">
          <div className="core-card-content">
            <Image
              alt="Network Programmability and Automation"
              src="/images/20.png"
              width={450}
              height={300}
              className="core-image"
            />
            <div className="core-card-title">
              <p>Network Programmability and Automation</p>
            </div>
          </div>
        </Link>
        
      </div>
    </div>
    </div>
  );
}
