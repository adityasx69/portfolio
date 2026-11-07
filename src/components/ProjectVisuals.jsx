function VisualFrame({ children, label, title }) {
  return (
    <div className="project-visual-frame">
      <div className="project-visual-caption">
        <span>{label}</span>
        <span>{title}</span>
      </div>
      {children}
    </div>
  );
}

export function JournalVisual() {
  return (
    <VisualFrame label="PROJECT STUDY / JOURNAL APP" title="BACKEND MAP">
      <svg className="project-art" viewBox="0 0 1100 700" role="img" aria-label="Illustrative architecture map of the Journal App controller, service and repository layers">
        <rect width="1100" height="700" fill="#0b0d0e" />
        <path d="M0 72H1100M0 625H1100" stroke="#252a2b" />
        <text x="58" y="48" className="art-mono art-muted">JOURNAL APP / JAVA</text>
        <text x="58" y="145" className="art-title">CLEAR LAYERS.</text>
        <text x="58" y="208" className="art-title art-title-outline">CLEANER BOUNDARIES.</text>
        <text x="858" y="48" className="art-mono art-accent">SPRING BOOT</text>

        <rect x="64" y="282" width="206" height="112" fill="#101314" stroke="#303738" />
        <text x="90" y="326" className="art-mono art-muted">REQUEST</text>
        <text x="90" y="362" className="art-label">Journal API</text>
        <path d="M270 338H352" stroke="#86d5de" strokeWidth="2" />
        <path d="M342 329L352 338L342 347" fill="none" stroke="#86d5de" strokeWidth="2" />

        <g transform="translate(354 268)">
          <rect width="188" height="142" fill="#111719" stroke="#456064" />
          <text x="22" y="38" className="art-mono art-accent">01</text>
          <text x="22" y="78" className="art-label">Controller</text>
          <text x="22" y="111" className="art-mono art-muted">HTTP LAYER</text>
        </g>
        <path d="M542 338H598" stroke="#86d5de" strokeWidth="2" />
        <path d="M588 329L598 338L588 347" fill="none" stroke="#86d5de" strokeWidth="2" />

        <g transform="translate(600 268)">
          <rect width="188" height="142" fill="#111719" stroke="#456064" />
          <text x="22" y="38" className="art-mono art-accent">02</text>
          <text x="22" y="78" className="art-label">Service</text>
          <text x="22" y="111" className="art-mono art-muted">APPLICATION LOGIC</text>
        </g>
        <path d="M788 338H844" stroke="#86d5de" strokeWidth="2" />
        <path d="M834 329L844 338L834 347" fill="none" stroke="#86d5de" strokeWidth="2" />

        <g transform="translate(846 268)">
          <rect width="188" height="142" fill="#101314" stroke="#303738" />
          <text x="22" y="38" className="art-mono art-muted">03</text>
          <text x="22" y="78" className="art-label">Repository</text>
          <text x="22" y="111" className="art-mono art-muted">DATA ACCESS</text>
        </g>

        <path d="M940 410V484H802" fill="none" stroke="#4a5556" strokeDasharray="5 7" />
        <rect x="650" y="484" width="306" height="92" fill="#101314" stroke="#303738" />
        <circle cx="690" cy="530" r="17" fill="none" stroke="#86d5de" strokeWidth="2" />
        <path d="M675 530H705M680 522H700M680 538H700" stroke="#86d5de" />
        <text x="724" y="523" className="art-label">MongoDB persistence</text>
        <text x="724" y="550" className="art-mono art-muted">USER / JOURNAL DATA</text>
        <text x="58" y="664" className="art-mono art-muted">ILLUSTRATIVE PROJECT DIAGRAM · NOT A PRODUCT SCREENSHOT</text>
      </svg>
    </VisualFrame>
  );
}

