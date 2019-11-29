import React from "react";
import texts from "../../constants/texts";
import Icon from "../icon";
import printIcon from "../../icons/printer.svg";
import PolicySection from "../../constants/PolicySections";

const Main = () => {
  return (
      <section className={'header'}>
        <h1 id={'heading'}>Rabbii TS Privacy Policy</h1>
        <div id={'actionable'}>
          <div id={'last-update'}>Last Updated:&nbsp;{texts.lastUpdate}</div>
          <div id={'print-link'}><Icon src={printIcon} width={2.5} height={2.5}/>&nbsp;Print</div>
        </div>
        <div id={'preamble'}>
          {PolicySection.preamble}
        </div>
        <div id={'lead'}>
          (tap section to expand and view content)
        </div>
        <section id={'desktop'}>

        </section>
        <section id={'mobile'}>

        </section>
      </section>
  );
};

export default Main;
