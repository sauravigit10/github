import React, { useEffect, useState } from "react";
import "./Home.css";
import video1 from "../assets/video.mp4";
import video2 from "../assets/video2.mp4";
import video3 from "../assets/video3.mp4";
import video4 from "../assets/video4.mp4";
import video5 from "../assets/video5.mp4";

const projects = [
  {
    title: "Illustration",
    subtitle: "things i drew",
    video: video1,
    className: "project-one",
  }, 
  {
    title: "Cultural",
    subtitle: "things i grew up around",
    video: video2,
    className: "project-two",
  },
  {
    title: "Motion",
    subtitle: "things that refused to stay still",
    video: video3,
    className: "project-three",
  },
  {
    title: "Web",
    subtitle: "the occasional coding side quest",
    video: video4,
    className: "project-four",
  },
  {
    title: "Photography",
    subtitle: "things i noticed",
    video: video5,
    className: "project-five",
  },
];

function Mascot() {
  return (
    <div className="hanging-mascot">

      <div className="string">
        <span />
      </div>

      <div className="mascot-knot" />

      <div className="mascot">

        <div className="mascot-hair">
          <i />
          <i />
          <i />
        </div>

        <div className="mascot-face">
          <span className="eye left-eye" />
          <span className="eye right-eye" />
          <span className="mouth" />
        </div>

        <div className="mascot-body">
          <div className="arm left-arm" />
          <div className="arm right-arm" />
        </div>

        <div className="mascot-leg left-leg" />
        <div className="mascot-leg right-leg" />

      </div>

      <div className="mascot-tag">
        {/* <span>oh.</span> */}
        <b>hi.</b>
      </div>

    </div>
  );
}