export function CineSearchVisual() {
  return (
    <VisualFrame label="PROJECT STUDY / CINESEARCH" title="DISCOVERY FLOW">
      <svg className="project-art" viewBox="0 0 1100 700" role="img" aria-label="Illustrative search and activity flow for CineSearch">
        <rect width="1100" height="700" fill="#0b0d0e" />
        <path d="M0 72H1100M0 625H1100" stroke="#252a2b" />
        <text x="58" y="48" className="art-mono art-muted">CINESEARCH / REACT</text>
        <text x="58" y="145" className="art-title">DISCOVER.</text>
        <text x="58" y="208" className="art-title art-title-outline">SEARCH. REPEAT.</text>
        <text x="865" y="48" className="art-mono art-accent">TMDB · APPWRITE</text>

        <rect x="58" y="260" width="984" height="76" fill="#101314" stroke="#303738" />
        <circle cx="94" cy="298" r="12" fill="none" stroke="#86d5de" strokeWidth="2" />
        <path d="M103 307L114 318" stroke="#86d5de" strokeWidth="2" />
        <text x="142" y="304" className="art-label art-muted">DEBOUNCED MOVIE SEARCH</text>
        <text x="908" y="304" className="art-mono art-accent">LIVE</text>

        <g transform="translate(58 376)">
          <rect width="284" height="174" fill="#111719" stroke="#303738" />
          <path d="M0 127L82 69L137 112L206 46L284 100V174H0Z" fill="#172629" />
          <circle cx="218" cy="54" r="18" fill="#86d5de" fillOpacity=".2" />
          <text x="20" y="36" className="art-mono art-accent">01 / DISCOVER</text>
          <text x="20" y="154" className="art-mono art-light">TMDB SEARCH RESULTS</text>
        </g>
        <g transform="translate(408 376)">
          <rect width="284" height="174" fill="#111719" stroke="#303738" />
          <path d="M0 110L64 79L128 120L186 54L284 97V174H0Z" fill="#202126" />
          <path d="M34 98L64 79L92 97L63 118Z" fill="#86d5de" fillOpacity=".25" />
          <text x="20" y="36" className="art-mono art-accent">02 / ACTIVITY</text>
          <text x="20" y="154" className="art-mono art-light">SEARCH SIGNALS RECORDED</text>
        </g>
        <g transform="translate(758 376)">
          <rect width="284" height="174" fill="#111719" stroke="#456064" />
          <path d="M0 136L54 110L100 123L171 69L228 96L284 61V174H0Z" fill="#192d30" />
          <text x="20" y="36" className="art-mono art-accent">03 / TRENDING</text>
          <text x="20" y="154" className="art-mono art-light">RANKED FROM USER SEARCH</text>
        </g>
        <path d="M342 461H407M692 461H757" stroke="#86d5de" strokeWidth="2" />
        <path d="M398 452L408 461L398 470M748 452L758 461L748 470" fill="none" stroke="#86d5de" strokeWidth="2" />
        <text x="58" y="664" className="art-mono art-muted">ILLUSTRATIVE PROJECT DIAGRAM · NOT A PRODUCT SCREENSHOT</text>
      </svg>
    </VisualFrame>
  );
}

export function FinoraVisual() {
  return (
    <VisualFrame label="PROJECT STUDY / FINORA AI" title="PLATFORM MAP">
      <svg className="project-art" viewBox="0 0 1100 700" role="img" aria-label="Illustrative architecture map for Finora AI web and mobile finance tools">
        <rect width="1100" height="700" fill="#0b0d0e" />
        <path d="M0 72H1100M0 625H1100" stroke="#252a2b" />
        <text x="58" y="48" className="art-mono art-muted">FINORA AI / IN DEVELOPMENT</text>
        <text x="58" y="145" className="art-title">MONEY,</text>
        <text x="58" y="208" className="art-title art-title-outline">MADE LEGIBLE.</text>
        <text x="865" y="48" className="art-mono art-accent">WEB · MOBILE</text>

        <g transform="translate(58 270)">
          <rect width="206" height="100" fill="#101314" stroke="#303738" />
          <text x="22" y="39" className="art-mono art-accent">01 / CLIENTS</text>
          <text x="22" y="72" className="art-label">React · React Native</text>
        </g>
        <path d="M264 320H342" stroke="#86d5de" strokeWidth="2" />
        <path d="M332 311L342 320L332 329" fill="none" stroke="#86d5de" strokeWidth="2" />
        <g transform="translate(344 270)">
          <rect width="196" height="100" fill="#111719" stroke="#456064" />
          <text x="22" y="39" className="art-mono art-accent">02 / GATEWAY</text>
          <text x="22" y="72" className="art-label">Spring Cloud</text>
        </g>
        <path d="M540 320H618" stroke="#86d5de" strokeWidth="2" />
        <path d="M608 311L618 320L608 329" fill="none" stroke="#86d5de" strokeWidth="2" />
        <g transform="translate(620 270)">
          <rect width="422" height="100" fill="#101314" stroke="#303738" />
          <text x="22" y="39" className="art-mono art-muted">03 / SERVICES</text>
          <text x="22" y="72" className="art-label">Spring Boot · PostgreSQL</text>
        </g>

        <path d="M830 370V424H540" fill="none" stroke="#4a5556" strokeDasharray="5 7" />
        <g transform="translate(250 424)">
          <rect width="592" height="148" fill="#101719" stroke="#456064" />
          <text x="24" y="42" className="art-mono art-accent">04 / ANALYTICS SERVICE</text>
          <text x="24" y="85" className="art-label">Spending insights · forecasting · natural-language queries</text>
          <text x="24" y="119" className="art-mono art-muted">PYTHON · FASTAPI · ML · LLM</text>
        </g>
        <circle cx="170" cy="498" r="37" fill="#121719" stroke="#314244" />
        <path d="M151 499H189M170 480V518" stroke="#86d5de" strokeWidth="2" />
        <path d="M207 498H249" stroke="#4a5556" strokeDasharray="4 6" />
        <text x="58" y="664" className="art-mono art-muted">ILLUSTRATIVE PROJECT DIAGRAM · NOT A PRODUCT SCREENSHOT</text>
      </svg>
    </VisualFrame>
  );
}

