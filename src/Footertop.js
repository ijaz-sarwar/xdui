import React from "react";
import "./Footertop.css";

function Footertop() {
  return (
    <div className="footertop">
      <div className="footerpading">
        <p className="about">ABOUT XDGURU.COM</p>
        <p className="about_p">
          XDGuru is the best place to find free and premium UI resources for
          Adobe XD: UI kits, website templates, icon sets, wireframing kits,
          device mockups, .. and a wide range of XD freebies in general. We
          publish tutorials, guides and design related articles which will
          hopefully help you become a better UI/UX designer. We want to help the
          XD community grow by giving visibility to designers using this amazing
          (although not yet perfect) tool, which are willing to share their
          design work.
        </p>

        <hr className="line_break" />

        <div className="about_p">
          <p>
            Are you using any other design tools outside of XD? Check out
            XDGuru's little siblings: StudioAmigos.com and FigmaCrush.com
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footertop;
