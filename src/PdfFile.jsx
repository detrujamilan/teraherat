import React, { useEffect, useState } from "react";
import logo from "./assets/orginal_red.png";
const h = 914;
const w = 1920;
const getRelativeSize = (basePixle) => {
  return (window.innerHeight * basePixle) / h;
};
const PdfFile = () => {
  const headerHeading = getRelativeSize(24);
  const logoWidth = getRelativeSize(140);
  const subTitle = getRelativeSize(13);
  const tabelFontSize = getRelativeSize(11);
  const footerFontSize = getRelativeSize(12);
  const reportMArgin = getRelativeSize(4);
  const reportFontSize = getRelativeSize(14);
  const rowWidth = getRelativeSize(75);
  const tabelHeight = getRelativeSize(90);
  const identificationHeight = getRelativeSize(40);
  const identificationWidth = getRelativeSize(150);
  const InspectedPadding = getRelativeSize(75);
  const InspectedHeight = getRelativeSize(2);
  const thPadding = getRelativeSize(4);
  const thHeight = getRelativeSize(40);
  const thMaxWidth = getRelativeSize(150);
  const divPadding = getRelativeSize(1);

  return (
    <>
      <div className="px-4">
        <div className="flex justify-between items-center">
          <div>
            <img src={logo} style={{ width: logoWidth }} />
          </div>
          <div className="px-3 text-right">
            <h3
              className="text-[#F93C44] font-geo_bold font-medium "
              style={{ fontSize: headerHeading }}
            >
              TERAHERTZ ENGINEERING SERVICES PVT. LTD.
            </h3>
            <div style={{ fontSize: subTitle }}>
              <strong className="font-geo ">
                (Formerly Known As Terahertz Engineering Services)
              </strong>
              <div>
                <strong className="font-geo">Regd. Office :</strong>
                4021, Silver Business Point
              </div>
              <div className="font-geo">
                Utran-Kosad Road, Nr. BRTS bus stand
              </div>
              <div className="font-geo">Utran, Surat Gujarat-394105</div>
              <div className="font-geo">
                Contact No: (+91) 99133 73882 || (+91) 9586 908080
              </div>
              <div className="font-geo">
                Email: contact@terahertzengg.com || www.terahertzengg.com
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-1">
        <div className="border border-[#ff0000] w-[100%]" />
      </div>
      <h4
        className=" font-calibriBold  text-center"
        style={{ margin: reportMArgin, fontSize: reportFontSize }}
      >
        RADIOGRAPHIC EXAMINATION REPORT
      </h4>
      <div className="px-4">
        <div className="ftabel">
          <table className="w-[100%]">
            <tbody className="border-t-2 border-l-2 border-r-2 border-[#808080]">
              <tr>
                <td colSpan={2} style={{ padding: thPadding }}>
                  <div style={{ fontSize: tabelFontSize }}>
                    <strong>Report No:</strong>
                    <div style={{ display: "inline" }}>
                      <span>&nbsp;TES/23-24/RT/3170A</span>
                    </div>
                  </div>
                </td>
                <td colSpan={2} style={{ padding: thPadding }}>
                  <div style={{ fontSize: tabelFontSize }}>
                    <strong>Date of Report:</strong>
                    <div style={{ display: "inline" }}>
                      <span>&nbsp;04-11-2023</span>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td colSpan={2} style={{ padding: thPadding }}>
                  <div style={{ fontSize: tabelFontSize }}>
                    <strong>Client:</strong>
                    <div style={{ display: "inline" }}>
                      <span>&nbsp;L&amp;T ( IOCL, Dumad)</span>
                    </div>
                  </div>
                </td>
                <td colSpan={2} style={{ padding: thPadding }}>
                  <div style={{ fontSize: tabelFontSize }}>
                    <strong>TPI:</strong>
                    <div style={{ display: "inline" }}>
                      <span>&nbsp;</span>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td colSpan={2} style={{ padding: thPadding }}>
                  <div style={{ fontSize: tabelFontSize }}>
                    <strong>Job/Project No.:</strong>
                    <div style={{ display: "inline" }}>
                      <span>&nbsp;S010498</span>
                    </div>
                  </div>
                </td>
                <td colSpan={2} style={{ padding: thPadding }}>
                  <div style={{ fontSize: tabelFontSize }}>
                    <strong>Date of Inspection:</strong>
                    <div style={{ display: "inline" }}>
                      <span>&nbsp;03-11-2023</span>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td colSpan={2} style={{ padding: thPadding }}>
                  <div style={{ fontSize: tabelFontSize }}>
                    <strong>Seam Part No.:</strong>
                    <div style={{ display: "inline" }}>
                      <span>&nbsp;-</span>
                    </div>
                  </div>
                </td>
                <td colSpan={2} style={{ padding: thPadding }}>
                  <div style={{ fontSize: tabelFontSize }}>
                    <strong>Procedure:</strong>
                    <div style={{ display: "inline" }}>
                      <span>&nbsp;LTFE-FPOH-21005-RT-PIPING</span>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td colSpan={2} style={{ padding: thPadding }}>
                  <div style={{ fontSize: tabelFontSize }}>
                    <strong>Exposure Device:</strong>
                    <div style={{ display: "inline" }}>
                      <span>&nbsp;Gamma ray</span>
                    </div>
                  </div>
                </td>
                <td colSpan={2} style={{ padding: thPadding }}>
                  <div style={{ fontSize: tabelFontSize }}>
                    <strong>Inspected Material:</strong>
                    <div style={{ display: "inline" }}>
                      <span>&nbsp;CS</span>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td style={{ padding: thPadding }}>
                  <div style={{ fontSize: tabelFontSize }}>
                    <strong>Sr. No.:</strong>
                    <div style={{ display: "inline" }}>
                      <span>&nbsp;2674</span>
                    </div>
                  </div>
                </td>
                <td style={{ padding: thPadding }}>
                  <div style={{ fontSize: tabelFontSize }}>
                    <strong>Source Type:</strong>
                    <div style={{ display: "inline" }}>
                      <span>&nbsp;Ir-192</span>
                    </div>
                  </div>
                </td>
                <td style={{ padding: thPadding }}>
                  <div style={{ fontSize: tabelFontSize }}>
                    <strong>Radioactivity:</strong>
                    <div style={{ display: "inline" }}>
                      <span>&nbsp;11 Ci</span>
                    </div>
                  </div>
                </td>
                <td style={{ padding: thPadding }}>
                  <div style={{ fontSize: tabelFontSize }}>
                    <strong>Source Size:</strong>
                    <div style={{ display: "inline" }}>
                      <span>&nbsp;2.01 mm X 1.02 mm</span>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td colSpan={2} style={{ padding: thPadding }}>
                  <div style={{ fontSize: tabelFontSize }}>
                    <strong>IQI Placement:</strong>
                    <div style={{ display: "inline" }}>
                      <span>&nbsp;Source Side</span>
                    </div>
                  </div>
                </td>
                <td colSpan={2} style={{ padding: thPadding }}>
                  <div style={{ fontSize: tabelFontSize }}>
                    <strong>IQI Type:</strong>
                    <div style={{ display: "inline" }}>
                      <span>&nbsp;ASTM 1A06</span>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td style={{ padding: thPadding }}>
                  <div style={{ fontSize: tabelFontSize }}>
                    <strong>Film Make:</strong>
                    <div style={{ display: "inline" }}>
                      <span>&nbsp;Agfa</span>
                    </div>
                  </div>
                </td>
                <td style={{ padding: thPadding }}>
                  <div style={{ fontSize: tabelFontSize }}>
                    <strong>Film Type:</strong>
                    <div style={{ display: "inline" }}>
                      <span>&nbsp;D2</span>
                    </div>
                  </div>
                </td>
                <td style={{ padding: thPadding }}>
                  <div style={{ fontSize: tabelFontSize }}>
                    <strong>Film Density:</strong>
                    <div style={{ display: "inline" }}>
                      <span>&nbsp;2-4</span>
                    </div>
                  </div>
                </td>
                <td style={{ padding: thPadding }}>
                  <div style={{ fontSize: tabelFontSize }}>
                    <strong>Sensitivity:</strong>
                    <div style={{ display: "inline" }}>
                      <span>&nbsp;2% OF T</span>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td colSpan={2} style={{ padding: thPadding }}>
                  <div style={{ fontSize: tabelFontSize }}>
                    <strong>RT Technique:</strong>
                    <div style={{ display: "inline" }}>
                      <span>
                        &nbsp;Double Wall Single Image (DWSI), Double Wall
                        Double Image (DWDI)
                      </span>
                    </div>
                  </div>
                </td>
                <td colSpan={2} style={{ padding: thPadding }}>
                  <div style={{ fontSize: tabelFontSize }}>
                    <strong>Accept Criteria:</strong>
                    <div style={{ display: "inline" }}>
                      <span>&nbsp;ASME SECTION VIII DIV-1 EDITION 2021</span>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td style={{ padding: thPadding }}>
                  <div style={{ fontSize: tabelFontSize }}>
                    <strong>SOD:</strong>
                    <div style={{ display: "inline" }}>
                      <span>&nbsp;16" / 16"</span>
                    </div>
                  </div>
                </td>
                <td style={{ padding: thPadding }}>
                  <div style={{ fontSize: tabelFontSize }}>
                    <strong>OFD:</strong>
                    <div style={{ display: "inline" }}>
                      <span>&nbsp;5.56 mm / 5.08 mm</span>
                    </div>
                  </div>
                </td>
                <td style={{ padding: thPadding }}>
                  <div style={{ fontSize: tabelFontSize }}>
                    <strong>Exposure Time:</strong>
                    <div style={{ display: "inline" }}>
                      <span>&nbsp;13:53 / 13:10 Min</span>
                    </div>
                  </div>
                </td>
                <td style={{ padding: thPadding }}>
                  <div style={{ fontSize: tabelFontSize }}>
                    <strong>Development Time:</strong>
                    <div style={{ display: "inline" }}>
                      <span>&nbsp;05 Minute @ 20° C</span>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <table className="w-[100%] border-l-2  border-[#808080] border-r-2 border-b-0    spot-table">
          <thead style={{ fontSize: tabelFontSize }}>
            <tr className="p-20">
              <th style={{ padding: thPadding }}>Sr. No.</th>
              <th style={{ padding: thPadding }}>Identification No.</th>
              <th style={{ padding: thPadding }}>Dia.</th>
              <th style={{ padding: thPadding }}>
                Joint <br /> No.
              </th>
              <th style={{ padding: thPadding }}>
                Thick.
                <br />
                (mm)
              </th>
              <th style={{ padding: thPadding }}>Film Size</th>
              <th style={{ padding: thPadding }}>Spot</th>
              <th style={{ padding: thPadding }}>Observation</th>
              <th style={{ padding: thPadding }}>Result</th>
              <th style={{ padding: thPadding }}>
                Welder
                <br /> No.
              </th>
            </tr>
          </thead>
          <tbody className="text-center" style={{ fontSize: tabelFontSize }}>
            <tr>
              <td>1</td>
              <td
                rowSpan={3}
                style={{
                  height: identificationHeight,
                  maxWidth: identificationWidth,
                }}
              >
                3/4-LN-100-0552-A3G1A-N XR-411
              </td>
              <td>0.75"</td>
              <td>MJ-77L</td>
              <td>5.56</td>
              <td>5" X 4"</td>
              <td>1</td>
              <td>NSD</td>
              <td>Accept</td>
              <td>MR627</td>
            </tr>
            <tr>
              <td>2</td>

              <td>0.75"</td>
              <td>MJ-77L</td>
              <td>5.56</td>
              <td>5" X 4"</td>
              <td>2</td>
              <td>NSD</td>
              <td>Accept</td>
              <td>MR627</td>
            </tr>
            <tr>
              <td>3</td>

              <td>0.75"</td>
              <td>MJ-77L</td>
              <td>5.56</td>
              <td>5" X 4"</td>
              <td>3</td>
              <td>POR</td>
              <td>Repair</td>
              <td>MR627</td>
            </tr>
            <tr>
              <td>4</td>
              <td
                rowSpan={3}
                style={{ height: thHeight, maxWidth: thMaxWidth }}
              >
                3/4-LN-100-0554-A3G1A-N XR-412
              </td>
              <td>0.75"</td>
              <td>MJ-48D</td>
              <td>5.56</td>
              <td>5" X 4"</td>
              <td>1</td>
              <td>NSD</td>
              <td>Accept</td>
              <td>MR627</td>
            </tr>
            <tr>
              <td>5</td>

              <td>0.75"</td>
              <td>MJ-48D</td>
              <td>5.56</td>
              <td>5" X 4"</td>
              <td>2</td>
              <td>NSD</td>
              <td>Accept</td>
              <td>MR627</td>
            </tr>
            <tr>
              <td>6</td>

              <td>0.75"</td>
              <td>MJ-48D</td>
              <td>5.56</td>
              <td>5" X 4"</td>
              <td>3</td>
              <td>NSD</td>
              <td>Accept</td>
              <td>MR627</td>
            </tr>
            <tr>
              <td>7</td>
              <td
                rowSpan={3}
                style={{ height: thHeight, maxWidth: thMaxWidth }}
              >
                3/4-LN-100-0558-A3G1A-N XR-413
              </td>
              <td>0.75"</td>
              <td>FW-69A</td>
              <td>5.56</td>
              <td>5" X 4"</td>
              <td>1</td>
              <td>NSD</td>
              <td>Accept</td>
              <td>MR627</td>
            </tr>
            <tr>
              <td>8</td>

              <td>0.75"</td>
              <td>FW-69A</td>
              <td>5.56</td>
              <td>5" X 4"</td>
              <td>2</td>
              <td>NSD</td>
              <td>Accept</td>
              <td>MR627</td>
            </tr>
            <tr>
              <td>9</td>

              <td>0.75"</td>
              <td>FW-69A</td>
              <td>5.56</td>
              <td>5" X 4"</td>
              <td>3</td>
              <td>NSD</td>
              <td>Accept</td>
              <td>MR627</td>
            </tr>
            <tr>
              <td>10</td>
              <td
                rowspan="2"
                style={{ height: thHeight, maxWidth: thMaxWidth }}
                id="8"
              >
                1-1/2-CWS-100-0552-A3G1A-N XR-414
              </td>
              <td>1.50"</td>
              <td>MJ-31</td>
              <td>5.56</td>
              <td>5" X 4"</td>
              <td>1</td>
              <td>NSD</td>
              <td>Accept</td>
              <td>MR627</td>
            </tr>
            <tr>
              <td>11</td>

              <td>1.50"</td>
              <td>MJ-31</td>
              <td>5.56</td>
              <td>5" X 4"</td>
              <td>2</td>
              <td>POR</td>
              <td>Accept</td>
              <td>MR627</td>
            </tr>
            <tr>
              <td>12</td>
              <td
                rowSpan={3}
                className="border-b-0"
                style={{ height: thHeight, maxWidth: thMaxWidth }}
              >
                3/4-LN-100-0571-A3G1A-N XR-415
              </td>
              <td>0.75"</td>
              <td>MJ-40C</td>
              <td>5.56</td>
              <td>5" X 4"</td>
              <td>1</td>
              <td>NSD</td>
              <td>Accept</td>
              <td>MR627</td>
            </tr>
            <tr>
              <td>13</td>

              <td>0.75"</td>
              <td>MJ-40C</td>
              <td>5.56</td>
              <td>5" X 4"</td>
              <td>2</td>
              <td>NSD</td>
              <td>Accept</td>
              <td>MR627</td>
            </tr>
            <tr>
              <td className="border-b-0">14</td>

              <td className="border-b-0">0.75"</td>
              <td className="border-b-0">MJ-40C</td>
              <td className="border-b-0">5.56</td>
              <td className="border-b-0">5" X 4"</td>
              <td className="border-b-0">3</td>
              <td className="border-b-0">NSD</td>
              <td className="border-b-0">Accept</td>
              <td className="border-b-0">MR627</td>
            </tr>
          </tbody>
        </table>
        <table
          style={{ height: tabelHeight }}
          className="w-[100%] border-l-2 border-[#808080] border-t-0 border-r-2 border-b-0 ttable"
        >
          <tbody>
            <tr>
              <td></td>
            </tr>
          </tbody>
        </table>
        <table className=" border-r-2 border-l-2 border-[#808080]  w-[100%]">
          <tbody style={{ fontSize: tabelFontSize }}>
            <tr>
              <td colSpan={7}>
                <div>
                  <strong>Remarks:</strong>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <span>BT</span>:&nbsp;Burn Through
              </td>
              <td>
                <span>CUC</span>:&nbsp;Cap Undercut
              </td>
              <td>
                <span>CHS</span>:&nbsp;Check Shot
              </td>
              <td>
                <span>CS</span>:&nbsp;Check Surface
              </td>
              <td style={{ width: rowWidth }} rowSpan={6}></td>
              <td className="text-center">Film Size</td>
              <td className="text-center">Qty</td>
            </tr>
            <tr>
              <td>
                <span>CM</span>
                :&nbsp;Chemical Mark
              </td>
              <td>
                <span>C.POR</span>
                :&nbsp;Cluster Porosity
              </td>
              <td>
                <span>Crack</span>
                :&nbsp;Crack
              </td>
              <td>
                <span>DB</span>:&nbsp;Debries
              </td>
              <td className=" text-center">5" X 4"</td>
              <td className=" text-center">14</td>
            </tr>
            <tr>
              <td>
                <span>EP</span>
                :&nbsp;Excessive Penetration
              </td>
              <td>
                <span>FM</span>:&nbsp;Film Mark
              </td>
              <td>
                <span>LF</span>:&nbsp;Lack of Fusion
              </td>
              <td>
                <span>LP</span>:&nbsp;Lack of Penetration
              </td>
              <td className=" text-center"></td>
              <td className=" text-center"></td>
            </tr>
            <tr>
              <td>
                <span>MM</span>
                :&nbsp;Misalignment
              </td>
              <td>
                <span>NSD</span>:&nbsp;No Significant Defect
              </td>
              <td>
                <span>POR</span>
                :&nbsp;Porosity
              </td>
              <td>
                <span>RS</span>:&nbsp;Reshoot
              </td>
              <td className=" text-center"></td>
              <td className=" text-center"></td>
            </tr>
            <tr>
              <td>
                <span>RT</span>:&nbsp;Retake
              </td>
              <td>
                <span>RC</span>:&nbsp;Root Concavity
              </td>
              <td>
                <span>RUC</span>:&nbsp;Root Undercut
              </td>
              <td>
                <span>SI</span>:&nbsp;Slag Inclusion
              </td>
              <td className=" text-center"></td>
              <td className=" text-center"></td>
            </tr>
            <tr>
              <td>
                <span>SP</span>:&nbsp;Spatter
              </td>
              <td>
                <span>SD</span>:&nbsp;Surface Depression
              </td>
              <td>
                <span>TI</span>
                :&nbsp;Tungsten Inclusion
              </td>
              <td>
                <span>WH</span>
                :&nbsp;Wormhole
              </td>
              <td className="text-center">Total sq inch</td>
              <td className="text-center">280</td>
            </tr>
          </tbody>
        </table>
        <table className="w-[100%]" style={{ fontSize: tabelFontSize }}>
          <tbody className="border-l-2 border-r-2 border-[#808080]">
            <tr>
              <th>Inspected By</th>
              <th>TPI</th>
              <th>Client</th>
            </tr>
          </tbody>
          <tbody style={{ border: "2px solid #808080" }}>
            <tr style={{ padding: InspectedPadding, height: InspectedHeight }}>
              <td className=" text-center" width={"33%"}>
                D.S.Bagde
                <br />
                NDT L-II/BARC L-II
                <br />
                RT/MPT/LPT
                <br />
              </td>
              <td width={"33%"}></td>
              <td width={"33%"}></td>
            </tr>
          </tbody>
        </table>
        <div
          className="flex justify-between"
          style={{ fontSize: footerFontSize, padding: divPadding }}
          id="remain"
        >
          <span></span>
          <span>
            This is computer generated report, hence does not require signature
          </span>
          <span>
            Page <span class="page_no">1</span> of
            <span class="total_page">1</span>
          </span>
        </div>
      </div>
    </>
  );
};

export default PdfFile;