export function CredSightVisual() {
  return (
    <VisualFrame label="PROJECT STUDY / CREDSIGHT" title="MODEL FLOW">
      <svg className="project-art" viewBox="0 0 1100 700" role="img" aria-label="Illustrative explainable credit-risk model pipeline for CredSight">
        <rect width="1100" height="700" fill="#0b0d0e" />
        <path d="M0 72H1100M0 625H1100" stroke="#252a2b" />
        <text x="58" y="48" className="art-mono art-muted">CREDSIGHT / IN DEVELOPMENT</text>
        <text x="58" y="145" className="art-title">PREDICT.</text>
        <text x="58" y="208" className="art-title art-title-outline">THEN EXPLAIN.</text>
        <text x="880" y="48" className="art-mono art-accent">XGBOOST · SHAP</text>

        <g transform="translate(58 282)">
          <rect width="206" height="132" fill="#101314" stroke="#303738" />
          <text x="22" y="39" className="art-mono art-muted">01 / INPUT</text>
          <text x="22" y="82" className="art-label">Validated data</text>
          <text x="22" y="108" className="art-mono art-muted">PREPROCESSING</text>
        </g>
        <path d="M264 348H332" stroke="#86d5de" strokeWidth="2" />
        <path d="M322 339L332 348L322 357" fill="none" stroke="#86d5de" strokeWidth="2" />
        <g transform="translate(334 263)">
          <rect width="318" height="170" fill="#111719" stroke="#456064" />
          <text x="22" y="38" className="art-mono art-accent">02 / MODEL COMPARISON</text>
          <rect x="22" y="62" width="124" height="74" fill="#101314" stroke="#303738" />
          <rect x="166" y="62" width="130" height="74" fill="#101314" stroke="#456064" />
          <text x="37" y="105" className="art-label">Logistic</text>
          <text x="183" y="105" className="art-label">XGBoost</text>
          <text x="22" y="158" className="art-mono art-muted">VALIDATION · SEARCH · CALIBRATION</text>
        </g>
        <path d="M652 348H720" stroke="#86d5de" strokeWidth="2" />
        <path d="M710 339L720 348L710 357" fill="none" stroke="#86d5de" strokeWidth="2" />
        <g transform="translate(722 282)">
          <rect width="320" height="132" fill="#101314" stroke="#303738" />
          <text x="22" y="39" className="art-mono art-muted">03 / EXPLANATION</text>
          <text x="22" y="82" className="art-label">SHAP values</text>
          <text x="22" y="108" className="art-mono art-muted">GLOBAL + INDIVIDUAL</text>
        </g>

        <path d="M882 414V487H686" fill="none" stroke="#4a5556" strokeDasharray="5 7" />
        <g transform="translate(364 487)">
          <rect width="540" height="90" fill="#101719" stroke="#456064" />
          <text x="24" y="39" className="art-mono art-accent">04 / FASTAPI</text>
          <text x="24" y="67" className="art-label">Risk probability · interactive explanation</text>
        </g>
        <text x="58" y="664" className="art-mono art-muted">ILLUSTRATIVE PROJECT DIAGRAM · NOT A PRODUCT SCREENSHOT</text>
      </svg>
    </VisualFrame>
  );
}
