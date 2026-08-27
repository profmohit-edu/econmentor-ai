# EconMentor-AI

EconMentor-AI is an interactive engineering-economics decision laboratory created by Mohit Tiwari, Department of Computer Science and Engineering, Bharati Vidyapeeth's College of Engineering, New Delhi.

The application combines deterministic economic calculations with a bounded, explainable rule-based interpretation engine. It does not present generated statements as financial advice and does not require an external AI service or API key.

## Functional laboratories

1. **Market equilibrium laboratory** calculates linear demand/supply equilibrium and compares it with a tax or cost-shock scenario.
2. **Break-even laboratory** calculates contribution margin, break-even quantity, margin of safety, profit and operating leverage.
3. **Investment laboratory** calculates NPV, profitability index, discounted cash-flow series and simple payback for an engineering investment.

Each laboratory includes a reproducible sample scenario, input validation, a visual chart, explainable interpretation and JSON result export. Recent analyses are retained in browser local storage.

## Run

```bash
python3 -m http.server 8000
```

Visit `http://localhost:8000`.

## Tests

```bash
node --test tests/core.test.js
```

“AI-assisted” refers to the transparent expert-rule layer in `js/core.js`. Numerical results are produced by auditable formulas. Interpretations cite triggered conditions and never replace professional financial analysis.

Version 1.0.0, completed on 27 August 2026. MIT License.
