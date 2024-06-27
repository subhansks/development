import React from "react";

const CompleteDetail = () => {
  return (
    <div className="bg-dealguru-white shadow-md shadow-gray-200  rounded-lg p-4 flex flex-col gap-5">
      <h3 className="text-lg font-bold">Gäller för upp till 5 personer! </h3>
      <div className="flex gap-2 flex-col">
        <h4 className="text-lg font-bold">
          Upptäck LEGOLAND Billund – en magisk värld för barnfamiljer
        </h4>
        <p className="text-sm">
          Drömmer du om en familjeutflykt fylld med äventyr och fantasi?
          LEGOLAND Billund i Danmark är den ultimata destinationen för
          barnfamiljer denna sommar. Med dess breda utbud av åkattraktioner,
          interaktiva byggestationer och förtrollande temazoner erbjuder
          LEGOLAND en unik upplevelse som väcker kreativitet och spänning hos
          både vuxna och barn. Från den legendariska Drakbergrutschbanan till
          den spännande LEGO Ninjago World, finns det äventyr bakom varje hörn.
        </p>
      </div>
      <div className="flex gap-2 flex-col">
        <h4 className="text-lg font-bold">
          50% rabatt på familjebiljetter till LEGOLAND
        </h4>
        <p className="text-sm">
          Just nu finns ett erbjudande där du får 50% rabatt på
          familjebiljetter! Ange rabattkoden 110317 när du bokar biljetterna
          online och upplev LEGOLAND Billund till hälften av priset för upp till
          fem personer. Detta är en perfekt chans att ge hela familjen en
          oförglömlig dag till ett oslagbart pris.
          <br />
          Detta erbjudande finns på fysiska brödförpackningar från Kohberg i
          Danmark.
        </p>
      </div>
      <div className="flex gap-2 flex-col">
        <h4 className="text-lg font-bold">Så får du rabatten</h4>
        <p className="text-sm">
          För att ta del av detta grymma erbjudande, besök bokningssidan hos
          LEGOLAND och ange rabattkoden 110317. Biljetterna ger tillgång till
          alla parkens attraktioner förutom Trafikskolan. Barn under 2 år går in
          gratis, vilket gör besöket ännu mer prisvärt för familjer.
        </p>
      </div>
    </div>
  );
};

export default CompleteDetail;
