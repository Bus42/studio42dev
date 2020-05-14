import React from "react";

const About = () => {
  return (
    <main>
      <div>
        <h1 className="center-align">Hi, I'm Greg</h1>
        <div className="container">
          <p>
            I started learning JavaScript in 2016, without any frameworks or
            libraries, so I know exactly what is happening "under the hood" when
            I write code with a framework or library. Since then I have focused
            my learning into using React to build single-page applications in
            JavaScript and using Firebase to deploy my apps and handle hosting,
            authentication, cloud functions, analytics, realtime database
            functions, and more.
          </p>
          <p>
            Many of the sites built with site builders are slow, heavy, and
            loaded with errors that slow loading time and lose customers. I
            wanted to provide that same quality of aesthetics in custom-built
            applications designed for better accessibility and speed. Faster
            load times mean higher retention and more conversions of visitors to
            customers.
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexFlow: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            className="fb-page"
            data-tabs="timeline"
            data-href="https://www.facebook.com/pg/studio42dev/"
            data-width="380"
          ></div>
        </div>
      </div>
    </main>
  );
};

export default About;
