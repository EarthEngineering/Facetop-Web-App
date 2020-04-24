import * as React from "react";
import { ExternalUrl } from "../external_urls";

export const LaptopSplash = ({ className }: { className: string }) =>
  <div className={className}>
    <div className="perspective-container">
      <div className="laptop">
        <div className="laptop-screen">
          <img src="http://www.facetop.earth/assets/facetop-tech-stack.png" alt="facetop stack" />
        </div>
        <div className="laptop-keyboard">
          <div className="laptop-keys">
          </div>
          <div className="laptop-trackpad">
          </div>
        </div>
      </div>
    </div>
  </div>;
