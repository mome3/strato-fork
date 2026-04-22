import { LegalPage } from "@/components/legal-page"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Asset Deposit & Tokenization Terms",
  description:
    "STRATO's Asset Deposit & Tokenization Terms and Conditions governing the deposit, custody, tokenization, and redemption of physical precious metals.",
  alternates: {
    canonical: "/tokenization-terms",
  },
}

export default function TokenizationTermsPage() {
  return (
    <LegalPage title="Asset Deposit & Tokenization Terms and Conditions" lastUpdated="April 22, 2026">
      <p>
        {"These STRATO Asset Deposit & Tokenization Terms and Conditions (the “Terms”) govern the deposit, custody, tokenization, and redemption of physical precious metals through the STRATO platform operated by STRATO, Inc., a BVI company registered under the number 2179057 (the “Company”). By depositing assets, creating tokens, exchanging tokens, or otherwise using the services, you (the “Customer”) agree to be bound by these Terms, along with any other policies or notices on the services, the site, and our privacy policy located at "}
        <a href="/privacy">strato.nexus/privacy</a>
        {" that expressly cover your obligations and rights, and our disclaimers and limitations of legal liability, including, without limitation, the binding arbitration provision and the class action waiver, both of which impact your rights as to how disputes are resolved."}
      </p>

      <h2>1. Parties and Definitions</h2>
      <p>{"These Terms constitute a binding agreement between STRATO, Inc. (operating the STRATO platform) and the Customer. “Customer” includes the original depositor and any subsequent lawful holder of digital tokens issued under these Terms. The Company and the Customer may individually be referred to as “Party” and collectively referred to as “Parties.”"}</p>

      <h2>2. Deposit and Tokenization of Precious Metals</h2>
      <p>{"The Customer may deposit physical gold or silver (the “Precious Metals”) with the Company’s designated third-party vaulting partner(s) either physically at the vaulting location or via U.S. postal service. “Precious Metals” may include LBMA Good Delivery bars, COMEX-eligible bars, and widely recognized sovereign-minted bullion coins (e.g. American Eagle, Canadian Maple Leaf). All Precious Metals must (i) meet applicable industry standards, including LBMA Good Delivery standards for bullion bars and recognized sovereign mint standards or equivalent assay verification for bullion coins, as accepted by the vaulting partner(s), and (ii) meet the stated fineness requirements set forth in Section 2.1 below. The Company’s silver and gold based digital currency are based one to one (1:1) on 1 oz 999 fine allocated silver for SILVST and 1g 9999 fine allocated gold for GOLDST. The silver and gold behind each token are held in approved vaults on an allocated, not segregated, basis. Upon verification, the Company will mint digital tokens (SILVST or GOLDST) on the STRATO blockchain representing the verified weight and purity of the deposited Precious Metals as set forth in Section 2.1 below."}</p>
      <p>Tokens are intended solely as digital representations of physical Precious Metals and do not constitute securities, investment contracts, derivatives, or commodities futures. No expectation of profit is created from the efforts of the Company.</p>

      <h3>2.1. Bullion and Coin Quality Standards</h3>
      <p><strong>2.1.1. Standards and Accepted Refiners/Mints:</strong> Deposits must conform with the following:</p>
      <ul>
        <li><strong>2.1.1.1. Approved Refiners/Mints:</strong> Physical bullion and coins must have been produced by an LBMA or COMEX Approved Refiner or a recognized Sovereign Mint and conform with LBMA or COMEX Contract Specifications.</li>
        <li><strong>2.1.1.2. Approved Sovereign Mints:</strong> {"Accepted coins include, but are not limited to, those produced by: The United States Mint (e.g., American Eagles, Buffaloes), The Royal Canadian Mint (e.g., Maples), The Perth Mint (e.g., Kangaroos, Koalas), The Royal Mint (UK) (e.g., Britannias), and The South African Mint (e.g., Krugerrands) (hereinafter collectively referred to as “Sovereign Mints”)."}</li>
        <li><strong>2.1.1.3. GOLDST Standards:</strong> Accepted in the form of 1 kg bars, 10oz minted bars, or 100 gram bars, as well as investment-grade coins from the approved mints listed above, all with a minimum fineness of 999.9.</li>
        <li><strong>2.1.1.4. SILVST Standards:</strong> Accepted in the form of 1kg, 100 oz, or 1,000 oz bars, as well as investment-grade coins from the approved mints listed above, all with a minimum fineness of 999.</li>
      </ul>

      <p><strong>Acceptable Standards Table</strong></p>
      <div className="overflow-x-auto not-prose my-4">
        <table className="w-full border-collapse text-sm text-[#444]">
          <thead>
            <tr className="bg-[#eef1fa] text-[#1a1a2e]">
              <th className="border border-[#e0e4f0] px-3 py-2 text-left">Asset Type</th>
              <th className="border border-[#e0e4f0] px-3 py-2 text-left">Token Type</th>
              <th className="border border-[#e0e4f0] px-3 py-2 text-left">Fineness Standard</th>
              <th className="border border-[#e0e4f0] px-3 py-2 text-left">Units</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-[#e0e4f0] px-3 py-2">Gold Bars</td>
              <td className="border border-[#e0e4f0] px-3 py-2">GOLDST</td>
              <td className="border border-[#e0e4f0] px-3 py-2">999.9</td>
              <td className="border border-[#e0e4f0] px-3 py-2">1kg, 10oz, 100g</td>
            </tr>
            <tr>
              <td className="border border-[#e0e4f0] px-3 py-2">Gold Coins</td>
              <td className="border border-[#e0e4f0] px-3 py-2">GOLDST</td>
              <td className="border border-[#e0e4f0] px-3 py-2">999.9</td>
              <td className="border border-[#e0e4f0] px-3 py-2">1 oz (Sovereign Mints)</td>
            </tr>
            <tr>
              <td className="border border-[#e0e4f0] px-3 py-2">Silver Bars</td>
              <td className="border border-[#e0e4f0] px-3 py-2">SILVST</td>
              <td className="border border-[#e0e4f0] px-3 py-2">999.0</td>
              <td className="border border-[#e0e4f0] px-3 py-2">1,000oz, 100oz, 1kg</td>
            </tr>
            <tr>
              <td className="border border-[#e0e4f0] px-3 py-2">Silver Coins</td>
              <td className="border border-[#e0e4f0] px-3 py-2">SILVST</td>
              <td className="border border-[#e0e4f0] px-3 py-2">999.0</td>
              <td className="border border-[#e0e4f0] px-3 py-2">1 oz (Sovereign Mints)</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-sm italic">Note: Assets not meeting the exact fineness or weight specifications above may be subject to an adjusted tokenization rate as specified below or rejection at the Company&apos;s sole discretion.</p>

      <p><strong>2.1.2. Fine Weight and Emission Schedule:</strong> {"In order to accept coins and bars of varying fineness, while preserving the integrity of the 1:1 token fineness standard stated above, the Customer must present an original and undamaged assay certificate from a recognized Sovereign Mint or accredited refiner with their Precious Metals deposit. Tokens (SILVST/GOLDST) shall be minted based on the fine weight of the metal that each asset contains. Any certificate that shows signs of tampering, lacks matching serial numbers with the physical asset, or cannot be verified via the issuer’s digital portal will be deemed fraudulent and result in the immediate rejection of the asset at the Customer’s expense. “Fine weight”, as used in these Terms shall mean the specific weight of the pure precious metal content within an asset, excluding any base metal alloys or impurities."}</p>

      <p><strong>2.1.2.1. GOLDST Emission Schedule (per 1g of Gold Content):</strong></p>
      <div className="overflow-x-auto not-prose my-4">
        <table className="w-full border-collapse text-sm text-[#444]">
          <thead>
            <tr className="bg-[#eef1fa] text-[#1a1a2e]">
              <th className="border border-[#e0e4f0] px-3 py-2 text-left">Weight in Gold</th>
              <th className="border border-[#e0e4f0] px-3 py-2 text-left">Fineness</th>
              <th className="border border-[#e0e4f0] px-3 py-2 text-left">Karat</th>
              <th className="border border-[#e0e4f0] px-3 py-2 text-left">GOLDST</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["1g", "999.9", "24.0", "1.000"],
              ["1g", "995.0", "23.9", "0.995"],
              ["1g", "990.0", "23.8", "0.990"],
              ["1g", "986.0", "23.7", "0.986"],
              ["1g", "958.3", "23.0", "0.958"],
              ["1g", "916.0", "22.0", "0.916"],
              ["1g", "900.0", "21.6", "0.900"],
              ["1g", "899.0", "21.6", "0.899"],
              ["1g", "834.0", "20.0", "0.834"],
              ["1g", "750.0", "18.0", "0.750"],
              ["1g", "625.0", "15.0", "0.625"],
              ["1g", "583.3", "14.0", "0.583"],
              ["1g", "417.0", "10.0", "0.417"],
              ["1g", "375.0", "9.0", "0.375"],
              ["1g", "333.0", "8.0", "0.333"],
            ].map((row) => (
              <tr key={row.join("-")}>
                {row.map((cell, i) => (
                  <td key={i} className="border border-[#e0e4f0] px-3 py-2">{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p><strong>2.1.2.2. SILVST Emission Schedule (per 1oz of Silver Content):</strong></p>
      <div className="overflow-x-auto not-prose my-4">
        <table className="w-full border-collapse text-sm text-[#444]">
          <thead>
            <tr className="bg-[#eef1fa] text-[#1a1a2e]">
              <th className="border border-[#e0e4f0] px-3 py-2 text-left">Weight in Silver</th>
              <th className="border border-[#e0e4f0] px-3 py-2 text-left">Fineness</th>
              <th className="border border-[#e0e4f0] px-3 py-2 text-left">% Silver</th>
              <th className="border border-[#e0e4f0] px-3 py-2 text-left">SILVST</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["1oz", "999", "99.9%", "1.000"],
              ["1oz", "958", "95.8%", "0.958"],
              ["1oz", "950", "95%", "0.950"],
              ["1oz", "947", "94.7%", "0.947"],
              ["1oz", "925", "92.5%", "0.925"],
              ["1oz", "916", "91.6%", "0.916"],
              ["1oz", "900", "90%", "0.900"],
              ["1oz", "800", "80%", "0.800"],
            ].map((row) => (
              <tr key={row.join("-")}>
                {row.map((cell, i) => (
                  <td key={i} className="border border-[#e0e4f0] px-3 py-2">{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>3. Shipping Requirements</h2>
      <p>The Customer must comply with all logistics, packaging, and handling protocols set forth in Exhibit A below (Shipping Instructions). The Company may update Exhibit A from time to time to reflect operational or security requirements. Continued use of the services after such updates constitutes acceptance of the revised Exhibit A.</p>
      <p>All shipping, insurance, and handling fees are the sole responsibility of the Customer. The Customer is responsible for compliance with carrier rules, insurance requirements, and applicable laws. The Company shall not be liable for any misrepresentation made by the Customer to any carrier or insurer.</p>
      <p>By shipping Precious Metals, the Customer acknowledges that the Precious Metals are redeemable based on equivalent weight and purity; specific serial numbers or unique identifiers are not guaranteed for return.</p>

      <h2>4. Documentation and Pre-Shipment Verification</h2>
      <p>{"Prior to shipment, the Customer must upload, via the STRATO platform, a detailed asset manifest including, weight, purity, hallmarks, and quantity, as well as high-resolution photographic evidence of the items, assay certificate that’s being included, and packaging process."}</p>

      <h2>5. Custody, Ownership, and Proof of Reserve</h2>
      <p>{"Title to and beneficial ownership of the Precious Metals remain at all times with the Customer or lawful token holder. The Precious Metals are housed in a secure, professional vaulting facility under a bailment arrangement, pursuant to which the Company acts solely in a custodial capacity. The Precious Metals are held in segregated custody and are not Company assets. In the event of Company insolvency or bankruptcy, the Precious Metals shall be excluded from the Company’s estate to the fullest extent permitted by law."}</p>
      <p>The Customer acknowledges that while Precious Metals are held in a fungible pool, physical assay certificates and reports are tied to the physical assets in the vault. Upon redemption, the Company shall provide the documentation associated with the specific assets being released. This may or may not be the original documentation provided at the time of deposit, provided it confirms the equivalent fine weight and purity of the redeemed assets.</p>
      <p>The Company maintains a Proof of Reserve protocol. Attestations are provided for transparency only and do not constitute a guarantee, warranty, or insurance of asset value or system performance.</p>

      <h2>6. Inspection, Verification, and Rejection</h2>
      <p>{"All deposits are subject to third-party inspection and assay against the Customer’s manifest. During the verification process, the Company shall verify the authenticity of all assay certificates and security packaging. Assay will be conducted, at Customer’s expense, in the event the original assay certificate is not included or is found not to be authentic. The Company may reject any shipments that fail to match documentation, show tampering, or fail to meet minimum fineness or approved refiner standards specified herein. For assets deposited without a certificate (such as sovereign coins or secondary market bars), the independent assay report generated upon intake (at the Customer’s expense) shall serve as the official certificate of record for that specific physical asset within the fungible pool. The Company reserves the right to update the list of approved and excluded refiners at any time to reflect changes in international accreditations (e.g., LBMA, UAEGD, COMEX) or internal compliance reviews."}</p>
      <p>{"Rejected assets are returned at the Customer’s expense. Except in cases of fraud, gross negligence, or manifest error, assay results, assuming original assay certificate was not included or is found not to be authentic, are final. Customers may request a second independent assay (at their own expense) within five (5) business days of token minting."}</p>

      <h2>7. Market Volatility & Valuation</h2>
      <p>The Company does not guarantee the fiat value of tokens or metals. Valuation of the Precious Metals is determined only upon final verification at the vaulting facility. The Customer accepts the risk of market movement during transit and inspection.</p>

      <h2>8. Redemption of Precious Metals</h2>
      <p>Redemption requires surrender and burning of corresponding tokens on the STRATO blockchain, value matching, and payment by the Customer of all applicable fees, including, but not limited to, all vault redemption fees. Additionally, the Customer is responsible for payment of any and all taxes related to the redemption, including, but not limited to sales tax and capital gains tax, if any. Redemption requests are subject to reasonable processing timelines, regulatory requirements, and vault availability. Redemption may be suspended due to regulatory, security, or force majeure events.</p>
      <p>The right to physical redemption is strictly tied to current and verified ownership of the Precious Metals or metal tokens on the STRATO platform, and if you sell your metal tokens, you lose all rights to the physical Precious Metal assets the metal tokens represent.</p>

      <h3>8.1. Supplied Assets</h3>
      <p>The Customer may withdraw the Precious Metals equivalent in weight and purity to those initially supplied to the vault by the Customer, provided the Customer still retains ownership of these Precious Metals. Assets are held on a fungible basis, and the Company is under no obligation to return the specific physical unit(s) originally deposited. If the minted metal tokens that represent ownership in the Precious Metals supplied by the Customer have been sold or transferred to another user on the STRATO platform, the right to withdraw those Precious Metals passes entirely to the current verified holder; the original depositor retains no further claim. The current verified holder is subject to the redemption terms found in Sections 8.2, 8.3, and 8.4 below.</p>

      <h3>8.2. Token-Based Holdings (SILVST/GOLDST)</h3>
      <p>For metals purchased and held as SILVST or GOLDST on the STRATO platform, physical redemptions to the current token holder are available only in standardized 100-ounce bars (in the case of SILVST) and two 1-ounce coins (in the case of GOLDST). Requests must be made in increments of single 100-ounce bars or multiples thereof for SILVST and in increments of 2-ounces when requesting coins or multiples thereof for GOLDST.</p>

      <h3>8.3. Physical Collection Requirement</h3>
      <p>Consistent with industry standards for tokenized bullion and sovereign coins, STRATO requires all physical redemptions to be completed in person at our designated vaulting facility. The Company does not provide outbound mailing or shipping services for redeemed assets. All responsibility for the transport, security, and insurance of the assets passed to the Customer immediately upon their release from the vault.</p>

      <h3>8.4. Identity Verification</h3>
      <p>For physical pickup, the current verified token holder must present a valid government-issued ID and the unique redemption code generated by the STRATO platform. The identity of the individual picking up the metal must match the KYC (Know Your Customer) data associated with the token-holding wallet.</p>

      <h2>9. Vaulting and Logistics</h2>

      <h3>9.1. Storage Facilities</h3>
      <p>All precious metals are stored securely in third party accredited and audited vaults. The Company maintains relationships with various international vaulters, including facilities in New York City. The Company has the sole discretion to determine the appropriate storage location. All physical redemptions and pickups will take place at our primary facility, which is currently located in New York City.</p>

      <h3>9.2. Collection Scheduling</h3>
      <p>To ensure security and asset availability, Customers must schedule a collection appointment at least five (5) business days in advance.</p>

      <h3>9.3. Audits and Transparency</h3>
      <p>Vaulting locations are disclosed to Customer upon written request. Audit reports confirming the existence of metals in each location are available quarterly. While the Company selects reputable partners, the Company is not liable for the independent acts or omission of third-party vaulting or partner companies.</p>

      <h3>9.4. Physical Delivery and Intermediary Status</h3>
      <p>{"Upon a valid redemption request, metals will be shipped from their current storage vault to the vault where physical redemptions are to occur. The Company acts solely as an intermediary to facilitate communication between the Customer or the verified holder and the third-party vault. All handling, transportation, insurance, and administrative fees are the sole responsibility of the Customer. STRATO’s obligation is fulfilled upon the burning of the tokens and the initiation of the transfer request with the vault."}</p>

      <h3>9.5. No Outbound Shipping</h3>
      <p>The Company acts solely as a custodian and tokenization provider. We do not engage in the business of shipping, mailing, or couriering precious metals to customers upon redemption. All logistics for removing redeemed assets from the vaulting facility are the sole responsibility and expense of the Customer.</p>

      <h2>10. Risk Disclosures and Insurance Limitations</h2>
      <p>{"The Company is not liable for losses due to network outages, blockchain failures, or market volatility. Insurance coverage (theft/fire) through the vaulting partner’s policy applies only while metals are in vault custody and may be subject to aggregate limits and may not provide per-customer coverage. Insurance does not cover governmental seizure, cyber-theft of private keys, or market devaluation. Liability is limited to the market value of the applicable Precious Metals based on the applicable LBMA Gold Price (PM) or LBMA Silver Price at the time of loss discovery."}</p>

      <h2>11. Governing Law, Dispute Resolution, and Class Action Waiver</h2>
      <p>These Terms are governed by the laws of the British Virgin Islands, without regard to its conflict of law principles. Subject to the arbitration provisions below, the courts of the British Virgin Islands shall have exclusive jurisdiction and venue over any dispute arising out of or relating to this Agreement, and each Party irrevocably submits to such jurisdiction and waives any objection to venue in such courts.</p>
      <p>{"Disputes arising out of or relating to these Terms or the services provided by the Company including breach, termination, or invalidity thereof, shall be resolved by binding arbitration administered by the BVI International Arbitration Centre (“BVI IAC”) under its then current streamlined rules of arbitration with the seat of arbitration in Road Town, Tortola, British Virgin Islands. Both Parties irrevocably waive, to the fullest extent permitted by law, all rights to a jury trial in any action, proceeding, or counterclaim (whether in contract, statute, tort, or otherwise) related to these Terms or the services provided by the Company and the right to bring, participate in, or recover relief in any class, collective, or representative or private attorney general action lawsuits against the Company."}</p>
      <p>Exclusive jurisdiction for interim relief (injunctions) resides in the courts of the British Virgin Islands, and the parties agree that such courts shall have exclusive jurisdiction of any such action.</p>
      <p>Each Party shall bear its own legal fees and costs unless otherwise required by applicable law; provided that the prevailing Party in any bad-faith or frivolous action may recover reasonable fees as determined by the arbitrator or court.</p>

      <h2>12. Miscellaneous</h2>
      <p>These Terms constitute the entire agreement between the Company and the Customer with respect to the subject matter hereof and supersede all prior and contemporaneous agreements, arrangements, negotiations, and understandings, whether written or oral, relating thereto.</p>
      <p>The section headings used in these Terms are for convenience and reference only and shall not affect the meaning, interpretation, or construction of any provision of these Terms.</p>
      <p>Any waiver of a breach or default under these Terms shall not be deemed a waiver of any subsequent breach or default of the same or any other provision. No failure or delay by either Party in exercising any right or remedy under these Terms shall operate as a waiver thereof.</p>
      <p>If any provision of these Terms is held to be invalid, illegal, or unenforceable by a court of competent jurisdiction, such provision shall be modified or interpreted to the minimum extent necessary to make it enforceable, and the remaining provisions shall continue in full force and effect.</p>
      <p>The Customer acknowledges that it has had the opportunity to review these Terms and to seek independent legal advice regarding their contents. By accepting these Terms, the Customer represents that it has read, understood, and voluntarily agrees to be bound by all of its provisions.</p>
      <p>These Terms are written in the English language, which shall be the controlling language for all purposes.</p>
      <p>These Terms shall not be construed against the Company solely by reason of having been drafted by the Company.</p>

      <hr />

      <h2>Exhibit A — Shipping Instructions for Precious Metals in the United States</h2>
      <p><strong>STRATO Tokenization Program</strong></p>
      <p>To ensure your assets are securely received and verified for tokenization, please follow these mandatory shipping requirements. Failure to follow these steps may result in the rejection of your shipment.</p>
      <p>If you live outside the United States and wish to deposit metals with us, please reach out to us at <a href="mailto:info@strato.nexus">info@strato.nexus</a> to make alternative arrangements. Please note, at present, deposit limits will be higher outside of the United States.</p>

      <h3>1. Documentation &amp; Photography (Pre-Shipment)</h3>
      <p>Before sealing your package, you must:</p>
      <ul>
        <li><strong>1.1. Take Photos:</strong> Capture clear, high-resolution photos of the bars/coins and the items placed inside the inner box.</li>
        <li><strong>1.2. Assay Certificate:</strong> Include an original assay certificate inside the box with the Precious Metals being mailed.</li>
        <li><strong>1.3. Packing Slip:</strong> Include a printed copy of your asset manifest inside the box.</li>
        <li><strong>1.4. Digital Submission:</strong> Email your photos, copy of the original assay certificate you are going to submit, and the digital manifest to <a href="mailto:intake@strato.nexus">intake@strato.nexus</a> with your Transaction ID in the subject line.</li>
      </ul>

      <h3>2. Packaging: The &ldquo;Double-Box&rdquo; Method</h3>
      <p>Precious metals are heavy and can burst through standard envelopes. You must double-box all shipments:</p>
      <ul>
        <li><strong>2.1. Inner Container:</strong> {"Place metals in a sturdy box or padded mailer. Use bubble wrap or foam to ensure there is zero “rattle” or movement."}</li>
        <li><strong>2.2. The Shake Test:</strong> If you shake the inner box and hear metal clinking, add more padding.</li>
        <li><strong>2.3. Outer Container:</strong> Place the inner container into a larger, brand-new shipping box. Fill the gaps with packing material so the inner box is centered.</li>
        <li><strong>2.4. Sealing:</strong> Use heavy-duty, reinforced packing tape on all seams of the outer box.</li>
      </ul>

      <h3>3. Discreet Labeling</h3>
      <p>{"DO NOT write “Gold,” “Silver,” “Coins,” “SILVST,” “GOLDST,” “BlockApps,” or “Precious Metals” on the outside of the box."}</p>
      <ul>
        <li><strong>3.1.</strong> Attn: STRATO Receiving Dept</li>
        <li><strong>3.2. Description:</strong> {"If the carrier asks for a description for insurance, use “Metal Samples”, “Metal Parts”, “Machine Components”, or “Industrial Hardware.”"}</li>
      </ul>

      <h3>4. Recommended Carriers</h3>
      <ul>
        <li><strong>4.1. USPS Registered Mail (Highest Security):</strong> Required for all shipments valued between $5,000 and $50,000. DO NOT use Priority Mail.
          <ul>
            <li>Note: You must use brown paper tape on all seams for the Post Office to accept it as Registered Mail (so they can date-stamp the seams).</li>
          </ul>
        </li>
        <li><strong>4.2. Private Courier:</strong> For values exceeding $50,000, please contact us to arrange armored transport.</li>
      </ul>

      <h3>5. Insurance &amp; Tracking</h3>
      <ul>
        <li><strong>5.1. Full Value Insurance:</strong> You are responsible for insuring the package for the full replacement value of the metals. When you fill out the PS Form 3806 (the Registered Mail receipt), you must be 100% honest and accurate regarding the value of the contents. For gold and silver, this is the current spot price.</li>
        <li><strong>5.2. Signature Required:</strong> All shipments must be sent with Adult Signature Required.</li>
        <li><strong>5.3. Tracking:</strong> Email your tracking number to <a href="mailto:intake@strato.nexus">intake@strato.nexus</a> immediately after drop-off.</li>
      </ul>
    </LegalPage>
  )
}
