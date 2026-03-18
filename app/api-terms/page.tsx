import { LegalPage } from "@/components/legal-page"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "API Terms of Use - STRATO",
  description: "API Terms of Use for STRATO governing access to and use of BlockApps developer APIs and services.",
}

export default function ApiTermsPage() {
  return (
    <LegalPage title="API Terms of Use" lastUpdated="May 11, 2016">
      <p>
        {"Thank you for using BlockApps' APIs, other developer services, and associated software (collectively, \"APIs\"). By accessing or using our APIs, you are agreeing to the terms below. If there is a conflict between these terms and additional terms applicable to a given API, the additional terms will control for that conflict. Collectively, we refer to the terms below, any additional terms, terms within the accompanying API documentation, and any applicable policies and guidelines as the \"Terms.\" You agree to comply with the Terms and that the Terms control your relationship with us. So please read all the Terms carefully. If you use the APIs as an interface to, or in conjunction with other BlockApps products or services, then the terms for those other products or services also apply."}
      </p>
      <p>
        {"Under the Terms, \"BlockApps\" means BlockApps, Inc., with offices at 112 North 8th St., #2R, Brooklyn, NY 11249, United States, unless set forth otherwise in additional terms applicable for a given API. We may refer to \"BlockApps\" as \"we\", \"our\", or \"us\" in the Terms."}
      </p>

      <h2>Eligibility</h2>
      <p>{"You may not use the APIs and may not accept the Terms if: (i) you are not of legal age to form a binding contract with BlockApps, or (ii) you are a person barred from using or receiving the APIs under the applicable laws of the United States or other countries including the country in which you are resident or from which you use the APIs."}</p>
      <p>{"If you are using the APIs on behalf of an entity, you represent and warrant that you have authority to bind that entity to the Terms and by accepting the Terms, you are doing so on behalf of that entity (and all references to \"you\" in the Terms refer to that entity)."}</p>

      <h2>Registration Information</h2>
      <p>{"In order to access certain APIs you may be required to provide certain information (such as identification or contact details) as part of the registration process for the APIs, or as part of your continued use of the APIs. Any registration information you give to BlockApps will always be accurate and up to date and you'll inform us promptly of any updates."}</p>
      <p>You will require your end users to comply with (and not knowingly enable them to violate) applicable law, regulation, and the Terms.</p>

      <h2>API Changes and Updates</h2>
      <p>BlockApps is still evolving, and we need the flexibility to occasionally make changes to our APIs, including backwards incompatible ones. We will try to give notice of these changes, but you should follow the @blockappsapi Twitter account for updates. Also, parts of our API are undocumented, including certain methods, events, and properties. Given that these undocumented aspects of our API may change at any time, you should not rely on these behaviors.</p>

      <h2>Legal Compliance</h2>
      <p>You will comply with all applicable law, regulation, and third party rights (including without limitation laws regarding the import or export of data or software, privacy, and local laws). You will not use the APIs to encourage or promote illegal activity or violation of third party rights. You will not violate any other terms of service with BlockApps (or its affiliates).</p>

      <h2>API Access and Authentication</h2>
      <p>{"You will only access (or attempt to access) an API by the means described in the documentation of that API. If BlockApps assigns you developer credentials (e.g., client IDs), you must use them with the applicable APIs. You will not misrepresent or mask either your identity or your API Client's identity when using the APIs or developer accounts."}</p>

      <h2>Usage Limits</h2>
      <p>{"BlockApps may set and enforce limits on your use of the APIs (e.g. limiting the number of API requests that you may make or the number of users you may serve), in our sole discretion. You agree to, and will not attempt to circumvent, such limitations documented with each API. If you would like to use any API beyond these limits, you must obtain BlockApps's express consent (and BlockApps may decline such request or condition acceptance on your agreement to additional terms and/or charges for that use). To seek such approval, contact the relevant BlockApps API team for information (e.g. by using the BlockApps developers console)."}</p>

      <h2>Open Source Software</h2>
      <p>Some of the software required by or included in our APIs may be offered under an open source license. Open source software licenses constitute separate written agreements. For certain APIs, open source software is listed in the documentation. To the limited extent the open source software license expressly supersedes the Terms, the open source license instead sets forth your agreement with BlockApps for the applicable open source software.</p>

      <h2>Communications and Feedback</h2>
      <p>We may send you certain communications in connection with your use of the APIs. Please review the applicable API documentation for information about opting out of certain types of communication.</p>
      <p>If you provide feedback or suggestions about our APIs, then we (and those we allow) may use such information without obligation to you.</p>
      <p>The Terms are non-exclusive. You acknowledge that BlockApps may develop products or services that may compete with the API Clients or any other products or services.</p>

      <h2>Monitoring and Quality Assurance</h2>
      <p>{"The APIs are designed to help you enhance your blockchain-based applications (\"API Client(s)\")."} <strong>YOU AGREE THAT BLOCKAPPS MAY MONITOR USE OF THE APIS TO ENSURE QUALITY, IMPROVE BLOCKAPPS PRODUCTS AND SERVICES, AND VERIFY YOUR COMPLIANCE WITH THE TERMS.</strong></p>
      <p>This monitoring may include BlockApps accessing and using your API Client, for example to identify security issues that could affect BlockApps or its users. You will not interfere with this monitoring. BlockApps may use any technical means to overcome such interference. BlockApps may suspend access to the APIs by you or your API Client without notice if we reasonably believe that you are in violation of the Terms.</p>

      <h2>Prohibited Uses</h2>
      <p>When using the APIs, you may not (or allow those acting on your behalf to):</p>
      <ul>
        <li>Sublicense an API for use by a third party. Consequently, you will not create an API Client that functions substantially the same as the APIs and offer it for use by third parties.</li>
        <li>Perform an action with the intent of introducing to BlockApps products and services any viruses, worms, defects, Trojan horses, malware, or any items of a destructive nature.</li>
        <li>Defame, abuse, harass, stalk, or threaten others.</li>
        <li>Interfere with or disrupt the APIs or the servers or networks providing the APIs.</li>
        <li>Promote or facilitate unlawful online gambling or disruptive commercial messages or advertisements.</li>
        <li>Reverse engineer or attempt to extract the source code from any API or any related software, except to the extent that this restriction is expressly prohibited by applicable law.</li>
        <li>{"Use BlockApps' API or any other technology in a manner that accesses or uses any information beyond what BlockApps allows under these Terms; that changes the BlockApps service; that breaks or circumvents any of BlockApps' technical, administrative process or security measures; that disrupts or degrades the performance of the BlockApps Service or the BlockApps API; or that tests the vulnerability of BlockApps' systems or networks."}</li>
        <li>Use the BlockApps API to replicate or compete with core products or services offered by BlockApps. You acknowledge and agree that BlockApps has or may in the future offer products or services that are similar to your Application, and nothing will prevent BlockApps from doing so.</li>
        <li>Use the APIs for any activities where the use or failure of the APIs could lead to death, personal injury, or environmental damage (such as the operation of nuclear facilities, air traffic control, or life support systems).</li>
        <li>Use the APIs to process or store any data that is subject to the International Traffic in Arms Regulations maintained by the U.S. Department of State.</li>
        <li>Remove, obscure, or alter any BlockApps terms of service or any links to or notices of those terms.</li>
      </ul>

      <h2>HIPAA Compliance</h2>
      <p>{"Unless otherwise specified in writing by BlockApps, BlockApps does not intend use of the APIs to create obligations under the Health Insurance Portability and Accountability Act, as amended (\"HIPAA\"), and makes no representations that the APIs satisfy HIPAA requirements. If you intend to use BlockApps for this purpose please contact us at"} <a href="mailto:hello@blockapps.net">hello@blockapps.net</a>.</p>

      <h2>Developer Credentials</h2>
      <p>Developer credentials (such as passwords, keys, and client IDs) are intended to be used by you and identify your API Client. You will keep your credentials confidential and make reasonable efforts to prevent and discourage other API Clients from using your credentials. Developer credentials may not be embedded in open source projects.</p>

      <h2>Confidential Information</h2>
      <p>{"Our communications to you and our APIs may contain BlockApps confidential information. BlockApps confidential information includes any materials, communications, and information that are marked confidential or that would normally be considered confidential under the circumstances. If you receive any such information, then you will not disclose it to any third party without BlockApps' prior written consent. BlockApps confidential information does not include information that you independently developed, that was rightfully given to you by a third party without confidentiality obligation, or that becomes public through no fault of your own. You may disclose BlockApps confidential information when compelled to do so by law if you provide us reasonable prior notice, unless a court orders that we not receive notice."}</p>

      <h2>Third Party Content</h2>
      <p>Our APIs may transmit some third party content (such as text or software). This content is the sole responsibility of the person that makes it available. We may sometimes review content to determine whether it is illegal or violates our policies or the Terms, and we may remove or refuse to display content. Finally, content accessible through our APIs may be subject to intellectual property rights, and, if so, you may not use it unless you are licensed to do so by the owner of that content or are otherwise permitted by law. Your access to the content provided by the API may be restricted, limited, or filtered in accordance with applicable law, regulation, and policy.</p>

      <h2>Content Submission and Licensing</h2>
      <p>{"Our APIs allow the submission of content. BlockApps does not acquire any ownership of any intellectual property rights in the content that you submit to our APIs through your API Client, except as expressly provided in the Terms. For the sole purpose of enabling BlockApps to provide, secure, and improve the APIs (and the related service(s)) and only in accordance with the applicable BlockApps privacy policies, you give BlockApps a perpetual, irrevocable, worldwide, sublicensable, royalty-free, and non-exclusive license to Use content submitted, posted, or displayed to or from the APIs through your API Client. \"Use\" means use, host, store, modify, communicate, and publish. Before you submit content to our APIs through your API Client, you will ensure that you have the necessary rights (including the necessary rights from your end users) to grant us the license."}</p>
      <p>{"When a user's non-public content is obtained through the APIs, you may not expose that content to other users or to third parties without explicit opt-in consent from that user."}</p>

      <h2>Content Usage Restrictions</h2>
      <p>Unless expressly permitted by the content owner or by applicable law, you will not, and will not permit your end users or others acting on your behalf to, do the following with content returned from the APIs:</p>
      <ul>
        <li>Scrape, build databases, or otherwise create permanent copies of such content, or keep cached copies longer than permitted by the cache header;</li>
        <li>Copy, translate, modify, create a derivative work of, sell, lease, lend, convey, distribute, publicly display, or sublicense to any third party;</li>
        <li>Misrepresent the source or ownership; or</li>
        <li>Remove, obscure, or alter any copyright, trademark, or other proprietary rights notices; or falsify or delete any author attributions, legal notices, or other labels of the origin or source of material.</li>
      </ul>

      <h2>Brand Features and Attribution</h2>
      <p>{"\"Brand Features\" is defined as the trade names, trademarks, service marks, logos, domain names, and other distinctive brand features of each party. Except where expressly stated, the Terms do not grant either party any right, title, or interest in or to the other party's Brand Features. All use by you of BlockApps' Brand Features (including any goodwill associated therewith) will inure to the benefit of BlockApps."}</p>
      <p>{"You agree to display any attribution(s) required by BlockApps as described in the documentation for the API. BlockApps hereby grants to you a nontransferable, nonsublicenseable, nonexclusive license while the Terms are in effect to display BlockApps' Brand Features for the purpose of promoting or advertising that you use the APIs. You must only use the BlockApps Brand Features in accordance with the Terms and for the purpose of fulfilling your obligations under this Section. In using BlockApps' Brand Features, you must follow the BlockApps Brand Features Use Guidelines. You understand and agree that BlockApps has the sole discretion to determine whether your attribution(s) and use of BlockApps' Brand Features are in accordance with the above requirements and guidelines."}</p>
      <p>{"You will not make any statement regarding your use of an API which suggests partnership with, sponsorship by, or endorsement by BlockApps without BlockApps's prior written approval."}</p>

      <h2>Marketing and Promotional Use</h2>
      <p>In the course of promoting, marketing, or demonstrating the APIs you are using and the associated BlockApps products, BlockApps may produce and distribute incidental depictions, including screenshots, video, or other content from your API Client, and may use your company or product name. You grant us all necessary rights for the above purposes.</p>

      <h2>Privacy</h2>
      <p>By using our APIs, BlockApps may use submitted information in accordance with our privacy policies.</p>

      <h2>Termination</h2>
      <p>You may stop using our APIs at any time with or without notice. Further, if you want to terminate the Terms, you must provide BlockApps with prior written notice and upon termination, cease your use of the applicable APIs. BlockApps reserves the right to terminate the Terms with you or discontinue the APIs or any portion or feature or your access thereto for any reason and at any time without liability or other obligation to you.</p>
      <p>{"Upon any termination of the Terms or discontinuation of your access to an API, you will immediately stop using the API, cease all use of the BlockApps Brand Features, and delete any cached or stored content. BlockApps may independently communicate with any account owner whose account(s) are associated with your API Client and developer credentials to provide notice of the termination of your right to use an API."}</p>
      <p>When the Terms come to an end, those terms that by their nature are intended to continue indefinitely will continue to apply.</p>

      <h2>Disclaimers</h2>
      <p className="uppercase text-sm leading-relaxed">{"EXCEPT AS EXPRESSLY SET OUT IN THE TERMS, NEITHER BLOCKAPPS NOR ITS SUPPLIERS OR DISTRIBUTORS MAKE ANY SPECIFIC PROMISES ABOUT THE APIS. FOR EXAMPLE, WE DON'T MAKE ANY COMMITMENTS ABOUT THE CONTENT ACCESSED THROUGH THE APIS, THE SPECIFIC FUNCTIONS OF THE APIS, OR THEIR RELIABILITY, AVAILABILITY, OR ABILITY TO MEET YOUR NEEDS. WE PROVIDE THE APIS \"AS IS\"."}</p>
      <p className="uppercase text-sm leading-relaxed">SOME JURISDICTIONS PROVIDE FOR CERTAIN WARRANTIES, LIKE THE IMPLIED WARRANTY OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. EXCEPT AS EXPRESSLY PROVIDED FOR IN THE TERMS, TO THE EXTENT PERMITTED BY LAW, WE EXCLUDE ALL WARRANTIES, GUARANTEES, CONDITIONS, REPRESENTATIONS, AND UNDERTAKINGS.</p>

      <h2>Limitation of Liability</h2>
      <p className="uppercase text-sm leading-relaxed">{"WHEN PERMITTED BY LAW, BLOCKAPPS, AND BLOCKAPPS' SUPPLIERS AND DISTRIBUTORS, WILL NOT BE RESPONSIBLE FOR LOST PROFITS, REVENUES, OR DATA; FINANCIAL LOSSES; OR INDIRECT, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES."}</p>
      <p className="uppercase text-sm leading-relaxed">{"TO THE EXTENT PERMITTED BY LAW, THE TOTAL LIABILITY OF BLOCKAPPS, AND ITS SUPPLIERS AND DISTRIBUTORS, FOR ANY CLAIMS UNDER THESE TERMS, INCLUDING FOR ANY IMPLIED WARRANTIES, IS LIMITED TO THE AMOUNT YOU PAID US TO USE THE APPLICABLE APIS (OR, IF WE CHOOSE, TO SUPPLYING YOU THE APIS AGAIN) DURING THE SIX MONTHS PRIOR TO THE EVENT GIVING RISE TO THE LIABILITY."}</p>
      <p className="uppercase text-sm leading-relaxed">{"IN ALL CASES, BLOCKAPPS, AND ITS SUPPLIERS AND DISTRIBUTORS, WILL NOT BE LIABLE FOR ANY EXPENSE, LOSS, OR DAMAGE THAT IS NOT REASONABLY FORESEEABLE."}</p>

      <h2>Indemnification</h2>
      <p>Unless prohibited by applicable law, if you are a business or organization, you will defend and indemnify BlockApps, and its affiliates, directors, officers, employees, and users, against all liabilities, damages, losses, costs, fees (including legal fees), and expenses relating to any allegation or third-party legal proceeding to the extent arising from:</p>
      <ul>
        <li>{"Your misuse or your end user's misuse of the APIs;"}</li>
        <li>{"Your violation or your end user's violation of the Terms; or,"}</li>
        <li>Any content or data routed into or used with the APIs by you, those acting on your behalf, or your end users.</li>
      </ul>

      <h2>General Provisions</h2>
      <p>{"We may modify the Terms or any additional terms that apply to a given API to, for example, reflect changes to the law or changes to our APIs. You should look at the Terms regularly. We'll post notice of modifications to the Terms on this page. Changes will not apply retroactively and will become effective no sooner than fourteen days after they are posted. However, changes addressing new functions for an API or changes made for legal reasons will be effective immediately. If you do not agree to the modified Terms for a given API, you should discontinue your use of that API."}</p>
      <p>If there is a conflict between these terms and the additional terms, the additional terms will control for that conflict.</p>
      <p>These Terms control the relationship between BlockApps and you. They do not create any third party beneficiary rights.</p>
      <p>{"If you do not comply with these Terms, and we don't take action right away, this doesn't mean that we are giving up any rights that we may have (such as taking action in the future)."}</p>
      <p>If it turns out that a particular term is not enforceable, this will not affect any other terms.</p>
      <p>{"The laws of New York, U.S.A., excluding New York's conflict of laws rules, will apply to any disputes arising out of or relating to these Terms or the APIs. All claims arising out of or relating to these Terms or the APIs will be litigated exclusively in the federal or state courts of New York County, New York, USA, and you and BlockApps consent to personal jurisdiction in those courts."}</p>
    </LegalPage>
  )
}
