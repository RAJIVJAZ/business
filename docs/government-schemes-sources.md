# Government Schemes Page — Source Notes

`src/data/government-schemes.ts` backs the `/government-schemes` page. This records what was
independently verified via web research (Sept 2026) versus general knowledge, so the content can be
audited and refreshed rather than trusted blindly.

## Verified via web search (Sept 2026)

- **PMEGP**: 2026 project-cost limits (₹50L manufacturing / ₹20L service), subsidy rates
  (15%/25% general, 25%/35% special category incl. women), 10% margin money.
- **CGTMSE**: guarantee ceiling raised to ₹10 crore (from ₹5 crore); exporters up to ₹20 crore; retail/
  wholesale trading made eligible in the 2026 update.
- **Stand-Up India**: confirmed the original scheme lapsed 31 March 2025 and a revamped version was
  announced in Parliament on 16 March 2026, expected to raise the ceiling to ₹2 crore. **This is
  explicitly flagged as "under revision" on the page rather than stated as settled fact.**
- **Mahila Udyam Nidhi**: ₹10 lakh ceiling, 51% women-ownership requirement, the specific bank scheme
  names (SBI Stree Shakti, BoB Mahila Shakti, Canara Mahila Vikas, Union Bank Cent Kalyani).
- **State profiles for Uttar Pradesh, Maharashtra, Gujarat, Tamil Nadu, Rajasthan, Karnataka, Madhya
  Pradesh, West Bengal, Telangana, Haryana** — each individually searched; figures and scheme names in
  `government-schemes.ts` are as returned by that research, with source article titles retained in the
  session's search history.

## From general/training knowledge, not independently re-verified this session

- MUDRA (PMMY) ticket sizes (Shishu/Kishor/Tarun) — long-stable, low-change-risk figures.
- CLCSS / ZED certification general description.
- TREAD Scheme and Mahila e-Haat general descriptions.

## Explicitly not fabricated

- **"How many subsidies has the government released"** — there is no single official metric matching
  this phrasing (subsidy schemes are approved/budgeted, not "released" as a countable event), so no
  such number appears anywhere on the page or in this data file. Where the page shows a number, it is a
  named scheme's own published ceiling/percentage, sourced as above.
- **26 of 36 states/UTs** have no researched figures in `stateSubsidyProfiles` (only a name and
  `researched: false`) — every state runs some MSME incentive framework, but specific current slabs for
  these were not verified, and the page says so rather than inventing numbers to fill the row.

## Maintenance

Re-verify before any major push of this page (a new financial year, a budget announcement, or a state
election cycle, which frequently trigger policy revisions) — treat every figure here as time-stamped to
Sept 2026, not evergreen.