function Home() {
  const [doorOpen, setDoorOpen] = useState(false);
  const [entered, setEntered] = useState(false);
  const [selected, setSelected] = useState(null);
  const [knocking, setKnocking] = useState(false);

  useEffect(() => {
    document.body.style.overflow = entered ? "auto" : "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [entered]);

  const knock = () => {
    if (doorOpen) return;

    setKnocking(true);

    setTimeout(() => {
      setKnocking(false);
      setDoorOpen(true);
    }, 900);

    setTimeout(() => {
      setEntered(true);
    }, 1900);
  };

  return (
    <main className={`portfolio ${entered ? "entered" : ""}`}>

      
      {!entered && (
        <section className="entrance">

          <div className="entrance-grid" />

          <header className="entrance-header">
            <div className="brand">
              sauravism<span>_</span>
            </div>

            <div className="tiny-status">
              <span />
              somewhere on the internet
            </div>

            <div className="tiny-year">
              2026
            </div>
          </header>

          <div className="entrance-copy">
            <p>you found a door.</p>

            <h1>
              COME
              <br />
              <span>IN.</span>
            </h1>

            <small>
              there's probably nothing important inside.
            </small>
          </div>

          {/* <div className="coordinates">
            27°42'N
            <br />
            85°19'E
          </div> */}

          {/* DOOR */}

          <button
            className={`door-wrapper ${doorOpen ? "door-is-open" : ""} ${
              knocking ? "is-knocking" : ""
            }`}
            onClick={knock}
          >

            <div className="door-shadow" />

            <div className="door-frame">

              <div className="door-interior">
                <div className="inside-light" />
                <span>WELCOME</span>
              </div>

              <div className="door">

                <div className="door-top-text">
                  PRIVATE
                </div>

                <div className="door-name">
                  SAURAVISM_
                </div>

                <div className="door-line" />

                <div className="door-small">
                  knock twice
                </div>

                <div className="door-number">
                  001
                </div>

                <div className="handle">
                  <span />
                </div>

                <div className="door-note">
                  ✦
                  <br />
                  come in
                </div>

              </div>

            </div>

            {!doorOpen && (
              <div className="knock-label">
                <span>click</span>
                <b>to knock</b>
              </div>
            )}

          </button>

          <div className="entrance-bottom">
            <span>an internet room</span>
            <span>made from little things</span>
          </div>

        </section>
      )}

      {/* =========================
          INSIDE
      ========================= */}

      {entered && (
        <section className="inside-world">

          <header className="inside-header">

            <div className="inside-logo">
              sauravism<span>_</span>
            </div>

            {/* <div className="inside-location">
              ROOM 001 / THE LITTLE WORLD
            </div> */}

            <button
              className="back-door"
              onClick={() => {
                setEntered(false);
                setDoorOpen(false);
              }}
            >
              ← outside
            </button>

          </header>

      

          <section className="studio">

            <div className="studio-background" />

            <div className="studio-title">
              <span>WELCOME TO</span>

              <h2>
                SAURAVI'S 
                <br />
                LITTLE
                <br />
                <i>WORLD.</i>
              </h2>

              <p>
                drawings, animations,
                <br />
                strange thoughts & other things.
              </p>
            </div>

          

            <Mascot />

              <div className="rope-shadow" />

         

            {/* <div className="studio-note note-left">
              <span>NOTE #01</span>
              <strong>
                please touch
                <br />
                the artwork.
              </strong>
            </div> */}

            {/* RIGHT NOTE */}

            <div className="studio-note note-right">
              <span>WARNING</span>
              <strong>
                nothing here
                <br />
                is in order.
              </strong>
            </div>

       

            <div className="studio-floor">

              <div className="floor-rug">
                <span>SAURAVISM</span>
              </div>

              <div className="floor-star">✦</div>

            </div>

          </section>

         

          <section className="works">

            <div className="works-heading">

              <div>
                {/* <span>02 / THINGS I MAKE</span> */}

                <h3>
                  wander
                  <br />
                  around.
                </h3>
              </div>

              <p>
                there isn't really
                <br />
                a correct order.
              </p>

            </div>

            <div className="works-space">

              {projects.map((project, index) => (
                <button
                  key={project.title}
                  className={`project ${project.className}`}
                  onClick={() => setSelected(project)}
                >

                  <div className="project-number">
                    0{index + 1}
                  </div>

                  <div className="project-card">

                    <video
                      src={project.video}
                      autoPlay
                      muted
                      loop
                      playsInline
                    />

                    <div className="project-overlay">
                      <span>{project.title}</span>
                      <b>↗</b>
                    </div>

                  </div>

                  {/* <div className="project-caption">
                    <strong>{project.title}</strong>
                    <span>{project.subtitle}</span>
                  </div> */}

                </button>
              ))}

            </div>

          </section>

          {/* =========================
              ABOUT
          ========================= */}

          <section className="about-world">

            <div className="about-drawing">
              <div className="about-circle">
                <span>HI</span>
              </div>

              <div className="about-line line-one" />
              <div className="about-line line-two" />
              <div className="about-line line-three" />
            </div>

            <div className="about-copy">

              <span>03 / ABOUT THE PERSON BEHIND THIS</span>

              <h3>
                oh.
                <br />
                it's
                <br />
                <i>me.</i>
              </h3>

              <p>
                I'm Sauravi — a digital artist who keeps
                accidentally turning random thoughts into
                drawings, animations and websites.
              </p>

              <p>
                This place is basically my brain,
                except slightly more organized.
              </p>

              <a href="#contact">
                say hi →
              </a>

            </div>

          </section>

          {/* =========================
              END
          ========================= */}

          <section className="end-world" id="contact">

            <div className="end-top">
              <span>END OF ROOM 001</span>
              <span>THANKS FOR KNOCKING</span>
            </div>

            <h3>
              okay.
              <br />
              that's
              <br />
              <i>enough.</i>
            </h3>

            <div className="end-character">
              <div className="end-face">
                <span />
                <span />
                <b>⌣</b>
              </div>

              <p>
                you can come back
                <br />
                whenever you want.
              </p>
            </div>

            <a
              className="email-link"
              href="mailto:your-email@example.com"
            >
              say hello →
            </a>

          </section>

        </section>
      )}

      {/* =========================
          MODAL
      ========================= */}

      {selected && (
        <div
          className="project-modal"
          onClick={() => setSelected(null)}
        >

          <div
            className="project-modal-content"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="modal-close"
              onClick={() => setSelected(null)}
            >
              close ×
            </button>

            <div className="modal-media">
              <video
                src={selected.video}
                autoPlay
                muted
                loop
                controls
                playsInline
              />
            </div>

            <div className="modal-text">
              <span>{selected.title}</span>

              <h4>{selected.subtitle}</h4>

              <p>
                one of the little things
                living inside this room.
              </p>
            </div>

          </div>

        </div>
      )}

    </main>
  );
}

export default Home;